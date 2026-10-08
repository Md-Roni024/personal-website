import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getPosts } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = createMetadata({
  title: "Writing",
  description: `Articles, technical notes and learning notes by ${siteConfig.name}.`,
  path: "/writing",
});

export default async function WritingPage() {
  const posts = await getPosts();
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes & articles"
        intro="Technical notes, things I'm learning, and the occasional retrospective."
      />
      <Container className="pb-16 sm:pb-24">
        {posts.length === 0 ? (
          <p className="text-muted">Nothing published yet.</p>
        ) : (
          <ol className="divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="group relative grid gap-2 py-8 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <p className="font-mono text-sm text-subtle">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                  <div>
                    <h2 className="font-serif text-2xl/tight">
                      <Link
                        href={`/writing/${post.slug}`}
                        className="transition-colors duration-200 group-hover:text-accent after:absolute after:inset-0"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 max-w-reading text-muted">
                      {post.summary}
                    </p>
                    <p className="mt-3 font-mono text-xs text-subtle">
                      {post.category} · {post.readingMinutes} min read
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </>
  );
}
