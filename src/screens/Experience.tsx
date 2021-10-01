import React, { useState } from 'react';

import { CompanyProfile } from '../components/CompanyProfile';
import { Projects } from '../components/Projects';
import { animated, useTransition } from 'react-spring';
import { CompanyData } from '../constant/companyData';

export const Experience: React.FC = () => {
  const [index, setIndex] = useState(0);

  const changeCompany = (i: number) => {
    setIndex(i);
  };

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0.8 },
    enter: { opacity: 1 },
    leave: { opacity: 0.8 },
    config: { duration: 200 },
  });

  return (
    <div className="overflow-hidden h-screen w-full select-none fill-current overscroll-y-contain absolute top-0 left-0 z-[1]">
      {transitions((style, i) => (
        <animated.div
          className="min-h-screen w-screen bg-cover absolute top-0 left-0 items-center justify-between flex flex-col md:flex-row"
          style={{
            ...style,
            backgroundImage: `url(${CompanyData[i].bg})`,
          }}
        >
          <div className="md:min-h-screen p-4 md:p-12 md:ml-20 md:w-1/3 flex items-center justify-center">
            <CompanyProfile {...CompanyData[i]} changeCompany={changeCompany} />
          </div>
          <div className="w-full md:ml-20 mt-4 md:w-2/4 md:pl-4 md:px-0">
            <Projects projects={CompanyData[i].projects} />
          </div>
        </animated.div>
      ))}
    </div>
  );
};
