import Image from "next/image";
import { AlertCircle, XCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ZCAL_DEMO_URL } from "@/lib/site";

const steps = [
  "You drive out",
  "Inspect the job",
  "Work out the quote",
  "Send it... and hear nothing back",
];

const painPoints = [
  "Customers ask price then disappear",
  "Time wasted on non-serious leads",
  "Website not generating real jobs",
];

export function ProblemSection() {
  return (
    <section className="overflow-x-hidden bg-[#0b140b] px-6 py-8 text-white md:px-12">
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div className="min-w-0 space-y-12">
            <div>
              <h2 className="mb-8 font-bold text-4xl leading-[1.1] text-balance text-white italic sm:text-5xl md:text-6xl lg:text-7xl">
                Still Wasting Hours <br />
                Quoting Jobs That Go <br />
                Nowhere?
              </h2>
              <p className="max-w-md text-lg text-pretty text-zinc-400">
                Most tradies lose time every week chasing quotes that never turn into
                real work.
              </p>
            </div>

            <div className="space-y-0 pl-2">
              {steps.map((step, i) => (
                <div key={step} className="relative flex gap-6">
                  {i !== steps.length - 1 && (
                    <div
                      className="absolute top-8 left-[11px] h-full w-px bg-white/10"
                      aria-hidden
                    />
                  )}

                  <div className="relative flex size-6 shrink-0 items-center justify-center">
                    <div className="flex size-5 items-center justify-center rounded-full border border-white/20 bg-white/5">
                      <div className="size-1.5 rounded-full bg-zinc-400" />
                    </div>
                  </div>

                  <span
                    className={`font-medium text-zinc-300 ${
                      i === steps.length - 1 ? "pb-0" : "pb-8"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <AlertCircle
                  className="size-5 shrink-0 text-orange-500"
                  aria-hidden
                />
                <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                  Customers contact 3-5 tradies
                </span>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <Zap className="size-5 shrink-0 text-orange-400" aria-hidden />
                <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                  First quote often wins
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/25 p-10 text-white shadow-2xl">
              <div className="relative z-10">
                <h3 className="mb-2 font-bold text-3xl italic text-balance">
                  That&apos;s 2-3 hours gone. No money made.
                </h3>
                <p className="text-sm text-pretty text-zinc-400">
                  If you take hours... someone else takes the job in minutes
                </p>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 size-32 rounded-full bg-orange-400/5 blur-3xl"
                aria-hidden
              />
            </div>

            <div className="space-y-4">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-4 text-sm text-pretty text-zinc-300"
                >
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-orange-400/15">
                    <XCircle className="size-3 text-orange-400" aria-hidden />
                  </div>
                  {point}
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-sm text-zinc-500">
                Most of your quoting time never turns into paid work
              </p>
              <div className="mt-5">
                <Button href={ZCAL_DEMO_URL} className="bg-orange-400 text-black hover:bg-orange-500">
                  Get Demo
                </Button>
              </div>
            </div>
          </div>

          <div className="relative min-w-0 lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[60px] border border-white/10 shadow-inner">
              <Image
                src="/Exhausted Tradesman in Van.png"
                alt="Exhausted tradesman in van"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
