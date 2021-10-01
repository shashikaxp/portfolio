import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import { useLoadAssets } from './../hooks/useLoadAssets';

interface LandingProps {}

export const Landing: React.FC<LandingProps> = ({ children }) => {
  const [projects, setProjects] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [progress, setProgress] = useState(0);
  const loaderHeightStyle = useSpring({ height: progress.toString() + 'vh' });
  const loaderColorStyle = useSpring({
    color: progress > 50 ? 'white' : 'black',
  });
  const loaderContainerStyle = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: isLoading ? 1 : 0 });
      await next({ display: isLoading ? 'flex' : 'none' });
    },
    config: {
      duration: 500,
    },
  });

  const update = (completed: number, total: number) => {
    const progress = Math.round((completed / total) * 100);
    setProgress(progress);
  };

  const { loadAssets } = useLoadAssets(update);

  useEffect(() => {
    const asyncLoadAssets = async () => {
      await loadAssets();
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    asyncLoadAssets();
  }, []);

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
      <animated.div
        style={loaderContainerStyle}
        className="z-[50] min-h-screen w-screen flex items-center justify-center font-bold text-8xl absolute overflow-x-hidden bg-white"
      >
        <animated.div
          style={loaderHeightStyle}
          className="bg-black h-screen w-screen absolute bottom-0"
        ></animated.div>
        <animated.div className="z-[2]" style={loaderColorStyle}>
          {progress}%
        </animated.div>
      </animated.div>

      <div>
        {!projects && (
          <div className="h-screen max-h-screen w-screen flex flex-col-reverse z-40 absolute overflow-x-hidden md:flex-row">
            <animated.div
              style={leftContainerStyle}
              className="w-screen flex-1 md:w-1/2 flex flex-shrink-0 md:min-h-screen items-center justify-end bg-black"
            >
              <div className="md:w-2/3 text-center md:text-right px-8 md:pr-16  text-white text-xl font-thin">
                <div>
                  A Software Developer with 4+ years of Software Development
                  experience on various Platforms, Passionate to build Polished,
                  Innovative and well-detailed Apps with Fluid Animations to
                  complement the Design.
                </div>
                <div className="mt-8 flex items-center justify-center md:items-end md:justify-end">
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
              className="flex-1 bg-white flex items-center pl-16 md:min-h-screen"
            >
              <div className="font-bold text-5xl leading-tight md:pb-[30vh]">
                Hi, I&apos;m <br />
                Shashika Weerakkody
              </div>
            </animated.div>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};
