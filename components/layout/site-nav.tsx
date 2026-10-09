"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { NavItem } from "@/site.config";
import { cn } from "@/lib/utils";

type SiteNavProps = {
  items: readonly NavItem[];
  cvPath: string;
};

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop nav (lg+) and mobile menu (<lg; seven items don't fit beside the name at tablet width). The mobile menu is a native modal <dialog>: it traps focus, closes on Esc and restores focus to the trigger. */
export function SiteNav({ items, cvPath }: SiteNavProps) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Close the mobile menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 64rem)");
    const onChange = () => query.matches && dialogRef.current?.close();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <nav aria-label="Main" className="hidden lg:block">
        <ul className="flex items-center gap-8 font-medium">
          {items.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "transition-colors duration-200 hover:text-accent",
                    current ? "text-accent" : "text-heading",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center rounded-full border-2 border-primary px-5 font-semibold text-accent transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        className="-mr-2 flex min-h-11 items-center gap-2 px-2 font-medium text-heading lg:hidden"
      >
        <Menu aria-hidden="true" className="size-6" />
        <span className="sr-only sm:not-sr-only">Menu</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-surface p-0 text-foreground backdrop:bg-transparent"
      >
        <div className="flex h-20 items-center justify-end px-4 sm:px-6">
          <button
            type="button"
            onClick={close}
            className="-mr-2 flex min-h-11 items-center gap-2 px-2 font-medium text-heading"
          >
            <X aria-hidden="true" className="size-6" />
            Close
          </button>
        </div>
        <nav aria-label="Main" className="px-4 pt-6 pb-12 sm:px-6">
          <ul className="divide-y divide-border border-y border-border">
            <li>
              <Link
                href="/"
                onClick={close}
                aria-current={pathname === "/" ? "page" : undefined}
                className={cn(
                  "block py-4 text-2xl font-semibold transition-colors hover:text-accent",
                  pathname === "/" ? "text-accent" : "text-heading",
                )}
              >
                Home
              </Link>
            </li>
            {items.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "block py-4 text-2xl font-semibold transition-colors hover:text-accent",
                      current ? "text-accent" : "text-heading",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-brand px-7 font-semibold text-white"
          >
            Check Resume
          </a>
        </nav>
      </dialog>
    </>
  );
}
