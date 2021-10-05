import React, { useEffect, useState } from 'react';
import Div100vh from 'react-div-100vh';

import { CompanyProfile } from '../components/CompanyProfile';
import { Projects } from '../components/Projects';
import { animated, useTransition } from 'react-spring';
import { CompanyData } from '../constant/companyData';
import { SideProjects } from '../constant/sideProjects';
import { CompanyData as CompanyDataType } from './../types/constants';
import { TopBar } from 'src/components/TopBar';
import { DisplaySection } from './../types/constants';

export const Experience: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayMode, setDisplayMode] =
    useState<DisplaySection>('side-projects');
  const [displayData, setDisplayData] = useState<CompanyDataType[]>([]);

  useEffect(() => {
    if (displayMode === 'experience') {
      setDisplayData(CompanyData);
    } else {
      setDisplayData(SideProjects);
    }
  }, [displayMode, displayData]);

  const changeCompany = (i: number) => {
    setIndex(i);
  };

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0.5 },
    enter: { opacity: 1 },
    leave: { opacity: 0.5 },
    config: { duration: 200 },
  });

  return (
    <Div100vh className="overflow-hidden h-full w-full select-none fill-current overscroll-y-contain absolute top-0 left-0 z-[1]">
      <TopBar displaySection={displayMode} setDisplaySection={setDisplayMode} />
      {displayData &&
        displayData.length > 0 &&
        transitions((style, i) => (
          <animated.div
            className="h-full w-screen bg-cover bg-center absolute top-0 left-0 items-center justify-between flex flex-col md:flex-row md:mt-0"
            style={{
              ...style,
              backgroundImage: `url(${displayData[i].bg})`,
            }}
          >
            <div className="flex h-1/2 mt-5 flex-grow-0 items-center justify-center p-4 md:p-12 md:ml-20 md:w-1/3 md:min-h-full md:mt-0 ">
              <CompanyProfile
                {...displayData[i]}
                numberOfCompanies={displayData.length}
                changeCompany={changeCompany}
              />
            </div>
            <div className="w-full h-1/2 flex-1 md:ml-20 md:w-2/4 md:pl-4 md:px-0">
              <Projects projects={displayData[i].projects} />
            </div>
          </animated.div>
        ))}
    </Div100vh>
  );
};
