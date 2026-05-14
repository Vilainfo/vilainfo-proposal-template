"use client";

import Image from "next/image";
import { hashString } from "@/lib/hash-string";

type PreviewKind = "site" | "system";

type Props = {
  projectName: string;
  projectTagline: string;
  scopeSeed: string;
  previewKind: PreviewKind;
  /** Fallback de KPIs quando `previewMetrics` vazio em modo system */
  macroScope: string[];
  previewMetrics?: string[];
  imageUrl?: string | null;
};

const FALLBACK_KPIS = [
  "Indicador principal",
  "Volume operacional",
  "Performance",
  "Alertas / SLA",
];

function proceduralValues(seed: string): string[] {
  const h = hashString(seed);
  const bases = [42, 68, 1240, 97, 33, 81];
  return bases.map((b, i) => {
    const v = (h >> (i * 5)) % 100;
    if (i === 2) return `${b + (v % 400)}`;
    if (i === 3) return `${v + 12}%`;
    return `${v + b % 40}%`;
  });
}

function SiteInterior({
  projectName,
  projectTagline,
  hueShift,
}: {
  projectName: string;
  projectTagline: string;
  hueShift: number;
}) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0c1222]">
      <header className="flex h-9 shrink-0 items-center justify-between border-b border-white/10 px-4">
        <div className="flex gap-4 text-[9px] font-medium uppercase tracking-[0.14em] text-slate-400">
          <span className="text-white">Início</span>
          <span>Atrações</span>
          <span>Mapa</span>
          <span className="hidden sm:inline">FAQ</span>
        </div>
        <span className="rounded-md bg-white/10 px-2 py-1 text-[9px] text-slate-300">Menu</span>
      </header>
      <div
        className="relative flex flex-1 flex-col items-center justify-center px-6 py-8 text-center"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, hsla(${165 + hueShift}, 70%, 35%, 0.35), transparent 55%),
            linear-gradient(180deg, #0f172a 0%, #020617 100%)
          `,
        }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-200/90">
          {projectName}
        </p>
        <h3 className="mt-3 font-display text-xl font-bold leading-tight text-white drop-shadow-sm sm:text-2xl md:text-3xl">
          {projectName}
        </h3>
        <p className="mt-3 max-w-md text-[11px] leading-relaxed text-slate-300/95 sm:text-xs">
          {projectTagline}
        </p>
        <span className="mt-6 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2 text-[11px] font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
          Explorar experiência
        </span>
        <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-2 opacity-80">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-14 rounded-lg border border-white/10 bg-white/[0.04]" />
          ))}
        </div>
      </div>
    </div>
  );
}

function SystemInterior({
  projectName,
  kpis,
  seed,
}: {
  projectName: string;
  kpis: string[];
  seed: string;
}) {
  const vals = proceduralValues(seed);
  const tiles = kpis.slice(0, 4);
  while (tiles.length < 4) {
    tiles.push(FALLBACK_KPIS[tiles.length]);
  }

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0b1120]">
      <header className="flex h-10 shrink-0 items-center gap-3 border-b border-white/10 px-3">
        <div className="flex gap-1">
          <span className="size-2 rounded-sm bg-cyan-400/80" />
          <span className="size-2 rounded-sm bg-white/20" />
          <span className="size-2 rounded-sm bg-white/20" />
        </div>
        <span className="text-[10px] font-medium text-slate-400">
          Painel · <span className="text-slate-200">{projectName}</span>
        </span>
        <span className="ml-auto rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-emerald-300">
          Ao vivo
        </span>
      </header>
      <div className="flex min-h-0 flex-1 gap-2 p-3">
        <aside className="hidden w-14 shrink-0 flex-col gap-2 rounded-lg border border-white/10 bg-black/25 py-3 sm:flex">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="mx-auto size-8 rounded-md bg-white/[0.06]" />
          ))}
        </aside>
        <div className="grid min-h-0 flex-1 grid-cols-2 gap-2 overflow-hidden">
          {tiles.map((label, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-3"
            >
              <p className="line-clamp-2 text-[9px] font-semibold uppercase leading-snug tracking-[0.08em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 font-mono text-lg font-semibold text-white sm:text-xl">{vals[i]}</p>
              <div className="mt-auto pt-3">
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
                    style={{ width: `${48 + ((hashString(seed + i) % 40) || 20)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Mock de navegador: site (hero) ou sistema (KPIs); screenshot real opcional. */
export function ScopePreviewFrame({
  projectName,
  projectTagline,
  scopeSeed,
  previewKind,
  macroScope,
  previewMetrics,
  imageUrl,
}: Props) {
  const h = hashString(`${scopeSeed}|${projectName}|${previewKind}`);
  const hueShift = h % 28;

  const slug = projectName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const fakeUrl =
    previewKind === "system"
      ? `https://app.${slug || "projeto"}.exemplo.com.br/dashboard`
      : `https://${slug || "projeto"}.exemplo.com.br`;

  const kpis =
    previewMetrics && previewMetrics.length > 0
      ? previewMetrics
      : macroScope.length > 0
        ? macroScope.map((s) => (s.length > 48 ? `${s.slice(0, 45)}…` : s))
        : [...FALLBACK_KPIS];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-slate-950/90 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.06]">
      <div className="flex items-center gap-3 border-b border-white/10 bg-black/55 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f57]/90" />
          <span className="size-3 rounded-full bg-[#febc2e]/90" />
          <span className="size-3 rounded-full bg-[#28c840]/90" />
        </div>
        <div className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-center font-mono text-[11px] text-slate-400 sm:text-xs">
          <span className="truncate">{fakeUrl}</span>
        </div>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070b14]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 560px"
            unoptimized
          />
        ) : previewKind === "site" ? (
          <SiteInterior
            projectName={projectName}
            projectTagline={projectTagline}
            hueShift={hueShift}
          />
        ) : (
          <SystemInterior projectName={projectName} kpis={kpis} seed={scopeSeed} />
        )}
      </div>
    </div>
  );
}
