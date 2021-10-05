import { animated, useSpring } from '@react-spring/web';
import React from 'react';

import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';
import { CompanyData } from './../types/constants';

type UpdatedCompanyData = Pick<
  CompanyData,
  'description' | 'id' | 'name' | 'position' | 'time'
>;

type CompanyProfileProps = UpdatedCompanyData & {
  numberOfCompanies: number;
  changeCompany: (i: number) => void;
};

export const CompanyProfile: React.FC<CompanyProfileProps> = ({
  id,
  name,
  position,
  time,
  description,
  changeCompany,
  numberOfCompanies,
}) => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 300,
    },
  });

  return (
    <animated.div
      style={styles}
      className="flex items-center justify-center flex-col"
    >
      <div className="text-white font-primary text-center relative md:text-left ">
        <div className="h-8 mb-2 text-center flex flex-row justify-center md:absolute md:-top-24 md:h-24 md:mt-4">
          {id !== 0 && (
            <BsChevronCompactUp
              onClick={() => changeCompany(id - 1)}
              className="text-gray-200 text-4xl md:text-8xl cursor-pointer"
            />
          )}
        </div>
        <div className="text-3xl md:text-4xl ">{name}</div>
        <div className="text-xl md:text-2xl md:mt-4 ">{position}</div>
        <div className="text-lg mt-2 font-light md:mt-4 md:text-xl md:font-normal">
          {time}
        </div>
        <p className="font-thin mt-2 hidden md:block">{description}</p>
        <div className="h-8 mt-2 text-center flex flex-row justify-center  md:absolute md:-bottom-24 md:h-24 md:mt-4">
          {id !== numberOfCompanies - 1 && (
            <BsChevronCompactDown
              onClick={() => changeCompany(id + 1)}
              className="text-gray-200 text-4xl md:text-8xl cursor-pointer"
            />
          )}
        </div>
      </div>
    </animated.div>
  );
};
