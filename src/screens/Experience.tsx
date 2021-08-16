import React, { useRef } from 'react';
import kinzaBg from '../assets/img/kinza_bg.jpeg';
import epigroBg from '../assets/img/epigro_bg.jpg';

import { map } from 'lodash';

import { CompanyProfile } from '../components/CompanyProfile';
import { Projects } from '../components/Projects';
import { Stepper } from '../components/Stepper';
import { animated, useSprings } from 'react-spring';

interface ExperienceProps {}

interface CompanyData {
  id: number;
  name: string;
  position: string;
  time: string;
  description: string;
  bg: string;
  projects: string[];
}

export const Experience: React.FC<ExperienceProps> = () => {
  const companyData: CompanyData[] = [
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
  ];

  const index = useRef(0);
  const [props, set] = useSprings(companyData.length, (i) => ({
    y: i * window.innerHeight,
    scale: 1,
    display: 'block',
    config: {
      duration: 300,
    },
  }));

  const changeCompany = (i: number) => {
    console.log(i);
    index.current = i;
    set((i) => {
      if (i < index.current - 1 || i > index.current + 1)
        return { display: 'none' };
      const y = (i - index.current) * window.innerHeight;
      const scale = i !== index.current ? 0.85 : 1;
      return { y, scale, display: 'block' };
    });
  };

  return (
    <div className="overflow-hidden h-screen w-full fixed select-none overscroll-y-contain">
      {props.map(({ y, display, scale }, i) => (
        <animated.div
          key={i}
          style={{ display, y }}
          className="absolute w-screen h-screen"
        >
          <animated.div
            className="min-h-screen bg-cover backdrop-blur-md flex items-center justify-center"
            style={{ scale, backgroundImage: `url(${companyData[i].bg})` }}
          >
            <Stepper
              steps={map(companyData, 'id')}
              changeCompany={changeCompany}
            />
            <div className="ml-8 w-1/3">
              <CompanyProfile {...companyData[i]} />
            </div>
            <div className="ml-20 w-2/4">
              <Projects projects={companyData[i].projects} />
            </div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};
