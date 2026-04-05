import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  CheckCircle2,
  Coffee,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const comparison: {
  label: string;
  bad: string;
  good: string;
  Icon: LucideIcon;
}[] = [
  {
    label: "Lead Quality",
    bad: "Junk enquiries & tire-kickers",
    good: "Qualified leads",
    Icon: Users,
  },
  {
    label: "Client Intent",
    bad: "Vague requests, price hunting",
    good: "Serious customers",
    Icon: Star,
  },
  {
    label: "Field Outcome",
    bad: "Unpaid visits, wasted fuel",
    good: "Paid jobs",
    Icon: TrendingUp,
  },
  {
    label: "Weekend Time",
    bad: "Spent chasing paperwork",
    good: "Time for family",
    Icon: Coffee,
  },
];

export function ROISection() {
  return (
    <section className="bg-[#0b140b] px-6 py-8 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-5xl leading-tight font-bold text-balance md:text-7xl">
                One Extra Job <br />
                <span className="text-orange-400">Pays For This</span>
              </h2>
              <p className="max-w-md text-lg text-pretty text-zinc-400">
                You don&apos;t need more leads. You just need better ones. Stop the
                drain on your most valuable asset: your time.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-zinc-900/50 p-8">
              <TrendingUp
                className="absolute top-6 right-6 size-8 text-orange-400/20 transition-colors group-hover:text-orange-400"
                aria-hidden
              />
              <span className="mb-4 block text-[10px] font-bold tracking-widest text-orange-400 uppercase">
                Revenue Potential
              </span>
              <h3 className="mb-2 text-3xl font-bold">
                Close 1 extra job per month = $250–$500+
              </h3>
              <p className="text-sm text-zinc-500 italic">
                Pure profit reclaimed from efficient quoting.
              </p>
            </div>

            <div className="relative rounded-[32px] border border-red-500/10 bg-zinc-900/50 p-8">
              <div className="mb-6 flex items-center gap-2">
                <AlertTriangle className="size-4 shrink-0 text-red-500" aria-hidden />
                <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase">
                  The &ldquo;Time-Wasters&rdquo; Tax
                </span>
              </div>
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 p-4">
                  <span className="mb-1 block text-[10px] text-zinc-500 uppercase">
                    Frequency
                  </span>
                  <span className="font-bold">3 bad visits/week</span>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <span className="mb-1 block text-[10px] text-zinc-500 uppercase">
                    Impact
                  </span>
                  <span className="font-bold">2 hours each</span>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="mb-1 block text-xs text-zinc-500">
                    Monthly Leakage
                  </span>
                  <div className="text-3xl font-bold tracking-tight text-red-500 tabular-nums">
                    24 × $80 = $1,920/mo lost
                  </div>
                </div>
                <span className="rounded-md bg-red-500/20 px-2 py-1 text-[10px] font-bold tracking-tighter text-red-500 uppercase">
                  Danger Zone
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-orange-400/20 bg-zinc-800/40 p-8 sm:flex-row sm:items-center">
              <div>
                <span className="mb-1 block text-[10px] font-bold tracking-widest text-orange-400 uppercase">
                  The Investment
                </span>
                <h3 className="text-2xl font-bold text-zinc-100">
                  TradieQuote AI — $89/month
                </h3>
              </div>
              <CheckCircle2 className="size-8 shrink-0 text-orange-400" aria-hidden />
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[40px] border border-white/5 bg-zinc-900/30">
              <div className="grid grid-cols-3 border-b border-white/5 bg-zinc-900/50 p-6 md:p-8">
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                  The Workflow
                </span>
                <span className="text-xs font-bold tracking-widest text-zinc-600 uppercase">
                  Without Tool
                </span>
                <span className="text-right text-xs font-bold tracking-widest text-orange-400 uppercase">
                  With TradieQuote AI
                </span>
              </div>
              <div className="space-y-4 p-4 md:p-8">
                {comparison.map(({ Icon, label, bad, good }) => (
                  <div
                    key={label}
                    className="grid grid-cols-3 items-center gap-2 border-b border-white/5 py-4 last:border-0 md:gap-4"
                  >
                    <div className="flex min-w-0 items-center gap-2 md:gap-3">
                      <Icon className="size-4 shrink-0 text-zinc-500" aria-hidden />
                      <span className="text-xs font-medium text-zinc-300 md:text-sm">
                        {label}
                      </span>
                    </div>
                    <span className="text-[10px] leading-snug text-zinc-600 md:text-xs">
                      {bad}
                    </span>
                    <div className="flex items-center justify-end gap-1.5 text-right md:gap-2">
                      <span className="text-xs font-bold text-orange-400 md:text-sm">
                        {good}
                      </span>
                      <CheckCircle2
                        className="size-3 shrink-0 text-orange-400"
                        aria-hidden
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[40px] bg-zinc-100 p-12 text-center">
              <div className="relative z-10">
                <h3 className="mb-4 text-3xl font-bold text-balance text-zinc-900 md:text-4xl">
                  Stop losing $1,000+ a month chasing bad leads
                </h3>
                <p className="mx-auto mb-10 max-w-sm text-pretty text-zinc-500">
                  Put an architect&apos;s precision into your business workflow today.
                </p>
                <button
                  type="button"
                  className="mb-6 rounded-full bg-orange-400 px-10 py-5 font-bold text-black shadow-xl shadow-orange-400/20 transition-colors hover:bg-orange-500"
                >
                  Start Getting Better Jobs
                </button>
                <p className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                  No long-term contracts. Cancel anytime.
                </p>
              </div>
              <div
                className="pointer-events-none absolute -right-20 -bottom-20 size-64 rounded-full bg-orange-400/10 blur-3xl"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
