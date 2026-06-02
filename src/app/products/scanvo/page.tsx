'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Container, Card } from '@/components/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';
import {
  FileText,
  Camera,
  CreditCard,
  Download,
  Layers,
  Shield,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Smartphone,
  ScanLine,
  FolderOpen,
  Moon,
  Zap,
  Users,
  Building2,
  GraduationCap,
  Store,
  FileImage,
  PenTool,
  Lock,
  Files,
  Minimize2,
  Play,
  RefreshCw,
  Volume2,
  VolumeX,
} from 'lucide-react';

const features = [
  {
    icon: <ScanLine className="w-6 h-6" />,
    title: 'Smart Document Scanner',
    description:
      'Scan any document with your camera. Auto edge detection and perspective correction makes every scan look perfect.',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'ID Card Mode',
    description:
      'Scan the front and back of ID cards and combine them into a single print-ready sheet automatically.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Batch Scan',
    description:
      'Scan multiple pages in one session and export them all as a single multi-page PDF document.',
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: 'Import from Gallery',
    description:
      'Already have photos? Import directly from your gallery and convert them to clean, cropped documents.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'PDF Export',
    description:
      'Export scanned documents as high-quality PDFs ready to share, email, or print.',
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Crop & Rotate',
    description:
      'Fine-tune scans with manual crop controls and rotation (0°, 90°, 180°, 270°) for perfect alignment.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Auto Enhance',
    description:
      'Built-in image enhancement improves contrast and clarity for crystal-clear document scans.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: '100% Private & Offline',
    description:
      'All processing happens locally on your device. No data is ever uploaded to any server — your documents stay yours.',
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: 'Dark Mode',
    description:
      'Full dark mode support for comfortable scanning in any lighting condition.',
  },
];

const benefits = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Everyday Users',
    description:
      'Quickly scan bills, receipts, contracts, or any paper document and share as PDF.',
    points: [
      'Scan & send documents in seconds',
      'Keep digital copies of important papers',
      'Share via WhatsApp, email, or Drive',
    ],
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Students',
    description:
      'Scan notes, assignments, and ID cards. Multi-page batch scanning keeps your study material organized.',
    points: [
      'Batch scan lecture notes',
      'ID card front & back in one sheet',
      'Organize all documents by subject',
    ],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Offices & Businesses',
    description:
      'Digitize paperwork, invoices, and contracts instantly without a bulky physical scanner.',
    points: [
      'Paperless document workflows',
      'Multi-page PDF creation',
      'Professional scan quality',
    ],
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: 'Shops & Print Centers',
    description:
      'Accept documents via phone scan and print them directly. ID card mode doubles productivity for ID printing.',
    points: [
      'ID card both-side layout',
      'Direct printer integration',
      'Faster customer service',
    ],
  },
];

const steps = [
  {
    number: '01',
    title: 'Open & Scan',
    description:
      'Tap the camera button, point at your document, and Scanvo auto-detects the edges for a perfect crop.',
  },
  {
    number: '02',
    title: 'Enhance & Adjust',
    description:
      'Auto-enhance improves clarity instantly. Fine-tune with manual crop and rotation if needed.',
  },
  {
    number: '03',
    title: 'Export or Print',
    description:
      'Save as a high-quality PDF or share directly via WhatsApp, Gmail, Google Drive, or print.',
  },
];

const toolkitTools = [
  {
    icon: <Files className="w-5 h-5" />,
    title: 'Merge PDF',
    description:
      'Combine multiple PDF files or scanned pages into one organized document.',
  },
  {
    icon: <Minimize2 className="w-5 h-5" />,
    title: 'Compress PDF',
    description:
      'Reduce PDF file size for faster sharing without losing essential quality.',
  },
  {
    icon: <FileImage className="w-5 h-5" />,
    title: 'PDF to JPG',
    description:
      'Convert PDF pages into high-quality JPG images for sharing or printing.',
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'JPG to PDF',
    description:
      'Turn gallery images and camera captures into clean PDF documents.',
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: 'Edit PDF',
    description:
      'Make quick document adjustments and work with your files in one place.',
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: 'Sign PDF',
    description:
      'Add signatures to agreements, forms, and business documents directly on your phone.',
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Protect PDF',
    description:
      'Add an extra layer of privacy to important files before sharing them.',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Document Toolkit',
    description:
      'Access scanning, export, layout, booklet, and PDF utilities from one unified workspace.',
  },
];

const faqs = [
  {
    question: 'Is Scanvo free to use?',
    answer:
      'Yes! Scanvo is completely free to download and use. Core features like scanning, ID card mode, and PDF export are all free.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Yes, 100%. All scanning, cropping, enhancement, and PDF export happen entirely on your device. No internet required and no data ever leaves your phone.',
  },
  {
    question: 'What is ID Card mode?',
    answer:
      'ID Card mode lets you scan the front side and back side of an ID card separately, then automatically combines them into a single A4 print-ready layout — perfect for printing Aadhaar, PAN, or any other ID card.',
  },
  {
    question: 'Can I scan multiple pages into one PDF?',
    answer:
      'Absolutely. Use Batch Scan mode to scan as many pages as you need in a single session. All pages are combined into one multi-page PDF automatically.',
  },
  {
    question: 'What formats can I export to?',
    answer:
      'Scanvo exports documents as PDF files. You can also save individual pages as images (JPG/PNG) to your gallery.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Yes. All image processing is done locally on your device. Scanvo never uploads your documents or photos to any server. Your files stay private.',
  },
];

const showcaseImages = [
  {
    src: '/images/scanvo/scanvo-8.png',
    alt: 'Scan anything and enhance everything with Scanvo',
  },
  {
    src: '/images/scanvo/scanvo-5.png',
    alt: 'Smart crop with precise document edge detection',
  },
  {
    src: '/images/scanvo/scanvo-7.png',
    alt: 'All-in-one PDF toolkit inside Scanvo',
  },
  {
    src: '/images/scanvo/Scanvo-2.png',
    alt: 'Create perfect photos instantly with Scanvo',
  },
  {
    src: '/images/scanvo/scanvo-3.png',
    alt: 'Generate perfect photos in seconds',
  },
  {
    src: '/images/scanvo/scanvo-4.png',
    alt: 'Print booklets the smart way',
  },
  {
    src: '/images/scanvo/scanvo-6.png',
    alt: 'Create professional documents effortlessly',
  },
];

const CREATOR_VIDEOS_CONFIG_URL = '/data/scanvo-creator-videos.json';

type DLItem = {
  name: string;
  desc: string;
  href?: string;
  filename?: string;
  tag?: string;
  live: boolean;
};
type OS = { id: string; name: string; live: boolean; items: DLItem[] };
type Tab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  live?: boolean;
  oses: OS[];
};

type RawHeroVideo = {
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

type HeroVideo = {
  creatorName: string;
  title: string;
  thumbnailUrl?: string;
  videoUrl: string;
  platform?: string;
};

type HeroVideoSource =
  {
    type: 'video';
    src: string;
  };

function buildTabs(): Tab[] {
  return [
    {
      id: 'mobile',
      label: 'Mobile',
      icon: <Smartphone className="w-4 h-4" />,
      live: true,
      oses: [
        {
          id: 'android',
          name: 'Android',
          live: true,
          items: [
            {
              name: 'Google Play',
              desc: 'Download from Play Store',
              href: 'https://play.google.com/store/apps/details?id=com.nexbrothers.scanvo&hl=en_IN',
              tag: 'Recommended',
              live: true,
            },
          ],
        },
        {
          id: 'ios',
          name: 'iOS',
          live: false,
          items: [
            {
              name: 'App Store',
              desc: 'iPhone & iPad · Coming soon',
              live: false,
            },
          ],
        },
      ],
    },
    /*
    {
      id: 'desktop',
      label: 'Desktop',
      icon: <Monitor className="w-4 h-4" />,
      live: false,
      oses: [],
    },
    */
  ];
}

function extractDriveFileId(url: string) {
  try {
    const parsedUrl = new URL(url);
    const id = parsedUrl.searchParams.get('id');

    if (
      id &&
      (parsedUrl.hostname === 'drive.google.com' ||
        parsedUrl.hostname === 'drive.usercontent.google.com')
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

function getHeroImageSource(url?: string, size = 1000) {
  if (!url?.trim()) return undefined;

  const driveFileId = extractDriveFileId(url);
  if (driveFileId) {
    return `https://lh3.googleusercontent.com/d/${driveFileId}=w${size}`;
  }

  return url.trim();
}

function getHeroVideoSource(url: string): HeroVideoSource | null {
  if (!url.trim()) return null;

  const driveFileId = extractDriveFileId(url);
  if (driveFileId) {
    return {
      type: 'video',
      src: `https://drive.usercontent.google.com/download?id=${driveFileId}&export=download`,
    };
  }

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return { type: 'video', src: url };
  }

  return null;
}

function normalizeHeroVideo(input: unknown): HeroVideo | null {
  const rawVideos = Array.isArray(input)
    ? input
    : Array.isArray((input as { videos?: unknown })?.videos)
      ? (input as { videos: unknown[] }).videos
      : [];

  const video = rawVideos
    .map((rawVideo, index) => {
      const item = rawVideo as RawHeroVideo;
      const videoUrl =
        item.directVideoUrl ??
        item.directVideoLink ??
        item.videoUrl ??
        item.googleDriveVideoLink ??
        '';

      return {
        creatorName: (item.creatorName ?? item.creator ?? '').trim(),
        title: (item.videoTitle ?? item.title ?? '').trim(),
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

function ScanvoHeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [video, setVideo] = useState<HeroVideo | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadHeroVideo() {
      try {
        const response = await fetch(CREATOR_VIDEOS_CONFIG_URL, {
          cache: 'no-store',
          signal: controller.signal,
        });

        if (!response.ok) throw new Error('Creator video config failed');

        const data = await response.json();
        setVideo(normalizeHeroVideo(data));
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setVideo(null);
        }
      }
    }

    loadHeroVideo();
    return () => controller.abort();
  }, []);

  const source = video ? getHeroVideoSource(video.videoUrl) : null;
  const thumbnailSource = getHeroImageSource(video?.thumbnailUrl, 1200);
  const canUseNativeVideo = source?.type === 'video' && !videoFailed;

  useEffect(() => {
    setHasStarted(false);
    setIsPlaying(false);
    setIsReady(false);
    setVideoFailed(false);
  }, [source?.src]);

  useEffect(() => {
    if (!hasStarted || !canUseNativeVideo) return;

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
  }, [canUseNativeVideo, hasStarted, isMuted]);

  function togglePlayback() {
    if (!canUseNativeVideo) return;

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
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
      <div
        className="absolute -inset-5 rounded-[40px] blur-[70px]"
        style={{ backgroundColor: 'var(--accent)', opacity: 0.16 }}
      />
      <div
        className="relative overflow-hidden rounded-[34px] border p-2"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
          borderColor: 'var(--border)',
          boxShadow: '0 26px 70px var(--shadow)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        <div className="relative aspect-[9/16] overflow-hidden rounded-[26px] bg-black">
          {thumbnailSource && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnailSource}
                alt={video?.title ?? 'Scanvo creator video thumbnail'}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  hasStarted && isReady ? 'opacity-0' : 'opacity-100'
                }`}
                referrerPolicy="no-referrer"
              />
            </>
          )}

          {canUseNativeVideo && source && (
            <video
              ref={videoRef}
              src={source.src}
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
              src="/images/scanvo/hand-scanvo.png"
              alt="Scanvo hero preview"
              fill
              className="object-cover"
              priority
            />
          )}

          <button
            type="button"
            onClick={togglePlayback}
            className="absolute inset-0 z-[1] block h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label={
              isPlaying ? 'Pause Scanvo creator video' : 'Play Scanvo creator video'
            }
          >
            <span className="sr-only">
              {isPlaying ? 'Pause video' : 'Play video'}
            </span>
          </button>

          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/55 via-transparent to-black/20" />

          {canUseNativeVideo && !isPlaying && (
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

          {canUseNativeVideo && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setIsMuted((current) => !current);
              }}
              className="absolute bottom-4 right-4 z-[4] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-xl backdrop-blur-md transition-colors hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
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


function DownloadSection({ centered }: { centered?: boolean }) {
  const [tab, setTab] = useState('mobile');
  const [os, setOs] = useState('android');

  const TABS = buildTabs();
  const activeTab = TABS.find((t: Tab) => t.id === tab)!;
  const activeOs =
    activeTab.oses.find((o: OS) => o.id === os) ?? activeTab.oses[0];

  function switchTab(id: string) {
    setTab(id);
    const firstLive = TABS.find((t: Tab) => t.id === id)!.oses.find(
      (o: OS) => o.live,
    );
    setOs(firstLive?.id ?? TABS.find((t: Tab) => t.id === id)!.oses[0].id);
  }

  return (
    <div className={`w-full ${centered ? 'max-w-md mx-auto' : 'max-w-md'}`}>
      {/* ── Level 1: Platform tabs ── */}
      <div className="flex gap-2 mb-4">
        {TABS.map((t: Tab) => (
          <button
            key={t.id}
            onClick={() => switchTab(t.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background:
                tab === t.id
                  ? 'rgba(0,212,255,0.12)'
                  : 'var(--background-card)',
              color: tab === t.id ? 'var(--text-primary)' : 'var(--text-muted)',
              border: `1px solid ${tab === t.id ? 'var(--accent)' : 'var(--border)'}`,
              boxShadow:
                tab === t.id ? '0 10px 24px rgba(0, 212, 255, 0.08)' : 'none',
            }}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Level 2: OS pills ── */}
          <div className="flex flex-wrap gap-2 mb-4">
            {activeTab.oses.map((o: OS) => (
              <button
                key={o.id}
                onClick={() => o.live && setOs(o.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                style={{
                  background:
                    os === o.id ? 'rgba(0,212,255,0.12)' : 'transparent',
                  color:
                    os === o.id
                      ? 'var(--accent)'
                      : o.live
                        ? 'var(--text-secondary)'
                        : 'var(--text-muted)',
                  border: `1px solid ${os === o.id ? 'var(--accent)' : 'var(--border)'}`,
                  opacity: o.live ? 1 : 0.4,
                  cursor: o.live ? 'pointer' : 'not-allowed',
                }}
              >
                {o.name}
                {!o.live && <span className="ml-1 opacity-60">· Soon</span>}
              </button>
            ))}
          </div>

          {/* ── Level 3: Download items ── */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: 'var(--border)' }}
          >
            {activeOs.items.map((item: DLItem, i: number) => {
              const isLast = i === activeOs.items.length - 1;
              const inner = (
                <div
                  className="flex items-center justify-between px-4 py-4 transition-all"
                  style={{
                    borderBottom: isLast ? 'none' : `1px solid var(--border)`,
                    background: item.live
                      ? 'var(--background-card)'
                      : 'transparent',
                    opacity: item.live ? 1 : 0.4,
                    cursor: item.live ? 'pointer' : 'default',
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.name}
                      </span>
                      {item.tag && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: 'rgba(0,212,255,0.12)',
                            color: 'var(--accent)',
                          }}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-xs mt-0.5 truncate"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  {item.live ? (
                    <div className="ml-4 flex items-center gap-2 flex-shrink-0">
                      <span
                        className="text-xs font-medium"
                        style={{ color: 'var(--accent)' }}
                      >
                        Free
                      </span>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center border"
                        style={{
                          backgroundColor: 'var(--background-secondary)',
                          borderColor: 'var(--border)',
                        }}
                      >
                        <Download
                          className="w-3.5 h-3.5"
                          style={{ color: 'var(--accent)' }}
                        />
                      </div>
                    </div>
                  ) : (
                    <span
                      className="ml-4 text-xs px-2.5 py-1 rounded-full border flex-shrink-0"
                      style={{
                        color: 'var(--text-muted)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      Soon
                    </span>
                  )}
                </div>
              );
              return item.live && item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  download={item.filename ?? true}
                >
                  {inner}
                </a>
              ) : (
                <div key={item.name}>{inner}</div>
              );
            })}
          </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderColor: 'var(--border)' }} className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span
          className="text-lg font-medium"
          style={{ color: 'var(--text-primary)' }}
        >
          {question}
        </span>
        {isOpen ? (
          <ChevronUp style={{ color: 'var(--accent)' }} className="w-5 h-5" />
        ) : (
          <ChevronDown
            style={{ color: 'var(--text-secondary)' }}
            className="w-5 h-5"
          />
        )}
      </button>
      {isOpen && (
        <div
          className="pb-6 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ScanvoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background)' }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.15 }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent-purple)', opacity: 0.15 }}
        />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/images/scanvo-logo.png"
                    alt="Scanvo logo"
                    width={56}
                    height={56}
                    className="rounded-2xl"
                  />
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#F59E0B]/20 text-[#F59E0B]">
                    live
                  </span>
                </div>

                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Scanvo
                </h1>
                <p
                  className="text-2xl font-medium mb-6"
                  style={{ color: 'var(--accent)' }}
                >
                  All-in-One PDF Scanner
                </p>
                <p
                  className="text-lg mb-8"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Turn your phone into a powerful document scanner. Scan any
                  document, ID card, or multi-page file, auto-enhance the
                  quality, and export as a crisp PDF — all offline, all
                  private, completely free.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {[
                    '100% Offline',
                    'Zero Data Upload',
                    'ID Card Mode',
                    'Free',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-sm font-medium border"
                      style={{
                        borderColor: 'var(--accent)',
                        color: 'var(--accent)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Download Cards */}
                <DownloadSection />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ScanvoHeroVideo />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background), var(--background-secondary))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Scanning Documents Shouldn&apos;t Require a Scanner
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              You always have your phone. Now it&apos;s also your document
              scanner, ID card printer, and PDF maker — no extra hardware
              needed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                'No bulky scanner hardware',
                'No cloud uploads or privacy risks',
                'No complicated apps or subscriptions',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background-secondary)' }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Powerful Features
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Everything you need to go from paper to digital PDF in seconds.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6" gradient>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        'linear-gradient(to bottom right, var(--accent), var(--accent-purple))',
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: 'white' }}>{feature.icon}</div>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {feature.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Toolkit */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background-secondary), var(--background))',
          }}
        />
        <div
          className="absolute right-0 top-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.06 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Complete PDF <span className="gradient-text">Toolkit</span>
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Scanvo is more than a scanner. It also gives you a full document
              toolkit for everyday PDF work like merge, compress, convert,
              edit, sign, and organize.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <Card className="h-full p-8 md:p-10" gradient>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(to bottom right, var(--accent), var(--accent-purple))',
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: 'white' }}>
                      <FileText className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Built for complete document work
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      One app for scanning, converting, editing, and sharing.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {toolkitTools.map((tool) => (
                    <div
                      key={tool.title}
                      className="rounded-2xl border p-4"
                      style={{
                        backgroundColor: 'var(--background-card)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: 'rgba(0, 212, 255, 0.12)',
                            color: 'var(--accent)',
                          }}
                        >
                          {tool.icon}
                        </div>
                        <h4
                          className="text-base font-semibold"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {tool.title}
                        </h4>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="h-full p-8 md:p-10 flex flex-col justify-between" gradient>
                <div>
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs font-semibold mb-5"
                    style={{
                      backgroundColor: 'rgba(0, 212, 255, 0.12)',
                      color: 'var(--accent)',
                    }}
                  >
                    Everything in one place
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    From scan to final PDF, without switching apps
                  </h3>
                  <p
                    className="mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Capture documents, clean them up, create layouts, compress
                    files, merge pages, export to images, and prepare them for
                    print or sharing from one consistent workflow.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    'Scan documents and receipts',
                    'Convert JPG to PDF and PDF to JPG',
                    'Edit, sign, and protect PDF files',
                    'Merge, compress, and organize documents',
                    'Prepare files for print and booklet output',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 shrink-0"
                        style={{ color: 'var(--accent)' }}
                      />
                      <span style={{ color: 'var(--text-secondary)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background-secondary), var(--background))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              How It Works
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Three simple steps from paper to PDF.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative text-center">
                  <div
                    className="text-7xl font-bold mb-4"
                    style={{ color: 'var(--accent)', opacity: 0.1 }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-12 right-0 w-1/2 h-0.5"
                      style={{
                        background:
                          'linear-gradient(to right, var(--accent), transparent)',
                        opacity: 0.2,
                      }}
                    />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent-purple)', opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Perfect For Everyone
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Whether you&apos;re a student, professional, or shop owner —
              Scanvo fits your workflow.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-8" gradient>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        'linear-gradient(to bottom right, var(--accent), var(--accent-purple))',
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: 'white' }}>{benefit.icon}</div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        <span style={{ color: 'var(--text-secondary)' }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* App Banners Gallery */}
      <section className="section-shell relative py-24 border-t" style={{ borderColor: 'var(--line)' }}>
        <div className="split-heading reveal is-visible mb-12 md:mb-16">
          <div>
            <p className="eyebrow">Interface</p>
            <h2>See Scanvo in Action</h2>
          </div>
          <div>
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              Powerful features beautifully designed for your everyday document
              needs. Experience the most intuitive scanning workflow ever built.
            </p>
          </div>
        </div>

        {/* Custom animations */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1rem)); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="relative overflow-hidden pt-4 pb-16">
          {/* Fade edges for elegant scrolling */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 md:w-48 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, var(--paper), transparent)',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 md:w-48 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, var(--paper), transparent)',
            }}
          />

          <div className="flex gap-8 w-max animate-marquee group">
            {/* First Set */}
            <div className="flex gap-8">
              {showcaseImages.map((img, i) => (
                <div
                  key={`a-${i}`}
                  className="shrink-0"
                  style={{
                    width: 'min(75vw, 320px)',
                    transform: i % 2 !== 0 ? 'translateY(2.5rem)' : 'none'
                  }}
                >
                  <div
                    className="relative w-full overflow-hidden rounded-[2rem] border transition-all duration-700 grayscale hover:grayscale-0 cursor-pointer"
                    style={{
                      aspectRatio: '9/16',
                      borderColor: 'var(--line)',
                      boxShadow: '0 24px 60px rgba(31,36,31,0.12)',
                      backgroundColor: 'var(--panel)'
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex gap-8">
              {showcaseImages.map((img, i) => (
                <div
                  key={`b-${i}`}
                  className="shrink-0"
                  style={{
                    width: 'min(75vw, 320px)',
                    transform: i % 2 !== 0 ? 'translateY(2.5rem)' : 'none'
                  }}
                >
                  <div
                    className="relative w-full overflow-hidden rounded-[2rem] border transition-all duration-700 grayscale hover:grayscale-0 cursor-pointer"
                    style={{
                      aspectRatio: '9/16',
                      borderColor: 'var(--line)',
                      boxShadow: '0 24px 60px rgba(31,36,31,0.12)',
                      backgroundColor: 'var(--panel)'
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background), var(--background-secondary))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Got questions? We&apos;ve got answers.
            </p>
          </FadeIn>

          <FadeIn className="max-w-3xl mx-auto">
            <div
              className="backdrop-blur-xl border rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--background-card)',
                borderColor: 'var(--border)',
              }}
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background-secondary)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Your Pocket Document Scanner
              </h2>
              <p
                className="text-lg mb-10"
                style={{ color: 'var(--text-secondary)' }}
              >
                Download Scanvo and turn your phone into a full-featured
                document scanner. Scan, enhance, and export PDFs in seconds —
                completely free and offline.
              </p>

              <DownloadSection centered />
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
