import type { FixedInstitutionalContent, ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";

type Props = {
  fixed: FixedInstitutionalContent;
  proposal: ProposalDynamicContent;
};

/** Mensagem consultiva do PDF — apenas texto, sem CTAs (apresentação em call). */
export function ClosingCtaSection({ fixed, proposal }: Props) {
  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <GlassPanel className="relative overflow-hidden px-8 py-12 sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_380px_at_20%_0%,rgba(34,211,238,0.18),transparent),radial-gradient(760px_420px_at_100%_40%,rgba(129,140,248,0.16),transparent)]" />
            <div className="relative mx-auto max-w-3xl space-y-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/75">
                {proposal.clientName} · {proposal.projectName}
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                {fixed.closingCta.title}
              </h2>
              <p className="text-lg leading-relaxed text-[var(--muted)]">
                {fixed.closingCta.subtitle}
              </p>
            </div>
          </GlassPanel>
        </FadeIn>
      </Container>
    </section>
  );
}
