import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { jetbrainsMono, poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

// Applies the saved theme before first paint so light-mode visitors never see a dark flash.
const themeScript = `try{if(localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${poppins.variable} ${jetbrainsMono.variable} h-full antialiased`}
      // The theme script sets data-theme before React hydrates.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <SiteHeader />
        {/* Pages render their content directly; they must not add another <main>. */}
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
        {/* The analytics script is served by Vercel; elsewhere (local, other hosts) it would 404. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
