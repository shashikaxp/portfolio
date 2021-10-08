import { ProjectDetails } from './../../../../types/constants';
import icon from './../../../../assets/img/projects/core-illumination/icon.png';

export const projects: ProjectDetails[] = [
  {
    id: 'coreillumination',
    name: 'Core Illumination',
    img: icon,
    actionButtons: [
      { type: 'visit', data: 'https://www.coreillumination.com/' },
    ],
    contribution: [],
    descriptionFull: [],
    descriptionShort: 'ASd',
    screenShots: [],
    technologies: ['Angular', 'Java', 'Postgres'],
  },
];
