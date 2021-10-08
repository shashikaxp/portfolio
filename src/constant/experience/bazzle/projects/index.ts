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
    descriptionFull: [],
    descriptionShort: 'SAd',
    img: icon,
    name: 'Bazzle Events',
    screenShots: [
      { ratio: 'horizontal', src: bazzle1 },
      { ratio: 'portrait', src: bazzle_m_1 },
      { ratio: 'horizontal', src: bazzle2 },
      { ratio: 'portrait', src: bazzle_m_2 },
      { ratio: 'horizontal', src: bazzle3 },
      { ratio: 'portrait', src: bazzle_m_3 },
      { ratio: 'horizontal', src: bazzle4 },
      { ratio: 'portrait', src: bazzle_m_4 },
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
    descriptionFull: [],
    descriptionShort: 'SAd',
    img: bazzle_v_icon,
    name: 'Bazzle Vendors',
    screenShots: [
      { ratio: 'horizontal', src: bazzle_v_1 },
      { ratio: 'portrait', src: bazzle_vm_1 },
      { ratio: 'horizontal', src: bazzle_v_2 },
      { ratio: 'portrait', src: bazzle_vm_2 },
      { ratio: 'horizontal', src: bazzle_v_3 },
      { ratio: 'portrait', src: bazzle_vm_3 },
      { ratio: 'horizontal', src: bazzle_v_4 },
      { ratio: 'portrait', src: bazzle_vm_4 },
      { ratio: 'portrait', src: bazzle_vm_5 },
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
