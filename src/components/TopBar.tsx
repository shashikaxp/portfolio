import React from 'react';
import { DisplaySection } from './../types/constants';

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
    <div className="w-full absolute flex justify-between p-8 z-50">
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
      <div>socials</div>
    </div>
  );
};
