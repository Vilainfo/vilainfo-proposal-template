import type { FixedInstitutionalContent } from "@/lib/types/proposal";

/**
 * Conteúdo institucional fixo da Vilainfo.
 * Textos alinhados ao PDF de referência e ao site institucional.
 */
export const fixedContent: FixedInstitutionalContent = {
  brandName: "Vilainfo",
  logoSrc: "/branding/vilainfo-marca-horizontal.png",
  aboutShortTitle: "Vilainfo",
  aboutShortParagraphs: [
    "Somos uma empresa especializada em soluções tecnológicas, com mais de 30 anos de experiência no mercado. Nossa missão é transformar ideias em realidade digital oferecendo serviços de desenvolvimento, segurança e infraestrutura de TI com excelência e inovação.",
    "Trabalhamos com as mais modernas tecnologias e metodologias ágeis, garantindo entregas de qualidade no prazo estabelecido.",
  ],
  hubEyebrow: "Sobre nós",
  hubTitle: "Mais que uma Empresa, somos um HUB de Soluções",
  hubParagraphs: [
    "Na Vilainfo, unimos tradição e inovação para entregar resultados concretos. Há mais de três décadas, atuamos no desenvolvimento de sistemas personalizados, integração de tecnologias e automação de processos, sempre com foco em eficiência, escalabilidade e valor para nossos clientes.",
    "Nosso papel vai além do código: conectamos pessoas, estratégias e tecnologia para impulsionar negócios de todos os portes. Seja em sistemas corporativos, soluções web, aplicativos ou consultoria, oferecemos um ecossistema completo que transforma desafios em oportunidades digitais.",
    "Com uma equipe multidisciplinar e altamente qualificada, somos parceiros estratégicos na jornada de transformação digital de empresas que buscam crescer de forma inteligente, segura e sustentável.",
  ],
  testimonialsEyebrow: "Confiança comprovada",
  testimonialsTitle: "O que nossos clientes dizem",
  testimonials: [
    {
      author: "Vanderleia Martins",
      role: "Operações",
      company: "Maximus",
      photoSrc: "/branding/maximus-portal.png",
      quote:
        "A VilaInfo trouxe um novo nível de previsibilidade e segurança para nossas entregas em produção. Com processos bem definidos e integração entre times, passamos a ter mais confiança no que seria entregue, quando seria entregue e, principalmente, na qualidade do que ia ao ar. Isso reduziu retrabalho e aumentou a satisfação dos nossos usuários.",
    },
    {
      author: "Victor Gripa",
      role: "Sócio",
      company: "Hospital Questiona",
      photoSrc: "/branding/questiona-portal.png",
      quote:
        "A Vilainfo esteve ao nosso lado desde os primeiros passos do Questiona, contribuindo com profissionalismo, expertise e, acima de tudo, uma dedicação admirável. Cuidaram de cada detalhe como se fossem parte do nosso time.",
    },
  ],
  metodoVilaTitle: "Método VILA",
  metodoVilaSubtitle:
    "Framework de entrega que alinha visão de produto, engenharia e evolução contínua do seu projeto.",
  metodoVilaPillars: [
    {
      letter: "V",
      title: "Visão estratégica do produto",
      description:
        "Clareza de propósito, priorização e alinhamento do que será construído com o resultado esperado para o negócio.",
    },
    {
      letter: "I",
      title: "Infraestrutura escalável",
      description:
        "Base técnica preparada para crescer com segurança, performance e manutenção sustentável.",
    },
    {
      letter: "L",
      title: "Liderança técnica e desenvolvimento",
      description:
        "Condução experiente da solução, do desenho à implementação, com rigor de qualidade e comunicação transparente.",
    },
    {
      letter: "A",
      title: "Aceleração contínua",
      description:
        "Ciclos de melhoria, entregas previsíveis e evolução do produto após o go-live.",
    },
  ],
  closingCta: {
    title: "O que foi apresentado, faz sentido pra você?",
    subtitle:
      "Esperamos que vocês sejam o nosso próximo case de sucesso.",
  },
  bonusStandard: {
    eyebrow: "Bônus",
    title: "Feche hoje e leve como bônus:",
    highlightLabel: "CONSULTORIA",
    highlightDescription:
      "Ganhe 10 horas de consultoria para desenvolvimento de outro projeto",
  },
  processEyebrow: "Próximos passos",
  processTitle: "Como funcionará a partir de agora",
  processSteps: [
    {
      step: 1,
      title: "Reunião de apresentação",
      description:
        "Alinhamos entendimento, expectativas e o desenho da solução proposta.",
    },
    {
      step: 2,
      title: "Assinatura de contrato",
      description:
        "Formalizamos escopo, prazos e condições para iniciar com segurança jurídica e operacional.",
    },
    {
      step: 3,
      title: "Reunião de alinhamento inicial",
      description:
        "Kick-off técnico e de produto: fluxos, conteúdos, integrações e responsáveis.",
    },
    {
      step: 4,
      title: "Boas-vindas ao grupo no WhatsApp",
      description:
        "Canal dedicado para dúvidas rápidas, alinhamentos e acompanhamento diário.",
    },
    {
      step: 5,
      title: "Reunião de aprovação",
      description:
        "Validação das entregas com checklist de qualidade antes da publicação.",
    },
    {
      step: 6,
      title: "Publicação do site",
      description:
        "Go-live monitorado, com suporte na virada e ajustes finos necessários.",
    },
  ],
  footer: {
    thankYou: "Obrigado!",
    handle: "@Vilainfo",
  },
};
