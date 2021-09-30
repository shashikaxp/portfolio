import { ProjectDetails } from './../types/constants';

import afr from './../assets/img/projects/afr.jpeg';
import sr from './../assets/img/projects/sr.png';

export const ProjectData: ProjectDetails[] = [
  {
    id: 'afr',
    projectImg: afr,
    projectName: 'A.F Raymond test',
    clientDescription: 'redda',
    projectDetails: {
      actionButtons: [
        {
          type: 'visit',
          data: 'afr.com',
        },
      ],
      screenShots: [],
      technologies: ['HTML', 'CSS', 'Jquery'],
      responsibilities: [
        'ASdsadsad asd asde asdqwe sadqwesad sdqwe asdqwe asdqwe',
        'ASdsaasdqwe sadqwesad sdqwe asdqwe',
        'ASdsadsad asd asde asdqwe sadqwewe asdqwe asdqwe',
        'ASdsadsad asde asdqwe sd se asdqwe',
        'ASdsadsad asd asde asdqwe sadqwesad sd asdqwe asdqwe',
        'ASdsadsad asd aasdqwe sadqwesadsdqwe asdqwe',
      ],
    },
  },
  {
    id: 'sr',
    projectImg: sr,
    projectName: 'Snailruns',
    clientDescription: 'redda Snailruns',
    projectDetails: {
      actionButtons: [
        {
          type: 'visit',
          data: 'sr.com',
        },
      ],
      screenShots: [],
      technologies: ['PHP', 'Wordpress', 'HTML', 'CSS'],
      responsibilities: [
        'ASdsadsad asd asde asdqwe sadqwesad sdqwe asdqwe asdqwe',
        'ASdsaasdqwe sadqwesad sdqwe asdqwe',
        'ASdsadsad asd asde asdqwe sadqwewe asdqwe asdqwe',
        'ASdsadsad asde asdqwe sd se asdqwe',
        'ASdsadsad asd asde asdqwe sadqwesad sd asdqwe asdqwe',
        'ASdsadsad asd aasdqwe sadqwesadsdqwe asdqwe',
      ],
    },
  },
];
