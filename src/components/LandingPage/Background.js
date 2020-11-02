import React from 'react';
import Particles from 'react-particles-js';

// position: 'absolute',
// background: '#262a35'

export default function Banner() {
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
            value: 200,
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
