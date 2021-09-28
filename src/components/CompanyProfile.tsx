import React from 'react';

import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';

interface CompanyProfileProps {
  id: number;
  name: string;
  position: string;
  time: string;
  description: string;
  className?: String;
  changeCompany: (i: number) => void;
}

export const CompanyProfile: React.FC<CompanyProfileProps> = ({
  id,
  name,
  position,
  time,
  description,
  changeCompany,
}) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-white font-primary text-center relative md:text-left ">
        <div className="absolute -top-24 h-24">
          {id !== 0 && (
            <BsChevronCompactUp
              onClick={() => changeCompany(id - 1)}
              className="text-gray-200 text-8xl cursor-pointer"
            />
          )}
        </div>
        <div className="text-4xl ">{name}</div>
        <div className="text-2xl mt-4 font-se">{position}</div>
        <div className="text-xl mt-4 font-light">{time}</div>
        <p className="font-thin mt-2">{description}</p>
        <div className="absolute -bottom-24 h-24">
          {id !== 2 && (
            <BsChevronCompactDown
              onClick={() => changeCompany(id + 1)}
              className="text-gray-200 text-8xl cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};
