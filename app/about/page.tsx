import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getImageSize } from "@/lib/imageDims";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ray Kuo: draught beer technician, BJCP judge, and collector of film, sketches, postcards and stamps.",
};

export default function AboutPage() {
  const portrait = getImageSize("/images/beer/14.jpeg");

  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <p className="reveal font-mono text-xs tracking-widest text-accent">
        ABOUT
      </p>
      <h1 className="reveal mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
        Drinks are my profession. The rest is how I remember the world.
      </h1>

      <div className="reveal mt-10 overflow-hidden bg-paper-alt">
        <Image
          src="/images/beer/14.jpeg"
          alt="Ray at a BrewDog trade event, wearing a BrewDog shirt and lanyard, mid-conversation"
          width={portrait.width}
          height={portrait.height}
          sizes="(min-width: 768px) 768px, 100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="prose-editorial reveal mt-10">
        <h2>Professional identity</h2>
        <p>
          I&apos;m Ray Kuo — a draught beer technician with close to{" "}
          <strong>8 years in the beverage industry</strong>. At Asahi
          Breweries Taiwan I worked as a Beer Quality Specialist, maintaining
          and troubleshooting over <strong>200 keg systems</strong>, training{" "}
          <strong>350+ bar and restaurant staff</strong>, and supporting
          roughly <strong>400 draught valves</strong> across the island.
        </p>
        <p>
          From 2021 to 2023 I ran <strong>BrewDog&apos;s brand technical
          service and channel development in Taiwan</strong>. I hold a{" "}
          <strong>BJCP Beer Judge</strong> qualification and studied{" "}
          <strong>WSET Level 2 in Wine</strong>. I&apos;m currently
          relocating from Taiwan to the UK, looking for the next role that
          keeps me close to the same questions: how a drink is made, kept,
          served, and talked about clearly.
        </p>

        <h2>Personal interests</h2>
        <p>
          Outside of work, I record places in four other ways. I shoot{" "}
          <strong>film</strong> — large format and Super 8 — as{" "}
          <a
            href={SITE.igFilm}
            target="_blank"
            rel="noopener noreferrer"
          >
            @beer_snowball
          </a>
          . I <strong>sketch</strong> streets and buildings in fountain pen
          and watercolour, on location, as{" "}
          <a
            href={SITE.igSketch}
            target="_blank"
            rel="noopener noreferrer"
          >
            @story.between.inks
          </a>
          . I collect and exchange <strong>postcards</strong> through
          Postcrossing, and I&apos;m slowly building a <strong>stamp</strong>{" "}
          and postal history archive out of what arrives in the mail.
        </p>

        <blockquote>
          Drinks are my profession. Film, sketch, postcards and stamps are
          how I explore and remember the world.
        </blockquote>

        <p>
          If you&apos;re looking for someone to talk beer, wine, photography,
          sketching or postal history with, that&apos;s exactly what this
          site is for.{" "}
          <Link href="/contact">Get in touch</Link>.
        </p>
      </div>
    </div>
  );
}
