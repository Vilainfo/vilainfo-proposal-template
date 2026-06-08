import type { Metadata } from "next";
import { fixedContent } from "@/content/fixed-content";
import proposalData from "@/content/proposals/mentor-produtor-cafe.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";
import { AuthForm } from "@/components/access/AuthForm";
import { isAuthenticated } from "@/lib/access";

const proposal = proposalData as ProposalDynamicContent;

export const metadata: Metadata = {
  title: "Proposta Plataforma integrada Mentor Produtor Café | Vilainfo",
  description:
    "Mentoria, gestão rural, rastreabilidade de lotes e marketplace de insumos — escopo fechado por módulo para Mentor Produtor Café.",
};

export default async function MentorProdutorCafePage() {
  if (!(await isAuthenticated("mentor-produtor-cafe"))) {
    return (
      <AuthForm
        slug="mentor-produtor-cafe"
        title="Plataforma integrada Mentor Produtor Café"
        description="Insira a senha de acesso enviada pelo seu contato comercial para visualizar a proposta."
      />
    );
  }
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
