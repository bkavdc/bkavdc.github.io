import Image from "next/image";
import Link from "next/link";
import { getImageSize } from "@/lib/imageDims";

export interface PhotoItem {
  href?: string;
  src: string;
  alt: string;
  caption?: string;
  meta?: string;
}

// A CSS-columns masonry grid: every photo keeps its own real aspect ratio
// (portrait, landscape, square, scan) instead of being cropped to match.
export default function PhotoGrid({ items }: { items: PhotoItem[] }) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {items.map((item, i) => (
        <PhotoTile key={item.src + i} item={item} />
      ))}
    </div>
  );
}

function PhotoTile({ item }: { item: PhotoItem }) {
  const { width, height } = getImageSize(item.src);

  const media = (
    <div className="overflow-hidden bg-paper-alt">
      <Image
        src={item.src}
        alt={item.alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="w-full h-auto transition-opacity duration-500 group-hover:opacity-90"
      />
    </div>
  );

  return (
    <figure className="reveal group mb-5 break-inside-avoid">
      {item.href ? <Link href={item.href}>{media}</Link> : media}
      {(item.caption || item.meta) && (
        <figcaption className="mt-2 pb-1">
          {item.caption && (
            <p className="font-display text-sm text-ink">{item.caption}</p>
          )}
          {item.meta && (
            <p className="font-mono text-xs text-muted">{item.meta}</p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
