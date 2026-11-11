"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      // INTEGRATION PLACEHOLDER: /api/subscribe validates the address but does
      // not store it yet. Connect an email service in app/api/subscribe/route.ts.
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage("Thank you. We'll be in touch.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email address"
          aria-describedby="subscribe-help"
          className="h-12 flex-1 rounded-full border border-white/25 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 backdrop-blur transition focus:border-white/60 focus:bg-white/15 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-canvas px-7 text-sm font-medium text-forest transition duration-300 hover:bg-mist disabled:opacity-70"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : null}
          Notify Me
          {status !== "loading" && (
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          )}
        </button>
      </form>

      <p
        id="subscribe-help"
        className="mt-4 text-sm text-white/70"
      >
        Be the first to discover what&apos;s growing.
      </p>

      <div aria-live="polite" className="mt-3 min-h-[1.5rem] text-sm">
        {status === "success" && (
          <p className="inline-flex items-center gap-2 text-mist">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            {message}
          </p>
        )}
        {status === "error" && <p className="text-red-200">{message}</p>}
      </div>
    </div>
  );
}
