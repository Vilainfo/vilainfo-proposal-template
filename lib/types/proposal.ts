/**
 * Schema central para conteúdo dinâmico de propostas.
 * Compatível com JSON importado, CMS headless ou API.
 */

export type ProposalFeature = {
  id: string;
  title: string;
  description?: string;
};

export type ProposalMilestone = {
  title: string;
  date?: string;
  description?: string;
};

export type ProposalPricingOption = {
  /** Ex.: "À vista" ou "A prazo" */
  label: string;
  /** Subtítulo curto da opção (ex.: "Pagamento único", "Entrada + parcelas") */
  caption?: string;
  /** Valor principal da opção (string formatada, ex.: "R$ 589.941,00") */
  price: string;
  /** Valor de referência tachado acima do preço promocional (ex.: "R$ 85.178,60") */
  compareAtPrice?: string;
  /** Bullets com detalhes da opção (entrada, parcelas, descontos, etc.) */
  details?: string[];
  /** Selo de destaque opcional (ex.: "Melhor custo total", "Mais flexibilidade") */
  highlight?: string;
};

export type ProposalRecurringPlan = {
  /** Ex.: "Suporte mensal — Horário comercial (8×5)" */
  label: string;
  /** Valor mensal formatado (ex.: "R$ 1.000,00/mês") */
  monthlyPrice: string;
  /** Subtítulo curto (ex.: "Plano opcional pós-garantia") */
  caption?: string;
  /** Descrição do que o plano cobre */
  description?: string;
  /** Lista do que está incluído no plano (horas, SLA, etc.) */
  includedItems?: string[];
  /** Selo curto opcional (ex.: "Contratado à parte", "Sob demanda") */
  highlight?: string;
};

export type ProposalPricing = {
  /** Ex.: "Desenvolvimento do Site X" */
  investmentHeadline: string;
  /** Ex.: "Proposta única" */
  offerLabel: string;
  /** Ex.: "Valor total pelos serviços contratados" */
  fullPriceCaption: string;
  fullPrice: string;
  entryPrice: string;
  installments: string;
  variableAmount: string;
  specialCondition: string;
  paymentConditions: string;
  /**
   * Quando presente (≥ 2 opções), a seção de investimento renderiza
   * cards lado a lado (ex.: "À vista" vs "A prazo") e suprime o headline
   * legado de `fullPrice`. Mantém compatibilidade com propostas antigas.
   */
  paymentOptions?: ProposalPricingOption[];
  /**
   * Quando presente, renderiza um card de plano recorrente (ex.: suporte
   * mensal pós-garantia) abaixo das opções de pagamento do projeto.
   * Diferente do investimento do projeto (one-time), é uma despesa
   * mensal opcional contratada à parte.
   */
  recurringPlan?: ProposalRecurringPlan;
};

export type ProposalTimeline = {
  deliveryTime: string;
  startDate: string;
  milestones: ProposalMilestone[];
  observations: string;
};

export type ProposalGuarantee = {
  guaranteeText: string;
  extraHours: string;
  serviceLevel: string;
};

/** Escopo detalhado por módulo de negócio (ex.: M0, M1, M2). */
export type ProposalScopeModule = {
  id: string;
  /** Código curto exibido no card (ex.: "M0", "M2") */
  code: string;
  title: string;
  description?: string;
  scopeItems: string[];
  /** Destaque visual para módulos prioritários */
  priority?: boolean;
};

/** Investimento segregado por módulo — à vista e a prazo. */
export type ProposalModulePrice = {
  moduleId: string;
  code: string;
  title: string;
  /** Valor à vista (melhor custo total do módulo) */
  cashPrice: string;
  /** Valor total a prazo (parcelamento do módulo) */
  installmentPrice: string;
  /** Prazo estimado de entrega do módulo (ex.: "1,5 mês") */
  deliveryTime?: string;
  /** Valor de referência opcional (lista) */
  listPrice?: string;
  note?: string;
};

export type ProposalModulePricing = {
  title?: string;
  description?: string;
  modules: ProposalModulePrice[];
  footnote?: string;
};

export type ProposalDynamicContent = {
  clientName: string;
  projectName: string;
  projectTagline: string;
  projectDescription: string;
  /** Preview real no mock (opcional); senão, arte procedural derivada do escopo */
  projectHeroImageUrl?: string | null;
  /** Bullets de escopo macro (alto nível) */
  macroScope: string[];
  projectGoals: string[];
  projectDeliverables: string[];
  projectDifferentials: string[];
  features: ProposalFeature[];
  includedItems: string[];
  supportType: string;
  warranty: string;
  bonusItems: string[];
  pricing: ProposalPricing;
  timeline: ProposalTimeline;
  guarantee: ProposalGuarantee;
  /**
   * Mock no navegador quando não há screenshot: hero de site vs painel de sistema.
   */
  previewKind: "site" | "system";
  /** KPIs no mock de sistema (negócio); opcional — senão usa macroScope */
  previewMetrics?: string[];
  /** Quando presente, renderiza slide de escopo por módulo após o escopo macro */
  scopeModules?: ProposalScopeModule[];
  /** Quando presente, renderiza slide de investimento por módulo após o preço total */
  modulePricing?: ProposalModulePricing;
};

export type InstitucionalTestimonial = {
  author: string;
  role: string;
  company: string;
  quote: string;
  /** Foto do PDF ou arquivo em /public */
  photoSrc?: string;
};

export type MetodoVilaPillar = {
  letter: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type FixedInstitutionalContent = {
  brandName: string;
  logoSrc: string;
  /** Bloco curto “Quem somos” (proposta comercial) */
  aboutShortTitle: string;
  aboutShortParagraphs: string[];
  /** Seção HUB — título e corpo institucional */
  hubEyebrow: string;
  hubTitle: string;
  hubParagraphs: string[];
  testimonialsEyebrow: string;
  testimonialsTitle: string;
  testimonials: InstitucionalTestimonial[];
  metodoVilaTitle: string;
  metodoVilaSubtitle: string;
  metodoVilaPillars: MetodoVilaPillar[];
  closingCta: {
    title: string;
    subtitle: string;
  };
  bonusStandard: {
    eyebrow: string;
    title: string;
    highlightLabel: string;
    highlightDescription: string;
  };
  processEyebrow: string;
  processTitle: string;
  processSteps: ProcessStep[];
  footer: {
    thankYou: string;
    handle: string;
  };
};
