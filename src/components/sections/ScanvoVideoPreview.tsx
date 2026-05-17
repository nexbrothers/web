"use client";

import Image from "next/image";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CREATOR_VIDEOS_CONFIG_URL = "/data/scanvo-creator-videos.json";

type RawScanvoVideo = {
  creatorName?: string;
  creator?: string;
  videoTitle?: string;
  title?: string;
  videoThumbnailUrl?: string;
  thumbnailUrl?: string;
  directVideoUrl?: string;
  directVideoLink?: string;
  videoUrl?: string;
  googleDriveVideoLink?: string;
  platform?: string;
  platformName?: string;
  sortOrder?: number;
  priority?: number;
  active?: boolean;
};

type ScanvoVideo = {
  creatorName: string;
  title: string;
  thumbnailUrl?: string;
  videoUrl: string;
  platform?: string;
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

function getVideoSource(url: string) {
  if (!url.trim()) return null;

  const driveFileId = extractDriveFileId(url);
  if (driveFileId) {
    return `https://drive.usercontent.google.com/download?id=${driveFileId}&export=download`;
  }

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return url;
  }

  return null;
}

function normalizeVideo(input: unknown): ScanvoVideo | null {
  const rawVideos = Array.isArray(input)
    ? input
    : Array.isArray((input as { videos?: unknown })?.videos)
      ? (input as { videos: unknown[] }).videos
      : [];

  const video = rawVideos
    .map((rawVideo, index) => {
      const item = rawVideo as RawScanvoVideo;
      const videoUrl =
        item.directVideoUrl ??
        item.directVideoLink ??
        item.videoUrl ??
        item.googleDriveVideoLink ??
        "";

      return {
        creatorName: (item.creatorName ?? item.creator ?? "").trim(),
        title: (item.videoTitle ?? item.title ?? "").trim(),
        thumbnailUrl: item.videoThumbnailUrl ?? item.thumbnailUrl,
        videoUrl: videoUrl.trim(),
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
    .sort((a, b) => a.sortOrder - b.sortOrder)[0];

  if (!video) return null;

  return {
    creatorName: video.creatorName,
    title: video.title,
    thumbnailUrl: video.thumbnailUrl,
    videoUrl: video.videoUrl,
    platform: video.platform,
  };
}

export function ScanvoVideoPreview({
  className = "",
  fallbackImage = "/images/scanvo/hand-scanvo.png",
}: {
  className?: string;
  fallbackImage?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [video, setVideo] = useState<ScanvoVideo | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadVideo() {
      try {
        const response = await fetch(CREATOR_VIDEOS_CONFIG_URL, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Creator video config failed");

        const data = await response.json();
        setVideo(normalizeVideo(data));
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setVideo(null);
        }
      }
    }

    loadVideo();
    return () => controller.abort();
  }, []);

  const source = video ? getVideoSource(video.videoUrl) : null;
  const thumbnailSource = getImageSource(video?.thumbnailUrl, 1200);
  const canUseVideo = Boolean(source) && !videoFailed;

  useEffect(() => {
    setHasStarted(false);
    setIsPlaying(false);
    setIsReady(false);
    setVideoFailed(false);
  }, [source]);

  useEffect(() => {
    if (!hasStarted || !canUseVideo) return;

    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.muted = isMuted;
    videoElement
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
        setVideoFailed(true);
      });
  }, [canUseVideo, hasStarted, isMuted]);

  function togglePlayback() {
    if (!canUseVideo) return;

    setHasStarted(true);

    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (videoElement.paused) {
      videoElement
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
          setVideoFailed(true);
        });
      return;
    }

    videoElement.pause();
    setIsPlaying(false);
  }

  return (
    <div className={`relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] ${className}`}>
      <div
        className="absolute -inset-5 rounded-[40px] blur-[70px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.16 }}
      />
      <div
        className="relative overflow-hidden rounded-[34px] border p-2"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          borderColor: "var(--border)",
          boxShadow: "0 26px 70px var(--shadow)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <div className="relative aspect-[9/16] overflow-hidden rounded-[26px] bg-black">
          {thumbnailSource && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnailSource}
                alt={video?.title ?? "Scanvo creator video thumbnail"}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  hasStarted && isReady ? "opacity-0" : "opacity-100"
                }`}
                referrerPolicy="no-referrer"
              />
            </>
          )}

          {canUseVideo && source && (
            <video
              ref={videoRef}
              src={source}
              className="absolute inset-0 h-full w-full object-cover"
              muted={isMuted}
              playsInline
              loop
              preload="metadata"
              onCanPlay={() => setIsReady(true)}
              onPlaying={() => setIsReady(true)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setVideoFailed(true)}
            />
          )}

          {(!thumbnailSource && (!source || videoFailed)) && (
            <Image
              src={fallbackImage}
              alt="Scanvo app preview"
              fill
              className="object-cover"
              priority
            />
          )}

          <button
            type="button"
            onClick={togglePlayback}
            className="absolute inset-0 z-[1] block h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label={isPlaying ? "Pause Scanvo creator video" : "Play Scanvo creator video"}
          >
            <span className="sr-only">{isPlaying ? "Pause video" : "Play video"}</span>
          </button>

          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/55 via-transparent to-black/20" />

          {canUseVideo && !isPlaying && (
            <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/16 text-white shadow-2xl backdrop-blur-md">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </div>
            </div>
          )}

          {video && (
            <div className="pointer-events-none absolute left-4 right-4 top-4 z-[3] flex items-center justify-between gap-3">
              <div className="min-w-0 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-white backdrop-blur-md">
                <p className="truncate text-xs font-semibold">
                  {video.creatorName}
                </p>
              </div>
              {video.platform && (
                <span className="shrink-0 rounded-full border border-white/15 bg-white/12 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {video.platform}
                </span>
              )}
            </div>
          )}

          {canUseVideo && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setIsMuted((current) => !current);
              }}
              className="absolute bottom-4 right-4 z-[4] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-xl backdrop-blur-md transition-colors hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
