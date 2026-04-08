"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";

export function HeroContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      notes: String(data.get("notes") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(json?.error || "Failed to send. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Failed to send.");
    }
  }

  return (
    <form
      className="mt-6 space-y-4"
      aria-label="Request a TradieQuote demo"
      onSubmit={onSubmit}
    >
      <div className="space-y-1.5">
        <label
          htmlFor="hero-name"
          className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-300"
        >
          Name
        </label>
        <input
          id="hero-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="block w-full rounded-2xl border border-white/15 bg-black/60 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
          placeholder="Jane Smith"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="hero-email"
          className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-300"
        >
          Email
        </label>
        <input
          id="hero-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="block w-full rounded-2xl border border-white/15 bg-black/60 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
          placeholder="you@company.com"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="hero-phone"
          className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-300"
        >
          Phone
        </label>
        <input
          id="hero-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="block w-full rounded-2xl border border-white/15 bg-black/60 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
          placeholder="Mobile number"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="hero-notes"
          className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-300"
        >
          Job volume &amp; services
        </label>
        <textarea
          id="hero-notes"
          name="notes"
          rows={3}
          className="block w-full resize-none rounded-2xl border border-white/15 bg-black/60 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
          placeholder="e.g. 20–30 jobs/month, plumbing + gas fitting"
        />
      </div>

      <input
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        name="company"
        aria-hidden
      />

      <div className="pt-2">
        <Button
          type="submit"
          disabled={state === "submitting"}
          className="w-full bg-orange-400 text-black hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "submitting" ? "Sending..." : "Request contact"}
        </Button>

        {state === "success" ? (
          <p className="mt-3 text-center text-sm text-pretty text-white/80">
            Thanks. We&apos;ll reach out shortly.
          </p>
        ) : error ? (
          <p className="mt-3 text-center text-sm text-pretty text-red-200">
            {error}
          </p>
        ) : (
          <p className="mt-2 text-center text-[10px] font-medium tracking-[0.16em] text-zinc-400 uppercase">
            No spam. Just one short call.
          </p>
        )}
      </div>
    </form>
  );
}

