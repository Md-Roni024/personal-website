/** First focusable element on every page; jumps past the header to `#main`. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only rounded-sm bg-foreground px-4 py-2 text-sm text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
    >
      Skip to content
    </a>
  );
}
