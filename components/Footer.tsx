"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useSmoothScroll } from "@/components/ScrollContext";

const footerLinks = {
  platform: [
    { label: "Solutions", href: "#solution" },
    { label: "Enterprise", href: "#pricing" },
    { label: "Pricing", href: "#pricing" },
  ],
  company: [
    { label: "Our Story", href: "#", scrollTop: true },
    { label: "Media Kit", href: "#" },
    {
      label: "Contact Support",
      href: "mailto:support@tradiesquoteai.com.au",
      external: true,
    },
  ] as const,
};

const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61578628195867";
const INSTAGRAM_URL = "https://www.instagram.com/tradiesquoteai/";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Footer() {
  const lenis = useSmoothScroll();

  function scrollToTop() {
    if (lenis) {
      lenis.scrollTo(0, {});
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleInPageNav(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    scrollTop?: boolean,
  ) {
    if (scrollTop) {
      event.preventDefault();
      scrollToTop();
      return;
    }

    if (!href.startsWith("#")) {
      return;
    }

    const targetId = href.slice(1);
    if (!targetId) {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();

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
    <footer className="overflow-x-hidden bg-[#0b140b] px-6 pt-8 pb-8 text-white md:px-12">
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-24">
          <div className="space-y-8">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex w-fit items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Go to top"
            >
              <Image
                src="/logo.png"
                alt="TradieQuote AI logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-2xl font-bold tracking-tight">
                TradieQuote<span className="text-orange-400"> AI</span>
              </div>
            </Link>
            <p className="max-w-[240px] text-sm leading-relaxed text-pretty text-zinc-500">
              Redefining the standard of commerce for trades and services worldwide.
              Professionalism through artificial intelligence.
            </p>
            <div className="flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 transition-colors duration-200 hover:bg-white/5"
                aria-label="TradieQuote AI on Facebook"
              >
                <FacebookIcon className="size-4 text-orange-400/80" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 transition-colors duration-200 hover:bg-white/5"
                aria-label="TradieQuote AI on Instagram"
              >
                <InstagramIcon className="size-4 text-orange-400/80" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
              Platform
            </h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleInPageNav(e, link.href)}
                    className="font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      className="font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) =>
                        handleInPageNav(
                          e,
                          link.href,
                          "scrollTop" in link ? link.scrollTop : false,
                        )
                      }
                      className="font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div id="footer-contact">
            <h4 className="mb-8 text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+61480044606"
                className="flex items-start gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-orange-400/80" aria-hidden />
                <span className="tabular-nums">+61 480 044 606</span>
              </a>
              <p className="flex items-start gap-3 text-sm leading-relaxed text-pretty text-zinc-500">
                <MapPin className="mt-0.5 size-4 shrink-0 text-orange-400/80" aria-hidden />
                <span>
                  Level 1, 9/13 Bronte Rd, Bondi Junction NSW 2022, Australia
                </span>
              </p>
              <a
                href="mailto:support@tradiesquoteai.com.au"
                className="flex min-w-0 items-start gap-3 break-all text-sm text-orange-400/90 transition-colors hover:text-orange-400"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-orange-400/80" aria-hidden />
                <span>support@tradiesquoteai.com.au</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 md:flex-row">
          <p className="text-center text-[10px] font-bold tracking-widest text-zinc-600 uppercase md:text-left">
            © 2026 TRADIEQUOTE AI. HIGH PERFORMANCE COMMERCE.
          </p>
          <nav
            className="flex flex-wrap justify-center gap-8 text-[10px] font-bold tracking-widest text-zinc-600 uppercase"
            aria-label="Legal"
          >
            <Link
              href="#"
              className="transition-colors duration-200 hover:text-zinc-300"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="transition-colors duration-200 hover:text-zinc-300"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="transition-colors duration-200 hover:text-zinc-300"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
