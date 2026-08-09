import { notFound } from "next/navigation";
import { getApp, getAllAppSlugs } from "../../../../../data";
import { SuccessView } from "./SuccessView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({ slug }));
}

export default async function PurchaseSuccessPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return <SuccessView app={app} />;
}
