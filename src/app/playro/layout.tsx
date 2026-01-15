import { SoftwareProductJsonLd } from "@/components/seo";

export { metadata } from "./metadata";

export default function PlayroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SoftwareProductJsonLd
        name="Playro"
        description="The complete cricket tournament management solution. Create, organize, and manage cricket tournaments with real-time scoring, automatic standings, and detailed statistics."
        url="https://nexbrothers.com/playro"
        imageUrl="https://nexbrothers.com/Playro.png"
        applicationCategory="SportsApplication"
        operatingSystem="Android, iOS"
      />
      {children}
    </>
  );
}
