import type { FixedInstitutionalContent, ProposalDynamicContent } from "@/lib/types/proposal";
import { PresentationShell } from "@/components/presentation/PresentationShell";
import { SlideFrame } from "@/components/presentation/SlideFrame";
import { CoverSection } from "@/sections/CoverSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { AboutVilainfoSection } from "@/sections/AboutVilainfoSection";
import { HubSolutionsSection } from "@/sections/HubSolutionsSection";
import { ProjectScopeSection } from "@/sections/ProjectScopeSection";
import { ProjectDeliverablesSection } from "@/sections/ProjectDeliverablesSection";
import { MetodoVilaSection } from "@/sections/MetodoVilaSection";
import { ClosingCtaSection } from "@/sections/ClosingCtaSection";
import { BonusInstitutionalSection } from "@/sections/BonusInstitutionalSection";
import { IncludedItemsSection } from "@/sections/IncludedItemsSection";
import { InvestmentSection } from "@/sections/InvestmentSection";
import { TimelineSection } from "@/sections/TimelineSection";
import { GuaranteeSection } from "@/sections/GuaranteeSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { FooterSection } from "@/sections/FooterSection";

export type ProposalPageProps = {
  fixed: FixedInstitutionalContent;
  proposal: ProposalDynamicContent;
};

export function ProposalPage({ fixed, proposal }: ProposalPageProps) {
  return (
    <div className="relative h-[100dvh] overflow-hidden bg-[var(--bg)] text-[var(--foreground)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(14,165,233,0.12),transparent),radial-gradient(900px_480px_at_100%_40%,rgba(79,70,229,0.14),transparent)]" />
      <PresentationShell>
        <SlideFrame>
          <CoverSection fixed={fixed} proposal={proposal} />
        </SlideFrame>
        <SlideFrame>
          <TestimonialsSection fixed={fixed} />
        </SlideFrame>
        <SlideFrame>
          <AboutVilainfoSection fixed={fixed} />
        </SlideFrame>
        <SlideFrame>
          <HubSolutionsSection fixed={fixed} />
        </SlideFrame>
        <SlideFrame>
          <ProjectScopeSection proposal={proposal} />
        </SlideFrame>
        {proposal.projectDeliverables.length > 0 ? (
          <SlideFrame>
            <ProjectDeliverablesSection proposal={proposal} />
          </SlideFrame>
        ) : null}
        <SlideFrame>
          <MetodoVilaSection fixed={fixed} />
        </SlideFrame>
        <SlideFrame>
          <ClosingCtaSection fixed={fixed} proposal={proposal} />
        </SlideFrame>
        <SlideFrame>
          <BonusInstitutionalSection fixed={fixed} proposal={proposal} />
        </SlideFrame>
        <SlideFrame>
          <IncludedItemsSection proposal={proposal} />
        </SlideFrame>
        <SlideFrame>
          <InvestmentSection proposal={proposal} />
        </SlideFrame>
        <SlideFrame>
          <TimelineSection proposal={proposal} />
        </SlideFrame>
        <SlideFrame>
          <GuaranteeSection proposal={proposal} />
        </SlideFrame>
        <SlideFrame>
          <ProcessSection fixed={fixed} />
        </SlideFrame>
        <SlideFrame>
          <FooterSection fixed={fixed} />
        </SlideFrame>
      </PresentationShell>
    </div>
  );
}
