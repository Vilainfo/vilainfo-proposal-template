import {
  Activity,
  Boxes,
  Layers,
  MapPinned,
  MessagesSquare,
  Search,
} from "lucide-react";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";
import { ScopePreviewFrame } from "@/components/sections/ScopePreviewFrame";
import { SectionHeader } from "@/components/sections/SectionHeader";

const ICON_MAP: Record<string, typeof Layers> = {
  institucional: Layers,
  atracoes: Activity,
  mapa: MapPinned,
  faq: MessagesSquare,
  seo: Search,
  default: Boxes,
};

function iconFor(id: string) {
  return ICON_MAP[id] ?? ICON_MAP.default;
}

type Props = { proposal: ProposalDynamicContent };

export function ProjectScopeSection({ proposal }: Props) {
  const scopeSeed = [
    proposal.projectDescription,
    ...proposal.macroScope,
    ...proposal.features.map((f) => `${f.title}${f.description ?? ""}`),
  ].join("|");

  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Projeto · escopo e solução"
            title={proposal.projectName}
            description={proposal.projectDescription}
          />
        </FadeIn>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 flex flex-col gap-10 lg:order-1">
            <FadeIn delay={0.04}>
              <GlassPanel className="p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                  Escopo macro
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                  {proposal.macroScope.map((line, mi) => (
                    <li key={mi} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400/90" />
                      <span className="text-[var(--foreground)]">{line}</span>
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </FadeIn>

            {proposal.features.length > 0 ? (
              <FadeIn delay={0.08}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-strong)]">
                    Funcionalidades
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-[var(--foreground)]">
                    O que entra na solução
                  </h3>
                  <div className="mt-6 flex flex-col gap-4">
                    {proposal.features.map((f, idx) => {
                      const Icon = iconFor(f.id);
                      return (
                        <FadeIn key={f.id} delay={0.02 * idx}>
                          <GlassPanel className="flex gap-4 p-5 sm:p-6">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-cyan-200 ring-1 ring-white/10">
                              <Icon className="size-5" aria-hidden />
                            </div>
                            <div className="min-w-0 space-y-1">
                              <h4 className="font-display text-base font-semibold text-[var(--foreground)]">
                                {f.title}
                              </h4>
                              {f.description ? (
                                <p className="text-sm leading-relaxed text-[var(--muted)]">
                                  {f.description}
                                </p>
                              ) : null}
                            </div>
                          </GlassPanel>
                        </FadeIn>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            ) : null}
          </div>

          <div className="order-1 lg:order-2 lg:sticky lg:top-6">
            <FadeIn delay={0.06}>
              <ScopePreviewFrame
                projectName={proposal.projectName}
                projectTagline={proposal.projectTagline}
                scopeSeed={scopeSeed}
                previewKind={proposal.previewKind}
                macroScope={proposal.macroScope}
                previewMetrics={proposal.previewMetrics}
                imageUrl={proposal.projectHeroImageUrl}
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
