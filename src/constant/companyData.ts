import kinzaBg from '../assets/img/kinza_bg.jpeg';
import epigroBg from '../assets/img/epigro_bg.jpg';

import afraymond from './../assets/img/projects/afr.jpeg';
import sr from './../assets/img/projects/sr.png';

import { Project, CompanyData as CompanyDataType } from './../types/constants';

const kinzaProjects: Project[] = [
  {
    id: 'afr',
    name: 'AF Raymond',
    image: afraymond,
    description:
      "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
    involvement: 'Heavy',
    technologies: ['HTML', 'CSS', 'Jquery'],
  },
  {
    id: 'sr',
    name: 'Snailruns',
    image: sr,
    description:
      "It is a long established fact that opposed to using 'Conike readable English. Many desktop publishing packages and web page ed",
    involvement: 'Heavy',
    technologies: ['Wordpress', 'PHP', 'HTML', 'CSS'],
  },
  {
    id: 'afr3',
    name: 'AF Raymond',
    image: afraymond,
    description:
      'making it look like readable English. Many desktop publib page ed',
    involvement: 'Heavy',
    technologies: ['HTML3', 'CSS3', 'Jquery3', 'HTML4', 'CSS4', 'Jquery4'],
  },
];

export const CompanyData: CompanyDataType[] = [
  {
    id: 0,
    name: 'Kinza Pty LTD',
    position: 'Internship',
    time: '2015 - 2016 (1 year 2 Months )',
    description:
      "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
    bg: kinzaBg,
    projects: kinzaProjects,
  },
  {
    id: 1,
    name: 'Epigro Solar Lanka',
    position: 'Trainee Software Engineer',
    time: '2015 - 2016 (1 year 2 Months )',
    description:
      "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
    bg: epigroBg,
    projects: [],
  },
  {
    id: 2,
    name: 'Kinza Pty LTD',
    position: 'Internship',
    time: '2015 - 2016 (1 year 2 Months )',
    description:
      "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
    bg: kinzaBg,
    projects: [],
  },
];
