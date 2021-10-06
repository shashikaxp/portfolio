import React from 'react';
import { DisplaySection } from './../types/constants';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineProfile,
  AiOutlineMail,
} from 'react-icons/ai';

interface TopBarProps {
  displaySection: DisplaySection;
  setDisplaySection: (section: DisplaySection) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  displaySection,
  setDisplaySection,
}) => {
  const getSelectedClass = (mode: DisplaySection) => {
    if (displaySection === mode) {
      return 'border-b border-white font-normal';
    }
    return '';
  };

  return (
    <div className="w-full absolute flex flex-col-reverse items-center p-2 gap-4 md:justify-between md:p-4 z-50 md:flex-row md:p-8">
      <div className="flex mt-3 gap-x-8 md:gap-x-4 font-thin text-white text-xl md:mt-0">
        <div
          className={`cursor-pointer ${getSelectedClass('side-projects')}`}
          onClick={() => setDisplaySection('side-projects')}
        >
          Side Projects
        </div>
        <div
          className={`cursor-pointer ${getSelectedClass('experience')}`}
          onClick={() => setDisplaySection('experience')}
        >
          Experience
        </div>
      </div>
      <div className="flex gap-8 mb-3 text-white cursor-pointer text-xl md:text-3xl md:mb-0 md:gap-2 ">
        <a
          href="https://github.com/shashikaxp"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>

        <a
          href="https://linkedin.com/in/shashikaxp"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>

        <a href="mailto:shashikaxp@gmail.com">
          <AiOutlineMail />
        </a>

        <AiOutlineProfile />
      </div>
    </div>
  );
};
