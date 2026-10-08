"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: readonly string[];
  className?: string;
};

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1600;

/**
 * Types and deletes each word in turn (the hero effect from the reference site).
 * Renders the first word on the server, so there is no layout shift and it works without JS.
 * Screen readers get the full list once; the animated text is hidden from them.
 * Stays static when the user prefers reduced motion.
 */
export function Typewriter({ words, className }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && text === word) delay = HOLD_MS;

    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1),
        );
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [words, index, text, deleting]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className={className}>
        {text}
        <span className="ml-0.5 inline-block w-[2px] animate-pulse self-stretch bg-current align-[-0.1em]">
          &#8203;
        </span>
      </span>
    </>
  );
}
