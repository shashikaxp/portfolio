import React, { useRef } from 'react';

import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';

import { CompanyProfile } from '../components/CompanyProfile';
import { Projects } from '../components/Projects';
import { animated, useSprings } from 'react-spring';
import { CompanyData } from '../constant/companyData';

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
  const index = useRef(0);
  const [props, set] = useSprings(CompanyData.length, (i) => ({
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
    <div className="overflow-hidden h-screen w-full fixed select-none overscroll-y-contain bg-gray-200">
      {props.map(({ y, display, scale }, i) => (
        <animated.div
          key={i}
          style={{ display, y }}
          className="absolute w-screen h-screen"
        >
          <animated.div
            className="shadow-2xl min-h-screen bg-cover backdrop-blur-md flex items-center justify-center"
            style={{ scale, backgroundImage: `url(${CompanyData[i].bg})` }}
          >
            {i !== 0 && (
              <BsChevronCompactUp
                onClick={() => changeCompany(i - 1)}
                className="text-gray-200 text-8xl absolute top-0 mt-4 cursor-pointer"
              />
            )}
            <div className="ml-8 w-1/3">
              <CompanyProfile {...CompanyData[i]} />
            </div>
            <div className="ml-20 w-2/4">
              <Projects projects={CompanyData[i].projects} />
            </div>
            {i !== CompanyData.length - 1 && (
              <BsChevronCompactDown
                onClick={() => changeCompany(i + 1)}
                className="text-gray-200 text-8xl absolute bottom-0 mb-4 cursor-pointer"
              />
            )}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};
