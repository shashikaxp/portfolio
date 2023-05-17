import { CompanyData } from './../../../types/constants';

import bazzleBg from './../../../assets/img/bazzle_bg.jpg';
import { projects } from './projects';

export const bazzle: CompanyData = {
  id: 1,
  name: 'Bazzle Ventures Pty Ltd',
  country: 'Australia',
  bg: bazzleBg,
  position: 'Senior Software Engineer (Part-Time)',
  time: 'Feb 2020 - Oct 2021',
  description:
    'Bazzle is an All-in-one event planning platform that allows event organisers to find, hire and manage all the event vendors and plan their event, in one place. My contribution towards Bazzle has been towards establishing the technical architecture, the infrastructure and product development across its two main products, Bazzle and Bazzle Vendor.',
  projects: projects,
};
