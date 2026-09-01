import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost } from "@/lib/content";
import ArticleDetail from "@/components/ArticleDetail";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllSlugs("sketch").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllSlugs("sketch").includes(slug)) return {};
  const post = getPost("sketch", slug);
  return { title: post.title, description: post.excerpt };
}

export default async function SketchArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  if (!getAllSlugs("sketch").includes(slug)) notFound();
  const post = getPost("sketch", slug);
  return <ArticleDetail post={post} />;
}
