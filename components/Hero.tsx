import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh w-full min-w-0 items-center overflow-hidden bg-zinc-900">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Swap to `/hero-bg.jpg` when you add an asset under /public
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div
          className="absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-[#0b140b] via-black/75 to-transparent md:h-44"
          aria-hidden
        />
      </div>

      <div className="relative z-10 container mx-auto mt-20 min-w-0 max-w-full px-6 md:px-12">
        <div className="max-w-3xl min-w-0">
          <div className="mb-8 inline-block rounded-full border border-white/30 px-4 py-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              The New Standard
            </span>
          </div>

          <h1 className="mb-8 leading-[0.9] text-white text-balance">
            <span className="block font-serif text-5xl font-light italic sm:text-6xl md:text-8xl lg:text-9xl">
              SCAN.
            </span>
            <span className="block font-serif text-5xl font-light italic sm:text-6xl md:text-8xl lg:text-9xl">
              QUOTE.
            </span>
            <span className="block font-serif text-5xl font-light italic sm:text-6xl md:text-8xl lg:text-9xl">
              FIX.
            </span>
          </h1>

          <h2 className="mb-4 max-w-xl text-2xl font-medium text-white text-balance md:text-3xl">
            Win More Jobs with AI-Powered Instant Quotes
          </h2>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-pretty text-white/70">
            Let customers upload a photo, get an instant estimate, and book you
            without calls, site visits, or delays.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="primary">Get Demo</Button>
            <Button variant="outline">See It In Action</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
