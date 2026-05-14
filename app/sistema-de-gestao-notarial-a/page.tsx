import type { Metadata } from "next";
import { fixedContent } from "@/content/fixed-content";
import proposalData from "@/content/proposals/sistema-de-gestao-notarial-a.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";

const proposal = proposalData as ProposalDynamicContent;

export const metadata: Metadata = {
  title: "Proposta Sistema de Gestão Notarial — Plano A | Vilainfo",
  description:
    "Plataforma própria de gestão notarial — substituição gradual do sistema de terceiros para o 5º Serviço de Notas de Maceió-AL.",
};

export default function SistemaDeGestaoNotarialAPage() {
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
