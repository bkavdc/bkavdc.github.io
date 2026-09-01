import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Drinks",
  description:
    "Writing on beer, wine and the beverage industry from a working draught beer technician and BJCP judge.",
};

const SUBCATEGORIES = [
  "Beer",
  "Wine",
  "Spirits",
  "Brewing",
  "Tasting",
  "Beverage Industry",
  "People",
  "Places",
];

export default function DrinksPage() {
  const posts = getAllPosts("drinks");

  return (
    <>
      <PageIntro
        eyebrow="DRINKS — THE CORE OF IT"
        title="Beer, wine, and the industry behind them"
        blurb="Close to eight years spent maintaining draught systems, running a brand, judging and studying — this is where the professional side of the site lives."
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="reveal border-y border-line py-5 font-mono text-xs tracking-wide text-muted">
          {SUBCATEGORIES.join("  ·  ")}
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
