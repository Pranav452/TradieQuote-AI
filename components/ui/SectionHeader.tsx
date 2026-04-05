interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-8 flex w-full max-w-2xl min-w-0 flex-col items-center text-center">
      <div className="mb-4 rounded-full border border-zinc-200 px-4 py-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          {badge}
        </span>
      </div>
      <h2 className="mb-4 font-serif text-5xl leading-tight text-zinc-900 text-balance italic md:text-6xl">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-pretty text-zinc-500">{description}</p>
    </div>
  );
}
