"use client";

import { Button } from "@/components/ui/Button";
import { useSmoothScroll } from "@/components/ScrollContext";
import { ZCAL_DEMO_URL } from "@/lib/site";

export function HeroCtas() {
  const lenis = useSmoothScroll();

  function scrollToSolution(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const target = document.getElementById("solution");
    if (!target) {
      return;
    }
    if (lenis) {
      lenis.scrollTo(target, { offset: -96 });
    } else {
      const rect = target.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + rect.top - 96,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button href={ZCAL_DEMO_URL} variant="primary">
        Get Demo
      </Button>
      <Button type="button" variant="outline" onClick={scrollToSolution}>
        See It In Action
      </Button>
    </div>
  );
}
