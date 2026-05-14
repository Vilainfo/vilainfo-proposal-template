import type { FixedInstitutionalContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = { fixed: FixedInstitutionalContent };

export function HubSolutionsSection({ fixed }: Props) {
  return (
    <section className="relative overflow-hidden py-0">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_65%)]" />
      <Container className="relative">
        <FadeIn>
          <div className="max-w-4xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-strong)]">
              {fixed.hubEyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl lg:leading-tight">
              {fixed.hubTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {fixed.hubParagraphs.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 shadow-inner shadow-white/[0.03]">
                  <span className="font-mono text-xs text-cyan-300/80">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">{paragraph}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
