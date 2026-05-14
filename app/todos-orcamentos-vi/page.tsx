import type { Metadata } from "next";
import Image from "next/image";
import { AuthForm } from "@/components/access/AuthForm";
import { ProposalLinkCard } from "@/components/access/ProposalLinkCard";
import { SignOutButton } from "@/components/access/SignOutButton";
import {
  accessCredentials,
  getProposalPath,
  isAuthenticated,
  proposalListings,
} from "@/lib/access";

export const metadata: Metadata = {
  title: "Todos os orçamentos | Vilainfo",
  description:
    "Listagem interna dos orçamentos Vilainfo com senhas de acesso para compartilhar com clientes.",
  robots: { index: false, follow: false },
};

export default async function TodosOrcamentosViPage() {
  if (!(await isAuthenticated("todos-orcamentos-vi"))) {
    return (
      <AuthForm
        slug="todos-orcamentos-vi"
        title="Painel interno Vilainfo"
        description="Área restrita à equipe Vilainfo. Insira a senha de acesso para visualizar a listagem de orçamentos."
      />
    );
  }

  return (
    <main className="relative min-h-[100dvh] bg-[var(--bg)] px-6 py-16 text-[var(--foreground)] sm:px-10 lg:px-16">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(14,165,233,0.12),transparent),radial-gradient(900px_480px_at_100%_40%,rgba(79,70,229,0.14),transparent)]" />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="flex flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between gap-4">
            <Image
              src="/branding/vilainfo-marca-horizontal.png"
              alt="Vilainfo"
              width={200}
              height={64}
              priority
              className="h-auto w-36 select-none"
            />
            <SignOutButton slug="todos-orcamentos-vi" />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/80">
              Painel interno
            </p>
            <h1 className="font-display text-3xl text-white sm:text-4xl">
              Todos os orçamentos
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted-strong)] sm:text-base">
              Listagem dos orçamentos publicados. Para cada um, o link é limpo e
              a senha de acesso fica isolada — copie ambos e envie ao cliente.
              Ao abrir o link, o cliente verá um formulário para inserir a senha.
            </p>
          </div>
        </header>

        <section
          aria-labelledby="propostas-heading"
          className="flex flex-col gap-6"
        >
          <div className="flex items-end justify-between gap-4">
            <h2
              id="propostas-heading"
              className="font-display text-lg text-white/90"
            >
              {proposalListings.length} propostas ativas
            </h2>
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/40">
              Confidencial
            </span>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {proposalListings.map((proposal) => (
              <li key={proposal.slug}>
                <ProposalLinkCard
                  name={proposal.name}
                  description={proposal.description}
                  href={getProposalPath(proposal.slug)}
                  password={accessCredentials[proposal.slug]}
                />
              </li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-white/10 pt-6 text-xs text-white/50">
          Compartilhe link e senha somente com clientes autorizados. Para
          revogar/rotacionar uma senha, atualize{" "}
          <code className="font-mono text-white/70">lib/access.ts</code>.
        </footer>
      </div>
    </main>
  );
}
