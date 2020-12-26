import React from 'react';

import './LandingPage.scss';
import ResponsiveBreakpointHoc from '../hoc/responsiveBreaker';

const LandingPage = ({ screenSize }) => {
  return (
    <div className="main-container">
      <div className="content">
        <div className="name">Shashika Weerakkody</div>
        <div className="discription">
          A Software Developer with 4+ years of Software Development experience
          on various Platforms, Passionate to build Polished, Innovative and
          well-detailed Apps with Fluid Animations to complement the Design.
        </div>
        <button>Projects</button>
      </div>
    </div>
  );
};

export default ResponsiveBreakpointHoc(LandingPage);
