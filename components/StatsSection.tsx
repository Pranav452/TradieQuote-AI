export function StatsSection() {
  return (
    <section className="overflow-x-hidden bg-white px-6 py-8 md:px-12">
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="group flex min-h-[450px] min-w-0 flex-col justify-between rounded-[48px] bg-zinc-50 p-8 transition-all hover:bg-white hover:shadow-2xl hover:shadow-zinc-200 sm:p-12 md:p-16">
            <div className="min-w-0">
              <div className="mb-8 text-5xl font-bold tracking-tighter text-zinc-400 tabular-nums transition-colors group-hover:text-zinc-900 sm:mb-12 sm:text-7xl md:text-8xl lg:text-9xl">
                $100M+
              </div>
              <h3 className="mb-4 text-3xl font-bold text-zinc-900">
                Unrivaled Precision
              </h3>
              <p className="max-w-sm leading-relaxed text-pretty text-zinc-500">
                Powering over $100M in monthly quotes with a 98.4% variance accuracy
                against manual estimations.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-orange-200" aria-hidden />
              <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase">
                Confidence Score
              </span>
            </div>
          </div>

          <div className="group flex min-h-[450px] min-w-0 flex-col justify-between rounded-[48px] bg-[#0b140b] p-8 sm:p-12 md:p-16">
            <div className="min-w-0">
              <div className="mb-8 text-5xl font-bold tracking-tighter text-zinc-800 tabular-nums transition-colors group-hover:text-white sm:mb-12 sm:text-7xl md:text-8xl lg:text-9xl">
                90x
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white">Velocity First</h3>
              <p className="max-w-sm leading-relaxed text-pretty text-zinc-400">
                Response times reduced from days to seconds. Capturing the customer in
                the peak moment of intent.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-orange-400/30" aria-hidden />
              <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase">
                Performance Delta
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
