import Link from "next/link";
import { NAV, NAV_SECONDARY, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {SITE.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink-soft">
              Collecting stories, one bottle, one frame, one sketch, one
              postcard, one stamp at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs tracking-wider text-muted">
                SECTIONS
              </p>
              <ul className="mt-3 space-y-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-soft hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider text-muted">
                SITE
              </p>
              <ul className="mt-3 space-y-2">
                {NAV_SECONDARY.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-soft hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider text-muted">
                ELSEWHERE
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-ink-soft hover:text-accent"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.igSketch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft hover:text-accent"
                  >
                    Instagram (Sketch)
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.igFilm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft hover:text-accent"
                  >
                    Instagram (Film)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-14 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name}. Built one page at a time.
        </p>
      </div>
    </footer>
  );
}
