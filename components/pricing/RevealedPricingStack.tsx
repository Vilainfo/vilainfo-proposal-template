"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight, Headphones } from "lucide-react";
import type { ProposalDynamicContent, ProposalRecurringPlan } from "@/lib/types/proposal";
import { GlassPanel } from "@/components/sections/GlassPanel";

type Pricing = ProposalDynamicContent["pricing"];
type RevealKey = "promo" | "installment" | "recurring";

const NEXT_LABEL: Record<RevealKey, string> = {
  promo: "Ver valor com desconto promocional",
  installment: "Ver opção de parcelamento",
  recurring: "Ver manutenção mensal",
};

function RevealStepBadge({ step }: { step: number }) {
  return (
    <span
      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/45 font-display text-sm font-semibold text-[var(--muted-strong)]"
      aria-hidden
    >
      {step}
    </span>
  );
}

function DetailList({ items, accent = "muted" }: { items: string[]; accent?: "cyan" | "muted" }) {
  const iconClass = accent === "cyan" ? "text-cyan-300" : "text-[var(--muted-strong)]";
  return (
    <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--muted)]">
      {items.map((d, i) => (
        <li key={i} className="flex gap-2.5">
          <Check className={`mt-0.5 size-4 shrink-0 ${iconClass}`} aria-hidden strokeWidth={2.4} />
          <span className="text-[var(--foreground)]">{d}</span>
        </li>
      ))}
    </ul>
  );
}

function RecurringPlanBlock({ plan, step }: { plan: ProposalRecurringPlan; step: number }) {
  return (
    <GlassPanel className="relative overflow-hidden border-indigo-400/25 bg-indigo-400/[0.04] p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_220px_at_100%_0%,rgba(129,140,248,0.18),transparent)]" />
      <div className="relative">
        <div className="mb-5 flex items-center gap-3">
          <RevealStepBadge step={step} />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100/90">
            Manutenção mensal (opcional)
          </p>
        </div>
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

function RevealPanel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealedPricingStack({ pricing }: { pricing: Pricing }) {
  const options = pricing.paymentOptions!;
  const primary = options[0];
  const installment = options[1];
  const referencePrice = primary.compareAtPrice ?? primary.price;

  const sequence = useMemo(() => {
    const steps: RevealKey[] = ["promo"];
    if (installment) steps.push("installment");
    if (pricing.recurringPlan) steps.push("recurring");
    return steps;
  }, [installment, pricing.recurringPlan]);

  const totalSteps = 1 + sequence.length;
  const [visibleCount, setVisibleCount] = useState(1);

  const isRevealed = (key: RevealKey) => {
    const index = sequence.indexOf(key);
    return index >= 0 && visibleCount >= index + 2;
  };

  const canAdvance = visibleCount < totalSteps;
  const nextLabel = NEXT_LABEL[sequence[visibleCount - 1]];

  const recurringStepNumber = installment ? 3 : 2;

  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-5">
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
          {pricing.offerLabel}
        </span>
      </div>

      <div className="flex flex-col gap-5">
        <AnimatePresence mode="popLayout">
          {!isRevealed("promo") ? (
            <RevealPanel key="reference">
              <GlassPanel className="p-6 sm:p-8">
                <div className="flex gap-4">
                  <RevealStepBadge step={1} />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                      Investimento de referência
                    </p>
                    <p className="mt-2 text-sm text-[var(--muted)]">Valor à vista (lista)</p>
                    <p className="mt-3 break-words font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                      {referencePrice}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </RevealPanel>
          ) : null}

          {isRevealed("promo") ? (
            <RevealPanel key="promo">
              <GlassPanel className="relative overflow-hidden border-cyan-400/40 bg-cyan-400/[0.05] p-6 shadow-[0_24px_60px_-30px_rgba(34,211,238,0.45)] sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_220px_at_0%_0%,rgba(34,211,238,0.18),transparent)]" />
                <div className="relative flex gap-4">
                  <RevealStepBadge step={1} />
                  <div className="min-w-0 flex-1 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/90">
                          Com desconto promocional
                        </p>
                        <p className="mt-1 text-sm text-[var(--muted)]">{primary.label}</p>
                      </div>
                      {primary.highlight ? (
                        <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                          {primary.highlight}
                        </span>
                      ) : null}
                    </div>
                    {primary.compareAtPrice ? (
                      <p className="break-words font-display text-xl font-medium tracking-tight text-[var(--muted)] line-through decoration-[var(--muted-strong)]/70 sm:text-2xl">
                        {primary.compareAtPrice}
                      </p>
                    ) : null}
                    <p className="break-words font-display text-3xl font-semibold tracking-tight text-cyan-50 sm:text-4xl">
                      {primary.price}
                    </p>
                    {primary.caption ? (
                      <p className="text-sm text-[var(--muted)]">{primary.caption}</p>
                    ) : null}
                    {primary.details && primary.details.length > 0 ? (
                      <DetailList items={primary.details} accent="cyan" />
                    ) : null}
                  </div>
                </div>
              </GlassPanel>
            </RevealPanel>
          ) : null}

          {isRevealed("installment") && installment ? (
            <RevealPanel key="installment">
              <div className="flex flex-col gap-4">
                <GlassPanel className="p-6 sm:p-8">
                  <div className="flex gap-4">
                    <RevealStepBadge step={2} />
                    <div className="min-w-0 flex-1 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                            Parcelamento
                          </p>
                          <p className="mt-1 text-sm text-[var(--muted)]">{installment.label}</p>
                        </div>
                        {installment.highlight ? (
                          <span className="inline-flex items-center rounded-full border border-white/12 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-strong)]">
                            {installment.highlight}
                          </span>
                        ) : null}
                      </div>
                      <p className="break-words font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                        {installment.price}
                      </p>
                      {installment.details && installment.details.length > 0 ? (
                        <DetailList items={installment.details} />
                      ) : null}
                    </div>
                  </div>
                </GlassPanel>

                {pricing.variableAmount ? (
                  <GlassPanel className="border-amber-400/25 bg-amber-400/[0.06] p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/90">
                      Infraestrutura — não inclusa no investimento
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {pricing.variableAmount}
                    </p>
                  </GlassPanel>
                ) : null}
              </div>
            </RevealPanel>
          ) : null}

          {isRevealed("recurring") && pricing.recurringPlan ? (
            <RevealPanel key="recurring">
              <RecurringPlanBlock plan={pricing.recurringPlan} step={recurringStepNumber} />
            </RevealPanel>
          ) : null}

        </AnimatePresence>
      </div>

      <AnimatePresence>
        {canAdvance ? (
          <motion.div
            key={`cta-${visibleCount}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center pt-1"
          >
            <button
              type="button"
              onClick={() => setVisibleCount((c) => Math.min(c + 1, totalSteps))}
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/45 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-50 transition hover:border-cyan-300/60 hover:bg-cyan-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              {nextLabel}
              <ChevronRight
                className="size-4 transition group-hover:translate-x-0.5"
                aria-hidden
                strokeWidth={2.4}
              />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
