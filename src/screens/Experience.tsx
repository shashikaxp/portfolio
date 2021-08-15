import React, { useState } from 'react';
import kinzaBg from '../assets/img/kinza_bg.jpeg';
import epigroBg from '../assets/img/epigro_bg.jpg';

import { find, map } from 'lodash';

import { CompanyProfile } from '../components/CompanyProfile';
import { Projects } from '../components/Projects';
import { Stepper } from '../components/Stepper';

interface ExperienceProps {}

interface CompanyData {
  id: string;
  name: string;
  position: string;
  time: string;
  description: string;
  bg: string;
  projects: string[];
}

export const Experience: React.FC<ExperienceProps> = ({}) => {
  const companyData: CompanyData[] = [
    {
      id: 'kinza',
      name: 'Kinza Pty LTD',
      position: 'Internship',
      time: '2015 - 2016 (1 year 2 Months )',
      description:
        "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
      bg: kinzaBg,
      projects: ['1', '2', '3', '4'],
    },
    {
      id: 'epigro',
      name: 'Epigro Solar Lanka',
      position: 'Trainee Software Engineer',
      time: '2015 - 2016 (1 year 2 Months )',
      description:
        "It is a long established fact that opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ed",
      bg: epigroBg,
      projects: ['1', '2'],
    },
  ];

  const [company, setCompany] = useState(companyData[0]);

  const changeCompany = (id: string) => {
    const selectedCompany = find(companyData, { id: id });
    if (selectedCompany) {
      setCompany(selectedCompany);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover backdrop-blur-md flex items-center justify-center"
      style={{ backgroundImage: `url(${company.bg})` }}
    >
      <Stepper steps={map(companyData, 'id')} changeCompany={changeCompany} />
      <div className="ml-8 w-1/3">
        <CompanyProfile {...company} />
      </div>
      <div className="ml-20 w-2/4">
        <Projects projects={company.projects} />
      </div>
    </div>
  );
};
