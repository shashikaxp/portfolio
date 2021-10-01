import React, { useEffect, useRef, useState } from 'react';

import { useHistory, useLocation } from 'react-router';

import TransitionLayer from './../components/TransitionLayer';

import {
  AnimatedComponentProps,
  Positions,
  ProjectDetailsLocation,
} from './../types/animation';
import { TechChip } from './../components/TechChip';
import { ActionBtn } from './../components/ActionBtn';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import { useGetProject } from 'src/hooks/useGetProject';

const defaultValues = {
  height: 0,
  width: 0,
  left: 0,
  top: 0,
};

export const ProjectDetails: React.FC<AnimatedComponentProps> = ({
  match,
  isReverse,
  onPageAnimationEnd,
}) => {
  const history = useHistory();
  const imageRef = useRef<HTMLImageElement>(null);
  const location = useLocation<ProjectDetailsLocation>();
  const [imagePosition, setImagePosition] = useState<Positions>(defaultValues);
  const [containerPosition, setContainerPosition] =
    useState<Positions>(defaultValues);
  const [imageToPosition, setImageToPosition] = useState<
    Positions & { transform: string }
  >();
  const [showDescription, setShowDescription] = useState(false);
  const [projectImage, setProjectImage] = useState<string>('');

  const { imageRect = null, containerRect = null } =
    location && location.state ? location.state : {};

  const [listingPageImageRect] = useState(imageRect);
  const [listingPageContainerRect] = useState(containerRect);
  const projectData = useGetProject(match?.params?.id);

  useEffect(() => {
    if (projectData) {
      setProjectImage(projectData.projectImg || '');
    }
  }, [projectData]);

  useEffect(() => {
    if (isReverse) setShowDescription(false);
  }, [isReverse]);

  const styles = useSpring({
    opacity: showDescription ? 1 : 0,
  });

  useEffect(() => {
    const imageDimensions = imageRef?.current?.getBoundingClientRect();
    if (imageDimensions) {
      setImageToPosition({
        width: imageDimensions.width,
        height: imageDimensions.height,
        top: imageDimensions.top,
        left: imageDimensions.left,
        transform: '',
      });
    }

    if (listingPageContainerRect && listingPageImageRect) {
      setContainerPosition({
        width: listingPageContainerRect.width,
        height: listingPageContainerRect.height,
        top: listingPageContainerRect.top,
        left: listingPageContainerRect.left,
      });

      setImagePosition({
        width: listingPageImageRect.width,
        height: listingPageImageRect.height,
        top: listingPageImageRect.top,
        left: listingPageImageRect.left,
      });
    }
  }, []);

  const onAnimationEnd = () => {
    if (isReverse) {
      onPageAnimationEnd();
    } else {
      setShowDescription(true);
    }
  };

  const close = () => {
    history.goBack();
  };

  const getClasses = () => {
    return showDescription ? 'opacity-100' : 'opacity-0';
  };

  const itemPosition = {
    containerPosition,
    imagePosition,
  };

  return (
    <div className="absolute top-0 left-0 z-[2] select-none overflow-hidden">
      <div className="min-h-screen">
        {!showDescription &&
          containerPosition &&
          imagePosition &&
          itemPosition &&
          imageToPosition && (
            <TransitionLayer
              itemPosition={itemPosition}
              imageToPosition={imageToPosition}
              image={projectImage}
              onAnimationEnd={onAnimationEnd}
              isReverse={isReverse}
            />
          )}

        <div
          className={
            `flex items-center min-h-screen w-screen flex-col md:flex-row bg-white ` +
            getClasses()
          }
        >
          <div className="absolute right-3 top-3">
            <AiOutlineCloseCircle
              onClick={close}
              className="cursor-pointer w-10 h-10 font-thin hover:text-red-500"
            />
          </div>
          <div className="md:flex-shrink-0 w-screen md:w-1/4 md:min-h-screen p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center">
                <img className="w-36 h-36" ref={imageRef} src={projectImage} />
              </div>
              <animated.div style={styles}>
                <div className="text-center mt-4 font-bold text-3xl text-text">
                  <h1>{projectData?.projectName}</h1>
                </div>
                <div className="text-center mt-4 text-text">
                  <p>{projectData?.clientDescription}</p>
                </div>
                <div className="mt-8 flex gap-2 flex-wrap justify-center">
                  {projectData?.projectDetails.technologies.map((tech) => {
                    return <TechChip key={tech} label={tech} />;
                  })}
                </div>
              </animated.div>
            </div>
            <animated.div
              style={styles}
              className="mt-4 p-4 flex gap-7 items-center justify-center md:mt-0"
            >
              {projectData?.projectDetails.actionButtons.map(
                ({ data, type }) => {
                  return <ActionBtn key={type} data={data} type={type} />;
                }
              )}
            </animated.div>
          </div>
          <animated.div
            style={styles}
            className="w-[calc(100vw-2rem)] border-t border-text-light md:border-r  md:min-h-[calc(100vh-2rem)] md:w-0"
          ></animated.div>
          <animated.div
            style={styles}
            className="w-full min-h-full md:min-h-screen px-8 py-8 md:py-4"
          >
            <div>
              <h1 className="text-2xl font-bold text-text mb-4">
                My Contribution
              </h1>
              <ul className="list-disc list-inside text-text-light">
                {projectData?.projectDetails.contribution.map((res) => {
                  return <li key={res}>{res}</li>;
                })}
              </ul>
            </div>
            <div>
              <h1 className="mt-8 text-2xl font-bold text-text mb-4">
                Screenshots
              </h1>
              <div className="text-text-light">
                Sorry, no screenshots are available for this project
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};
