import Image from "next/image";
import { Quote } from "lucide-react";
import type { FixedInstitutionalContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = { fixed: FixedInstitutionalContent };

/** Cards empilhados: screenshot no topo (área clara), texto abaixo — alinhado ao layout institucional de proposta. */
export function TestimonialsSection({ fixed }: Props) {
  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]">
              {fixed.testimonialsEyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-[2.75rem] md:leading-tight">
              {fixed.testimonialsTitle}
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          {fixed.testimonials.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/12 bg-[#060a14]/95 shadow-xl ring-1 ring-white/[0.04]">
                <div className="border-b border-white/10 bg-slate-400/10 p-4 sm:p-5">
                  <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-inner ring-1 ring-black/10 dark:bg-slate-800">
                    {t.photoSrc ? (
                      <Image
                        src={t.photoSrc}
                        alt=""
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 1024px) 100vw, 520px"
                        priority={idx === 0}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-600 to-slate-900">
                        <span className="font-display text-5xl font-bold text-white/25">
                          {t.author.slice(0, 1)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col px-6 pb-8 pt-10 sm:px-8">
                  <Quote
                    className="pointer-events-none absolute right-6 top-6 size-11 text-teal-400/55 sm:right-8 sm:top-8 sm:size-14"
                    aria-hidden
                    strokeWidth={1}
                  />
                  <blockquote className="relative pr-10">
                    <p className="text-base leading-relaxed text-[var(--foreground)] sm:text-[1.05rem] sm:leading-relaxed">
                      “{t.quote}”
                    </p>
                  </blockquote>
                  <footer className="mt-8 border-t border-white/10 pt-6">
                    <p className="font-semibold text-[var(--foreground)]">{t.author}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {t.role}, {t.company}
                    </p>
                  </footer>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
