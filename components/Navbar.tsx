import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="absolute top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12">
      <div className="text-xl font-bold tracking-tight text-white">
        TradieQuote AI
      </div>

      <div className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
        <Link href="#" className="transition hover:text-white">
          Product
        </Link>
        <Link href="#" className="transition hover:text-white">
          Features
        </Link>
        <Link href="#" className="transition hover:text-white">
          Pricing
        </Link>
      </div>

      <Button className="hidden !px-6 !py-2 text-sm md:block">Get Demo</Button>
    </nav>
  );
}
