import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getApp, getAllAppSlugs } from "../../../../data";
import { AppDetailsView } from "./AppDetailsView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};

  return {
    title: `${app.name} — ${app.tagline} | Brothers Store`,
    description: app.shortDescription,
    alternates: { canonical: `https://store.nexbrothers.com/apps/${app.slug}` },
  };
}

export default async function AppDetailsPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return <AppDetailsView app={app} />;
}
