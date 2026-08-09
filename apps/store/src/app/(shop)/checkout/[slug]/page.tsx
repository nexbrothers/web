import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getApp, getAllAppSlugs } from "../../../../data";
import { CheckoutView } from "./CheckoutView";

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
  return { title: `Checkout — ${app.name} | Brothers Store` };
}

export default async function CheckoutPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return <CheckoutView app={app} />;
}
