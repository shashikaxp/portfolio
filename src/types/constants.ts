export interface CompanyData {
  id: number;
  name: string;
  country: string;
  position: string;
  time: string;
  description: string;
  bg: string;
  projects: ProjectDetails[];
}

export type ActionType = 'github' | 'visit' | 'ios' | 'android';
export type Ratio = 'portrait' | 'horizontal';

interface ActionButton {
  type: ActionType;
  data: string;
}

export interface ProjectScreenshot {
  src: string;
  ratio?: Ratio;
}

export interface ProjectDetails {
  id: string;
  name: string;
  img: string;
  descriptionFull: string[];
  descriptionShort: string;
  technologies: string[];
  contribution?: string[];
  features?: string[];
  screenShots: ProjectScreenshot[];
  actionButtons: ActionButton[];
}

export type DisplaySection = 'side-projects' | 'experience';
