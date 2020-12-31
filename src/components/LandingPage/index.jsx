import React, { useState } from 'react';

import './LandingPage.scss';
import ResponsiveBreakpointHoc from '../hoc/responsiveBreaker';

import Typewriter from 'typewriter-effect';
import { useSpring, animated } from 'react-spring';
import { useMeasure } from 'react-use';

const LandingPage = ({ screenSize }) => {
  const [isNameAnimationFinished, setNameAnimationFinished] = useState(false);
  const [isTypingFinished, setTypingFinished] = useState(false);

  const NAME_ANIMATION_DURATION = 500;
  const [ref] = useMeasure();

  const props = useSpring({
    to: {
      maxHeight: isNameAnimationFinished ? '500px' : '0px',
      opacity: isNameAnimationFinished ? '1' : '0',
    },
    config: {
      duration: 1000,
    },
  });

  const nameProps = useSpring({
    to: {
      transform: isTypingFinished ? `scale(1)` : `scale(1.2)`,
    },

    config: {
      duration: NAME_ANIMATION_DURATION,
    },
  });

  const typeName = (typewriter) => {
    typewriter
      .typeString('Hi..')
      .pauseFor(1000)
      .deleteAll()
      .typeString('I am')
      .pauseFor(200)
      .deleteAll()
      .typeString('Shashika Weerakkody')
      .callFunction((state) => {
        state.elements.cursor.style.display = 'none';
      })
      .pauseFor(200)
      .callFunction((state) => {
        load();
      })
      .start();
  };

  const load = () => {
    setTypingFinished(true);
    setTimeout(() => {
      setNameAnimationFinished(true);
    }, NAME_ANIMATION_DURATION);
  };

  return (
    <div className="main-container">
      <div className="content">
        <animated.div className="name" style={nameProps}>
          <Typewriter onInit={typeName} />
        </animated.div>
        <animated.div style={props} className="discription" ref={ref}>
          A Software Developer with 4+ years of Software Development experience
          on various Platforms, Passionate to build Polished, Innovative and
          well-detailed Apps with Fluid Animations to complement the Design.
          <div>
            <button>Projects</button>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default ResponsiveBreakpointHoc(LandingPage);
