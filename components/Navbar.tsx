"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useSmoothScroll } from "@/components/ScrollContext";

const navLinks = [
  { href: "#solution", label: "Solution" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#integration", label: "Integration" },
];

function MenuIcon() {
  return (
    <span className="flex h-5 w-6 flex-col justify-center gap-[5px]" aria-hidden>
      <span className="h-0.5 w-full rounded-full bg-current" />
      <span className="h-0.5 w-full rounded-full bg-current" />
      <span className="h-0.5 w-full rounded-full bg-current" />
    </span>
  );
}

export function Navbar() {
  const lenis = useSmoothScroll();

  function handleNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (!href.startsWith("#")) {
      return;
    }

    const targetId = href.slice(1);
    const target = targetId ? document.getElementById(targetId) : document.body;
    if (!target) {
      return;
    }

    event.preventDefault();

    if (lenis) {
      lenis.scrollTo(target, { offset: -96 });
    } else {
      const rect = target.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top - 96;
      window.scrollTo({ top: absoluteTop, behavior: "smooth" });
    }
  }

  return (
    <nav className="fixed top-0 z-50 flex w-full min-w-0 max-w-full items-center justify-between gap-4 border-b border-white/10 bg-zinc-950/70 px-6 py-4 text-white backdrop-blur-md md:px-12">
      <Link
        href="#"
        className="flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="Go to top"
      >
        <Image src="/logo.png" alt="TradieQuote AI logo" width={36} height={36} className="rounded-full" />
        <div className="min-w-0 truncate text-base font-bold tracking-tight sm:text-lg">
          Tradie<span className="text-orange-400">Quote</span> AI
        </div>
      </Link>

      <div className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
        {navLinks.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            onClick={(event) => handleNavClick(event, href)}
            className="transition hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <Button className="hidden !px-6 !py-2 text-sm md:inline-flex">Get Demo</Button>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              sideOffset={10}
              className="z-[100] min-w-[13.5rem] rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-2xl backdrop-blur-xl outline-none"
            >
              {navLinks.map(({ href, label }) => (
                <DropdownMenu.Item key={label} asChild>
                  <Link
                    href={href}
                    onClick={(event) => handleNavClick(event, href)}
                    className="block cursor-pointer rounded-xl px-4 py-3 text-sm font-medium text-white/90 outline-none data-[highlighted]:bg-white/10 data-[highlighted]:text-white"
                  >
                    {label}
                  </Link>
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Separator className="my-1 h-px bg-white/10" />
              <DropdownMenu.Item asChild>
                <Button className="!mt-0.5 w-full !px-4 !py-3 text-sm">Get Demo</Button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
}
