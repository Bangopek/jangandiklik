export interface Fortune {
  id: number;
  text: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface OrgCard {
  id: string;
  name: string;
  role: string;
  color: string;
  bgGradient: string;
}

export interface InterestItem {
  title: string;
  icon: string;
  description: string;
  bgColor: string;
}

export type ThemeMode = 'waras' | 'serius'; // waras = light playful, serius = dark mode
