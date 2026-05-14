/**
 * Registro central de rotas protegidas por autenticação.
 *
 * Cada slug corresponde a uma rota em `app/<slug>` e tem uma senha de acesso.
 * O cliente abre a rota, vê um formulário de login e, ao enviar a senha correta,
 * recebe um cookie HttpOnly (`vl_access_<slug>`) que libera o acesso àquela rota.
 *
 * Senhas foram geradas com `crypto.randomBytes(18).toString('base64url')`.
 * Para revogar/rotacionar um acesso, basta substituir a senha aqui.
 */

import { cookies } from "next/headers";

export type ProtectedSlug =
  | "viana-experience"
  | "sistema-de-gestao-notarial-a"
  | "sistema-de-gestao-notarial-b"
  | "todos-orcamentos-vi";

export const accessCredentials: Record<ProtectedSlug, string> = {
  "viana-experience": "KXpF_lyVF706FYq1U6kAd7iT",
  "sistema-de-gestao-notarial-a": "Cj-gxOsRFvNxjTxb8Bca56gW",
  "sistema-de-gestao-notarial-b": "FlxPlQJw6SnATuqwcYHE2JdR",
  "todos-orcamentos-vi": "5EgyntnwsA7RzY-Jd6iNeBMD",
};

export const protectedSlugs = Object.keys(accessCredentials) as ProtectedSlug[];

export function isProtectedSlug(value: unknown): value is ProtectedSlug {
  return typeof value === "string" && (protectedSlugs as string[]).includes(value);
}

export type ProposalListing = {
  slug: Exclude<ProtectedSlug, "todos-orcamentos-vi">;
  name: string;
  description: string;
};

export const proposalListings: ProposalListing[] = [
  {
    slug: "viana-experience",
    name: "Viana Experience",
    description: "Site institucional e experiência do evento",
  },
  {
    slug: "sistema-de-gestao-notarial-a",
    name: "Sistema de Gestão Notarial — Plano A",
    description: "Plataforma própria com substituição gradual do sistema atual",
  },
  {
    slug: "sistema-de-gestao-notarial-b",
    name: "Sistema de Gestão Notarial — Plano B",
    description: "Plataforma de apoio que convive com o sistema atual",
  },
];

export function accessCookieName(slug: ProtectedSlug): string {
  return `vl_access_${slug}`;
}

export async function isAuthenticated(slug: ProtectedSlug): Promise<boolean> {
  const cookieStore = await cookies();
  const value = cookieStore.get(accessCookieName(slug))?.value;
  return typeof value === "string" && value === accessCredentials[slug];
}

export function getProposalPath(
  slug: Exclude<ProtectedSlug, "todos-orcamentos-vi">,
): string {
  return `/${slug}`;
}
