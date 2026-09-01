import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import PhotoGrid from "@/components/PhotoGrid";
import PageIntro from "@/components/PageIntro";
import { sketchGallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Sketch",
  description:
    "An online sketchbook of streets, buildings and daily life in pen and watercolour, drawn as @story.between.inks.",
};

export default function SketchPage() {
  const posts = getAllPosts("sketch");

  const items = [
    ...posts.map((p) => ({
      href: `/sketch/${p.slug}`,
      src: p.cover,
      alt: p.coverAlt,
      caption: p.title,
      meta: [p.location, p.medium].filter(Boolean).join(" · "),
    })),
    ...sketchGallery,
  ];

  return (
    <>
      <PageIntro
        eyebrow="SKETCH"
        title="Pen and wash, on location"
        blurb="Urban sketching, travel sketches and the odd experiment — drawn on site as @story.between.inks."
      />
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <PhotoGrid items={items} />
      </div>
    </>
  );
}
