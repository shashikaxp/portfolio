import React, { useState, useEffect } from 'react';
import { AnimatedComponentProps, RouterProps } from './../types/animation';

interface AnimationContainerProp {
  match: RouterProps;
  whenToRender: (data: RouterProps) => boolean;
  component: React.FC<AnimatedComponentProps>;
}

export const AnimationContainer: React.FC<AnimationContainerProp> = ({
  match,
  whenToRender,
  component: Component,
}) => {
  const [showComponent, setShowComponent] = useState(whenToRender(match));
  const [startPageEndAnimation, setStartPageEndAnimation] = useState(false);

  useEffect(() => {
    if (whenToRender(match)) {
      setShowComponent(true);
    } else if (showComponent) {
      setStartPageEndAnimation(true);
    }
  }, [match]);

  const onPageAnimationEnd = () => {
    console.log('onPageAnimationEnd OG');
    setShowComponent(false);
    setStartPageEndAnimation(false);
  };

  return showComponent ? (
    <Component
      match={match}
      isReverse={startPageEndAnimation}
      onPageAnimationEnd={onPageAnimationEnd}
    />
  ) : null;
};
