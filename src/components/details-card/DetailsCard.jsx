import React from 'react';

import './DetailsCard.scss';

const DetailsCard = () => {
  let image = require('./../../assets/images/profile.png');
  return (
    <div className="details-card">
      <div className="image-container">
        <img src={image} alt="profilePicture" />
      </div>
      <p>
        Hi
        <br /> I am Shashika Weerakkody, A Software Developer with 4+ years of
        Software Development experience on various Platforms, Passionate to
        build Polished, Innovative and well-detailed Apps with Fluid Animations
        to complement the Design.
      </p>
    </div>
  );
};

export default DetailsCard;
