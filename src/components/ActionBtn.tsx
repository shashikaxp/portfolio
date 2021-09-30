import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { ActionType } from './../types/constants';

interface ActionBtnProps {
  type: ActionType;
  data: string;
}

export const ActionBtn: React.FC<ActionBtnProps> = ({ type, data }) => {
  const label = type === 'github' ? 'Github' : 'Visit';
  const Icon = type === 'github' ? AiFillGithub : BiWorld;

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
