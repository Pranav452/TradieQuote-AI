import { HeroContactForm } from "@/components/HeroContactForm";
import { HeroCtas } from "@/components/HeroCtas";

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
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="max-w-3xl min-w-0 lg:col-span-7">
            <div className="mb-8 inline-block rounded-full border border-white/30 px-4 py-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                The New Standard
              </span>
            </div>

            <h1 className="mb-8 leading-[0.9] text-white text-balance">
              <span className="block text-5xl font-bold italic sm:text-6xl md:text-8xl lg:text-9xl">
                SCAN.
              </span>
              <span className="block text-5xl font-bold italic text-orange-400 sm:text-6xl md:text-8xl lg:text-9xl">
                QUOTE.
              </span>
              <span className="block text-5xl font-bold italic sm:text-6xl md:text-8xl lg:text-9xl">
                FIX.
              </span>
            </h1>

            <h2 className="mb-4 max-w-xl text-2xl font-medium text-white text-balance md:text-3xl">
              Create Accurate
              <span className="text-orange-400"> Quotes</span>
              <br />
              in Minutes - Not Hours
            </h2>

            <p className="mb-10 max-w-lg text-lg leading-relaxed text-pretty text-white/70">
              Let customers upload a photo, get an instant estimate, and book you
              without calls, site visits, or delays.
            </p>

            <HeroCtas />
          </div>

          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-black/70 p-6 backdrop-blur-md lg:col-span-5 lg:mt-16">
            <h3 className="text-lg font-semibold text-white text-balance">
              Get a callback about TradieQuote
            </h3>
            <p className="mt-2 text-sm text-pretty text-white/70">
              Tell us a bit about your trade business and we&apos;ll reach out with a
              tailored walkthrough.
            </p>
            <HeroContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
