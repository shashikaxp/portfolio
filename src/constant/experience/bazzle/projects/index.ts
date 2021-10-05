import { ProjectDetails } from './../../../../types/constants';

// bazzle events
import icon from './../../../../assets/img/projects/bazzle/icon.png';
import bazzle1 from './../../../../assets/img/projects/bazzle/bazzle1.png';
import bazzle2 from './../../../../assets/img/projects/bazzle/bazzle2.png';
import bazzle3 from './../../../../assets/img/projects/bazzle/bazzle3.png';
import bazzle4 from './../../../../assets/img/projects/bazzle/bazzle4.png';
import bazzle_m_1 from './../../../../assets/img/projects/bazzle/bazzle_m_1.png';
import bazzle_m_2 from './../../../../assets/img/projects/bazzle/bazzle_m_2.png';
import bazzle_m_3 from './../../../../assets/img/projects/bazzle/bazzle_m_3.png';
import bazzle_m_4 from './../../../../assets/img/projects/bazzle/bazzle_m_4.png';

// bazzle venue
import bazzle_v_icon from './../../../../assets/img/projects/bazzle-venue/icon.png';
import bazzle_v_1 from './../../../../assets/img/projects/bazzle-venue/bazzle_v_1.png';
import bazzle_v_2 from './../../../../assets/img/projects/bazzle-venue/bazzle_v_2.png';
import bazzle_v_3 from './../../../../assets/img/projects/bazzle-venue/bazzle_v_3.png';
import bazzle_v_4 from './../../../../assets/img/projects/bazzle-venue/bazzle_v_4.png';
import bazzle_vm_1 from './../../../../assets/img/projects/bazzle-venue/bazzle_vm_1.png';
import bazzle_vm_2 from './../../../../assets/img/projects/bazzle-venue/bazzle_vm_2.png';
import bazzle_vm_3 from './../../../../assets/img/projects/bazzle-venue/bazzle_vm_3.png';
import bazzle_vm_4 from './../../../../assets/img/projects/bazzle-venue/bazzle_vm_4.png';
import bazzle_vm_5 from './../../../../assets/img/projects/bazzle-venue/bazzle_vm_5.png';

export const projects: ProjectDetails[] = [
  {
    id: 'bazzle-events',
    descriptionFull: 'sad',
    descriptionShort: 'SAd',
    img: icon,
    name: 'Bazzle Events',
    screenShots: [
      { height: 3, width: 4, src: bazzle1 },
      { height: 3, width: 4, src: bazzle2 },
      { height: 3, width: 4, src: bazzle3 },
      { height: 3, width: 4, src: bazzle4 },
      { height: 4, width: 3, src: bazzle_m_1 },
      { height: 4, width: 3, src: bazzle_m_2 },
      { height: 4, width: 3, src: bazzle_m_3 },
      { height: 4, width: 3, src: bazzle_m_4 },
    ],
    technologies: [
      'Ionic',
      'Angular',
      'Firebase',
      'Cloud Functions',
      'Node.js',
      'Express.js',
    ],
    contribution: [],
    actionButtons: [],
  },
  {
    id: 'bazzle-vendors',
    descriptionFull: 'sad',
    descriptionShort: 'SAd',
    img: bazzle_v_icon,
    name: 'Bazzle Vendors',
    screenShots: [
      { height: 3, width: 4, src: bazzle_v_1 },
      { height: 3, width: 4, src: bazzle_v_2 },
      { height: 3, width: 4, src: bazzle_v_3 },
      { height: 3, width: 4, src: bazzle_v_4 },
      { height: 4, width: 3, src: bazzle_vm_1 },
      { height: 4, width: 3, src: bazzle_vm_2 },
      { height: 4, width: 3, src: bazzle_vm_3 },
      { height: 4, width: 3, src: bazzle_vm_4 },
      { height: 4, width: 3, src: bazzle_vm_5 },
    ],
    technologies: [
      'Framework7',
      'Firebase',
      'Cloud Functions',
      'Node.js',
      'Express.js',
    ],
    contribution: [],
    actionButtons: [],
  },
];
