import { Check, Star } from "lucide-react";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";
import { SectionHeader } from "@/components/sections/SectionHeader";

type Props = { proposal: ProposalDynamicContent };

export function ModuleScopeSection({ proposal }: Props) {
  const modules = proposal.scopeModules;
  if (!modules || modules.length === 0) return null;

  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Projeto · escopo por módulo"
            title="Módulos de negócio"
            description="Cada módulo pode ser contratado de forma independente, desde que a base compartilhada (M0) esteja incluída. Os módulos M2 e M3 foram sinalizados como prioritários na reunião de levantamento."
          />
        </FadeIn>

        <div className="flex flex-col gap-5">
          {modules.map((mod, idx) => (
            <FadeIn key={mod.id} delay={0.04 * idx}>
              <GlassPanel
                className={`relative overflow-hidden p-6 sm:p-8 ${
                  mod.priority
                    ? "border-amber-400/30 bg-amber-400/[0.04]"
                    : ""
                }`}
              >
                {mod.priority ? (
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(480px_240px_at_100%_0%,rgba(251,191,36,0.12),transparent)]" />
                ) : null}
                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-black/35 font-display text-sm font-bold tracking-wide text-cyan-100">
                        {mod.code}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-[var(--foreground)] sm:text-xl">
                          {mod.title}
                        </h3>
                        {mod.description ? (
                          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                            {mod.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    {mod.priority ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/35 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-100">
                        <Star className="size-3" aria-hidden fill="currentColor" />
                        Prioritário
                      </span>
                    ) : null}
                  </div>

                  <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-[var(--muted)]">
                    {mod.scopeItems.map((item, i) => (
                      <li key={i} className="flex gap-2.5">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-cyan-300"
                          aria-hidden
                          strokeWidth={2.4}
                        />
                        <span className="text-[var(--foreground)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassPanel>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );

}
