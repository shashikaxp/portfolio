import React, { useRef } from 'react';

import { CompanyProfile } from '../components/CompanyProfile';
import { Projects } from '../components/Projects';
import { animated, useSprings } from 'react-spring';
import { CompanyData } from '../constant/companyData';

export const Experience: React.FC = () => {
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
    <div className="overflow-hidden h-screen w-full select-none overscroll-y-contain absolute top-0 left-0 z-[1]">
      {props.map(({ y, display, scale }, i) => (
        <animated.div
          key={i}
          style={{ display, y }}
          className="absolute w-screen h-screen "
        >
          <animated.div
            className="shadow-2xl min-h-screen bg-cover backdrop-blur-md  items-center justify-between flex flex-col md:flex-row"
            style={{ scale, backgroundImage: `url(${CompanyData[i].bg})` }}
          >
            <div className="min-h-screen md:ml-20 md:w-1/3 flex items-center justify-center">
              <CompanyProfile
                {...CompanyData[i]}
                changeCompany={changeCompany}
              />
            </div>
            <div className="w-full md:ml-20 mt-4 md:w-2/4  pl-4 md:px-0">
              <Projects projects={CompanyData[i].projects} />
            </div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};
