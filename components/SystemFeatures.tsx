import Image from "next/image";
import {
  ClipboardList,
  FileText,
  LayoutGrid,
  Rocket,
  Zap,
} from "lucide-react";
import { DraftQuoteTyping } from "@/components/DraftQuoteTyping";
import { Button } from "@/components/ui/Button";

export function SystemFeatures() {
  return (
    <section className="overflow-x-hidden bg-[#0b140b] px-6 py-8 text-white md:px-12">
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-3 inline-block text-[10px] font-bold tracking-[0.2em] text-orange-400 uppercase">
              Workspace
            </span>
            <h2 className="text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              Everything you need to{" "}
              <span className="font-serif font-normal text-zinc-400 italic">
                manage jobs
              </span>{" "}
              in one place
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-pretty text-zinc-500 lg:text-base">
            Not just quotes, a single surface for enquiries, documents, and field
            follow-through.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex min-h-[360px] flex-col justify-between rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] md:p-10 lg:col-span-7">
            <div>
              <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-orange-400/15 ring-1 ring-orange-400/25">
                <ClipboardList className="size-5 text-orange-400" aria-hidden />
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                Job details
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-pretty text-zinc-500">
                Problem notes, contact, site photos, and live estimate status in one
                row, built for glancing from the van.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4 md:p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/15">
                    <Image
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=200&auto=format&fit=crop"
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-white">
                      Faulty circuit repair
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      Marcus Thompson · today 9:14
                    </div>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-sm font-semibold text-orange-400 tabular-nums">
                    $450.00
                  </div>
                  <div className="text-[10px] font-medium text-zinc-500">
                    estimate
                  </div>
                </div>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[72%] rounded-full bg-orange-400" />
              </div>
            </div>
          </div>

          <div className="flex min-h-[360px] flex-col justify-between rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] md:p-10 lg:col-span-5">
            <div>
              <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-orange-400/15 ring-1 ring-orange-400/25">
                <FileText className="size-5 text-orange-400" aria-hidden />
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                Quotes &amp; invoices
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-pretty text-zinc-500">
                Generate professional documents instantly. Edit pricing on the fly and
                send straight to your customer&apos;s inbox.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-orange-400/90 uppercase">
                  Draft quote
                </span>
                <div
                  className="flex size-4 items-center justify-center rounded-full border border-orange-400/50"
                  aria-hidden
                >
                  <div className="size-1.5 rounded-full bg-orange-400" />
                </div>
              </div>
              <DraftQuoteTyping />
            </div>
          </div>

          <div className="min-h-[320px] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 md:p-10 lg:col-span-6">
            <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-orange-400/15 ring-1 ring-orange-400/25">
              <LayoutGrid className="size-5 text-orange-400" aria-hidden />
            </div>
            <h3 className="mb-3 text-2xl font-semibold tracking-tight">Dashboard</h3>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-pretty text-zinc-500">
              Enquiries, active jobs, and closed work, at a glance, without digging
              through threads.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-orange-400" aria-hidden />
                  <span className="text-xs font-medium text-zinc-300">
                    Ongoing jobs
                  </span>
                </div>
                <span className="text-sm font-semibold tabular-nums">12</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-zinc-500" aria-hidden />
                  <span className="text-xs font-medium text-zinc-300">
                    New enquiries
                  </span>
                </div>
                <span className="text-sm font-semibold tabular-nums">5</span>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[320px] min-w-0 flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950/60 p-8 md:p-10 lg:col-span-6">
            <div>
              <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-orange-400/15 ring-1 ring-orange-400/25">
                <Zap className="size-5 text-orange-400" aria-hidden />
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                Speed &amp; mobility
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-pretty text-zinc-500">
                Built for the field, reply before the next tradie opens their laptop.
              </p>
            </div>
            <div className="relative mx-auto mt-6 h-[13.5rem] w-[11rem] max-w-full rounded-t-[1.75rem] border-x-[7px] border-t-[7px] border-zinc-700 bg-zinc-950 sm:ml-auto sm:mr-0">
              <div
                className="absolute top-3 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-zinc-700"
                aria-hidden
              />
              <div className="mx-3 mt-10 flex aspect-square items-center justify-center rounded-2xl border border-orange-400/25 bg-orange-400/10 p-4">
                <Rocket className="size-7 text-orange-400" aria-hidden />
              </div>
              <div className="mx-3 mt-3 h-2 w-2/3 rounded-full bg-zinc-800" aria-hidden />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-center sm:gap-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-orange-400/80 uppercase">
            Complete lifecycle
          </span>
          <p className="max-w-xl text-sm text-pretty text-zinc-500">
            From first enquiry to final payment, one system, one place.
          </p>
          <Button className="bg-orange-400 text-black hover:bg-orange-500">
            Get Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
