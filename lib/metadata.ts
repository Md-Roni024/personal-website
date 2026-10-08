import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

type PageMetadataInput = {
  title?: string;
  description?: string;
  /** Route path, e.g. "/about". Used for the canonical URL and Open Graph URL. */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: readonly string[];
};

/** Per-page metadata with canonical URL, Open Graph and Twitter cards. The OG image comes from app/opengraph-image.tsx. */
export function createMetadata({
  title,
  description = siteConfig.description,
  path,
  type = "website",
  publishedTime,
  tags,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.name;
  return {
    // `absolute` because the layout's title template would otherwise apply twice to OG titles.
    title: title ?? { absolute: siteConfig.name },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(type === "article" && {
        publishedTime,
        tags: tags ? [...tags] : undefined,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
