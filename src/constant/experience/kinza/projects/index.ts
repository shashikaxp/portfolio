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
    descriptionShort:
      'Snailruns is an online platform for creating and delivering personalized greeting cards in Sri Lanka',
    descriptionFull: [
      'Snailruns is an online platform for creating and delivering personalized greeting cards in Sri Lanka.',
      'They offer a vast collection of card designs under various occasions and users can create their own greeting cards by uploading pictures and ideas.',
    ],
    actionButtons: [],
    contribution: [
      'Design and implement the front-end application using WordPress',
      'Integrate WooCommerce plugin to support e-commerce functionalities',
      'Use html canvas to develop a platform that enables users to create and edit personalized greeting cards',
    ],
    screenShots: [],
    technologies: ['Wordpress', 'WooCommerce', 'PHP', 'HTML', 'CSS'],
  },
  {
    id: 'afraymond',
    name: 'A.F. Raymond',
    img: afr,
    descriptionShort:
      "A F Raymond is Sri Lanka's and the region's oldest firm of Funeral Directors",
    descriptionFull: [
      "A F Raymond is Sri Lanka's and the region's oldest firm of Funeral Directors.",
      "They offer webcast of a funeral service taking place from within the parlour. Viewed live over the internet, it allows everyone you love to attend your loved one's service, no matter where they are in the world.",
    ],
    actionButtons: [{ type: 'visit', data: 'https://afraymond.com/' }],
    contribution: [
      'Develop a full front-end application',
      'Connect with a small database to fetch data and populate the front end',
      'Confirm that completed website meet client requirement',
    ],
    screenShots: [
      { src: afr1, ratio: 'horizontal' },
      { src: afr_mobile_1, ratio: 'portrait' },
      { src: afr2, ratio: 'horizontal' },
      { src: afr_mobile_2, ratio: 'portrait' },
      { src: afr3, ratio: 'horizontal' },
      { src: afr4, ratio: 'horizontal' },
    ],
    technologies: ['PHP', 'HTML', 'CSS'],
  },
];
