import React, { useEffect, useState } from 'react';
import Div100vh from 'react-div-100vh';

import { CompanyData } from '../constant/companyData';
import { SideProjects } from '../constant/sideProjects';
import { TopBar } from './../components/TopBar';
import { DisplaySection } from './../types/constants';
import { PortfolioContainer } from './../components/PortfolioContainer';
import { useTransition } from '@react-spring/core';
import { animated } from '@react-spring/web';

export const Experience: React.FC = () => {
  const [displayMode, setDisplayMode] =
    useState<DisplaySection>('side-projects');

  const [animationMode, setAnimationMode] = useState(true);

  useEffect(() => {
    setAnimationMode((animationMode) => !animationMode);
  }, [displayMode]);

  const transitions = useTransition(animationMode, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: animationMode,
  });

  return (
    <Div100vh className="overflow-hidden h-full w-full select-none fill-current overscroll-y-contain absolute top-0 left-0 z-[1]">
      <TopBar displaySection={displayMode} setDisplaySection={setDisplayMode} />

      {transitions(({ opacity }, item) =>
        item ? (
          <animated.div
            style={{
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            }}
          >
            <PortfolioContainer data={CompanyData} />
          </animated.div>
        ) : (
          <animated.div
            style={{
              opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
            }}
          >
            <PortfolioContainer data={SideProjects} />
          </animated.div>
        )
      )}
    </Div100vh>
  );
};
