import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/site.config";
import { collectionStaticParams, getPost, getPostSlugs } from "@/lib/content";
import { absoluteUrl, createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { JsonLd } from "@/components/content/json-ld";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { TagList } from "@/components/ui/tag";

export function generateStaticParams() {
  return collectionStaticParams(getPostSlugs());
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.summary,
    path: `/writing/${slug}`,
    type: "article",
    publishedTime: post.date,
    tags: post.tags,
  });
}

export default async function PostPage({
  params,
}: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { default: Content } = await import(`@/content/writing/${slug}.mdx`);

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.summary,
          datePublished: post.date,
          url: absoluteUrl(`/writing/${slug}`),
          author: {
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          ...(post.tags && { keywords: post.tags.join(", ") }),
        }}
      />
      <PageHeader
        eyebrow={
          <>
            <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
            {post.category} · {post.readingMinutes} min read
          </>
        }
        title={post.title}
        intro={post.summary}
      />
      <Container className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-reading [&>p:first-child]:mt-0">
          <Content />
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mx-auto mt-12 max-w-reading border-t border-border pt-6">
            <TagList tags={post.tags} />
          </div>
        )}
        <p className="mx-auto mt-12 max-w-reading">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All writing
          </Link>
        </p>
      </Container>
    </article>
  );
}
