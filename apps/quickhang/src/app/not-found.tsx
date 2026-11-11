import Link from "next/link";
import { Container } from "@repo/ui/ui";

export default function NotFound() {
  return (
    <div className="qh-hero pb-24 pt-36 text-center">
      <Container size="sm" className="relative z-10">
        <p className="qh-eyebrow mb-4">Error 404</p>
        <h1 className="qh-h1">He couldn&apos;t find that page.</h1>
        <p className="qh-lead mt-5">The page you wanted does not exist, or it moved.</p>
        <Link href="/" className="qh-btn qh-btn-primary mt-8">Back to home</Link>
      </Container>
    </div>
  );
}
