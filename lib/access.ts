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
  | "william-silva-imobiliaria"
  | "gps-rastreamento"
  | "mentor-produtor-cafe"
  | "sidney-plataforma-psicologo"
  | "todos-orcamentos-vi";

export const accessCredentials: Record<ProtectedSlug, string> = {
  "viana-experience": "KXpF_lyVF706FYq1U6kAd7iT",
  "sistema-de-gestao-notarial-a": "Cj-gxOsRFvNxjTxb8Bca56gW",
  "sistema-de-gestao-notarial-b": "FlxPlQJw6SnATuqwcYHE2JdR",
  "william-silva-imobiliaria": "u0qWkIEWRBpkovjVDDoZXYtz",
  "gps-rastreamento": "9p-_7_DU_emvF0CWnrGv19_m",
  "mentor-produtor-cafe": "v5hr7FmsMNUUXakZSC2f1iu7",
  "sidney-plataforma-psicologo": "4n4bYNDTrk3saAvbLxS72bun",
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
  {
    slug: "william-silva-imobiliaria",
    name: "Plataforma integrada de gestão imobiliária",
    description: "Gestão de leads, contratos, vistorias, cobrança e demonstrativos — Imobiliária William Silva",
  },
  {
    slug: "gps-rastreamento",
    name: "Plataforma de gestão administrativa",
    description: "Finanças, CRM B2B, contratos e estoque de rastreadores/chips — GPS Rastreamento",
  },
  {
    slug: "mentor-produtor-cafe",
    name: "Plataforma integrada Mentor Produtor Café",
    description: "Mentoria, gestão rural, rastreabilidade e marketplace de insumos — Jair Monte",
  },
  {
    slug: "sidney-plataforma-psicologo",
    name: "Plataforma de gestão para psicólogos clínicos",
    description: "Agenda recorrente, financeiro integrado, prontuário com IA e chatbot de WhatsApp — Sidney Manthey",
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
