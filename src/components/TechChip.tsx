import React from 'react';

interface TechChipProps {
  label: string;
}

export const TechChip: React.FC<TechChipProps> = ({ label }) => {
  return (
    <div className="text-text-light flex-sh py-1.5 px-5 border-2 border-text rounded-full text-center font-bold">
      {label}
    </div>
  );
};
