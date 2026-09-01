import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost } from "@/lib/content";
import ArticleDetail from "@/components/ArticleDetail";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllSlugs("stamps").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllSlugs("stamps").includes(slug)) return {};
  const post = getPost("stamps", slug);
  return { title: post.title, description: post.excerpt };
}

export default async function StampsArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  if (!getAllSlugs("stamps").includes(slug)) notFound();
  const post = getPost("stamps", slug);
  return <ArticleDetail post={post} />;
}
