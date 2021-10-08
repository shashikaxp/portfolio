import React, { useEffect, useRef, useState } from 'react';

import { useHistory, useLocation } from 'react-router';

import TransitionLayer from './../components/TransitionLayer';
import Div100vh from 'react-div-100vh';

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
import { ImageGallery } from 'src/components/ImageGallery';

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

  const [hasValidPositions, setHasValidPositions] = useState(true);

  const [listingPageImageRect] = useState(imageRect);
  const [listingPageContainerRect] = useState(containerRect);
  const projectData = useGetProject(match?.params?.id);

  useEffect(() => {
    if (projectData) {
      setProjectImage(projectData.img || '');
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
      setHasValidPositions(true);
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
    } else {
      console.log(listingPageContainerRect, listingPageImageRect);
      setHasValidPositions(false);
    }
  }, []);

  useEffect(() => {
    if (!hasValidPositions) {
      history.push('/');
    }
  }, [hasValidPositions]);

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
    <Div100vh className="absolute top-0 left-0 z-[2] select-none md:overflow-hidden">
      <div className="min-h-full h-full">
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
            `flex items-center h-full w-screen flex-col md:flex-row bg-white ` +
            getClasses()
          }
        >
          <div className="absolute right-3 top-3  z-20">
            <AiOutlineCloseCircle
              onClick={close}
              className="cursor-pointer w-10 h-10 font-thin hover:text-red-500"
            />
          </div>
          <div className="md:flex-shrink-0 w-screen md:w-1/4 md:min-h-full p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center">
                <img className="w-36 h-36" ref={imageRef} src={projectImage} />
              </div>
              <animated.div style={styles}>
                <div className="mt-8 flex gap-2 flex-wrap justify-center">
                  {projectData?.technologies.map((tech) => {
                    return <TechChip key={tech} label={tech} />;
                  })}
                </div>
              </animated.div>
            </div>
            <animated.div
              style={styles}
              className="mt-4 p-4 flex gap-7 items-center justify-center md:mt-0"
            >
              {projectData?.actionButtons.map(({ data, type }) => {
                return <ActionBtn key={type} data={data} type={type} />;
              })}
            </animated.div>
          </div>
          <animated.div
            style={styles}
            className="w-[calc(100vw-2rem)] border-t border-text-light md:border-r  md:min-h-[calc(100vh-2rem)] md:w-0"
          ></animated.div>
          <animated.div
            style={styles}
            className="w-full px-8 py-8 md:max-h-full md:h-full md:overflow-x-hidden"
          >
            <div>
              <div className="mb-8">
                <h1 className="mb-4 font-bold text-xl text-text">
                  {projectData?.name}
                </h1>
                <div className="text-text-light">
                  {projectData?.descriptionFull.map((description, i) => (
                    <div className="mb-2" key={i}>
                      {description}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                {projectData?.contribution && (
                  <>
                    <h1 className="text-xl font-bold text-text mb-4">
                      My Contribution
                    </h1>
                    <ul className="list-disc  ml-4 text-text-light">
                      {projectData.contribution.map((res) => {
                        return <li key={res}>{res}</li>;
                      })}
                    </ul>
                  </>
                )}
              </div>
              <div className="mb-8">
                {projectData?.features && (
                  <>
                    <h1 className="text-xl font-bold text-text mb-4">
                      Features and Techniques
                    </h1>
                    <ul className="list-disc ml-4 text-text-light">
                      {projectData.features.map((feature) => {
                        return <li key={feature}>{feature}</li>;
                      })}
                    </ul>
                  </>
                )}
              </div>
              <div className="mb-8">
                <h1 className="mt-8 text-xl font-bold text-text mb-4">
                  Screenshots
                </h1>
                <div className="text-text-light">
                  {projectData?.screenShots.length === 0 ? (
                    <div>
                      Sorry, no screenshots are available for this project
                    </div>
                  ) : (
                    <ImageGallery images={projectData?.screenShots} />
                  )}
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </Div100vh>
  );
};
