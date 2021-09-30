export interface Project {
  id: string;
  name: string;
  description: string;
  involvement: string;
  technologies: string[];
  image: string;
}

export interface CompanyData {
  id: number;
  name: string;
  position: string;
  time: string;
  description: string;
  bg: string;
  projects: Project[];
}

export type ActionType = 'github' | 'visit';
