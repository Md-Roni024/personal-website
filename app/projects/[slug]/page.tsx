import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  collectionStaticParams,
  getProjectSlugs,
  getProjectWithNeighbours,
} from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Eyebrow } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";

export function generateStaticParams() {
  return collectionStaticParams(getProjectSlugs());
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const result = await getProjectWithNeighbours(slug);
  if (!result) return {};
  return createMetadata({
    title: result.project.title,
    description: result.project.summary,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const result = await getProjectWithNeighbours(slug);
  if (!result) notFound();
  const { project, previous, next } = result;
  const { default: Content } = await import(`@/content/projects/${slug}.mdx`);

  return (
    <article>
      <PageHeader
        eyebrow={
          <Link
            href="/projects"
            className="transition-colors duration-200 hover:text-foreground"
          >
            Projects
          </Link>
        }
        title={project.title}
        intro={project.summary}
      >
        <dl className="mt-12 grid gap-6 border-t border-border pt-6 text-sm sm:grid-cols-3">
          <div>
            <dt>
              <Eyebrow>Category</Eyebrow>
            </dt>
            <dd className="mt-2">{project.category}</dd>
          </div>
          <div>
            <dt>
              <Eyebrow>Year</Eyebrow>
            </dt>
            <dd className="mt-2">{project.year}</dd>
          </div>
          <div>
            <dt>
              <Eyebrow>Technology</Eyebrow>
            </dt>
            <dd className="mt-2">
              <TagList tags={project.technologies} />
            </dd>
          </div>
        </dl>
        {project.links && project.links.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1 underline decoration-border-strong underline-offset-4 hover:text-accent hover:decoration-accent"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </PageHeader>

      <Container className="pb-16 sm:pb-24">
        <div className="max-w-reading [&>h2:first-child]:mt-0">
          <Content />
        </div>
      </Container>

      {(previous || next) && (
        <Container>
          <nav
            aria-label="More projects"
            className="grid gap-6 border-t border-border py-10 sm:grid-cols-2"
          >
            {previous ? (
              <ProjectNavLink
                href={`/projects/${previous.slug}`}
                label="Previous"
                title={previous.title}
                direction="previous"
              />
            ) : (
              <span />
            )}
            {next && (
              <ProjectNavLink
                href={`/projects/${next.slug}`}
                label="Next"
                title={next.title}
                direction="next"
              />
            )}
          </nav>
        </Container>
      )}
    </article>
  );
}

function ProjectNavLink({
  href,
  label,
  title,
  direction,
}: {
  href: string;
  label: string;
  title: string;
  direction: "previous" | "next";
}) {
  const Icon = direction === "previous" ? ArrowLeft : ArrowRight;
  return (
    <Link
      href={href}
      className={`group block ${direction === "next" ? "sm:text-right" : ""}`}
    >
      <span
        className={`flex items-center gap-2 font-mono text-xs tracking-widest text-subtle uppercase ${direction === "next" ? "sm:justify-end" : ""}`}
      >
        {direction === "previous" && (
          <Icon aria-hidden="true" className="size-3.5" />
        )}
        {label}
        {direction === "next" && (
          <Icon aria-hidden="true" className="size-3.5" />
        )}
      </span>
      <span className="mt-2 block font-serif text-xl transition-colors duration-200 group-hover:text-accent">
        {title}
      </span>
    </Link>
  );
}
