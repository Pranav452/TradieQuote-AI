import Image from "next/image";
import { Button } from "@/components/ui/Button";

const steps: {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** Lighter overlay so light artwork (e.g. neural graphic) stays visible */
  overlaySoft?: boolean;
}[] = [
  {
    number: "01.",
    title: "Neural Analysis",
    description:
      "Proprietary vision models identify materials, measurements, and difficulty levels from customer photos.",
    imageSrc: "/1.avif",
    imageAlt: "Abstract neural network node and connection visualization",
    overlaySoft: true,
  },
  {
    number: "02.",
    title: "Dynamic Engine",
    description:
      "Quotes are generated instantly based on your custom rate cards and live market material costs.",
    imageSrc:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Professional reviewing invoices, rate sheets, and financial documents",
  },
  {
    number: "03.",
    title: "Smart Booking",
    description:
      "The quote is sent with a direct calendar link, allowing customers to confirm and pay the deposit instantly.",
    imageSrc:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Smartphone showing a messaging app with a prominent green action button",
  },
];

export function ElevatedWorkflow() {
  return (
    <section className="overflow-x-hidden bg-[#0b140b] px-6 py-8 text-white md:px-12">
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
              Process
            </span>
            <h2 className="font-bold text-5xl leading-tight text-balance italic md:text-7xl">
              Elevated Workflow
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-pretty text-zinc-500">
            We&apos;ve distilled the complex quoting process into three frictionless,
            AI-driven steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map(
            ({ number, title, description, imageSrc, imageAlt, overlaySoft }) => (
            <div key={number} className="group">
              <div className="relative mb-8 aspect-square overflow-hidden rounded-[40px] border border-white/5 transition-colors group-hover:border-white/20">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={
                    overlaySoft
                      ? "object-cover object-center"
                      : "object-cover [filter:grayscale(0.15)]"
                  }
                />
                <div
                  className={
                    overlaySoft
                      ? "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b140b]/55 via-[#0b140b]/10 to-transparent"
                      : "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b140b]/80 via-transparent to-transparent opacity-90"
                  }
                  aria-hidden
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">
                <span className="mr-2 font-mono text-sm text-zinc-500">{number}</span>
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-pretty text-zinc-500">
                {description}
              </p>
            </div>
            ),
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <Button className="bg-orange-400 text-black hover:bg-orange-500">
            Get Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
