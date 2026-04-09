'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const EMAIL = 'winkler.b@northeastern.edu';

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center gap-2 text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
      aria-label="Copy email address"
    >
      <span className="text-sm">{EMAIL}</span>
      {copied ? (
        <Check className="h-4 w-4 text-blue-500" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
