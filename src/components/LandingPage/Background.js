import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';

export default function Banner({ screenSize }) {
  console.log('asdad', screenSize);

  const [particle, setParticle] = useState(100);

  const setParticalsesFromScreensize = () => {
    if (screenSize === 'xlg') {
      setParticle(250);
    } else if (screenSize === 'lg') {
      setParticle(200);
    } else if (screenSize === 'md') {
      setParticle(100);
    } else if (screenSize === 'sm') {
      setParticle(70);
    }
    console.log(particle);
  };

  useEffect(() => {
    setParticalsesFromScreensize();
  }, [screenSize]);

  return (
    <Particles
      style={{
        background: '#191b21',
        position: 'absolute',
        top: 0,
      }}
      params={{
        particles: {
          number: {
            value: particle,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  );
}
