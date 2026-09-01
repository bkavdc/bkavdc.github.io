import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Category = "drinks" | "film" | "sketch" | "postcards" | "stamps";

export const CATEGORIES: { slug: Category; label: string; nav: string }[] = [
  { slug: "drinks", label: "Drinks", nav: "DRINKS" },
  { slug: "film", label: "Film", nav: "FILM" },
  { slug: "sketch", label: "Sketch", nav: "SKETCH" },
  { slug: "postcards", label: "Postcards", nav: "POSTCARDS" },
  { slug: "stamps", label: "Stamps", nav: "STAMPS" },
];

export interface PostMeta {
  slug: string;
  category: Category;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  subcategory?: string;
  location?: string;
  medium?: string;
  featured?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function categoryDir(category: Category) {
  return path.join(CONTENT_DIR, category);
}

export function getAllSlugs(category: Category): string[] {
  const dir = categoryDir(category);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost(category: Category, slug: string): Post {
  const filePath = path.join(categoryDir(category), `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    category,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt ?? "",
    cover: data.cover,
    coverAlt: data.coverAlt ?? data.title,
    tags: data.tags ?? [],
    subcategory: data.subcategory,
    location: data.location,
    medium: data.medium,
    featured: data.featured ?? false,
    content,
  };
}

export function getAllPosts(category: Category): PostMeta[] {
  return getAllSlugs(category)
    .map((slug) => {
      const { content, ...meta } = getPost(category, slug);
      void content;
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostsAllCategories(): PostMeta[] {
  return CATEGORIES.flatMap((c) => getAllPosts(c.slug)).sort((a, b) =>
    a.date < b.date ? 1 : -1
  );
}

export function getFeaturedPost(): PostMeta {
  const all = getAllPostsAllCategories();
  return all.find((p) => p.featured) ?? all[0];
}
