import Image from "next/image";
import Link from "next/link";
import { getImageSize } from "@/lib/imageDims";
import MdxBody from "@/components/MdxBody";
import type { Post } from "@/lib/content";
import { CATEGORIES } from "@/lib/content";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleDetail({ post }: { post: Post }) {
  const { width, height } = getImageSize(post.cover);
  const category = CATEGORIES.find((c) => c.slug === post.category)!;

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8">
      <Link
        href={`/${post.category}`}
        className="font-mono text-xs tracking-wider text-accent hover:text-ink"
      >
        ← {category.label}
      </Link>

      <header className="mt-6">
        <p className="font-mono text-xs tracking-wider text-muted">
          {(post.subcategory ?? category.label).toUpperCase()}
          <span className="mx-2">·</span>
          {formatDate(post.date)}
          {post.location && (
            <>
              <span className="mx-2">·</span>
              {post.location}
            </>
          )}
          {post.medium && (
            <>
              <span className="mx-2">·</span>
              {post.medium}
            </>
          )}
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
      </header>

      <div className="mt-8 overflow-hidden bg-paper-alt">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          width={width}
          height={height}
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="mt-10">
        <MdxBody source={post.content} />
      </div>

      {post.tags.length > 0 && (
        <ul className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-xs tracking-wide text-muted"
            >
              #{tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
