"use client";

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

/** Desktop nav (md+) and mobile menu (<md). The mobile menu is a native modal <dialog>: it traps focus, closes on Esc and restores focus to the trigger. */
export function SiteNav({ items, cvPath }: SiteNavProps) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Close the mobile menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 48rem)");
    const onChange = () => query.matches && dialogRef.current?.close();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <nav aria-label="Main" className="hidden md:block">
        <ul className="flex items-center gap-7 text-sm">
          {items.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "transition-colors duration-200 hover:text-foreground",
                    current ? "font-medium text-foreground" : "text-muted",
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
              className="rounded-sm border border-border-strong px-3 py-1.5 transition-colors duration-200 hover:border-foreground"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        className="-mr-2 min-h-11 px-2 text-sm font-medium md:hidden"
      >
        Menu
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-background p-0 text-foreground backdrop:bg-transparent"
      >
        <div className="flex h-16 items-center justify-end px-4 sm:px-6">
          <button
            type="button"
            onClick={close}
            className="-mr-2 min-h-11 px-2 text-sm font-medium"
          >
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
                className="block py-4 font-serif text-3xl"
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
                      "block py-4 font-serif text-3xl",
                      current ? "text-accent" : "text-foreground",
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
            className="mt-8 inline-flex min-h-11 items-center rounded-sm border border-border-strong px-5 text-sm font-medium"
          >
            View CV
          </a>
        </nav>
      </dialog>
    </>
  );
}
