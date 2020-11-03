import React from 'react';
import Background from './Background';
import DetailsCard from '../DetailsCard';

import './LandingPage.scss';
import ResponsiveBreakpointHoc from '../hoc/responsiveBreaker';

const Banner = ({ screenSize }) => {
  return (
    <div>
      <Background screenSize={screenSize} />
      <div className="container">
        <DetailsCard />
      </div>
    </div>
  );
};

export default ResponsiveBreakpointHoc(Banner);
