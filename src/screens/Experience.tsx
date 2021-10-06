import React, { useState } from 'react';
import Div100vh from 'react-div-100vh';

import { CompanyData } from '../constant/companyData';
import { SideProjects } from '../constant/sideProjects';
import { TopBar } from './../components/TopBar';
import { DisplaySection } from './../types/constants';
import { PortfolioContainer } from './../components/PortfolioContainer';

export const Experience: React.FC = () => {
  const [displayMode, setDisplayMode] =
    useState<DisplaySection>('side-projects');

  return (
    <Div100vh className="overflow-hidden h-full w-full select-none fill-current overscroll-y-contain absolute top-0 left-0 z-[1]">
      <TopBar displaySection={displayMode} setDisplaySection={setDisplayMode} />
      {displayMode === 'experience' ? (
        <PortfolioContainer data={CompanyData} />
      ) : (
        <PortfolioContainer data={SideProjects} />
      )}
    </Div100vh>
  );
};
