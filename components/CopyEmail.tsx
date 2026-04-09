"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const EMAIL = "winkler.b@northeastern.edu";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
    >
      {copied ? (
        <Check className="h-6 w-6 text-blue-500" aria-hidden="true" />
      ) : (
        <Copy className="h-6 w-6" aria-hidden="true" />
      )}
      <span className="text-sm">{copied ? "Copied!" : EMAIL}</span>
    </button>
  );
}
