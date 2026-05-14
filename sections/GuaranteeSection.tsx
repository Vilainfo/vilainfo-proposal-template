import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";

type Props = { proposal: ProposalDynamicContent };

export function GuaranteeSection({ proposal }: Props) {
  const { guarantee } = proposal;

  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted-strong)]">
              Confiança
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Garantia Vilainfo
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <GlassPanel className="relative mx-auto mt-12 max-w-4xl overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_380px_at_50%_-20%,rgba(52,211,153,0.22),transparent),radial-gradient(640px_420px_at_100%_120%,rgba(56,189,248,0.18),transparent)]" />
            <div className="relative grid gap-10 p-10 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] sm:items-center sm:p-12">
              <div className="space-y-5">
                <p className="text-lg leading-relaxed text-[var(--foreground)]">{guarantee.guaranteeText}</p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100/85">
                    Horas extras contratuais
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
                    {guarantee.extraHours}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                    Nível de serviço & relacionamento
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
                    {guarantee.serviceLevel}
                  </p>
                </div>
              </div>
            </div>
          </GlassPanel>
        </FadeIn>
      </Container>
    </section>
  );
}
