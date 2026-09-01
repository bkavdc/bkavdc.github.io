import Image from "next/image";
import Link from "next/link";
import {
  getAllPosts,
  getFeaturedPost,
  getPost,
} from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import PhotoGrid from "@/components/PhotoGrid";
import { getImageSize } from "@/lib/imageDims";
import { filmGallery, sketchGallery } from "@/lib/gallery";
import { SITE } from "@/lib/site";

export default function Home() {
  const featured = getFeaturedPost();
  const featuredPost = getPost(featured.category, featured.slug);

  const drinks = getAllPosts("drinks").slice(0, 3);
  const film = getAllPosts("film");
  const sketch = getAllPosts("sketch");
  const postcards = getAllPosts("postcards").slice(0, 2);
  const stamps = getAllPosts("stamps").slice(0, 3);

  const portrait = getImageSize("/images/beer/14.jpeg");

  return (
    <>
      {/* Identity */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div className="reveal">
            <p className="font-mono text-xs tracking-widest text-accent">
              DRINKS · FILM · SKETCH · POSTCARDS · STAMPS
            </p>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Ray K.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              A draught beer technician and BJCP judge writing about the
              beverage industry, and collecting the rest of the world in
              film, ink, postcards and stamps.
            </p>
            <p className="mt-2 max-w-xl font-display text-lg italic text-ink-soft">
              Collecting stories, one bottle, one frame, one sketch, one
              postcard, one stamp at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="border border-ink px-5 py-2.5 font-mono text-xs tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                ABOUT RAY
              </Link>
              <Link
                href="/drinks"
                className="border border-line px-5 py-2.5 font-mono text-xs tracking-wider text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                READ DRINKS
              </Link>
            </div>
          </div>

          <div className="reveal overflow-hidden bg-paper-alt">
            <Image
              src="/images/beer/14.jpeg"
              alt="Ray at a BrewDog trade event, wearing a BrewDog shirt and lanyard"
              width={portrait.width}
              height={portrait.height}
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured story */}
      <section className="border-t border-line bg-paper-alt/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionEyebrow label="FEATURED STORY" />
          <div className="mt-6 max-w-3xl">
            <ArticleCard post={featuredPost} size="large" />
          </div>
        </div>
      </section>

      {/* Drinks */}
      <SectionBlock
        eyebrow="DRINKS — THE CORE OF IT"
        title="Beer, wine and the business behind them"
        blurb="Close to eight years in the beverage industry: draught systems, brand work, tasting, judging. This is the profession side of the site."
        href="/drinks"
        linkLabel="All Drinks writing"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {drinks.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionBlock>

      {/* Film */}
      <SectionBlock
        eyebrow="FILM"
        title="A slow, visual journal"
        blurb="Large format, Super 8, and everything in between — shot as @beer_snowball."
        href="/film"
        linkLabel="All Film"
        alt
      >
        <PhotoGrid
          items={[...film, ...filmGallery.slice(0, 4)].slice(0, 6).map((p) =>
            "cover" in p
              ? { href: `/film/${p.slug}`, src: p.cover, alt: p.coverAlt }
              : { src: p.src, alt: p.alt }
          )}
        />
      </SectionBlock>

      {/* Sketch */}
      <SectionBlock
        eyebrow="SKETCH"
        title="Pen and wash, on location"
        blurb="An online sketchbook of streets, buildings and half-finished sites — drawn as @story.between.inks."
        href="/sketch"
        linkLabel="All Sketch"
      >
        <PhotoGrid
          items={[...sketch, ...sketchGallery.slice(0, 4)].slice(0, 6).map((p) =>
            "cover" in p
              ? { href: `/sketch/${p.slug}`, src: p.cover, alt: p.coverAlt }
              : { src: p.src, alt: p.alt }
          )}
        />
      </SectionBlock>

      {/* Postcards */}
      <SectionBlock
        eyebrow="POSTCARDS"
        title="A digital postcard archive"
        blurb="Stamps, postmarks and handwriting from strangers, kept through Postcrossing."
        href="/postcards"
        linkLabel="All Postcards"
        alt
      >
        <div className="grid gap-8 sm:grid-cols-2">
          {postcards.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionBlock>

      {/* Stamps */}
      <SectionBlock
        eyebrow="STAMPS"
        title="Postal history in miniature"
        blurb="Stamps and postmarks worth a second look, one country at a time."
        href="/stamps"
        linkLabel="All Stamps"
      >
        <div className="grid gap-8 sm:grid-cols-3">
          {stamps.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionBlock>

      {/* About teaser */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionEyebrow label="ABOUT" />
          <div className="reveal mt-6 grid gap-6 md:grid-cols-2 md:items-start">
            <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
              Drinks are my profession. Film, sketch, postcards and stamps
              are how I explore and remember the world.
            </p>
            <div>
              <p className="text-ink-soft">
                Close to 8 years in the beverage industry — ex-Asahi
                Breweries Taiwan, BrewDog Taiwan brand lead, BJCP Beer
                Judge, WSET Level 2 in Wine. Currently relocating from
                Taiwan to the UK.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-block font-mono text-xs tracking-wider text-accent hover:text-ink"
              >
                READ THE FULL STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs tracking-widest text-accent-soft">
            GET IN TOUCH
          </p>
          <h2 className="reveal mt-4 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">
            If you have an interesting idea — beverage, photography, travel,
            writing — let&apos;s talk.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="border border-paper px-5 py-2.5 font-mono text-xs tracking-wider transition-colors hover:bg-paper hover:text-ink"
            >
              {SITE.email}
            </a>
            <Link
              href="/contact"
              className="border border-line px-5 py-2.5 font-mono text-xs tracking-wider text-paper/70 transition-colors hover:border-paper hover:text-paper"
            >
              CONTACT PAGE →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs tracking-widest text-accent">{label}</p>
  );
}

function SectionBlock({
  eyebrow,
  title,
  blurb,
  href,
  linkLabel,
  alt,
  children,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
  linkLabel: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`border-t border-line ${alt ? "bg-paper-alt/40" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="reveal">
            <SectionEyebrow label={eyebrow} />
            <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 max-w-xl text-ink-soft">{blurb}</p>
          </div>
          <Link
            href={href}
            className="reveal shrink-0 font-mono text-xs tracking-wider text-accent hover:text-ink"
          >
            {linkLabel} →
          </Link>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
