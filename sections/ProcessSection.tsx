import type { FixedInstitutionalContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/sections/SectionHeader";

type Props = { fixed: FixedInstitutionalContent };

export function ProcessSection({ fixed }: Props) {
  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={fixed.processEyebrow}
            title={fixed.processTitle}
            description="Fluxo padrão Vilainfo após o sim — mantém previsibilidade para o cliente e ritmo saudável para o time."
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="relative mt-6 hidden overflow-x-auto pb-4 xl:block">
            <div className="pointer-events-none absolute left-8 right-8 top-[38px] h-px bg-gradient-to-r from-cyan-400/55 via-indigo-400/35 to-transparent" />

            <ol className="flex gap-4">
              {fixed.processSteps.map((step) => (
                <li
                  key={step.step}
                  className="relative flex-1 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 pt-10 shadow-inner shadow-white/[0.03]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 font-mono text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 ring-4 ring-[#050816]">
                      {step.step.toString().padStart(2, "0")}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-base font-semibold text-[var(--foreground)]">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-6 xl:hidden">
            <ol className="space-y-4">
              {fixed.processSteps.map((step) => (
                <li
                  key={`m-${step.step}`}
                  className="rounded-3xl border border-white/10 bg-black/30 p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] font-mono text-xs font-semibold text-cyan-200 ring-1 ring-white/10">
                      {step.step.toString().padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-[var(--foreground)]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
