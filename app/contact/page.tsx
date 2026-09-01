import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ray Kuo about beverage projects, brand collaborations, tastings, writing, photography or travel and culture projects.",
};

const REASONS = [
  "Beverage, beer or wine projects",
  "Brand collaborations",
  "Tastings and events",
  "Writing",
  "Photography",
  "Travel and culture projects",
  "Publishing",
  "Creative collaborations, general exchange",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <p className="reveal font-mono text-xs tracking-widest text-accent">
        GET IN TOUCH
      </p>
      <h1 className="reveal mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
        If you have an interesting idea, let&apos;s talk.
      </h1>
      <p className="reveal mt-5 max-w-xl text-ink-soft">
        No form, no funnel — just an inbox. Beer and wine people, photographers,
        sketchers, postcard and stamp collectors, and anyone with an idea
        worth a conversation are all welcome to write in.
      </p>

      <div className="reveal mt-10">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-block border border-ink px-6 py-3 font-mono text-sm tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          {SITE.email}
        </a>
      </div>

      <div className="reveal mt-14">
        <p className="font-mono text-xs tracking-widest text-muted">
          WHAT I&apos;M UP FOR
        </p>
        <ul className="mt-4 grid gap-x-8 gap-y-3 border-t border-line pt-4 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <li key={reason} className="text-ink-soft">
              {reason}
            </li>
          ))}
        </ul>
      </div>

      <div className="reveal mt-14">
        <p className="font-mono text-xs tracking-widest text-muted">
          ELSEWHERE
        </p>
        <ul className="mt-4 space-y-3 border-t border-line pt-4">
          <li>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent"
            >
              LinkedIn — Ray Kuo
            </a>
          </li>
          <li>
            <a
              href={SITE.igSketch}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent"
            >
              Instagram — @story.between.inks (sketch)
            </a>
          </li>
          <li>
            <a
              href={SITE.igFilm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent"
            >
              Instagram — @beer_snowball (film)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
