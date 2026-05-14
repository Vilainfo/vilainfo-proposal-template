import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";
import { SectionHeader } from "@/components/sections/SectionHeader";

type Props = { proposal: ProposalDynamicContent };

export function TimelineSection({ proposal }: Props) {
  const { timeline } = proposal;

  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Planejamento"
            title="Prazo e cronograma"
            description="Prazos de entrega, data de partida e marcos intermediários para acompanhar a evolução do projeto."
          />
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <FadeIn>
            <GlassPanel className="space-y-8 p-8 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                    Prazo de entrega
                  </p>
                  <p className="mt-4 font-display text-3xl font-semibold text-[var(--foreground)]">
                    {timeline.deliveryTime}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                    Data de início (se fechamento)
                  </p>
                  <p className="mt-4 font-display text-3xl font-semibold text-[var(--foreground)]">
                    {timeline.startDate}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                  Observações
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {timeline.observations}
                </p>
              </div>
            </GlassPanel>
          </FadeIn>

          <FadeIn delay={0.08}>
            <GlassPanel className="p-8 sm:p-10">
              <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                Marcos do projeto
              </h3>
              <ol className="relative mt-10 space-y-0">
                <div className="pointer-events-none absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-indigo-400/45 to-transparent sm:left-[19px]" />
                {timeline.milestones.map((m, idx) => (
                  <li key={idx} className="relative pb-10 pl-14 last:pb-0">
                    <span className="absolute left-0 top-1 flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 font-mono text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/25 ring-4 ring-[#050816] sm:size-10 sm:text-sm">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline gap-3">
                        <h4 className="font-display text-lg font-semibold text-[var(--foreground)]">
                          {m.title}
                        </h4>
                        {m.date ? (
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 text-xs font-medium text-[var(--muted)]">
                            {m.date}
                          </span>
                        ) : null}
                      </div>
                      {m.description ? (
                        <p className="text-sm leading-relaxed text-[var(--muted)]">{m.description}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </GlassPanel>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
