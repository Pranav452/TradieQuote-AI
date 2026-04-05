"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#", label: "Product" },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
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
  return (
    <nav className="absolute top-0 z-50 flex w-full min-w-0 max-w-full items-center justify-between gap-4 px-6 py-6 md:px-12">
      <div className="min-w-0 truncate text-xl font-bold tracking-tight text-white">
        TradieQuote AI
      </div>

      <div className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
        {navLinks.map(({ href, label }) => (
          <Link key={label} href={href} className="transition hover:text-white">
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
