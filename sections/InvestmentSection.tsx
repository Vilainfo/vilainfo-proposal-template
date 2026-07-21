import { Check, Headphones } from "lucide-react";
import type {
  ProposalDynamicContent,
  ProposalPricingOption,
  ProposalRecurringPlan,
} from "@/lib/types/proposal";
import { RevealedPricingStack } from "@/components/pricing/RevealedPricingStack";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";

type Props = { proposal: ProposalDynamicContent };

function RecurringPlanCard({ plan }: { plan: ProposalRecurringPlan }) {
  return (
    <GlassPanel className="relative overflow-hidden border-indigo-400/25 bg-indigo-400/[0.04] p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_220px_at_100%_0%,rgba(129,140,248,0.18),transparent)]" />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-400/10 text-indigo-200">
              <Headphones className="size-5" aria-hidden strokeWidth={1.8} />
            </div>
            <div>
              <span className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-100">
                {plan.label}
              </span>
              {plan.caption ? (
                <p className="mt-2 text-sm text-[var(--muted)]">{plan.caption}</p>
              ) : null}
            </div>
          </div>
          {plan.highlight ? (
            <span className="inline-flex items-center rounded-full border border-white/12 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-strong)]">
              {plan.highlight}
            </span>
          ) : null}
        </div>

        <p className="mt-5 font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          {plan.monthlyPrice}
        </p>

        {plan.description ? (
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{plan.description}</p>
        ) : null}

        {plan.includedItems && plan.includedItems.length > 0 ? (
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-[var(--muted)]">
            {plan.includedItems.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <Check
                  className="mt-0.5 size-4 shrink-0 text-indigo-300"
                  aria-hidden
                  strokeWidth={2.4}
                />
                <span className="text-[var(--foreground)]">{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </GlassPanel>
  );
}

function PaymentOptionCard({ option, emphasized }: { option: ProposalPricingOption; emphasized: boolean }) {
  return (
    <GlassPanel
      className={`relative flex h-full flex-col gap-5 overflow-hidden p-6 sm:p-8 ${
        emphasized
          ? "border-cyan-400/40 bg-cyan-400/[0.05] shadow-[0_24px_60px_-30px_rgba(34,211,238,0.5)]"
          : ""
      }`}
    >
      {emphasized ? (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_220px_at_0%_0%,rgba(34,211,238,0.18),transparent)]" />
      ) : null}
      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full border border-white/12 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-strong)]">
          {option.label}
        </span>
        {option.highlight ? (
          <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
            {option.highlight}
          </span>
        ) : null}
      </div>

      <div className="relative">
        {option.caption ? (
          <p className="text-sm text-[var(--muted)]">{option.caption}</p>
        ) : null}
        {option.compareAtPrice ? (
          <p className="mt-2 break-words font-display text-xl font-medium tracking-tight text-[var(--muted)] line-through decoration-[var(--muted-strong)]/70 sm:text-2xl">
            {option.compareAtPrice}
          </p>
        ) : null}
        <p
          className={`break-words font-display font-semibold tracking-tight text-[var(--foreground)] ${
            option.compareAtPrice
              ? "mt-1 text-3xl sm:text-4xl"
              : "mt-2 text-3xl sm:text-4xl"
          } ${emphasized && option.compareAtPrice ? "text-cyan-50" : ""}`}
        >
          {option.price}
        </p>
        {option.compareAtPrice ? (
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/90">
            Valor promocional
          </p>
        ) : null}
      </div>

      {option.details && option.details.length > 0 ? (
        <ul className="relative space-y-2.5 text-sm leading-relaxed text-[var(--muted)]">
          {option.details.map((d, i) => (
            <li key={i} className="flex gap-2.5">
              <Check
                className={`mt-0.5 size-4 shrink-0 ${emphasized ? "text-cyan-300" : "text-[var(--muted-strong)]"}`}
                aria-hidden
                strokeWidth={2.4}
              />
              <span className="text-[var(--foreground)]">{d}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </GlassPanel>
  );
}

export function InvestmentSection({ proposal }: Props) {
  const { pricing } = proposal;
  const hasPaymentOptions = !!pricing.paymentOptions && pricing.paymentOptions.length >= 2;
  const useRevealedPricing =
    hasPaymentOptions && !!pricing.paymentOptions?.[0]?.compareAtPrice;

  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted-strong)]">
              Investimento
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Qual é o valor deste projeto?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              {pricing.investmentHeadline}
            </p>
          </div>
        </FadeIn>

        {hasPaymentOptions && pricing.paymentOptions ? (
          useRevealedPricing ? (
            <RevealedPricingStack pricing={pricing} />
          ) : (
            <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-5">
              <FadeIn>
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                    {pricing.offerLabel}
                  </span>
                  <p className="text-sm text-[var(--muted)]">
                    Escolha a forma de pagamento que melhor se encaixa no seu fluxo financeiro.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.06}>
                <div className="grid gap-5 lg:grid-cols-2">
                  {pricing.paymentOptions.map((opt, i) => (
                    <PaymentOptionCard key={i} option={opt} emphasized={i === 0} />
                  ))}
                </div>
              </FadeIn>

              {pricing.specialCondition ? (
                <FadeIn delay={0.08}>
                  <GlassPanel className="border-amber-400/25 bg-amber-400/[0.06] p-6 sm:p-8">
                    <p className="text-sm font-medium leading-snug text-amber-50/95">
                      {pricing.specialCondition}
                    </p>
                  </GlassPanel>
                </FadeIn>
              ) : null}

              {pricing.recurringPlan ? (
                <FadeIn delay={0.1}>
                  <RecurringPlanCard plan={pricing.recurringPlan} />
                </FadeIn>
              ) : null}

              {pricing.paymentConditions ? (
                <FadeIn delay={0.12}>
                  <GlassPanel className="p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                      Condições de pagamento
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
                      {pricing.paymentConditions}
                    </p>
                    <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-strong)]">
                        Formalização
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                        Valores e condições resumem a proposta; detalhes ficam no contrato e nos
                        documentos de cobrança.
                      </p>
                    </div>
                  </GlassPanel>
                </FadeIn>
              ) : null}
            </div>
          )
        ) : (
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-5">
            <FadeIn>
              <GlassPanel className="relative overflow-hidden p-6 sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_280px_at_0%_0%,rgba(56,189,248,0.14),transparent)]" />
                <div className="relative space-y-5">
                  <span className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                    {pricing.offerLabel}
                  </span>
                  <div>
                    <p className="text-sm text-[var(--muted)]">{pricing.fullPriceCaption}</p>
                    <p className="mt-2 break-words font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
                      {pricing.fullPrice}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </FadeIn>

            <FadeIn delay={0.06}>
              <GlassPanel className="border-amber-400/25 bg-amber-400/[0.06] p-6 sm:p-8">
                <p className="text-sm font-medium leading-snug text-amber-50/95">
                  {pricing.specialCondition}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                      Entrada
                    </p>
                    <p className="mt-2 break-words text-base font-semibold leading-snug text-[var(--foreground)] sm:text-lg">
                      {pricing.entryPrice}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                      Parcelas
                    </p>
                    <p className="mt-2 break-words text-base font-semibold leading-snug text-[var(--foreground)] sm:text-lg">
                      {pricing.installments}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">{pricing.variableAmount}</p>
              </GlassPanel>
            </FadeIn>

            {pricing.recurringPlan ? (
              <FadeIn delay={0.08}>
                <RecurringPlanCard plan={pricing.recurringPlan} />
              </FadeIn>
            ) : null}

            {pricing.paymentConditions ? (
              <FadeIn delay={0.1}>
                <GlassPanel className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                    Condições de pagamento
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
                    {pricing.paymentConditions}
                  </p>
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-strong)]">
                      Formalização
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      Valores e condições resumem a proposta; detalhes ficam no contrato e nos
                      documentos de cobrança.
                    </p>
                  </div>
                </GlassPanel>
              </FadeIn>
            ) : null}
          </div>
        )}
      </Container>
    </section>
  );
}
