import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  collectionStaticParams,
  getProjectSlugs,
  getProjectWithNeighbours,
} from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
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
            className="transition-colors duration-200 hover:text-white"
          >
            Projects
          </Link>
        }
        title={project.title}
        intro={project.summary}
      >
        <dl className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-4 text-sm">
          <div>
            <dt className="text-subtle">Category</dt>
            <dd className="mt-1 font-semibold text-white">
              {project.category}
            </dd>
          </div>
          <div>
            <dt className="text-subtle">Date</dt>
            <dd className="mt-1 font-semibold text-white">{project.year}</dd>
          </div>
        </dl>
        <TagList
          className="mx-auto mt-6 max-w-3xl justify-center"
          tags={project.technologies}
        />
        {project.links && project.links.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {project.links.map((link, index) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                variant={index === 0 ? "primary" : "secondary"}
              >
                {link.label}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            ))}
          </div>
        )}
      </PageHeader>

      <Container className="pb-16 sm:pb-24">
        {project.image && (
          <div className="relative mx-auto mb-14 aspect-[16/9] max-w-4xl overflow-hidden card bg-white">
            <Image
              src={project.image}
              alt={`${project.title} cover`}
              fill
              priority
              unoptimized={/\.svg$|^https?:/.test(project.image)}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain p-10"
            />
          </div>
        )}
        <div className="mx-auto max-w-reading [&>h2:first-child]:mt-0">
          <Content />
        </div>
      </Container>

      {(previous || next) && (
        <Container>
          <nav
            aria-label="More projects"
            className="mx-auto grid max-w-4xl gap-6 border-t border-border py-12 sm:grid-cols-2"
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
        className={`flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-accent uppercase ${direction === "next" ? "sm:justify-end" : ""}`}
      >
        {direction === "previous" && (
          <Icon aria-hidden="true" className="size-3.5" />
        )}
        {label}
        {direction === "next" && (
          <Icon aria-hidden="true" className="size-3.5" />
        )}
      </span>
      <span className="mt-2 block text-xl font-semibold transition-colors duration-200 group-hover:text-accent">
        {title}
      </span>
    </Link>
  );
}
