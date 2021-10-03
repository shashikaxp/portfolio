import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useSprings, useSpring, animated } from 'react-spring';
import { ProjectDetails } from './../types/constants';

import { useMediaQuery } from 'react-responsive';

interface ProjectsProps {
  projects: ProjectDetails[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();
  const isMD = useMediaQuery({ query: '(min-width: 768px)' });
  const projectContainerRef = useRef<HTMLImageElement>(null);

  const [projectCardWidth, setProjectCardWidth] = useState(0);

  useEffect(() => {
    const cardDomData =
      projectContainerRef.current?.firstElementChild?.getBoundingClientRect();
    setProjectCardWidth(cardDomData?.width || 0);
  }, []);

  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  const onClickContainer = (
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    projectId: string
  ) => {
    const { currentTarget } = event;
    if (!currentTarget) return;

    const containerRect = currentTarget
      .querySelector('#project-container')
      ?.getBoundingClientRect();

    const imageRect = currentTarget
      .querySelector('#project-image')
      ?.getBoundingClientRect();

    history.push(`/projects/${projectId}`, { containerRect, imageRect });
    event.preventDefault();
    event.stopPropagation();
  };

  const [springs, api] = useSprings(projects.length, (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    width: isMD ? '300px' : '150px',
    height: isMD ? '550px' : '230px',
    scale: 1,
  }));

  useEffect(() => {
    api.start((index) => ({
      opacity: getOpacity(index),
      x: getX(index),
      y: getY(index),
      height: getHeight(index),
      width: getWidth(index),
    }));
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((ci) => {
      if (ci < projects.length - 1) {
        return ci + 1;
      } else {
        return ci;
      }
    });
  };

  const prev = () => {
    setCurrentIndex((ci) => {
      if (ci !== 0) {
        return ci - 1;
      } else {
        return ci;
      }
    });
  };

  const getX = (index: number) => {
    let x: number | null;
    if (index == 0) {
      x = 0;
    } else {
      x = index < currentIndex ? null : currentIndex * -(projectCardWidth + 16);
    }
    return x;
  };

  const getY = (index: number) => {
    const y = index < currentIndex ? 10 : 0;
    return y;
  };

  const getOpacity = (index: number) => {
    let opacity;

    if (index !== currentIndex) {
      opacity = currentIndex - index === 1 ? 0.5 : 0.8;
    } else {
      opacity = 1;
    }

    return opacity;
  };

  const getHeight = (index: number) => {
    if (index <= currentIndex) {
      return isMD ? '550px' : '230px';
    } else {
      return isMD ? '500px' : '210px';
    }
  };

  const getWidth = (index: number) => {
    if (index <= currentIndex) {
      return isMD ? '300px' : '150px';
    } else {
      return isMD ? '275px' : '125px';
    }
  };

  const getTranslateStyle = () => {
    if (isMD) {
      return `none`;
    } else {
      return `translateX(calc((100vw/2) - ${projectCardWidth / 2}px))`;
    }
  };

  return (
    <div className="flex h-full items-center pb-4 md:pb-0">
      <div className="overflow-hidden w-full">
        <animated.div
          ref={projectContainerRef}
          style={{ ...styles, transform: getTranslateStyle() }}
          className={`flex space-x-4 relative overflow-hidden items-center text-text`}
        >
          {springs.map((styles, i) => {
            return (
              <animated.div
                style={styles}
                key={projects[i].id}
                className="bg-white flex-shrink-0 rounded-2xl"
              >
                <Link
                  to={`/projects/${projects[i].id}`}
                  onClick={(e) => onClickContainer(e, projects[i].id)}
                >
                  <div
                    className="h-full flex flex-col justify-between"
                    id="project-container"
                  >
                    <div className="p-2 flex flex-col items-center justify-center md:p-4">
                      <img
                        id="project-image"
                        src={projects[i].img}
                        className="rounded-2xl"
                        alt="project-image"
                      />
                      <div className="font-bold mt-2 md:text-2xl md:mb-4 md:mt-4">
                        {projects[i].name}
                      </div>
                      <div className="mb-4 hidden md:block">
                        {projects[i].descriptionShort}
                      </div>
                    </div>
                    <div className="flex flex-col items-center pb-4 md:pb-8">
                      <div className="flex flex-wrap items-center justify-center gap-1 font-bold">
                        {projects[i].technologies.slice(0, 2).map((t) => {
                          return (
                            <div
                              className="text-xs text-text-light rounded-full border px-3 border-text-light md:text-base"
                              key={t}
                            >
                              {t}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </animated.div>
            );
          })}
        </animated.div>

        <div className="flex items-center justify-center mt-6 gap-2 md:mt-10">
          <div
            onClick={prev}
            className="w-10 h-10 cursor-pointer bg-white rounded-full flex items-center justify-center hover:opacity-80"
          >
            <BsChevronCompactLeft className="text-2xl text-text-light " />
          </div>
          <div
            onClick={next}
            className="w-10 h-10 cursor-pointer bg-white rounded-full flex items-center justify-center hover:opacity-80"
          >
            <BsChevronCompactRight className="text-2xl text-text-light" />
          </div>
        </div>
      </div>
    </div>
  );
};
