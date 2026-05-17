"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ExternalLink,
  Loader2,
  Play,
  UserRound,
  Video,
} from "lucide-react";
import { Container } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const CREATOR_VIDEOS_CONFIG_URL = "/data/scanvo-creator-videos.json";

type RawCreatorVideo = {
  id?: string;
  creatorName?: string;
  creator?: string;
  creatorProfileImageUrl?: string;
  creatorImageUrl?: string;
  profileImageUrl?: string;
  videoTitle?: string;
  title?: string;
  videoThumbnailUrl?: string;
  thumbnailUrl?: string;
  directVideoUrl?: string;
  directVideoLink?: string;
  googleDriveVideoLink?: string;
  videoUrl?: string;
  description?: string;
  platform?: string;
  platformName?: string;
  sortOrder?: number;
  priority?: number;
  active?: boolean;
};

type CreatorVideo = {
  id: string;
  creatorName: string;
  creatorProfileImageUrl?: string;
  title: string;
  thumbnailUrl?: string;
  videoUrl: string;
  description?: string;
  platform?: string;
  sortOrder: number;
};

type NormalizedCreatorVideo = CreatorVideo & {
  active: boolean;
};

type VideoSource =
  | {
      type: "iframe";
      src: string;
    }
  | {
      type: "video";
      src: string;
    };

function extractDriveFileId(url: string) {
  try {
    const parsedUrl = new URL(url);
    const id = parsedUrl.searchParams.get("id");

    if (
      id &&
      (parsedUrl.hostname === "drive.google.com" ||
        parsedUrl.hostname === "drive.usercontent.google.com")
    ) {
      return id;
    }
  } catch {
    // Fall back to pattern matching below.
  }

  const patterns = [
    /drive\.google\.com\/file\/d\/([^/?#]+)/,
    /lh3\.googleusercontent\.com\/d\/([^=/?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }

  return null;
}

function getImageSource(url?: string, size = 1000) {
  if (!url?.trim()) return undefined;

  const driveFileId = extractDriveFileId(url);
  if (driveFileId) {
    return `https://lh3.googleusercontent.com/d/${driveFileId}=w${size}`;
  }

  return url.trim();
}

function getPlayableSource(url: string): VideoSource | null {
  if (!url.trim()) return null;

  const driveFileId = extractDriveFileId(url);
  if (driveFileId) {
    return {
      type: "iframe",
      src: `https://drive.google.com/file/d/${driveFileId}/preview`,
    };
  }

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return { type: "video", src: url };
  }

  try {
    const parsedUrl = new URL(url);
    return { type: "iframe", src: parsedUrl.toString() };
  } catch {
    return null;
  }
}

function normalizeVideos(input: unknown): CreatorVideo[] {
  const rawVideos = Array.isArray(input)
    ? input
    : Array.isArray((input as { videos?: unknown })?.videos)
      ? (input as { videos: unknown[] }).videos
      : [];

  return rawVideos
    .map((rawVideo, index): NormalizedCreatorVideo => {
      const item = rawVideo as RawCreatorVideo;
      const creatorName = item.creatorName ?? item.creator ?? "";
      const title = item.videoTitle ?? item.title ?? "";
      const videoUrl =
        item.directVideoUrl ??
        item.directVideoLink ??
        item.videoUrl ??
        item.googleDriveVideoLink ??
        "";

      return {
        id: item.id ?? `${creatorName}-${title}-${index}`,
        creatorName: creatorName.trim(),
        creatorProfileImageUrl:
          item.creatorProfileImageUrl ??
          item.creatorImageUrl ??
          item.profileImageUrl,
        title: title.trim(),
        thumbnailUrl: item.videoThumbnailUrl ?? item.thumbnailUrl,
        videoUrl: videoUrl.trim(),
        description: item.description,
        platform: item.platformName ?? item.platform,
        sortOrder: item.sortOrder ?? item.priority ?? index,
        active: item.active !== false,
      };
    })
    .filter(
      (item) =>
        item.active &&
        Boolean(item.creatorName) &&
        Boolean(item.title) &&
        Boolean(item.videoUrl),
    )
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((item) => ({
      id: item.id,
      creatorName: item.creatorName,
      creatorProfileImageUrl: item.creatorProfileImageUrl,
      title: item.title,
      thumbnailUrl: item.thumbnailUrl,
      videoUrl: item.videoUrl,
      description: item.description,
      platform: item.platform,
      sortOrder: item.sortOrder,
    }));
}

function CreatorAvatar({ video }: { video: CreatorVideo }) {
  const [imageFailed, setImageFailed] = useState(false);
  const profileImageSource = getImageSource(video.creatorProfileImageUrl, 160);

  if (profileImageSource && !imageFailed) {
    return (
      <div
        className="h-9 w-9 shrink-0 overflow-hidden rounded-full border"
        style={{
          borderColor: "var(--border)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profileImageSource}
          alt={`${video.creatorName} profile`}
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
      style={{
        backgroundColor: "rgba(0, 212, 255, 0.1)",
        borderColor: "var(--border)",
        color: "var(--accent)",
      }}
      aria-hidden="true"
    >
      <UserRound className="h-4 w-4" />
    </div>
  );
}

function VideoThumbnail({ video }: { video: CreatorVideo }) {
  const [imageFailed, setImageFailed] = useState(false);
  const thumbnailSource = getImageSource(video.thumbnailUrl, 1000);

  if (thumbnailSource && !imageFailed) {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnailSource}
          alt={`${video.title} thumbnail`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      </>
    );
  }

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(0, 212, 255, 0.16), rgba(124, 58, 237, 0.14))",
      }}
      aria-hidden="true"
    >
      <Video className="h-12 w-12" style={{ color: "var(--accent)" }} />
    </div>
  );
}

function CreatorVideoCard({
  video,
  isMuted,
  isPlaying,
  onPlay,
}: {
  video: CreatorVideo;
  isMuted: boolean;
  isPlaying: boolean;
  onPlay: (video: CreatorVideo) => void;
}) {
  return (
    <article
      className="group h-full overflow-hidden rounded-lg border text-left transition-all duration-300"
      style={{
        backgroundColor: "var(--background-card)",
        borderColor: "var(--border)",
        boxShadow: "0 18px 50px rgba(0, 0, 0, 0.18)",
      }}
    >
      <div className="relative aspect-[9/16] overflow-hidden">
        {isPlaying ? (
          <InlineVideoPlayer
            video={video}
            isMuted={isMuted}
          />
        ) : (
          <button
            type="button"
            onClick={() => onPlay(video)}
            className="absolute inset-0 block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label={`Play ${video.title} by ${video.creatorName}`}
          >
            <VideoThumbnail video={video} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

            {video.platform && (
              <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {video.platform}
              </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/16 text-white shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                <Play className="ml-0.5 h-6 w-6 fill-current" />
              </div>
            </div>
          </button>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <div className="mb-2.5 flex items-center gap-3 sm:mb-3">
          <CreatorAvatar video={video} />
          <div className="min-w-0">
            <p
              className="truncate text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {video.creatorName}
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Creator video
            </p>
          </div>
        </div>
        <h3
          className="line-clamp-2 text-sm font-bold leading-snug sm:text-base"
          style={{ color: "var(--text-primary)" }}
        >
          {video.title}
        </h3>
        {video.description && (
          <p
            className="mt-2 hidden text-sm leading-relaxed sm:line-clamp-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {video.description}
          </p>
        )}
      </div>
    </article>
  );
}

function InlineVideoPlayer({
  video,
  isMuted,
}: {
  video: CreatorVideo;
  isMuted: boolean;
}) {
  const source = useMemo(() => getPlayableSource(video.videoUrl), [video]);
  const [playerState, setPlayerState] = useState<"loading" | "ready" | "error">(
    source ? "loading" : "error",
  );
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    const slowTimer = window.setTimeout(() => {
      setIsSlow(true);
    }, 6000);

    return () => {
      window.clearTimeout(slowTimer);
    };
  }, [source?.src]);

  return (
    <div className="absolute inset-0 bg-black">
      {source?.type === "video" && (
        <video
          key={source.src}
          src={source.src}
          className="h-full w-full object-contain"
          controls
          autoPlay
          playsInline
          muted={isMuted}
          onCanPlay={() => setPlayerState("ready")}
          onPlaying={() => setPlayerState("ready")}
          onWaiting={() => setPlayerState("loading")}
          onError={() => setPlayerState("error")}
        />
      )}

      {source?.type === "iframe" && (
        <iframe
          key={source.src}
          src={source.src}
          title={video.title}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          onLoad={() => setPlayerState("ready")}
        />
      )}

      {playerState === "loading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 px-5 text-center text-white">
          <Loader2 className="h-7 w-7 animate-spin" />
          <p className="text-sm font-medium">Preparing video</p>
          {isSlow && (
            <p className="max-w-xs text-xs text-white/70">
              This is taking longer than usual. The video may still load on a
              slower connection.
            </p>
          )}
        </div>
      )}

      {playerState === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black px-5 text-center text-white">
          <AlertTriangle className="h-8 w-8 text-amber-300" />
          <div>
            <p className="text-sm font-semibold">Video unavailable</p>
            <p className="mt-1 max-w-xs text-xs text-white/70">
              Check the Google Drive sharing permissions or replace the video
              URL in the JSON config.
            </p>
          </div>
          <a
            href={video.videoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
          >
            Open original link
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}

function LoadingState() {
  return (
    <div className="grid grid-cols-[minmax(0,18.5rem)] justify-center gap-6 sm:grid-cols-2 sm:justify-stretch lg:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-lg border"
          style={{
            backgroundColor: "var(--background-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="aspect-[9/16] shimmer" />
          <div className="space-y-3 p-3 sm:p-4">
            <div
              className="h-4 w-2/3 rounded"
              style={{ backgroundColor: "var(--border)" }}
            />
            <div
              className="h-4 w-full rounded"
              style={{ backgroundColor: "var(--border)" }}
            />
            <div
              className="h-4 w-4/5 rounded"
              style={{ backgroundColor: "var(--border)" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: "empty" | "error";
}) {
  const Icon = icon === "error" ? AlertTriangle : Video;

  return (
    <div
      className="mx-auto max-w-2xl rounded-lg border p-8 text-center"
      style={{
        backgroundColor: "var(--background-card)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
        style={{
          backgroundColor: "rgba(0, 212, 255, 0.1)",
          color: "var(--accent)",
        }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3
        className="text-xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p
        className="mx-auto mt-2 max-w-md text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>
    </div>
  );
}

export function CreatorVideos() {
  const [videos, setVideos] = useState<CreatorVideo[]>([]);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const controller = new AbortController();

    async function loadVideos() {
      try {
        const response = await fetch(CREATOR_VIDEOS_CONFIG_URL, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Creator videos config returned ${response.status}`);
        }

        const data = await response.json();
        setVideos(normalizeVideos(data));
        setStatus("ready");
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        setVideos([]);
        setStatus("error");
      }
    }

    loadVideos();
    return () => controller.abort();
  }, []);

  function handlePlay(video: CreatorVideo) {
    setPlayingVideoId(video.id);
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--background), var(--background-secondary))",
        }}
      />
      <div
        className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--accent), transparent)",
          opacity: 0.35,
        }}
      />

      <Container className="relative z-10">
        <FadeIn className="mb-10 text-center sm:mb-12">
          <span
            className="mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{
              backgroundColor: "rgba(0, 212, 255, 0.08)",
              borderColor: "rgba(0, 212, 255, 0.22)",
              color: "var(--accent)",
            }}
          >
            Creator proof
          </span>
          <h2
            className="text-2xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Featured by Creators
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Watch trusted creators show how Scanvo fits real document scanning,
            PDF, and sharing workflows.
          </p>
        </FadeIn>

        {status === "loading" && <LoadingState />}

        {status === "error" && (
          <EmptyState
            icon="error"
            title="Creator videos could not be loaded"
            description="The video configuration is temporarily unavailable. The rest of Scanvo continues to work normally."
          />
        )}

        {status === "ready" && videos.length === 0 && (
          <EmptyState
            icon="empty"
            title="Creator videos are coming soon"
            description="Add active creator entries to the JSON config and they will appear here automatically."
          />
        )}

        {status === "ready" && videos.length > 0 && (
          <StaggerChildren className="grid grid-cols-[minmax(0,18.5rem)] justify-center gap-6 sm:grid-cols-2 sm:justify-stretch lg:grid-cols-3">
            {videos.map((video) => (
              <StaggerItem key={video.id} className="w-full">
                <CreatorVideoCard
                  video={video}
                  isMuted
                  isPlaying={playingVideoId === video.id}
                  onPlay={handlePlay}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}
      </Container>
    </section>
  );
}
