export enum PortfolioCategory {
  PROJECT = 'project',
  EXPERIENCE = 'experience',
  SKILL = 'skill',
  RESEARCH = 'research',
  HOBBY = 'hobby',
  MOVIE = 'movie',
  MUSIC = 'music'
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;  // URL or relative path
  tags: string[];  // Technologies, skills, or categories
  link?: string;   // External link (GitHub, live demo, etc.)
  videoUrl?: string;  // For project demos
  category: PortfolioCategory;
  featured?: boolean;
  date?: string;  // For experience entries
  company?: string;  // For experience entries
}

export interface CategoryConfig {
  id: string;
  name: string;
  category: PortfolioCategory;
  items: PortfolioItem[];
}

export interface HeroContent {
  name: string;
  title: string;
  summary: string;
  backgroundImage: string;
  ctaButtons: {
    primary: { label: string; action: string };
    secondary: { label: string; action: string };
  };
}
