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
      {isLoading ? (
        <div className="min-h-screen w-screen flex items-center justify-center font-bold text-8xl">
          <animated.div
            style={loaderHeightStyle}
            className="bg-black h-screen w-screen absolute bottom-0"
          ></animated.div>
          <animated.div className="z-[2]" style={loaderColorStyle}>
            {progress}%
          </animated.div>
        </div>
      ) : (
        <div>
          {!projects && (
            <div className="min-h-screen w-screen flex z-40 absolute overflow-x-hidden">
              <animated.div
                style={leftContainerStyle}
                className=" w-1/2 flex min-h-screen items-center justify-end bg-black"
              >
                <div className="w-2/3 text-right pr-16  text-white text-xl font-thin">
                  <div>
                    A Software Developer with 4+ years of Software Development
                    experience on various Platforms, Passionate to build
                    Polished, Innovative and well-detailed Apps with Fluid
                    Animations to complement the Design.
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
                className="flex-1 min-h-screen bg-white flex items-center pl-16"
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
      )}
    </div>
  );
};
