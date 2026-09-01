export default function PageIntro({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8 sm:pt-20">
      <p className="reveal font-mono text-xs tracking-widest text-accent">
        {eyebrow}
      </p>
      <h1 className="reveal mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="reveal mt-4 max-w-xl text-ink-soft">{blurb}</p>
    </div>
  );
}
