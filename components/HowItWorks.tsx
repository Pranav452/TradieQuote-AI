import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  Clock,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Visual Recognition",
    description:
      "Advanced computer vision identifies parts and labor requirements from simple job site photos.",
  },
  {
    number: "02",
    title: "Instant Pricing",
    description:
      "Dynamic pricing models synced with your current rates and local material costs.",
  },
  {
    number: "03",
    title: "Auto-Booking",
    description:
      "Once the quote is accepted, customers book directly into your digital calendar.",
  },
];

const features: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Zap,
    title: "Faster response = higher conversion",
    description:
      "Respond to inquiries in seconds, not days. Speed is the #1 factor in winning new contracts in the trades.",
  },
  {
    Icon: MapPin,
    title: "Reduce unnecessary site visits",
    description:
      "Save hours of driving and fuel costs by quoting remotely. Focus your time on actual billable work.",
  },
  {
    Icon: Clock,
    title: "Capture leads 24/7",
    description:
      "Your business never sleeps. AI handles quoting and lead capture while you're on the tools or asleep.",
  },
  {
    Icon: ShieldCheck,
    title: "Pre-qualify customers",
    description:
      "Stop chasing tire-kickers. Ensure every lead you talk to is serious and understands the price range.",
  },
  {
    Icon: Award,
    title: "Look more professional",
    description:
      "Instant, high-tech quotes build immediate trust and position you as a modern, premium service provider.",
  },
];

export function HowItWorks() {
  return (
    <section className="overflow-x-hidden bg-white px-6 py-8 text-zinc-900 md:px-12">
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="mb-12 grid grid-cols-1 items-start gap-10 lg:mb-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase">
                Workflow
              </span>
            </div>
            <h2 className="font-serif text-4xl leading-[1.1] text-balance text-zinc-900 italic md:text-5xl lg:text-6xl">
              How it works
            </h2>
            <div className="mt-6 hidden h-px w-16 bg-zinc-900/15 lg:block" aria-hidden />
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-lg leading-relaxed text-pretty text-zinc-600 md:text-xl">
              TradieQuote turns your old quoting grind into a single, smooth flow—from
              first photo to booked job—without extra admin.
            </p>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mb-14">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col rounded-[2rem] border border-zinc-200 bg-zinc-50/80 p-8 transition-colors hover:border-zinc-300 hover:bg-white"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm">
                <span className="font-mono text-xs font-bold text-orange-600">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-pretty text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-10 text-center lg:mb-12">
          <h2 className="font-serif text-4xl text-balance text-zinc-900 italic md:text-5xl lg:text-6xl">
            Built to help you win more jobs
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md md:p-9"
            >
              <div className="mb-6 flex size-10 items-center justify-center rounded-xl border border-orange-100 bg-orange-50">
                <Icon className="size-5 text-orange-600" aria-hidden />
              </div>
              <h3 className="mb-3 text-lg font-semibold leading-snug text-balance text-zinc-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-pretty text-zinc-600">
                {description}
              </p>
            </div>
          ))}

          <div className="flex flex-col justify-center rounded-[2rem] border border-dashed border-orange-300 bg-orange-50/70 p-8 md:p-9">
            <h3 className="mb-3 text-lg font-semibold text-orange-700">
              Ready to scale your business?
            </h3>
            <button
              type="button"
              className="group flex w-fit items-center gap-2 text-sm font-semibold text-zinc-900"
            >
              Get started today
              <ArrowRight
                className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                aria-hidden
              />
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5">
            <div
              className="size-2 rounded-full bg-orange-500 motion-safe:animate-pulse"
              aria-hidden
            />
            <span className="text-sm font-medium text-pretty text-zinc-600">
              Be the first to quote — every time.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
