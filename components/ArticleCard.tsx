import Image from "next/image";
import Link from "next/link";
import { getImageSize } from "@/lib/imageDims";
import type { PostMeta } from "@/lib/content";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function ArticleCard({
  post,
  size = "regular",
}: {
  post: PostMeta;
  size?: "regular" | "large";
}) {
  const { width, height } = getImageSize(post.cover);
  const href = `/${post.category}/${post.slug}`;

  return (
    <Link href={href} className="reveal group block">
      <div className="overflow-hidden bg-paper-alt">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          width={width}
          height={height}
          sizes={
            size === "large"
              ? "100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="pt-4">
        <p className="font-mono text-xs tracking-wider text-accent">
          {(post.subcategory ?? post.category).toUpperCase()}
          <span className="mx-2 text-line">·</span>
          <span className="text-muted">{formatDate(post.date)}</span>
        </p>
        <h3
          className={`mt-2 font-display font-medium text-ink ${size === "large" ? "text-2xl sm:text-3xl" : "text-xl"}`}
        >
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
