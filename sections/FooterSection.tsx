import Image from "next/image";
import type { FixedInstitutionalContent } from "@/lib/types/proposal";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = { fixed: FixedInstitutionalContent };

/** Encerramento elegante — apenas texto (sem botões de CTA). */
export function FooterSection({ fixed }: Props) {
  return (
    <footer className="py-0">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 text-center">
            <Image
              src={fixed.logoSrc}
              alt=""
              width={400}
              height={120}
              className="h-auto w-[min(380px,78vw)] object-contain opacity-95"
              unoptimized
            />

            <div className="space-y-3">
              <p className="font-display text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
                {fixed.footer.thankYou}
              </p>
              <p className="text-lg font-medium text-[var(--muted)]">{fixed.footer.handle}</p>
            </div>

            <div className="space-y-2 text-sm leading-relaxed text-[var(--muted)]">
              <p>
                <span className="text-[var(--muted-strong)]">Site:</span>{" "}
                <span className="text-[var(--foreground)]">{siteConfig.url}</span>
              </p>
              <p>
                <span className="text-[var(--muted-strong)]">Instagram:</span>{" "}
                <span className="text-[var(--foreground)]">{siteConfig.social.instagram}</span>
              </p>
              <p>
                <span className="text-[var(--muted-strong)]">LinkedIn:</span>{" "}
                <span className="text-[var(--foreground)]">{siteConfig.social.linkedin}</span>
              </p>
            </div>

            <p className="max-w-xl text-xs leading-relaxed text-[var(--muted)]">
              {siteConfig.name} · {siteConfig.tagline} · © {new Date().getFullYear()}
            </p>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
}
