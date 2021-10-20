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
      'Ithiri is an application that powerfully produces weekly shopping records. This application has been created dependent on week-by-week discounted items presented by two fundamental supermarkets chains in Australia, in particular Woolworths and Coles.',
      'The discounted price presented by the supermarkets will be shown under every item and clients add these items into their week after week grocery rundown. Ithiri will create not many shopping records choices, in light of the time and cash saving. Eventually, clients can send these shopping list choices to their messages and have a superior shopping experience.',
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
      'This is a solitary player game in which the player can run until the game finishes. This game attempts to mimic the harmony among academic and social activity that each student attempts to accomplish. (Each social task will deduct a point from the academic score and the game will end if the player dropped the academic score under a specific limit. To get the best score, you must gather both scholarly and social undertakings while adjusting the two positions).',
      'The game was designed focusing on mobile platforms. The player can swipe left or swipe right to move the character.',
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
      'As a part of a dynamic industry, I created a web portfolio with designs to showcase my best and most promising work examples, achievements and coding adventures in a trendy style to potential clients or employers. You are experiencing the final outcome, hope you are enjoying 🙂',
    ],
    descriptionShort:
      'As a part of a dynamic industry, I wanted to present my achievements and coding adventures in a trendy style.',
    img: portfolio,
    name: 'Web Portfolio',
    screenShots: [],
    technologies: ['React', 'React Spring', 'Tailwind', 'TypeScript'],
  },
];
