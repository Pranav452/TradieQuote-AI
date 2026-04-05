import Image from "next/image";
import { Code2, Layout, Smartphone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturesGrid() {
  return (
    <section className="bg-white px-6 py-8 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Seamless Ecosystem"
          title="Works On Any Website"
          description="TradieQuote AI is built to fit into your workflow, not complicate it. Integrate with a single snippet or your favorite CMS."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex min-h-[500px] flex-col justify-between rounded-[40px] border border-zinc-100 bg-zinc-50/50 p-8 md:p-12 lg:col-span-7">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-lg bg-zinc-900 p-2">
                  <Code2 className="size-5 text-white" aria-hidden />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Easy Install
                </span>
              </div>
              <h3 className="mb-4 text-3xl font-medium text-zinc-900">
                One line of code. <br />
                <span className="font-serif text-zinc-400 italic">
                  Infinite possibilities.
                </span>
              </h3>
              <p className="mb-12 max-w-sm text-zinc-500">
                Just paste our lightweight snippet before your closing body tag and
                let the AI do the heavy lifting.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100/50 p-6 font-mono text-xs md:text-sm">
              <div className="mb-4 flex gap-1.5">
                <div className="size-2.5 rounded-full bg-zinc-300" />
                <div className="size-2.5 rounded-full bg-zinc-300" />
                <div className="size-2.5 rounded-full bg-zinc-300" />
              </div>
              <div className="space-y-2">
                <div className="flex gap-4">
                  <span className="w-4 text-zinc-400">1</span>
                  <code className="text-zinc-400">
                    <span className="text-orange-400">&lt;script</span>{" "}
                    src=&quot;https://cdn.tradiequote.ai/widget.js&quot;
                    <span className="text-orange-400">&gt;&lt;/script&gt;</span>
                  </code>
                </div>
                <div className="flex gap-4">
                  <span className="w-4 text-zinc-400">2</span>
                  <code className="text-zinc-400">
                    <span className="text-orange-400">&lt;tradie-quote-ai</span>{" "}
                    api-key=&quot;tq_live_8k...&quot;
                    <span className="text-orange-400">&gt;&lt;/tradie-quote-ai&gt;</span>
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex-1 rounded-[32px] border border-zinc-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-2">
                  <Layout className="size-5 text-zinc-600" aria-hidden />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Platform Ready
                </span>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-zinc-900">
                Native CMS Support
              </h4>
              <p className="mb-6 text-sm text-zinc-500">
                Optimized plugins for WordPress, Webflow, and Shopify sites.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-700">
                  WordPress
                </span>
                <span className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-700">
                  Shopify
                </span>
              </div>
            </div>

            <div className="flex-1 rounded-[32px] border border-zinc-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-2">
                  <Smartphone className="size-5 text-zinc-600" aria-hidden />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Responsive
                </span>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-zinc-900">
                Mobile First Design
              </h4>
              <p className="text-sm text-zinc-500">
                Built with a mobile-first philosophy to ensure high conversion rates
                on site.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div className="relative size-11 overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=120&auto=format&fit=crop"
              alt=""
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div className="relative size-11 overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=120&auto=format&fit=crop"
              alt=""
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <span className="font-serif text-xl text-zinc-500 italic md:text-2xl">
            Custom Code
          </span>
          <span className="font-serif text-xl text-zinc-500 italic md:text-2xl">
            React &amp; Next.js
          </span>
        </div>
      </div>
    </section>
  );
}
