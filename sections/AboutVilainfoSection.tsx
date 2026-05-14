import type { FixedInstitutionalContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlassPanel } from "@/components/sections/GlassPanel";

type Props = { fixed: FixedInstitutionalContent };

export function AboutVilainfoSection({ fixed }: Props) {
  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-strong)]">
                Quem somos
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                {fixed.aboutShortTitle}
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-[var(--muted)]">
                {fixed.aboutShortParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <GlassPanel className="relative overflow-hidden p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 left-8 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
              <dl className="relative grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <dt className="text-xs uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                    Experiência
                  </dt>
                  <dd className="mt-3 font-display text-3xl font-semibold text-[var(--foreground)]">
                    30+
                  </dd>
                  <dd className="mt-1 text-sm text-[var(--muted)]">anos em tecnologia</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <dt className="text-xs uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                    Modelo
                  </dt>
                  <dd className="mt-3 font-display text-3xl font-semibold text-[var(--foreground)]">
                    Ágil
                  </dd>
                  <dd className="mt-1 text-sm text-[var(--muted)]">
                    entregas previsíveis e comunicação próxima
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5 sm:col-span-2">
                  <dt className="text-xs uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                    Pilares
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    Desenvolvimento, segurança e infraestrutura integrados ao mesmo time —
                    menos atrito entre ideia e produção.
                  </dd>
                </div>
              </dl>
            </GlassPanel>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
