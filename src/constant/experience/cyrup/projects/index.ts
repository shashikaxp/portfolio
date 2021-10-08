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

export const projects: ProjectDetails[] = [
  {
    id: 'sayhello2',
    name: 'SayHello V2',
    img: sh2_icon,
    actionButtons: [
      {
        type: 'visit',
        data: 'https://sayhello.lk/',
      },
      {
        type: 'android',
        data: 'https://play.google.com/store/apps/details?id=sayhello.lk',
      },
      {
        type: 'ios',
        data: 'https://apps.apple.com/us/app/sayhello-english/id1443580169?app=itunes&ign-mpt=uo%3D4',
      },
    ],
    contribution: [
      'Initialize and architect the mobile application',
      'Create a collection of re-usable react native UI components for the application',
      'Develop most of the application pages',
    ],
    descriptionFull: [
      'It is an improved version of SayHello application.',
      'This mobile application has been developed using the React Native platform. It offers an updated user interface and enhanced experience to the users',
    ],
    descriptionShort: 'It is an improved version of SayHello application',
    screenShots: [
      { src: sh2_1, ratio: 'portrait' },
      { src: sh2_2, ratio: 'portrait' },
      { src: sh2_3, ratio: 'portrait' },
      { src: sh2_4, ratio: 'portrait' },
      { src: sh2_5, ratio: 'portrait' },
      { src: sh2_6, ratio: 'portrait' },
      { src: sh2_7, ratio: 'portrait' },
      { src: sh2_8, ratio: 'portrait' },
      { src: sh2_9, ratio: 'portrait' },
      { src: sh2_10, ratio: 'portrait' },
    ],
    technologies: ['React Native', 'TypeScript', 'Styled Components'],
  },
  {
    id: 'sayhello',
    name: 'SayHello',
    img: sh_icon,
    actionButtons: [{ type: 'visit', data: 'https://sayhello.lk/' }],
    contribution: [
      'Develop a full ionic application',
      'Use plugins to access native device functionality (Camera, Microphone, Storage)',
      'Implement offline support (Store recordings on the device and send them to server when there is an internet connection)',
      'Connect to a custom REST API to fetch data and perform essential tasks',
      'Active involvement with the marketplace publication process',
      'Create internal applications for managing various areas of the business (web apps, customer support, sales, etc...)',
      'Apply software changes and alterations based on specific design specifications',
      'Implement and update the application modules to improve the overall performance of the application',
      'Perform automated testing tasks',
    ],
    descriptionFull: [
      'It is an English learning application introduced to improve unique skill level with personalized support',
      'SayHello facilitates the users to send their recorded voice to instructors and get the feedback on their pronunciation and grammar',
    ],
    descriptionShort:
      'It is an English learning application introduced to improve unique skill level with personalized support',
    screenShots: [
      { src: sh_1, ratio: 'portrait' },
      { src: sh_2, ratio: 'portrait' },
      { src: sh_3, ratio: 'portrait' },
      { src: sh_4, ratio: 'portrait' },
      { src: sh_5, ratio: 'portrait' },
      { src: sh_6, ratio: 'portrait' },
      { src: sh_7, ratio: 'portrait' },
      { src: sh_8, ratio: 'portrait' },
      { src: sh_9, ratio: 'portrait' },
      { src: sh_10, ratio: 'portrait' },
      { src: sh_11, ratio: 'portrait' },
      { src: sh_12, ratio: 'portrait' },
      { src: sh_13, ratio: 'portrait' },
    ],
    technologies: ['Ionic', 'Angular', 'TypeScript'],
  },
  {
    name: 'DISC',
    descriptionFull: [
      'It is a desktop application that includes behavior assessment games to measure user responses',
      "DISC measures user responses through user's image recognition and voice instructions given in multiple languages.  Ultimately, it assesses the behavior with the response time and touch coordinates and generate reports",
    ],
    descriptionShort:
      'It is a desktop application that includes behavior assessment games to measure user responses',
    id: 'disc',
    img: disc_icon,
    screenShots: [
      { src: disc_2, ratio: 'horizontal' },
      { src: disc_6, ratio: 'horizontal' },
      { src: disc_1, ratio: 'horizontal' },
      { src: disc_3, ratio: 'horizontal' },
      { src: disc_4, ratio: 'horizontal' },
      { src: disc_5, ratio: 'horizontal' },
    ],
    actionButtons: [],
    technologies: [
      'AngularJS',
      'Electron',
      'Sqlite',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    contribution: [
      'Develop a full electron application',
      'Perform automated testing task',
      'Build REST API that serves data to the front-end app and handles essential operations',
      'Add offline support with database synchronization',
      'Add multi language support',
      'Use third party plugins to create various reports on saved data',
      'Verify the viability of the final product in meeting client requirements',
      'Analyze the scope of the future features and changes with the product team',
    ],
  },
  {
    id: 'sizeswap',
    actionButtons: [],
    contribution: [
      'Develop a full ionic application',
      'Connect the application with the custom REST API to perform various functionalities',
      'Use third party SDKs to achieve OAuth login',
      'Use Plugins to access native device functionality (Camera)',
      'Create custom UI components to use through out the application',
    ],
    descriptionFull: [
      'SizeSwap is an online market place which facilitates the users to swap and trade sneakers',
      'This platform allows users to exchange their sneaker with another sneaker (One to One) or trade with more sneakers based the market value',
    ],
    descriptionShort:
      'SizeSwap is an online market place which facilitates the users to swap and trade sneakers',
    img: sw_icon,
    name: 'SizeSwap',
    technologies: ['Ionic', 'Angular', 'TypeScript'],
    screenShots: [
      { src: sw_1, ratio: 'portrait' },
      { src: sw_2, ratio: 'portrait' },
      { src: sw_3, ratio: 'portrait' },
      { src: sw_4, ratio: 'portrait' },
      { src: sw_5, ratio: 'portrait' },
      { src: sw_6, ratio: 'portrait' },
      //   { src: sw_7, height: 4, width: 4, sizes: [sizes] },
    ],
  },
];
