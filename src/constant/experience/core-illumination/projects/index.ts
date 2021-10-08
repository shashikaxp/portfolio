import { ProjectDetails } from './../../../../types/constants';
import icon from './../../../../assets/img/projects/core-illumination/icon.png';

import ci1 from './../../../../assets/img/projects/core-illumination/projects/ci1.jpg';
import ci2 from './../../../../assets/img/projects/core-illumination/projects/ci2.png';
import ci3 from './../../../../assets/img/projects/core-illumination/projects/ci3.png';
import ci4 from './../../../../assets/img/projects/core-illumination/projects/ci4.png';
import ci5 from './../../../../assets/img/projects/core-illumination/projects/ci5.png';
import ci6 from './../../../../assets/img/projects/core-illumination/projects/ci6.png';
import ci7 from './../../../../assets/img/projects/core-illumination/projects/ci7.jpg';

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
    screenShots: [
      { src: ci1, ratio: 'horizontal' },
      { src: ci3, ratio: 'portrait' },
      { src: ci2, ratio: 'horizontal' },
      { src: ci7, ratio: 'portrait' },
      { src: ci4, ratio: 'horizontal' },
      { src: ci5, ratio: 'horizontal' },
      { src: ci6, ratio: 'horizontal' },
    ],
    technologies: ['Angular', 'Java', 'Postgres', 'Docker'],
  },
];
