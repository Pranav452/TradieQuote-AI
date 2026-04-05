import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Instant ROI tracking dashboards",
  "AI-powered lead qualification filters",
  "Integrated professional quote generator",
];

export function FooterSection() {
  return (
    <section className="bg-zinc-950 px-6 pt-32 pb-12 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight font-bold text-balance md:text-6xl">
              Designed for the <br /> modern craftsman.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-pretty text-zinc-500">
              We didn&apos;t build a toy. We built a professional instrument. The
              TradieQuote interface uses high-contrast typography and clear visual
              hierarchy so you can manage jobs on-site, in the truck, or at the desk.
            </p>

            <div className="space-y-4">
              {highlights.map((text) => (
                <div key={text} className="flex items-center gap-4">
                  <CheckCircle2
                    className="size-5 shrink-0 text-orange-400"
                    aria-hidden
                  />
                  <span className="font-semibold text-zinc-200">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-[48px] border border-white/5 lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Professional craftsman"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xl font-bold tracking-tight">
              Industrial Architect
            </span>
            <p className="text-xs text-zinc-600">
              © 2026 Industrial Architect. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500"
            aria-label="Footer"
          >
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Support
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
