import React from 'react';
import Background from './Background';
import DetailsCard from '../details-card/DetailsCard';

import './LandingPage.scss';

export default function Banner() {
  return (
    <div>
      <Background />
      <div className="container">
        <DetailsCard />
      </div>
    </div>
  );
}
