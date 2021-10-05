import { ProjectDetails } from './../../../../types/constants';

// ithiri
import icon from './.././../../../assets/img/projects/size-projects/ithiri/icon.png';
import ithir1 from './.././../../../assets/img/projects/size-projects/ithiri/ithiri1.png';
import ithir2 from './.././../../../assets/img/projects/size-projects/ithiri/ithiri2.png';
import ithir3 from './.././../../../assets/img/projects/size-projects/ithiri/ithiri3.png';
import ithir4 from './.././../../../assets/img/projects/size-projects/ithiri/ithiri4.png';
import ithir_m_1 from './.././../../../assets/img/projects/size-projects/ithiri/ithiri_m_1.png';
import ithir_m_2 from './.././../../../assets/img/projects/size-projects/ithiri/ithiri_m_2.png';

// unilife
import uniLifeIcon from './.././../../../assets/img/projects/size-projects/uniLife/icon.png';
import uniLife1 from './.././../../../assets/img/projects/size-projects/uniLife/demo1.gif';
import uniLife2 from './.././../../../assets/img/projects/size-projects/uniLife/demo2.gif';

// portfolio
import portfolio from './.././../../../assets/img/projects/size-projects/portfolio/icon.png';

export const projects: ProjectDetails[] = [
  {
    id: 'ithiri',
    actionButtons: [
      { type: 'visit', data: 'https://ithiri.vercel.app/' },
      { type: 'github', data: 'https://github.com/shashikaxp/ithiri' },
    ],
    contribution: ['rerddas', 'sdasd'],
    descriptionFull: '',
    descriptionShort: '',
    img: icon,
    name: 'ithiri',
    screenShots: [
      { height: 4, width: 3, src: ithir1 },
      { height: 4, width: 3, src: ithir2 },
      { height: 4, width: 3, src: ithir3 },
      { height: 4, width: 3, src: ithir4 },
      { height: 3, width: 4, src: ithir_m_1 },
      { height: 3, width: 4, src: ithir_m_2 },
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Tailwind',
      'Express',
      'TypeGraphQL',
      'TypeORM',
      'TypeScript',
      'PostgreSQL',
      'Redis',
    ],
  },
  {
    id: 'uniLife',
    actionButtons: [
      { type: 'github', data: 'https://github.com/shashikaxp/UniLife' },
    ],
    contribution: ['rerddas', 'sdasd'],
    descriptionFull: '',
    descriptionShort: '',
    img: uniLifeIcon,
    name: 'UniLife',
    screenShots: [
      { height: 4, width: 3, src: uniLife1 },
      { height: 3, width: 3, src: uniLife2 },
    ],
    technologies: ['Unity', 'C#'],
  },
  {
    id: 'web-portfolio',
    actionButtons: [{ type: 'visit', data: 'https://shashika.dev' }],
    contribution: ['rerddas', 'sdasd'],
    descriptionFull: '',
    descriptionShort: '',
    img: portfolio,
    name: 'Web Portfolio',
    screenShots: [],
    technologies: ['React', 'React Spring', 'Tailwind', 'TypeScript'],
  },
];
