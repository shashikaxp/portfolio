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
    <div className="w-full absolute flex flex-col-reverse items-center gap-4 md:justify-between p-4 z-50 md:flex-row md:p-8">
      <div className="flex gap-x-4 font-thin text-white text-xl">
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
      <div className="flex gap-2 text-white cursor-pointer text-3xl">
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
