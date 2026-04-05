import Link from "next/link";
import { Globe, Share2 } from "lucide-react";

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
    <footer className="bg-[#0b140b] px-6 pt-8 pb-8 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        

        <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-24">
          <div className="space-y-8">
            <div className="text-2xl font-bold tracking-tight">
              TradieQuote<span className="text-orange-400">AI</span>
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
              Newsletter
            </h4>
            <p className="mb-6 text-sm leading-relaxed text-pretty text-zinc-500">
              Join 2,500+ professionals receiving monthly industry insights.
            </p>
            <div className="relative flex items-center">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Work email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Work email address"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-24 pl-5 text-sm transition-colors focus:border-orange-400/50 focus:outline-none md:pr-28"
              />
              <button
                type="button"
                className="absolute right-2 rounded-lg bg-orange-400 px-4 py-2 text-[10px] font-bold tracking-widest text-black uppercase transition-colors duration-200 hover:bg-orange-500"
              >
                Join
              </button>
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
