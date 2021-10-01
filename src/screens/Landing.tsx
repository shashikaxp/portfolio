import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React, { useState } from 'react';

interface LandingProps {}

export const Landing: React.FC<LandingProps> = ({ children }) => {
  const [projects, setProjects] = useState(false);

  const [leftContainerStyle, leftContainerApi] = useSpring(() => ({
    transform: `translate(0px,0px)`,
    config: { duration: 500 },
  }));

  const [rightContainerStyle, rightContainerApi] = useSpring(() => ({
    transform: `translate(0px,0px)`,
    config: { duration: 500 },
  }));

  const loadPortfolio = () => {
    leftContainerApi.start({
      transform: `translate('-1000vw',0px)`,
      onRest: () => setProjects(true),
    });

    rightContainerApi.start({
      transform: `translate('1000vw',0px)`,
    });
  };

  return (
    <div>
      {!projects && (
        <div className="min-h-screen w-screen flex z-40 absolute overflow-x-hidden">
          <animated.div
            style={leftContainerStyle}
            className=" w-1/2 flex min-h-screen items-center justify-end bg-black"
          >
            <div className="w-2/3 text-right pr-8  text-white text-xl font-thin">
              <div>
                A Software Developer with 4+ years of Software Development
                experience on various Platforms, Passionate to build Polished,
                Innovative and well-detailed Apps with Fluid Animations to
                complement the Design.
              </div>
              <div className="mt-8 flex items-end justify-end">
                <div
                  className="cursor-pointer px-5 py-2 border border-white w-max self-end hover:text-black hover:bg-white"
                  onClick={() => loadPortfolio()}
                >
                  Check out my portfolio
                </div>
              </div>
            </div>
          </animated.div>

          <animated.div
            style={rightContainerStyle}
            className="flex-1 min-h-screen bg-white flex items-center pl-8"
          >
            <div className="font-bold text-5xl leading-tight pb-[30vh]">
              Hi, I&apos;m <br />
              Shashika Weerakkody
            </div>
          </animated.div>
        </div>
      )}

      {children}
    </div>
  );
};
