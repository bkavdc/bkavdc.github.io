import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import PhotoGrid from "@/components/PhotoGrid";
import PageIntro from "@/components/PageIntro";
import { filmGallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Film",
  description:
    "A visual journal in film — large format, Super 8, and everyday life, shot as @beer_snowball.",
};

export default function FilmPage() {
  const posts = getAllPosts("film");

  const items = [
    ...posts.map((p) => ({
      href: `/film/${p.slug}`,
      src: p.cover,
      alt: p.coverAlt,
      caption: p.title,
      meta: p.tags[0],
    })),
    ...filmGallery,
  ];

  return (
    <>
      <PageIntro
        eyebrow="FILM"
        title="A slow, visual journal"
        blurb="Large format, Super 8, and whatever camera fits the day. Shot as @beer_snowball — photos first, words only when there's something to say."
      />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <PhotoGrid items={items} />
      </div>
    </>
  );
}
