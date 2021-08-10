import React from 'react';

interface stepperProps {
  steps: string[];
}

export const Stepper: React.FC<stepperProps> = ({ steps }) => {
  return (
    <div className="space-y-5">
      {steps.map((step) => {
        return (
          <div key={step}>
            <a
              href="#"
              className="w-4 h-4 rounded-full bg-white flex items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
