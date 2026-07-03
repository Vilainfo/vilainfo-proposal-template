import type { Metadata } from "next";
import { fixedContent } from "@/content/fixed-content";
import proposalData from "@/content/proposals/sidney-plataforma-psicologo.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";
import { AuthForm } from "@/components/access/AuthForm";
import { isAuthenticated } from "@/lib/access";

const proposal = proposalData as ProposalDynamicContent;

export const metadata: Metadata = {
  title: "Proposta Plataforma de gestão para psicólogos clínicos | Vilainfo",
  description:
    "Agenda recorrente, financeiro integrado, prontuário com IA e chatbot de WhatsApp — nichado para psicologia clínica.",
};

export default async function SidneyPlataformaPsicologoPage() {
  if (!(await isAuthenticated("sidney-plataforma-psicologo"))) {
    return (
      <AuthForm
        slug="sidney-plataforma-psicologo"
        title="Plataforma de gestão para psicólogos clínicos"
        description="Insira a senha de acesso enviada pelo seu contato comercial para visualizar a proposta."
      />
    );
  }
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
