import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";
import { SectionHeader } from "@/components/sections/SectionHeader";

type Props = { proposal: ProposalDynamicContent };

export function ProjectDeliverablesSection({ proposal }: Props) {
  if (proposal.projectDeliverables.length === 0) {
    return null;
  }

  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Projeto · entregas"
            title="Entregáveis"
            description="Lista do que compõe o pacote desta proposta ao final do ciclo acordado."
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <GlassPanel className="p-6 sm:p-10">
            <ul className="space-y-4">
              {proposal.projectDeliverables.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 border-b border-white/[0.06] pb-4 text-sm leading-relaxed text-[var(--muted)] last:border-0 last:pb-0"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 font-mono text-xs font-semibold text-indigo-200 ring-1 ring-indigo-400/25">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-[var(--foreground)]">{item}</span>
                </li>
              ))}
            </ul>
          </GlassPanel>
        </FadeIn>
      </Container>
    </section>
  );
}
