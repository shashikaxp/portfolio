import { ProjectDetails } from './../../../../types/constants';

import snailRuns from './../../../../assets/img/projects/kinza/sr.png';

// AF Raymond
import afr from './../../../../assets/img/projects/kinza/afr/afr_icon.jpeg';
import afr1 from './../../../../assets/img/projects/kinza/afr/afr_1.png';
import afr2 from './../../../../assets/img/projects/kinza/afr/afr_2.png';
import afr3 from './../../../../assets/img/projects/kinza/afr/afr_3.png';
import afr4 from './../../../../assets/img/projects/kinza/afr/afr_4.png';
import afr_mobile_1 from './../../../../assets/img/projects/kinza/afr/afr_mobile_1.png';
import afr_mobile_2 from './../../../../assets/img/projects/kinza/afr/afr_mobile_2.png';

export const projects: ProjectDetails[] = [
  {
    id: 'snailruns',
    name: 'SnailRuns',
    img: snailRuns,
    descriptionShort: 'asdasd',
    descriptionFull: [],
    actionButtons: [],
    contribution: ['Sadas', 'ASdsad', 'asdasd'],
    screenShots: [],
    technologies: ['Wordpress', 'WooCommerce', 'PHP', 'HTML', 'CSS'],
  },
  {
    id: 'afraymond',
    name: 'A.F. Raymond',
    img: afr,
    descriptionShort: 'asdasd',
    descriptionFull: [],
    actionButtons: [{ type: 'visit', data: 'https://afraymond.com/' }],
    contribution: ['Sadas', 'ASdsad', 'asdasd'],
    screenShots: [
      { src: afr1, ratio: 'horizontal' },
      { src: afr2, ratio: 'horizontal' },
      { src: afr3, ratio: 'horizontal' },
      { src: afr4, ratio: 'horizontal' },
      { src: afr_mobile_1, ratio: 'portrait' },
      { src: afr_mobile_2, ratio: 'portrait' },
    ],
    technologies: ['PHP', 'HTML', 'CSS'],
  },
];
