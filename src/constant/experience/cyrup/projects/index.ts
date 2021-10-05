import { ProjectDetails } from './../../../../types/constants';

// DISC
import disc_icon from './../../../../assets/img/projects/cyrup/disc/disc_icon.jpeg';
import disc_1 from './../../../../assets/img/projects/cyrup/disc/disc_1.png';
import disc_2 from './../../../../assets/img/projects/cyrup/disc/disc_2.png';
import disc_3 from './../../../../assets/img/projects/cyrup/disc/disc_3.png';
import disc_4 from './../../../../assets/img/projects/cyrup/disc/disc_4.png';
import disc_5 from './../../../../assets/img/projects/cyrup/disc/disc_5.png';
import disc_6 from './../../../../assets/img/projects/cyrup/disc/disc_6.png';

// SizeSwap
import sw_icon from './../../../../assets/img/projects/cyrup/sizeswap/icon.png';
import sw_1 from './../../../../assets/img/projects/cyrup/sizeswap/sw_1.png';
import sw_2 from './../../../../assets/img/projects/cyrup/sizeswap/sw_2.png';
import sw_3 from './../../../../assets/img/projects/cyrup/sizeswap/sw_3.png';
import sw_4 from './../../../../assets/img/projects/cyrup/sizeswap/sw_4.png';
import sw_5 from './../../../../assets/img/projects/cyrup/sizeswap/sw_5.png';
import sw_6 from './../../../../assets/img/projects/cyrup/sizeswap/sw_6.png';
// import sw_7 from './../../../../assets/img/projects/cyrup/sizeswap/sw_7.png';

// Sayhello V1
import sh_icon from './../../../../assets/img/projects/cyrup/sayhello/icon.png';
import sh_1 from './../../../../assets/img/projects/cyrup/sayhello/sh_1.png';
import sh_2 from './../../../../assets/img/projects/cyrup/sayhello/sh_2.png';
import sh_3 from './../../../../assets/img/projects/cyrup/sayhello/sh_3.png';
import sh_4 from './../../../../assets/img/projects/cyrup/sayhello/sh_4.png';
import sh_5 from './../../../../assets/img/projects/cyrup/sayhello/sh_5.png';
import sh_6 from './../../../../assets/img/projects/cyrup/sayhello/sh_6.png';
import sh_7 from './../../../../assets/img/projects/cyrup/sayhello/sh_7.png';
import sh_8 from './../../../../assets/img/projects/cyrup/sayhello/sh_8.png';
import sh_9 from './../../../../assets/img/projects/cyrup/sayhello/sh_9.png';
import sh_10 from './../../../../assets/img/projects/cyrup/sayhello/sh_10.png';
import sh_11 from './../../../../assets/img/projects/cyrup/sayhello/sh_11.png';
import sh_12 from './../../../../assets/img/projects/cyrup/sayhello/sh_12.png';
import sh_13 from './../../../../assets/img/projects/cyrup/sayhello/sh_13.png';

// Sayhello V2
import sh2_icon from './../../../../assets/img/projects/cyrup/sayhello2/icon.png';
import sh2_1 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_1.jpg';
import sh2_2 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_2.jpg';
import sh2_3 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_3.jpg';
import sh2_4 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_4.jpg';
import sh2_5 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_5.jpg';
import sh2_6 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_6.jpg';
import sh2_7 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_7.jpg';
import sh2_8 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_8.jpg';
import sh2_9 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_9.jpg';
import sh2_10 from './../../../../assets/img/projects/cyrup/sayhello2/sh2_10.jpg';

import { sizes } from './../../../../constant/imageSizes';

export const projects: ProjectDetails[] = [
  {
    id: 'sayhello2',
    name: 'SayHello V2',
    img: sh2_icon,
    actionButtons: [{ type: 'visit', data: 'https://sayhello.lk/' }],
    contribution: [],
    descriptionFull: 'asd',
    descriptionShort: 'ASd',
    screenShots: [
      { src: sh2_1, height: 4, width: 3, sizes: [sizes] },
      { src: sh2_2, height: 4, width: 3, sizes: [sizes] },
      { src: sh2_3, height: 4, width: 3, sizes: [sizes] },
      { src: sh2_4, height: 4, width: 3, sizes: [sizes] },
      { src: sh2_5, height: 4, width: 3, sizes: [sizes] },
      { src: sh2_6, height: 4, width: 3, sizes: [sizes] },
      { src: sh2_7, height: 4, width: 3, sizes: [sizes] },
      { src: sh2_8, height: 4, width: 3, sizes: [sizes] },
      { src: sh2_9, height: 4, width: 3, sizes: [sizes] },
      { src: sh2_10, height: 4, width: 3, sizes: [sizes] },
    ],
    technologies: ['React Native', 'TypeScript', 'Styled Components'],
  },
  {
    id: 'sayhello',
    name: 'SayHello',
    img: sh_icon,
    actionButtons: [{ type: 'visit', data: 'https://sayhello.lk/' }],
    contribution: [],
    descriptionFull: 'Sadd',
    descriptionShort: 'asdsad',
    screenShots: [
      { src: sh_1, height: 4, width: 3, sizes: [sizes] },
      { src: sh_2, height: 4, width: 3, sizes: [sizes] },
      { src: sh_3, height: 4, width: 3, sizes: [sizes] },
      { src: sh_4, height: 4, width: 3, sizes: [sizes] },
      { src: sh_5, height: 4, width: 3, sizes: [sizes] },
      { src: sh_6, height: 4, width: 3, sizes: [sizes] },
      { src: sh_7, height: 4, width: 3, sizes: [sizes] },
      { src: sh_8, height: 4, width: 3, sizes: [sizes] },
      { src: sh_9, height: 4, width: 3, sizes: [sizes] },
      { src: sh_10, height: 4, width: 3, sizes: [sizes] },
      { src: sh_11, height: 4, width: 3, sizes: [sizes] },
      { src: sh_12, height: 4, width: 3, sizes: [sizes] },
      { src: sh_13, height: 4, width: 3, sizes: [sizes] },
    ],
    technologies: ['Ionic', 'Angular', 'TypeScript'],
  },
  {
    name: 'DISC',
    descriptionFull: 'asdasd',
    descriptionShort: 'asdsad',
    id: 'disc',
    img: disc_icon,
    screenShots: [
      { src: disc_2, height: 3, width: 4, sizes: [sizes] },
      { src: disc_6, height: 3, width: 4, sizes: [sizes] },
      { src: disc_1, height: 3, width: 4, sizes: [sizes] },
      { src: disc_3, height: 3, width: 4, sizes: [sizes] },
      { src: disc_4, height: 3, width: 4, sizes: [sizes] },
      { src: disc_5, height: 3, width: 4, sizes: [sizes] },
    ],
    actionButtons: [],
    technologies: ['AngularJS', 'Electron', 'Sqlite', 'Node.js'],
    contribution: [],
  },
  {
    id: 'sizeswap',
    actionButtons: [],
    contribution: [],
    descriptionFull: 'sdasd',
    descriptionShort: 'asd',
    img: sw_icon,
    name: 'SizeSwap',
    technologies: ['Ionic', 'Angular', 'TypeScript'],
    screenShots: [
      { src: sw_1, height: 4, width: 3, sizes: [sizes] },
      { src: sw_2, height: 4, width: 3, sizes: [sizes] },
      { src: sw_3, height: 4, width: 3, sizes: [sizes] },
      { src: sw_4, height: 4, width: 3, sizes: [sizes] },
      { src: sw_5, height: 4, width: 3, sizes: [sizes] },
      { src: sw_6, height: 4, width: 3, sizes: [sizes] },
      //   { src: sw_7, height: 4, width: 4, sizes: [sizes] },
    ],
  },
];