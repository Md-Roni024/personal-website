import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/lib/content";

/** Certificates and achievements as cards, each linking to its credential. */
export function CertificationList({
  items,
}: {
  items: readonly Certification[];
}) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="reveal">
          <article className="group relative flex h-full card-hover flex-col card p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-accent">
                <Award aria-hidden="true" className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-white">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 group-hover:text-accent after:absolute after:inset-0"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-1 text-sm text-subtle">
                  {item.issuer && `${item.issuer} · `}
                  {item.date}
                </p>
              </div>
            </div>
            {item.description && (
              <p className="mt-4 line-clamp-4 text-sm/relaxed text-muted">
                {item.description}
              </p>
            )}
            {item.href && (
              <p className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-accent">
                Open credential
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </p>
            )}
          </article>
        </li>
      ))}
    </ul>
  );
}
