import React from 'react';
import { IconType } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from 'react-icons/io5';
import { ActionType } from './../types/constants';

interface ActionBtnProps {
  type: ActionType;
  data: string;
}

export const ActionBtn: React.FC<ActionBtnProps> = ({ type, data }) => {
  let label: string;
  let Icon: IconType;
  switch (type) {
    case 'android':
      Icon = IoLogoGooglePlaystore;
      label = 'Play Store';
      break;
    case 'ios':
      Icon = IoLogoAppleAppstore;
      label = 'App Store';
      break;
    case 'visit':
      Icon = BiWorld;
      label = 'Visit';
      break;
    case 'github':
      Icon = AiFillGithub;
      label = 'Github';
      break;
    default:
      Icon = BiWorld;
      label = 'Visit';
      break;
  }

  return (
    <div className="">
      <a
        href={data}
        target="_blank"
        className="flex gap-1.5 flex-row items-center text-xl text-text hover:text-black"
        rel="noreferrer"
      >
        <Icon className="w-6 h-6" />
        <div>{label}</div>
      </a>
    </div>
  );
};
