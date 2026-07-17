"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
      style={{ color: "var(--text-muted)" }}
      onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
      onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
      aria-label="Toggle theme"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {theme === "dark" ? (
          <path d="M8 1.5a6.5 6.5 0 1 0 6.1 4.3 5.5 5.5 0 0 1-6.1-4.3z" />
        ) : (
          <>
            <circle cx="8" cy="8" r="3" />
            <line x1="8" y1="1" x2="8" y2="2" />
            <line x1="8" y1="14" x2="8" y2="15" />
            <line x1="1" y1="8" x2="2" y2="8" />
            <line x1="14" y1="8" x2="15" y2="8" />
            <line x1="3.05" y1="3.05" x2="3.76" y2="3.76" />
            <line x1="12.24" y1="12.24" x2="12.95" y2="12.95" />
            <line x1="12.24" y1="3.76" x2="12.95" y2="3.05" />
            <line x1="3.76" y1="12.24" x2="3.05" y2="12.95" />
          </>
        )}
      </svg>
    </button>
  );
}
