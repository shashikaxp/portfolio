import { useTransition } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React, { useState } from 'react';

import { CompanyData } from './../types/constants';
import { CompanyProfile } from './CompanyProfile';
import { Projects } from './Projects';
import { crossFade } from './../utils/animation';
import { useArrowKeys } from './../hooks/useArrowKeys';

const COMPANY_FADE_MS = 250;

interface PortfolioContainerProps {
  data: CompanyData[];
  isActive: boolean;
}

export const PortfolioContainer: React.FC<PortfolioContainerProps> = ({
  data,
  isActive,
}) => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    key: index,
    // The section around the first panel already fades in, so don't fade twice.
    initial: { opacity: 1 },
    ...crossFade(COMPANY_FADE_MS),
  });

  const changeCompany = (i: number) => {
    setIndex(i);
  };

  useArrowKeys(
    {
      ArrowUp: () => setIndex((ci) => Math.max(ci - 1, 0)),
      ArrowDown: () => setIndex((ci) => Math.min(ci + 1, data.length - 1)),
    },
    isActive
  );

  return (
    <>
      {data.length > 0 &&
        transitions((style, i) => (
          <>
            {i < data.length && (
              <div>
                <animated.div
                  className="w-c h-full w-screen bg-cover bg-center absolute top-0 left-0 items-center justify-between flex flex-col md:flex-row md:mt-0"
                  style={{
                    ...style,
                    zIndex: i === index ? 1 : 0,
                    backgroundImage: `url(${data[i].bg})`,
                  }}
                >
                  <div className="flex w-full mt-5 pt-24 flex-grow-0 items-end justify-center p-4 md:p-12 md:ml-20 md:w-1/3 md:items-center md:min-h-full md:mt-0 ">
                    <CompanyProfile
                      {...data[i]}
                      numberOfCompanies={data.length}
                      changeCompany={changeCompany}
                    />
                  </div>
                  <div className="w-full h-1/2 flex-1 md:ml-20 md:w-2/4 md:pl-4 md:px-0">
                    <Projects
                      projects={data[i].projects}
                      isActive={isActive && i === index}
                    />
                  </div>
                </animated.div>
              </div>
            )}
          </>
        ))}
    </>
  );
};
