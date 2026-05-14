import type { FixedInstitutionalContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";
import { SectionHeader } from "@/components/sections/SectionHeader";

type Props = { fixed: FixedInstitutionalContent };

export function MetodoVilaSection({ fixed }: Props) {
  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Framework de entrega"
            title={fixed.metodoVilaTitle}
            description={fixed.metodoVilaSubtitle}
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {fixed.metodoVilaPillars.map((pillar, idx) => (
            <FadeIn key={pillar.letter} delay={idx * 0.06}>
              <GlassPanel className="group relative overflow-hidden p-8 transition hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />
                <div className="flex gap-6">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/90 to-indigo-500/90 font-display text-xl font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
                    {pillar.letter}
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{pillar.description}</p>
                  </div>
                </div>
              </GlassPanel>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
