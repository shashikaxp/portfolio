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

interface ActionButton {
  type: ActionType;
  data: string;
}

export interface ProjectDetails {
  id: string;
  projectName: string;
  projectImg: string;
  clientDescription: string;
  projectDetails: {
    technologies: string[];
    responsibilities: string[];
    screenShots: string[];
    actionButtons: ActionButton[];
  };
}
