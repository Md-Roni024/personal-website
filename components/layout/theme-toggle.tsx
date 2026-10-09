"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

// Re-render when <html data-theme> changes (this toggle or another tab).
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;
    applyTheme(event.newValue === "light" ? "light" : "dark");
  };
  window.addEventListener("storage", onStorage);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStorage);
  };
}

function applyTheme(theme: Theme) {
  if (theme === "light") document.documentElement.dataset.theme = "light";
  else delete document.documentElement.dataset.theme;
}

/** Dark (default) / light switch. The initial theme is applied before paint by the inline script in app/layout.tsx. */
export function ThemeToggle({ className }: { className?: string }) {
  // The server always renders the dark state; the client corrects it after hydration.
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");
  const next: Theme = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    applyTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage blocked (private mode): the choice lasts for this page only.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={cn(
        "flex size-10 items-center justify-center rounded-full border border-border-strong text-heading transition-colors duration-300 hover:border-primary hover:text-accent",
        className,
      )}
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" className="size-5" />
      ) : (
        <Moon aria-hidden="true" className="size-5" />
      )}
    </button>
  );
}
