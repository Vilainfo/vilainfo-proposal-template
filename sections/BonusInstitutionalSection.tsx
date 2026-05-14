import { Gift } from "lucide-react";
import type { FixedInstitutionalContent, ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";

type Props = {
  fixed: FixedInstitutionalContent;
  proposal: ProposalDynamicContent;
};

export function BonusInstitutionalSection({ fixed, proposal }: Props) {
  const items = proposal.bonusItems;
  const hasCustomBonuses = items.length > 0;

  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted-strong)]">
              {fixed.bonusStandard.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {fixed.bonusStandard.title}
            </h2>
          </div>
        </FadeIn>

        {hasCustomBonuses ? (
          <FadeIn delay={0.08}>
            <div
              className={`mx-auto mt-12 grid max-w-5xl gap-4 ${
                items.length === 1
                  ? "max-w-2xl"
                  : items.length === 2
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {items.map((item, i) => (
                <GlassPanel
                  key={i}
                  className="relative flex h-full flex-col gap-4 overflow-hidden p-6 sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(217,70,239,0.12),transparent_55%,rgba(34,211,238,0.1))]" />
                  <div className="relative flex size-11 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200">
                    <Gift className="size-5" aria-hidden strokeWidth={1.8} />
                  </div>
                  <p className="relative font-display text-base font-semibold leading-snug text-[var(--foreground)] sm:text-lg">
                    {item}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.08}>
            <GlassPanel className="relative mx-auto mt-12 max-w-3xl overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(34,211,238,0.18),transparent_45%,rgba(129,140,248,0.16))]" />
              <div className="relative grid gap-8 p-10 sm:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] sm:items-center sm:p-12">
                <div className="flex flex-col items-center justify-center rounded-3xl border border-cyan-400/35 bg-cyan-400/10 px-6 py-8 text-center shadow-inner shadow-cyan-500/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/90">
                    {fixed.bonusStandard.highlightLabel}
                  </p>
                  <p className="mt-4 font-display text-4xl font-bold text-[var(--foreground)]">
                    10h
                  </p>
                </div>
                <div className="space-y-4 text-left">
                  <p className="font-display text-xl font-semibold text-[var(--foreground)]">
                    {fixed.bonusStandard.highlightDescription}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    Benefício adicional para acelerar a próxima iniciativa digital da sua operação,
                    com o mesmo padrão de qualidade Vilainfo.
                  </p>
                </div>
              </div>
            </GlassPanel>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
