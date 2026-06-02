import type { Metadata } from "next";
import { fixedContent } from "@/content/fixed-content";
import proposalData from "@/content/proposals/william-silva-imobiliaria.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";
import { AuthForm } from "@/components/access/AuthForm";
import { isAuthenticated } from "@/lib/access";

const proposal = proposalData as ProposalDynamicContent;

export const metadata: Metadata = {
  title: "Proposta Plataforma integrada de gestão imobiliária | Vilainfo",
  description:
    "Software personalizado para integrar e automatizar a jornada operacional da Imobiliária William Silva.",
};

export default async function WilliamSilvaImobiliariaPage() {
  if (!(await isAuthenticated("william-silva-imobiliaria"))) {
    return (
      <AuthForm
        slug="william-silva-imobiliaria"
        title="Plataforma integrada de gestão imobiliária"
        description="Insira a senha de acesso enviada pelo seu contato comercial para visualizar a proposta."
      />
    );
  }
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
