import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Solutions", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "Pricing", href: "#" },
  ],
  company: [
    { label: "Our Story", href: "#" },
    { label: "Media Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="overflow-x-hidden bg-[#0b140b] px-6 pt-8 pb-8 text-white md:px-12">
      <div className="mx-auto max-w-7xl min-w-0">
        

        <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
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
            </div>
            <p className="max-w-[240px] text-sm leading-relaxed text-pretty text-zinc-500">
              Redefining the standard of commerce for trades and services worldwide.
              Professionalism through artificial intelligence.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 transition-colors duration-200 hover:bg-white/5"
                aria-label="Website"
              >
                <Globe className="size-4 text-orange-400/80" aria-hidden />
              </a>
              <a
                href="#"
                className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 transition-colors duration-200 hover:bg-white/5"
                aria-label="Social"
              >
                <Share2 className="size-4 text-orange-400/80" aria-hidden />
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
                  <Link
                    href={link.href}
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
