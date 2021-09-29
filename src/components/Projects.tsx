import React, { useEffect, useState } from 'react';

import { useSprings, animated } from 'react-spring';
import { Project } from 'src/constant/companyData';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [springs, api] = useSprings(projects.length, (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    width: '300px',
    height: '550px',
    scale: 1,
  }));

  useEffect(() => {
    api.start((index) => ({
      opacity: getOpacity(index),
      x: getX(index),
      y: getY(index),
      scale: getScale(index),
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
      x = index < currentIndex ? null : currentIndex * -316;
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

  const getScale = (index: number) => {
    if (index <= currentIndex) {
      return 1;
    } else {
      return 1 - (index - currentIndex) * 0.1;
    }
  };

  return (
    <>
      <div className="flex space-x-4 relative overflow-hidden text-text">
        {springs.map((styles, i) => {
          return (
            <animated.div
              style={styles}
              className="bg-gray-200 flex-shrink-0"
              key={i}
            >
              <div className="p-4">
                <img src={projects[i].image} alt="project-image" />
              </div>
              <div className="flex flex-col items-center px-4">
                <div className="font-bold text-2xl mb-4">
                  {projects[i].name}
                </div>
                <div className="mb-4">{projects[i].description}</div>
                <div className="flex flex-wrap items-center justify-center gap-x-2 font-bold">
                  {projects[i].technologies.map((t) => {
                    return <div key="t">{t}</div>;
                  })}
                </div>
              </div>
            </animated.div>
          );
        })}
      </div>
      <div className="flex justify-between mt-10">
        <button className="bg-white w-10 h-10" onClick={prev}>
          prev
        </button>
        <button className="bg-white w-10 h-10" onClick={next}>
          next
        </button>
      </div>
    </>
  );
};
