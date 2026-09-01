import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Stamps",
  description:
    "A stamp and postal history archive — commemoratives, definitives and the odd postmark worth a second look.",
};

export default function StampsPage() {
  const posts = getAllPosts("stamps");

  return (
    <>
      <PageIntro
        eyebrow="STAMPS"
        title="Postal history in miniature"
        blurb="A slowly growing stamp and postal history archive. It started as postcard close-ups — a dedicated stamps collection is next."
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
