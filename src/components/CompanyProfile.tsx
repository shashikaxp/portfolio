import React from 'react';

interface CompanyProfileProps {
  name: string;
  position: string;
  time: string;
  description: string;
  className?: String;
}

export const CompanyProfile: React.FC<CompanyProfileProps> = ({
  name,
  position,
  time,
  description,
}) => {
  return (
    <div className="text-white font-primary">
      <div className="text-4xl font-medium">{name}</div>
      <div className="text-2xl mt-4 font-light">{position}</div>
      <div className="text-xl mt-4 font-light">{time}</div>
      <p className="font-thin mt-2">{description}</p>
    </div>
  );
};
