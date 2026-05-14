import { fixedContent } from "@/content/fixed-content";
import sampleProposal from "@/content/proposals/sample.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";

const proposal = sampleProposal as ProposalDynamicContent;

export default function Home() {
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
