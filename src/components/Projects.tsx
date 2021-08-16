import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { useSprings, animated } from 'react-spring';

interface ProjectsProps {
  projects: string[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [springs, api] = useSprings(projects.length, (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
  }));

  useEffect(() => {
    api.start((index) => ({
      opacity: getOpacity(index),
      x: getX(index),
      y: getY(index),
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
      x = index < currentIndex ? null : currentIndex * -128;
    }
    return x;
  };

  const getY = (index: number) => {
    const y = index < currentIndex ? 10 : 0;
    return y;
  };

  const getOpacity = (index: number) => {
    let opacity;

    if (index < currentIndex) {
      opacity = currentIndex - index === 1 ? 0.5 : 0;
    } else {
      opacity = 1;
    }

    return opacity;
  };

  return (
    <>
      <div className="flex space-x-4 relative overflow-hidden">
        {springs.map((styles, i) => {
          return (
            <animated.div
              style={styles}
              className="bg-white w-28 h-48 flex-shrink-0"
              key={i}
            >
              {i}
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
