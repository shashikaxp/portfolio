import React from 'react';
import kinzaBg from '../assets/img/kinza_bg.jpeg';

import { CompanyProfile } from '../components/CompanyProfile';
import { Projects } from '../components/Projects';
import { Stepper } from '../components/Stepper';

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
  const companyData = {
    name: 'Kinza Pty LTD',
    position: 'Internship',
    time: '2015 - 2016 (1 year 2 Months )',
    description:
      "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
  };

  return (
    <div
      className="min-h-screen bg-cover backdrop-blur-md flex items-center justify-center"
      style={{ backgroundImage: `url(${kinzaBg})` }}
    >
      <Stepper steps={['1', '2', '3', '4']} />
      <div className="ml-8 w-1/3">
        <CompanyProfile {...companyData} />
      </div>
      <div className="ml-20">
        <Projects projects={['1', '2', '3', '4']} />
      </div>
    </div>
  );
};
