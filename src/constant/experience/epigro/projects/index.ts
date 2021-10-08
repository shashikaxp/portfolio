import { ProjectDetails } from './../../../../types/constants';

import epigro_icon from './../../../../assets/img/projects/epigro/epigro_icon.jpeg';
import epigro_1 from './../../../../assets/img/projects/epigro/epigro_1.png';
import epigro_2 from './../../../../assets/img/projects/epigro/epigro_2.png';
import epigro_3 from './../../../../assets/img/projects/epigro/epigro_3.png';
import epigro_mobile_1 from './../../../../assets/img/projects/epigro/epigro_mobile_1.png';
import epigro_mobile_2 from './../../../../assets/img/projects/epigro/epigro_mobile_2.png';
import epigro_mobile_3 from './../../../../assets/img/projects/epigro/epigro_mobile_3.png';

export const projects: ProjectDetails[] = [
  {
    id: 'epigro',
    name: 'Epigro',
    contribution: [
      'Add new web pages to the existing website',
      'Complete maintenance on existing website',
      'Update the website to have more mobile responsiveness',
      'Provide technical support to the office staff',
    ],
    descriptionShort:
      'This is the official website of Epigro (Pvt) Ltd developed to provide updated customers with latest products in the energy serving industry',
    descriptionFull: [
      'Epigro is an integrated energy company, becoming a trusted business providing and installing quality solar systems to the residential, commercial, and industrial markets. This is the official website of Epigro (Pvt) Ltd developed to provide updated customers with latest products in the energy serving industry',
    ],
    img: epigro_icon,
    actionButtons: [
      {
        type: 'visit',
        data: 'https://epigro.com/',
      },
    ],
    screenShots: [
      { src: epigro_1, ratio: 'horizontal' },
      { src: epigro_2, ratio: 'horizontal' },
      { src: epigro_3, ratio: 'horizontal' },
      { src: epigro_mobile_1, ratio: 'portrait' },
      { src: epigro_mobile_2, ratio: 'portrait' },
      { src: epigro_mobile_3, ratio: 'portrait' },
    ],
    technologies: ['HTML', 'CSS', 'jQuery', 'Bootstrap'],
  },
];
