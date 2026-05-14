import Image from "next/image";
import type { FixedInstitutionalContent, ProposalDynamicContent } from "@/lib/types/proposal";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = {
  fixed: FixedInstitutionalContent;
  proposal: ProposalDynamicContent;
};

export function CoverSection({ fixed, proposal }: Props) {
  return (
    <section className="py-0">
      <Container>
        <FadeIn>
          <div className="flex min-h-[72dvh] flex-col items-center justify-center px-2 text-center">
            <Image
              src={fixed.logoSrc}
              alt=""
              width={560}
              height={160}
              className="h-auto w-[min(520px,92vw)] max-w-none object-contain"
              priority
              unoptimized
            />
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted-strong)]">
              {fixed.brandName}
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
              {proposal.projectName}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-cyan-300/85">
              {proposal.clientName}
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {proposal.projectTagline}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
