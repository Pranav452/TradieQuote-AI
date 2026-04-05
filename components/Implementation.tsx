import { Database, Terminal } from "lucide-react";

const codeSnippet = `01   <!-- Global TradieQuote Widget -->
02   <script src="https://cdn.tradiequote.ai/v2/widget.js"
        async></script>
03
04   <tradie-quote-ai
05      api-key="tq_live_premium_492x..."
06      theme="modern-light"
07   ></tradie-quote-ai>`;

export function Implementation() {
  return (
    <section className="overflow-x-hidden bg-[#0b140b] px-6 py-8 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
            Integration
          </span>
          <h2 className="mx-auto max-w-4xl text-3xl leading-[1.05] font-bold text-balance sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            Seamless implementation.{" "}
            <span className="text-zinc-800">No dev team required.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#050805] shadow-2xl lg:col-span-7">
            <div className="flex items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/20" aria-hidden />
                <div className="size-3 rounded-full bg-yellow-500/20" aria-hidden />
                <div className="size-3 rounded-full bg-green-500/20" aria-hidden />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                index.html
              </span>
              <div className="w-12 shrink-0" aria-hidden />
            </div>
            <div className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed sm:p-8 sm:text-sm">
              <pre className="min-w-0 whitespace-pre-wrap break-words text-zinc-500 sm:whitespace-pre">
                <code>{codeSnippet}</code>
              </pre>
            </div>
            <div className="flex items-center justify-between border-t border-white/5 bg-orange-400/5 px-8 py-4">
              <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase">
                Installation Complete
              </span>
              <div className="size-2 rounded-full bg-orange-400" aria-hidden />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-[32px] border border-white/5 bg-zinc-900/30 p-8 transition hover:bg-zinc-900/50">
              <div className="mb-6 flex size-10 items-center justify-center rounded-xl bg-orange-400">
                <Terminal className="size-5 text-black" aria-hidden />
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                One line. <br />
                <span className="font-serif text-zinc-400 italic">Infinite scale.</span>
              </h3>
              <p className="text-sm leading-relaxed text-pretty text-zinc-500">
                Our lightweight SDK handles everything from image processing to secure
                payments. Just copy, paste, and start winning.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/5 bg-zinc-900/30 p-8 transition hover:bg-zinc-900/50">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-zinc-800">
                  <Database className="size-4 text-zinc-400" aria-hidden />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  Native CMS Support
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold">Enterprise Ecosystem</h3>
              <p className="text-xs text-pretty text-zinc-500">
                Direct integrations for HubSpot, Salesforce, WordPress, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
