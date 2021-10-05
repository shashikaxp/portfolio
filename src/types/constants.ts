export interface CompanyData {
  id: number;
  name: string;
  position: string;
  time: string;
  description: string;
  bg: string;
  projects: ProjectDetails[];
}

export type ActionType = 'github' | 'visit';

interface ActionButton {
  type: ActionType;
  data: string;
}

export interface ProjectScreenshot {
  src: string;
  width: number;
  height: number;
  sizes?: string[];
}

export interface ProjectDetails {
  id: string;
  name: string;
  img: string;
  descriptionFull: string;
  descriptionShort: string;
  technologies: string[];
  contribution: string[];
  screenShots: ProjectScreenshot[];
  actionButtons: ActionButton[];
}

export type DisplaySection = 'side-projects' | 'experience';
