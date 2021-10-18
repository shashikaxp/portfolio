import { ProjectDetails } from './../../../types/constants';

// ithiri
import icon from './../../../assets/img/projects/size-projects/ithiri/icon.png';
import ithir1 from './../../../assets/img/projects/size-projects/ithiri/ithiri1.png';
import ithir2 from './../../../assets/img/projects/size-projects/ithiri/ithiri2.png';
import ithir3 from './../../../assets/img/projects/size-projects/ithiri/ithiri3.png';
import ithir4 from './../../../assets/img/projects/size-projects/ithiri/ithiri4.png';
import ithir_m_1 from './../../../assets/img/projects/size-projects/ithiri/ithiri_m_1.png';
import ithir_m_2 from './../../../assets/img/projects/size-projects/ithiri/ithiri_m_2.png';

// unilife
import uniLifeIcon from './../../../assets/img/projects/size-projects/uniLife/icon.png';
import uniLife1 from './../../../assets/img/projects/size-projects/uniLife/demo1.gif';
import uniLife2 from './../../../assets/img/projects/size-projects/uniLife/demo2.gif';

// portfolio
import portfolio from './../../../assets/img/projects/size-projects/portfolio/icon.png';

export const projects: ProjectDetails[] = [
  {
    id: 'ithiri',
    actionButtons: [
      { type: 'visit', data: 'https://ithiri.vercel.app/' },
      { type: 'github', data: 'https://github.com/shashikaxp/ithiri' },
    ],
    features: [
      'Monorepo architecture with Nx workspaces',
      'Use Puppeteer for web scraping',
      'Send emails using nodemailer and sendinblue',
      'Create "shared-types" libraries to use for both frontend and backend',
    ],
    descriptionFull: [
      'Ithiri is an application which dynamically generates weekly shopping lists. This application has been developed based on weekly discounted items offered by two main supermarket chains in Australia, namely Woolworths and Coles.',
      'The discounted price offered by supermarkets will be displayed under each product and users can add these items into their weekly grocery list. Ithiri will generates few shopping list options, based on the time and money saving. Ultimately, users can send these shopping list options to their emails and have a better shopping experience.',
    ],
    descriptionShort:
      'Ithiri is an application which dynamically generates shopping lists based on weekly discounted items (Woolworths & Coles).',
    img: icon,
    name: 'ithiri',
    screenShots: [
      { src: ithir1 },
      { ratio: 'portrait', src: ithir_m_1 },
      { ratio: 'horizontal', src: ithir2 },
      { ratio: 'portrait', src: ithir_m_2 },
      { ratio: 'horizontal', src: ithir3 },
      { ratio: 'horizontal', src: ithir4 },
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Tailwind',
      'Next.js',
      'Express',
      'TypeGraphQL',
      'TypeORM',
      'Apollo Client',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Puppeteer',
      'GraphQL Code Generator',
    ],
  },
  {
    id: 'uniLife',
    actionButtons: [
      { type: 'github', data: 'https://github.com/shashikaxp/UniLife' },
    ],
    features: [
      'Dynamically change the game environment (Daytime and Night)',
      'Change "game difficulty" according to environment (Night will generate more social tasks and have less vision)',
      'Swipe and drag gesture support ',
      'Supports both landscape and horizontal orientations',
    ],
    descriptionFull: [
      'Unilife is a project developed as a course work under the master’s degree program. It is an endless running mobile game.',
      'This is a single-player game in which the player can run until the game ends. This game tries to simulate the balance between academic and social life that every student tries to achieve. (Every social task will deduct a point from academic score and game will end if user dropped the academic score below certain threshold. To get the best score user must collect both academic and social tasks while balancing both positions).',
      'The game was design focusing on mobile platforms. The player can swipe left or swipe right in order to move the character.',
    ],
    descriptionShort:
      'Unilife is project developed as a course work under the master’s degree program. It is an endless running mobile game.',
    img: uniLifeIcon,
    name: 'UniLife',
    screenShots: [{ src: uniLife1 }, { ratio: 'portrait', src: uniLife2 }],
    technologies: ['Unity', 'C#'],
  },
  {
    id: 'web-portfolio',
    actionButtons: [
      { type: 'github', data: 'https://github.com/shashikaxp/portfolio' },
    ],
    features: [
      'Preload assets to improve page loading time',
      'Use react spring to have smooth animation',
    ],
    descriptionFull: [
      'As a part of a dynamic industry, I wanted to present my achievements and coding adventures in a trendy style. You are experiencing the final outcome, hope you are enjoying 🙂',
    ],
    descriptionShort:
      'As a part of a dynamic industry, I wanted to present my achievements and coding adventures in a trendy style.',
    img: portfolio,
    name: 'Web Portfolio',
    screenShots: [],
    technologies: ['React', 'React Spring', 'Tailwind', 'TypeScript'],
  },
];
