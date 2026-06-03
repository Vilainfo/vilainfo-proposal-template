import type { Metadata } from "next";
import { fixedContent } from "@/content/fixed-content";
import proposalData from "@/content/proposals/gps-rastreamento.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";
import { AuthForm } from "@/components/access/AuthForm";
import { isAuthenticated } from "@/lib/access";

const proposal = proposalData as ProposalDynamicContent;

export const metadata: Metadata = {
  title: "Proposta Plataforma de gestão administrativa | Vilainfo",
  description:
    "Sistema personalizado para finanças, CRM, contratos e estoque de equipamentos — GPS Rastreamento.",
};

export default async function GpsRastreamentoPage() {
  if (!(await isAuthenticated("gps-rastreamento"))) {
    return (
      <AuthForm
        slug="gps-rastreamento"
        title="Plataforma de gestão administrativa"
        description="Insira a senha de acesso enviada pelo seu contato comercial para visualizar a proposta."
      />
    );
  }
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
