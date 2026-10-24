import React, { useContext, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { useRouteMatch } from 'react-router-dom';

import { CompanyData } from '../constant/companyData';
import { SideProjects } from '../constant/sideProjects';
import { TopBar } from './../components/TopBar';
import { DisplaySection } from './../types/constants';
import { PortfolioContainer } from './../components/PortfolioContainer';
import { useTransition } from '@react-spring/core';
import { animated } from '@react-spring/web';
import { crossFade } from './../utils/animation';
import { PortfolioRevealedContext } from './Landing';

const SECTION_FADE_MS = 300;

export const Experience: React.FC = () => {
  const [displayMode, setDisplayMode] = useState<DisplaySection>('experience');
  const isRevealed = useContext(PortfolioRevealedContext);
  // The details page (and its lightbox) owns the arrow keys while it's open.
  const isDetailsOpen = useRouteMatch('/projects/:id') !== null;
  const canNavigate = isRevealed && !isDetailsOpen;

  const transitions = useTransition(displayMode, crossFade(SECTION_FADE_MS));

  return (
    <Div100vh className="overflow-hidden h-full w-full select-none fill-current overscroll-y-contain absolute top-0 left-0 z-[1] bg-black">
      <TopBar displaySection={displayMode} setDisplaySection={setDisplayMode} />

      {transitions((style, section) => (
        <animated.div
          className="w-c absolute top-0 left-0 h-full w-full"
          style={{ ...style, zIndex: section === displayMode ? 1 : 0 }}
        >
          <PortfolioContainer
            data={section === 'side-projects' ? SideProjects : CompanyData}
            isActive={canNavigate && section === displayMode}
          />
        </animated.div>
      ))}
    </Div100vh>
  );
};
