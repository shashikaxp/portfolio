import kinzaBg from '../assets/img/kinza_bg.jpeg';
import epigroBg from '../assets/img/epigro_bg.jpg';

interface CompanyData {
  id: number;
  name: string;
  position: string;
  time: string;
  description: string;
  bg: string;
  projects: string[];
}

export const CompanyData: CompanyData[] = [
  {
    id: 0,
    name: 'Kinza Pty LTD',
    position: 'Internship',
    time: '2015 - 2016 (1 year 2 Months )',
    description:
      "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
    bg: kinzaBg,
    projects: ['1', '2', '3', '4'],
  },
  {
    id: 1,
    name: 'Epigro Solar Lanka',
    position: 'Trainee Software Engineer',
    time: '2015 - 2016 (1 year 2 Months )',
    description:
      "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
    bg: epigroBg,
    projects: ['1', '2'],
  },
  {
    id: 2,
    name: 'Kinza Pty LTD',
    position: 'Internship',
    time: '2015 - 2016 (1 year 2 Months )',
    description:
      "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
    bg: kinzaBg,
    projects: ['1', '2', '3', '4'],
  },
];
