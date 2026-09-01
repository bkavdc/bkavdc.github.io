import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import PhotoGrid from "@/components/PhotoGrid";
import PageIntro from "@/components/PageIntro";
import { postcardsGallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Postcards",
  description:
    "A digital postcard archive — stamps, postmarks and handwriting from strangers, kept through Postcrossing.",
};

export default function PostcardsPage() {
  const posts = getAllPosts("postcards");

  return (
    <>
      <PageIntro
        eyebrow="POSTCARDS"
        title="A digital postcard archive"
        blurb="Every postcard here travelled somewhere before it arrived — mostly through Postcrossing. Front, back, postmark and a note, kept together."
      />

      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {postcardsGallery.length > 0 && (
        <div className="border-t border-line bg-paper-alt/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <p className="font-mono text-xs tracking-widest text-accent">
              MORE FROM THE ARCHIVE
            </p>
            <p className="mt-2 max-w-xl text-ink-soft">
              Postcards waiting for their story to be written down.
            </p>
            <div className="mt-8">
              <PhotoGrid items={postcardsGallery} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
