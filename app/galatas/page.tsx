import type { Metadata } from "next";
import { fixedContent } from "@/content/fixed-content";
import proposalData from "@/content/proposals/galatas.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";
import { AuthForm } from "@/components/access/AuthForm";
import { isAuthenticated } from "@/lib/access";

const proposal = proposalData as ProposalDynamicContent;

export const metadata: Metadata = {
  title: "Proposta Presença digital integrada Gálatas | Vilainfo",
  description:
    "Refresh de identidade, materiais comerciais, redes sociais e site institucional para a Gálatas — entrega em 7 a 10 dias úteis.",
};

export default async function GalatasPage() {
  if (!(await isAuthenticated("galatas"))) {
    return (
      <AuthForm
        slug="galatas"
        title="Presença digital integrada Gálatas"
        description="Insira a senha de acesso enviada pelo seu contato comercial para visualizar a proposta."
      />
    );
  }
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
