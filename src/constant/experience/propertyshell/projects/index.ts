import { ProjectDetails } from './../../../../types/constants';

import propertyshellIcon from './../../../../assets/img/projects/propertyshell/propertyshell.jpeg';

// AF Raymond
import ps1 from './../../../../assets/img/projects/propertyshell/ps1.png';
import ps2 from './../../../../assets/img/projects/propertyshell/ps2.jpeg';
import ps3 from './../../../../assets/img/projects/propertyshell/ps3.jpeg';
import ps4 from './../../../../assets/img/projects/propertyshell/ps4.png';

export const projects: ProjectDetails[] = [
  {
    id: 'proeprtyshell',
    descriptionFull: [
      'Property Shell is your all-in-one property development and project marketing technology platform for managing sales on your property projects.',
      'It’s an intuitive, all-in-one solution to drive collaboration, manage stock, close more deals — and everything in between.',
    ],
    descriptionShort:
      'An All-in-one event planning platform that allows event organisers to Find, Hire and Manage all the event vendors and plan their event, in one place',
    img: propertyshellIcon,
    name: 'ProeprtyShell',
    screenShots: [
      { ratio: 'horizontal', src: ps1 },
      { ratio: 'portrait', src: ps2 },
      { ratio: 'horizontal', src: ps3 },
      { ratio: 'horizontal', src: ps4 },
    ],
    technologies: ['PHP', 'React', 'jQuery', 'TypeScript'],
    contribution: [
      'Create and integrate APIs (Application Programming Interfaces) to facilitate communication between different components of the application.',
      'Write clean, efficient, and scalable code to communicate with other third party applications/services.',
      'Conduct thorough testing and debugging of applications to identify and fix issues or bugs.',
      'Develop user-facing features and components using HTML, CSS, and JavaScript.',
    ],
    actionButtons: [
      {
        type: 'visit',
        data: 'https://propertyshell.com/',
      },
    ],
  },
];
