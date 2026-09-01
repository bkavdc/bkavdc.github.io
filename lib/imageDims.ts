import dims from "./image-dims.json";

const table = dims as Record<string, { width: number; height: number }>;

// Falls back to a sane 4:3 landscape ratio if a path is missing from the table
// (e.g. a newly added image before `node scripts/gen-image-dims.mjs` is re-run).
export function getImageSize(src: string): { width: number; height: number } {
  return table[src] ?? { width: 1200, height: 900 };
}
