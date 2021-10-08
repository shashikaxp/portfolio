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
    contribution: ['asd', 'asd'],
    descriptionShort: 'asd',
    descriptionFull: [],
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
