import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playro - Cricket Tournament Management App",
  description:
    "Playro is the complete cricket tournament management solution. Create tournaments, manage teams, track live scores, and view detailed statistics. Coming soon to Android and iOS.",
  keywords: [
    "cricket app",
    "tournament management",
    "cricket scoring",
    "live cricket scores",
    "cricket statistics",
    "cricket tournament",
    "Playro",
    "NexBrothers",
  ],
  openGraph: {
    title: "Playro - Cricket Tournament Management App",
    description:
      "The complete solution for managing cricket tournaments. Real-time scoring, automatic standings, and detailed statistics.",
    url: "https://nexbrothers.com/playro",
    type: "website",
    images: [
      {
        url: "/Playro.png",
        width: 512,
        height: 512,
        alt: "Playro - Cricket Tournament Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playro - Cricket Tournament Management App",
    description:
      "The complete solution for managing cricket tournaments. Real-time scoring, automatic standings, and detailed statistics.",
    images: ["/Playro.png"],
  },
  alternates: {
    canonical: "https://nexbrothers.com/playro",
  },
};
