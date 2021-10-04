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
    descriptionFull: 'asdsd',
    img: epigro_icon,
    actionButtons: [
      {
        type: 'visit',
        data: 'https://epigro.com/',
      },
    ],
    screenShots: [
      {
        src: epigro_1,
        height: 1,
        width: 1.5,
      },
      {
        src: epigro_2,
        height: 1,
        width: 1.5,
      },
      {
        src: epigro_3,
        height: 0.75,
        width: 2.5,
      },
      {
        src: epigro_mobile_1,
        height: 1,
        width: 0.95,
      },
      {
        src: epigro_mobile_2,
        height: 1,
        width: 0.95,
      },
      {
        src: epigro_mobile_3,
        height: 1,
        width: 0.95,
      },
    ],
    technologies: ['HTML', 'CSS', 'jQuery', 'Bootstrap'],
  },
];
