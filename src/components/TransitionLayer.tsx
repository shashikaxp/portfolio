import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Positions } from './../types/animation';

interface TransitionLayerProps {
  itemPosition: {
    imagePosition: Positions;
    containerPosition: Positions;
  };
  imageToPosition: Positions & { transform: string };
  image: string;
  onAnimationEnd: () => void;
  isReverse: boolean;
}

const TransitionLayer: React.FC<TransitionLayerProps> = ({
  itemPosition,
  imageToPosition,
  image,
  onAnimationEnd,
  isReverse,
}) => {
  const imageAnimation = useSpring({
    from: {
      height: itemPosition.imagePosition.height,
      width: itemPosition.imagePosition.width,
      transform: `translate(${itemPosition.imagePosition.left}px, ${itemPosition.imagePosition.top}px)`,
      borderRadius: '16px',
    },
    to: {
      height: imageToPosition.height,
      width: imageToPosition.width,
      transform: `translate(${imageToPosition.left}px, ${imageToPosition.top}px)`,
      borderRadius: '0px',
    },
    reverse: isReverse,
    onRest: onAnimationEnd,
  });

  const containerAnimation = useSpring({
    from: {
      height: `calc(0vh + ${itemPosition.containerPosition.height}px)`,
      width: `calc(0vw + ${itemPosition.containerPosition.width}px)`,
      transform: `translate(${itemPosition.containerPosition.left}px, ${itemPosition.containerPosition.top}px)`,
      borderRadius: '16px',
    },
    to: {
      height: 'calc(100vh + 0px)',
      width: 'calc(100vw + 0px)',
      transform: 'translate(0px, 0px)',
      borderRadius: '0px',
    },
    reverse: isReverse,
  });

  return (
    <div>
      <animated.div
        style={{
          ...containerAnimation,
          zIndex: 0,
        }}
        className="absolute bg-white"
      />
      <animated.img
        src={image}
        style={{
          ...imageAnimation,
          zIndex: 1,
        }}
        className="absolute"
      />
    </div>
  );
};

export default TransitionLayer;
