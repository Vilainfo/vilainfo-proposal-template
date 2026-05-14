import type { Metadata } from "next";
import { fixedContent } from "@/content/fixed-content";
import proposalData from "@/content/proposals/viana-experience.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";
import { AuthForm } from "@/components/access/AuthForm";
import { isAuthenticated } from "@/lib/access";

const proposal = proposalData as ProposalDynamicContent;

export const metadata: Metadata = {
  title: "Proposta Viana Experience | Vilainfo",
  description:
    "Site institucional e experiência do evento Viana Experience — proposta comercial Vilainfo.",
};

export default async function VianaExperiencePage() {
  if (!(await isAuthenticated("viana-experience"))) {
    return (
      <AuthForm
        slug="viana-experience"
        title="Proposta Viana Experience"
        description="Insira a senha de acesso enviada pelo seu contato comercial para visualizar a proposta."
      />
    );
  }
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
