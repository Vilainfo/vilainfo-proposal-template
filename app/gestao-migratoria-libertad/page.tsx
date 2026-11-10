import type { Metadata } from "next";
import { fixedContent } from "@/content/fixed-content";
import proposalData from "@/content/proposals/gestao-migratoria-libertad.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";
import { AuthForm } from "@/components/access/AuthForm";
import { isAuthenticated } from "@/lib/access";

const proposal = proposalData as ProposalDynamicContent;

export const metadata: Metadata = {
  title: "Proposta Gestão migratória Libertad | Vilainfo",
  description:
    "O cliente manda tudo pelo WhatsApp e o documento cai sozinho no checklist de cada pessoa da família — Plano Cliente Fundador.",
};

export default async function GestaoMigratoriaLibertadPage() {
  if (!(await isAuthenticated("gestao-migratoria-libertad"))) {
    return (
      <AuthForm
        slug="gestao-migratoria-libertad"
        title="Gestão migratória Libertad"
        description="Insira a senha de acesso enviada pelo seu contato comercial para visualizar a proposta."
      />
    );
  }
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
