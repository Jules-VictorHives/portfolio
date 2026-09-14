export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "Juin 2025 — Aujourd’hui",
    role: "UI Designer",
    company: "Groupe Elcimaï",
    description:
      "Refonte du Design System WeBank, parcours bancaires web/mobile, hand-off Design → Dev."
  },
  {
    period: "Septembre 2023 - Mars 2025",
    role: "UX-UI Designer",
    company: "Orano",
    description:
      "Conception d'applications métier en environnement industriel nucléaire, Design System à partir d'un UI kit existant.",
  },
  {
    period: "Février 2021 - Août 2023",
    role: "Web Designer & Intégrateur",
    company: "Agence Harsène",
    description:
      "Conception et intégration de sites vitrine et e-commerce, no-code.",
  },
  {
    period: "Décembre 2022 - Février 2025",
    role: "Projet étudiant",
    company: "Hives app",
    description:
      "SaaS de veille digitale, projet fondé en Master avec une équipe de 4 étudiants, finaliste Altern'up.",
  },
];
