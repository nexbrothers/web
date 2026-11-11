import { PLAY_URL } from "../lib/site";

export function PlayButton({ className = "" }: { className?: string }) {
  if (PLAY_URL) {
    return (
      <a href={PLAY_URL} className={`qh-btn qh-btn-primary ${className}`} rel="noopener">
        Get it on Google Play
      </a>
    );
  }
  return (
    <span role="link" aria-disabled="true" className={`qh-btn qh-btn-primary ${className}`}>
      Coming soon to Google Play
    </span>
  );
}
