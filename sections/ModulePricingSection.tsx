import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";
import { SectionHeader } from "@/components/sections/SectionHeader";

type Props = { proposal: ProposalDynamicContent };

export function ModulePricingSection({ proposal }: Props) {
  const pricing = proposal.modulePricing;
  if (!pricing || pricing.modules.length === 0) return null;

  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Investimento · por módulo"
            title={pricing.title ?? "Valores segregados por módulo"}
            description={
              pricing.description ??
              "Contrate apenas os módulos necessários. O M0 é pré-requisito técnico para integração dos demais."
            }
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="overflow-x-auto">
            <GlassPanel className="min-w-[720px] p-0 sm:p-0">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)] sm:px-6">
                      Módulo
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)] sm:px-6">
                      Prazo
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)] sm:px-6">
                      À vista
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)] sm:px-6">
                      A prazo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.modules.map((mod, i) => (
                    <tr
                      key={mod.moduleId}
                      className={`border-b border-white/8 ${
                        i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                      }`}
                    >
                      <td className="px-5 py-5 align-top sm:px-6">
                        <div className="flex items-start gap-3">
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/30 font-display text-xs font-bold text-cyan-100">
                            {mod.code}
                          </span>
                          <div>
                            <p className="font-display font-semibold text-[var(--foreground)]">
                              {mod.title}
                            </p>
                            {mod.note ? (
                              <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                                {mod.note}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 align-top text-sm text-[var(--muted)] sm:px-6">
                        {mod.deliveryTime ?? "—"}
                      </td>
                      <td className="px-5 py-5 align-top sm:px-6">
                        {mod.originalCashPrice ? (
                          <p className="font-display text-sm font-medium text-[var(--muted)] line-through decoration-[var(--muted-strong)]/70 sm:text-base">
                            {mod.originalCashPrice}
                          </p>
                        ) : null}
                        <p
                          className={`font-display text-base font-semibold sm:text-lg ${
                            mod.originalCashPrice ? "mt-0.5 text-cyan-50" : "text-cyan-50"
                          }`}
                        >
                          {mod.cashPrice}
                        </p>
                      </td>
                      <td className="px-5 py-5 align-top sm:px-6">
                        {mod.originalInstallmentPrice ? (
                          <p className="font-display text-sm font-medium text-[var(--muted)] line-through decoration-[var(--muted-strong)]/70 sm:text-base">
                            {mod.originalInstallmentPrice}
                          </p>
                        ) : null}
                        <p
                          className={`font-display text-base font-semibold text-[var(--foreground)] sm:text-lg ${
                            mod.originalInstallmentPrice ? "mt-0.5" : ""
                          }`}
                        >
                          {mod.installmentPrice}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassPanel>
          </div>
        </FadeIn>

        {pricing.footnote ? (
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-[var(--muted)]">
              {pricing.footnote}
            </p>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}
