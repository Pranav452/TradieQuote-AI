import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const freeFeatures = [
  "Up to 20 quotes / month",
  "Standard widget + basic styling",
  "Email support",
  "PDF quote templates",
] as const;

const proFeatures = [
  "Unlimited quotes",
  "Custom branding + domains",
  "Deposits & payments",
  "Dynamic pricing rules",
  "Lead qualification + spam filtering",
  "Priority support",
] as const;

const freeLimits = ["No payments", "No CRM integrations", "No rate-card automation"] as const;

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-28 overflow-x-hidden bg-white px-6 py-8 text-zinc-900 md:px-12"
    >
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="mb-12 grid grid-cols-1 items-start gap-10 lg:mb-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase">
                Pricing
              </span>
            </div>
            <h2 className="font-bold text-4xl leading-[1.1] text-balance text-zinc-900 italic md:text-5xl lg:text-6xl">
              Start free. <br />
              Upgrade when it pays.
            </h2>
            <div className="mt-6 hidden h-px w-16 bg-zinc-900/15 lg:block" aria-hidden />
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-lg leading-relaxed text-pretty text-zinc-600 md:text-xl">
              A free plan to validate fit, and a single paid plan that&apos;s designed
              to pay for itself with one extra job.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col rounded-[2rem] border border-zinc-200 bg-zinc-50/80 p-8 md:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">Free</h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-zinc-600">
                  For testing the widget and your quoting flow.
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-zinc-900 tabular-nums">$0</div>
                <div className="text-xs font-medium text-zinc-500">forever</div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {freeFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-orange-600" aria-hidden />
                  <span className="text-sm text-pretty text-zinc-700">{feature}</span>
                </div>
              ))}
              <div className="pt-2">
                {freeLimits.map((limit) => (
                  <div key={limit} className="mt-3 flex items-start gap-3">
                    <XCircle className="mt-0.5 size-5 shrink-0 text-zinc-400" aria-hidden />
                    <span className="text-sm text-pretty text-zinc-500">{limit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800">
                Start Free
              </Button>
              <p className="mt-3 text-center text-xs text-pretty text-zinc-500">
                No credit card required.
              </p>
            </div>
          </div>

          <div className="relative flex min-w-0 flex-col overflow-hidden rounded-[2rem] border border-orange-200 bg-white p-8 shadow-sm md:p-10">
            <div className="absolute right-6 top-6 inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-orange-700 uppercase">
                Most popular
              </span>
            </div>

            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">Pro</h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-zinc-600">
                  For teams that want instant quotes and booked work.
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-zinc-900 tabular-nums">$89</div>
                <div className="text-xs font-medium text-zinc-500">per month</div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {proFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-orange-600" aria-hidden />
                  <span className="text-sm text-pretty text-zinc-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button className="w-full bg-orange-400 text-black hover:bg-orange-500">
                Get Demo
              </Button>
              <p className="mt-3 text-center text-xs text-pretty text-zinc-500">
                Cancel anytime. No long-term contracts.
              </p>
            </div>

            <div
              className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-orange-400/10 blur-3xl"
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-zinc-200/80" aria-hidden />
      </div>
    </section>
  );
}

