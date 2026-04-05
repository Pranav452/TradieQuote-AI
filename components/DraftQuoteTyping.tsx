"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const BODY = `QUOTE TQ-2841 · Draft
─────────────────────
Emergency leak — bathroom
Parts & labor ........ $285.00
Call-out fee .........  $45.00
Total (incl. GST) .... $379.50

→ Ready to send to customer`;

export function DraftQuoteTyping() {
  const reducedMotion = useReducedMotion() ?? false;
  const [text, setText] = useState(reducedMotion ? BODY : "");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (cancelled) return;
      if (i < BODY.length) {
        i += 1;
        setText(BODY.slice(0, i));
        timeoutId = setTimeout(tick, 22);
      } else {
        timeoutId = setTimeout(() => {
          if (cancelled) return;
          i = 0;
          setText("");
          tick();
        }, 2200);
      }
    };

    tick();
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <div
      className="min-h-[11rem] whitespace-pre-wrap rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[10px] leading-relaxed text-zinc-400 md:text-[11px]"
      aria-live="polite"
    >
      <span className="text-zinc-300">{text}</span>
      {!reducedMotion && (
        <span className={showCursor ? "text-orange-400" : "text-transparent"}>
          |
        </span>
      )}
    </div>
  );
}
