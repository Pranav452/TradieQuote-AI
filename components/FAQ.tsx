"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";

const faqData = [
  {
    question: "How accurate is the AI quoting?",
    answer:
      "Our AI engine uses proprietary architectural data models calibrated for local labor and material costs. While accuracy exceeds 94% on standard projects, the system is designed to provide high-fidelity estimates that act as a professional baseline for your final review.",
  },
  {
    question: "What happens if the AI gives a wrong estimate?",
    answer:
      "The AI serves as your primary intake filter. Every quote generated is marked as a 'Smart Estimate' until you manually verify and convert it to a 'Final Quote.' You maintain 100% legal control over the pricing sent to your clients.",
  },
  {
    question: "Can I control the pricing?",
    answer:
      "Absolutely. You can define your own labor rates, material markups, and minimum call-out fees in the dashboard. The AI dynamically applies your business logic to every calculation it performs.",
  },
  {
    question: "Which trades are supported?",
    answer:
      "TradieQuote AI currently supports Electrical, Plumbing, HVAC, General Carpentry, Painting, and Landscaping. We are constantly expanding our data models to include specialized masonry and roofing services.",
  },
  {
    question: "How do my customers experience this?",
    answer:
      "Customers visit your website, click an 'Instant Estimate' button, and answer a few simple questions. They receive a professional PDF estimate within seconds, while you receive a high-intent lead with all the project data attached.",
  },
  {
    question: "Does this replace phone calls entirely?",
    answer:
      "It replaces the *wasteful* phone calls. Instead of spending hours quoting low-budget tire-kickers, you only jump on calls with clients who have already seen your pricing ballpark and are ready to book.",
  },
  {
    question: "How does it integrate with my existing site?",
    answer:
      "It's as simple as adding a single line of code. We provide a clean, customizable widget that works with WordPress, Wix, Squarespace, and custom-built sites. No technical degree required.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  reducedMotion: boolean;
  panelId: string;
  buttonId: string;
}

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  reducedMotion,
  panelId,
  buttonId,
}: FAQItemProps) {
  const contentTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] as const };

  const chevronTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeInOut" as const };

  return (
    <div
      className={`rounded-3xl border border-white/5 transition-colors duration-200 ${
        isOpen ? "border-white/10 bg-white/[0.03]" : "bg-transparent"
      }`}
    >
      <button
        id={buttonId}
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full min-w-0 items-center justify-between gap-3 p-6 text-left outline-none md:p-8"
      >
        <span className="min-w-0 flex-1 text-pretty text-lg font-bold text-zinc-100 md:text-xl">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={chevronTransition}
          className="ml-4 shrink-0 text-orange-400"
          aria-hidden
        >
          <ChevronDown className="size-6" />
        </motion.div>
      </button>

      {reducedMotion ? (
        isOpen && (
          <div id={panelId} role="region" aria-labelledby={buttonId}>
            <div className="px-6 pb-8 md:px-8">
              <div className="mb-6 h-px w-full bg-white/5" />
              <p className="max-w-3xl leading-relaxed text-pretty text-zinc-500">
                {answer}
              </p>
            </div>
          </div>
        )
      ) : (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={contentTransition}
              style={{ overflow: "hidden" }}
            >
              <div className="px-6 pb-8 md:px-8">
                <div className="mb-6 h-px w-full bg-white/5" />
                <p className="max-w-3xl leading-relaxed text-pretty text-zinc-500">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reducedMotion = useReducedMotion() ?? false;
  const baseId = useId();

  return (
    <section className="overflow-x-hidden bg-[#0b140b] px-6 py-8 text-white md:px-12">
      <div className="mx-auto max-w-4xl min-w-0">
        <div className="mb-8 text-center">
          <div className="mb-6 inline-block rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-1">
            <span className="text-[10px] font-bold tracking-[0.2em] text-orange-400 uppercase">
              Support Center
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Frequently Asked <br /> Questions
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-pretty text-zinc-500">
            Everything you need to know about integrating AI-powered quoting into your
            trade business workflow.
          </p>
        </div>

        <div className="mb-10 flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              reducedMotion={reducedMotion}
              buttonId={`${baseId}-faq-${index}-btn`}
              panelId={`${baseId}-faq-${index}-panel`}
            />
          ))}
        </div>

        <div className="rounded-[40px] border border-white/5 bg-white/5 p-8 text-center md:p-10">
          <h3 className="mb-4 text-3xl font-bold">Still have questions?</h3>
          <p className="mb-10 text-pretty text-zinc-500">
            Our support team is available 24/7 to help you optimize your quoting
            process.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="mailto:support@tradiesquoteai.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-400 px-10 py-4 font-bold text-black transition-colors hover:bg-orange-500 sm:w-auto"
            >
              <Mail className="size-5 shrink-0" aria-hidden />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
