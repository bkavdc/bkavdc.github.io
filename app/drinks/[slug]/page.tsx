import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost } from "@/lib/content";
import ArticleDetail from "@/components/ArticleDetail";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllSlugs("drinks").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllSlugs("drinks").includes(slug)) return {};
  const post = getPost("drinks", slug);
  return { title: post.title, description: post.excerpt };
}

export default async function DrinksArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  if (!getAllSlugs("drinks").includes(slug)) notFound();
  const post = getPost("drinks", slug);
  return <ArticleDetail post={post} />;
}
