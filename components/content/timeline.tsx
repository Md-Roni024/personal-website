import type { ReactNode } from "react";

/**
 * Vertical timeline (from the reference site). Line and dots on the left on mobile;
 * on md+ the line is centred and entries alternate left/right.
 */
export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative mx-auto max-w-5xl before:absolute before:inset-y-2 before:left-[7px] before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent md:before:left-1/2 md:before:-ml-px">
      {children}
    </ol>
  );
}

type TimelineItemProps = {
  date: string;
  children: ReactNode;
};

export function TimelineItem({ date, children }: TimelineItemProps) {
  return (
    <li className="group reveal relative pb-12 pl-10 last:pb-0 md:w-1/2 md:pl-0 md:odd:pr-12 md:even:ml-auto md:even:pl-12">
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-0 size-4 rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_rgb(133_76_230/0.2)] md:group-odd:right-[-8px] md:group-odd:left-auto md:group-even:left-[-8px]"
      />
      <p className="text-sm font-semibold tracking-wide text-accent md:group-odd:text-right">
        {date}
      </p>
      <div className="mt-3 card-hover card p-6 text-left">{children}</div>
    </li>
  );
}
