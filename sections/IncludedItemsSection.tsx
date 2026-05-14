import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Gift, Headphones, ShieldCheck } from "lucide-react";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";
import { SectionHeader } from "@/components/sections/SectionHeader";

type Props = { proposal: ProposalDynamicContent };

type InclusionCard = {
  key: string;
  Icon: LucideIcon;
  iconClassName: string;
  title: string;
  body?: ReactNode;
};

const ROW = "flex h-full gap-5 p-7";

function buildCards(proposal: ProposalDynamicContent): InclusionCard[] {
  const fromPacote: InclusionCard[] = proposal.includedItems.map((item, i) => ({
    key: `pacote-${i}`,
    Icon: BadgeCheck,
    iconClassName: "text-cyan-300/90",
    title: item,
    body: undefined,
  }));

  const operacao: InclusionCard[] = [
    {
      key: "suporte",
      Icon: Headphones,
      iconClassName: "text-sky-300/90",
      title: "Suporte",
      body: proposal.supportType,
    },
    {
      key: "garantia",
      Icon: ShieldCheck,
      iconClassName: "text-indigo-300/90",
      title: "Garantia contratual (resumo)",
      body: proposal.warranty,
    },
    {
      key: "bonus",
      Icon: Gift,
      iconClassName: "text-fuchsia-300/85",
      title: "Bônus adicionais nesta proposta",
      body:
        proposal.bonusItems.length === 1 ? (
          proposal.bonusItems[0]
        ) : (
          <ul className="space-y-2">
            {proposal.bonusItems.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ),
    },
  ];

  return [...fromPacote, ...operacao];
}

/**
 * Cada linha do pacote + suporte/garantia/bônus viram um card no mesmo padrão (ícone + título + texto),
 * em grid responsivo (ex.: 4 + 3 = 7 itens).
 */
export function IncludedItemsSection({ proposal }: Props) {
  const cards = buildCards(proposal);

  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Transparência de escopo"
            title="Itens inclusos & operação"
            description="Cada item do pacote e da operação em formato único — visualize o conjunto completo em grade."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, idx) => {
            const Icon = card.Icon;
            return (
              <FadeIn key={card.key} delay={(idx % 6) * 0.04}>
                <GlassPanel className={ROW}>
                  <Icon
                    className={`size-10 shrink-0 ${card.iconClassName}`}
                    aria-hidden
                    strokeWidth={1.5}
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                      {card.title}
                    </p>
                    {card.body != null && card.body !== "" ? (
                      <div className="mt-3 text-base leading-relaxed text-[var(--muted)] [&_li]:text-[var(--foreground)]">
                        {typeof card.body === "string" ? card.body : card.body}
                      </div>
                    ) : null}
                  </div>
                </GlassPanel>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
