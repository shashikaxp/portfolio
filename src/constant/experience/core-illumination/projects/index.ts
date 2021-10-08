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
    contribution: [
      'Address complex bugs in effective manner',
      'Add new features to the application requested by the current users',
      'Use third party libraries such as ‘Bryntum web components’, ‘Chart.js’, and ‘Material Drag & Drop’ for new features',
    ],
    descriptionFull: [
      'ESPMI - It is a complete end to end Project and Portfolio Management tool which assist in making decision by accessing the most up to date delivery data anytime, anywhere in the 1 tool, enabling full traceability and visibility at all levels and easily identify trends and items to focus on',
    ],
    descriptionShort:
      'ESPMI - It is a complete end to end Project and Portfolio Management tool',
    screenShots: [],
    technologies: ['Angular', 'Java', 'Postgres', 'Docker'],
  },
];
