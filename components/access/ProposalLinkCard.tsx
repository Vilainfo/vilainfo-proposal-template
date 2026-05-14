"use client";

import Link from "next/link";
import { useState } from "react";

type ProposalLinkCardProps = {
  name: string;
  description: string;
  href: string;
  password: string;
};

export function ProposalLinkCard({
  name,
  description,
  href,
  password,
}: ProposalLinkCardProps) {
  const [copied, setCopied] = useState<"link" | "password" | null>(null);

  const handleCopy = async (value: string, kind: "link" | "password") => {
    try {
      const fullValue =
        kind === "link" && typeof window !== "undefined"
          ? new URL(value, window.location.origin).toString()
          : value;
      await navigator.clipboard.writeText(fullValue);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur transition hover:border-cyan-300/40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(400px_200px_at_0%_0%,rgba(34,211,238,0.08),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <header className="space-y-1">
        <h2 className="font-display text-xl text-white">{name}</h2>
        <p className="text-sm leading-relaxed text-[var(--muted-strong)]">
          {description}
        </p>
      </header>

      <dl className="mt-5 space-y-3">
        <div>
          <dt className="text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">
            Senha de acesso
          </dt>
          <dd className="mt-1 flex items-center gap-2">
            <code className="flex-1 truncate rounded-md bg-black/40 px-3 py-2 font-mono text-xs text-white/90">
              {password}
            </code>
            <button
              type="button"
              onClick={() => handleCopy(password, "password")}
              className="rounded-md border border-white/15 px-3 py-2 text-xs text-white/80 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              {copied === "password" ? "Copiado" : "Copiar"}
            </button>
          </dd>
        </div>

        <div>
          <dt className="text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">
            Link da proposta
          </dt>
          <dd className="mt-1 flex items-center gap-2">
            <code className="flex-1 truncate rounded-md bg-black/40 px-3 py-2 font-mono text-xs text-white/90">
              {href}
            </code>
            <button
              type="button"
              onClick={() => handleCopy(href, "link")}
              className="rounded-md border border-white/15 px-3 py-2 text-xs text-white/80 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              {copied === "link" ? "Copiado" : "Copiar"}
            </button>
          </dd>
        </div>
      </dl>

      <footer className="mt-6 flex items-center justify-between gap-3">
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-400/90 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
        >
          Abrir proposta
          <span aria-hidden>→</span>
        </Link>
      </footer>
    </article>
  );
}
