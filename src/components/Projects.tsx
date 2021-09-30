import React, { MouseEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useSprings, animated } from 'react-spring';
import { Project } from './../types/constants';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

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
    width: '300px',
    height: '550px',
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

  const getHeight = (index: number) => {
    if (index <= currentIndex) {
      return '550px';
    } else {
      return '500px';
    }
  };

  const getWidth = (index: number) => {
    if (index <= currentIndex) {
      return '300px';
    } else {
      return '250px';
    }
  };

  return (
    <>
      <div className="flex space-x-4 relative overflow-hidden items-center text-text">
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
                <div className="h-full " id="project-container">
                  <div className="p-4">
                    <img
                      id="project-image"
                      src={projects[i].image}
                      className="rounded-2xl"
                      alt="project-image"
                    />
                  </div>
                  <div className="flex flex-col items-center px-4">
                    <div className="font-bold text-2xl mb-4">
                      {projects[i].name}
                    </div>
                    <div className="mb-4">{projects[i].description}</div>
                    <div className="flex flex-wrap items-center justify-center gap-x-2 font-bold">
                      {projects[i].technologies.map((t) => {
                        return <div key={t}>{t}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </Link>
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
