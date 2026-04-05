import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Calculator,
  Calendar,
  Camera,
  CheckCircle2,
  Globe,
} from "lucide-react";

const steps: { Icon: LucideIcon; label: string; text: string }[] = [
  { Icon: Globe, label: "STEP 01", text: "Customer lands on website" },
  { Icon: Camera, label: "STEP 02", text: "Describes the problem" },
  { Icon: Calculator, label: "STEP 03", text: "Gets instant estimate" },
  { Icon: Calendar, label: "STEP 04", text: "Requests the job" },
];

const benefits = [
  {
    title: "No back-and-forth",
    desc: "Eliminate the endless phone tag and email chains.",
  },
  {
    title: "No wasted visits",
    desc: "Stop driving across town for tire-kickers.",
  },
  {
    title: "Price transparency",
    desc: "Customers see price upfront, filtering out bad leads.",
  },
  {
    title: "Serious leads only",
    desc: "Your calendar fills with people ready to pay.",
  },
];

export function ProcessSection() {
  return (
    <section className="overflow-x-hidden bg-[#0b140b] px-6 py-8 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="mx-auto mb-6 max-w-4xl font-serif text-5xl leading-tight text-balance italic md:text-7xl">
            Let Your Website Do The{" "}
            <br className="hidden md:block" />
            Quoting For You
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-pretty text-zinc-400">
            Stop chasing quotes. Let customers qualify themselves before you even
            speak to them.
          </p>
        </div>

        <div className="relative mb-32">
          <div className="absolute top-8 left-0 hidden h-px w-full bg-zinc-800 md:block" />

          <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
            {steps.map(({ Icon, label, text }) => (
              <div
                key={label}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
                  <Icon className="size-5 text-zinc-300" aria-hidden />
                </div>
                <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400/80">
                  {label}
                </span>
                <p className="text-xs font-medium text-pretty text-zinc-100 sm:text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative min-w-0 pb-28 md:pb-32">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                alt="Worker scanning site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover [filter:grayscale(0.2)]"
              />
              <div className="absolute inset-0 bg-black/10" aria-hidden />
            </div>

            <div className="animate-process-card-in absolute -bottom-5 left-1/2 z-20 w-[min(100%,280px)] max-w-[calc(100vw-3rem)] -translate-x-1/2 rounded-3xl bg-white p-6 shadow-2xl md:left-auto md:right-10 md:w-[320px] md:translate-x-0">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider text-orange-500 uppercase">
                  AI Analysis Active
                </span>
                <div className="flex gap-1" aria-hidden>
                  <div className="size-1 rounded-full bg-zinc-300" />
                  <div className="size-1 rounded-full bg-zinc-300" />
                  <div className="size-1 rounded-full bg-zinc-300" />
                </div>
              </div>
              <div className="relative mb-8 h-1 overflow-hidden rounded-full bg-zinc-100">
                <div className="absolute top-0 left-0 h-full w-2/3 rounded-full bg-orange-400" />
              </div>

              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5 text-center">
                <span className="mb-2 block text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                  Quote Generated
                </span>
                <div className="mb-6 text-3xl font-bold text-zinc-900">
                  $250 – $300
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl bg-[#1a241a] py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Book Job Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col">
            <h3 className="mb-6 font-serif text-3xl leading-tight text-balance text-orange-400/90 italic md:text-4xl">
              &ldquo;You only deal with people who are ready to move forward.&rdquo;
            </h3>
            <p className="mb-12 text-zinc-500">
              Built for tradies who want more jobs without the hassle
            </p>

            <div className="mb-12 h-px w-full bg-zinc-800" />

            <div className="mb-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-orange-400"
                    aria-hidden
                  />
                  <div>
                    <h4 className="mb-1 font-bold text-zinc-100">{benefit.title}</h4>
                    <p className="text-xs leading-relaxed text-pretty text-zinc-500">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="mb-10 text-2xl font-medium text-balance md:text-3xl">
              Stop wasting time and{" "}
              <span className="text-orange-400 underline decoration-orange-400/30 underline-offset-8">
                start getting paid for it
              </span>
            </h4>

            <button
              type="button"
              className="group flex w-full items-center justify-between gap-8 rounded-full bg-orange-400 px-8 py-5 font-bold text-black transition-all hover:bg-orange-500 sm:w-fit"
            >
              See How It Works in 30 Seconds
              <ArrowRight
                className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                aria-hidden
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
