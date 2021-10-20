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
    descriptionFull: [
      'Bazzle is a platform that solves the vendor management and planning problems for event organisers.',
      'By using its rich pool of pre-screened vendors, event organisers can Find, Hire & Manage all the vendors required for an event, with a single request. Further to this, they plan the event end-to-end in the same platform.',
    ],
    descriptionShort:
      'An All-in-one event planning platform that allows event organisers to Find, Hire and Manage all the event vendors and plan their event, in one place',
    img: icon,
    name: 'Bazzle',
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
      'Node.js',
      'Express.js',
      'TypeScript',
      'Firebase',
      'Cloud Functions',
    ],
    contribution: [
      'Collect and document clients requirements and develop logical and physical specifications',
      'Develop a full ionic application that supports web, mobile and tablet devices',
      'Connect firebase SDK to fetch and manage application data',
      'Develop cloud functions and REST API to handle major application functionalities',
      'Integrate the stripe payment gateway and Zoom marketplace',
      'Apply software changes and alterations based on specific design specifications',
      'Add new features to the application requested by the current customers',
    ],
    actionButtons: [
      {
        type: 'visit',
        data: 'https://hellobazzle.com/',
      },
      {
        type: 'ios',
        data: 'https://apps.apple.com/au/app/bazzle-party-planning/id1440616043',
      },
      {
        type: 'android',
        data: 'https://play.google.com/store/apps/details?id=com.mpdp.spotfood&hl=en_AU',
      },
    ],
  },
  {
    id: 'bazzle-vendors',
    descriptionFull: [
      'Bazzle Vendors is created to facilitate the vendors registered with Bazzle platform. They can monitor their bookings, invoices, earnings, customer reviews, etc...',
    ],
    descriptionShort:
      'Bazzle Vendors is created to facilitate the vendors registered with Bazzle platform. They can monitor their bookings, invoices, earnings, customer reviews, etc...',
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
      'Node.js',
      'Express.js',
      'TypeScript',
      'Firebase',
      'Cloud Functions',
    ],
    contribution: [
      'Manage requirements analysis, detailed design, software development, and documentation, integration and deployment.',
      'Investigate and collected information to resolve process or design issues found in the code base.',
      'Implement UI changes using Framework7 components, introduce a new build system using Webpack and add new features to the application.',
      'Identify software performance improvements through test driven development, automated, and comprehensive integration testing.',
    ],
    actionButtons: [
      {
        type: 'visit',
        data: 'https://hellobazzle.com/',
      },
      {
        type: 'ios',
        data: 'https://apps.apple.com/au/app/spotfood-vendor/id1440616684',
      },
      {
        type: 'android',
        data: 'https://play.google.com/store/apps/details?id=com.mpdp.spotfoodVenue',
      },
    ],
  },
];
