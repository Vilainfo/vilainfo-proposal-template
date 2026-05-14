import type { Metadata } from "next";
import { fixedContent } from "@/content/fixed-content";
import proposalData from "@/content/proposals/sistema-de-gestao-notarial-b.dynamic.json";
import type { ProposalDynamicContent } from "@/lib/types/proposal";
import { ProposalPage } from "@/sections/ProposalPage";

const proposal = proposalData as ProposalDynamicContent;

export const metadata: Metadata = {
  title: "Proposta Sistema de Gestão Notarial — Plano B | Vilainfo",
  description:
    "Plataforma de apoio ao dia a dia da serventia que convive com o sistema atual do 5º Serviço de Notas de Maceió-AL.",
};

export default function SistemaDeGestaoNotarialBPage() {
  return <ProposalPage fixed={fixedContent} proposal={proposal} />;
}
