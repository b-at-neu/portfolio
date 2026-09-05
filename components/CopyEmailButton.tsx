"use client";

import { Check, Copy, X } from "lucide-react";
import { useRef, useState } from "react";

import { CONTACT_EMAIL } from "@/lib/contact";

const variantClasses = {
  hero: "inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:text-white dark:ring-zinc-700 dark:hover:bg-zinc-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors",
  footer: "inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors",
};

export default function CopyEmailButton({ variant }: { variant: "hero" | "footer" }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = async () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    timeoutRef.current = setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <button type="button" onClick={handleClick} className={variantClasses[variant]}>
      {status === "idle" && <Copy className="h-4 w-4" aria-hidden="true" />}
      {status === "copied" && <Check className="h-4 w-4" aria-hidden="true" />}
      {status === "error" && <X className="h-4 w-4" aria-hidden="true" />}
      <span className="sr-only">Copy email address </span>
      {status === "copied" ? (
        <span className="text-green-600 dark:text-green-400" aria-live="polite">
          Copied!
        </span>
      ) : status === "error" ? (
        <span aria-live="polite">
          <span className="text-red-600 dark:text-red-400">Copy failed</span>{" "}
          <span className="text-xs">{CONTACT_EMAIL}</span>
        </span>
      ) : (
        <span aria-live="polite">{CONTACT_EMAIL}</span>
      )}
    </button>
  );
}
