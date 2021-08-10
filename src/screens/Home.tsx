import React from 'react';

interface homeProps {}

export const Home: React.FC<homeProps> = ({}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-7">
      <h1 className="text-center text-4xl">Shashika Weerakkody</h1>
      <p className="text-center text-xl  md:w-2/3 mt-6">
        A Software Developer with 4+ years of Softwa re Development experience
        on various Platforms, Passionate to build Polished, Innovative and
        well-detailed Apps with Fluid Animations to complement the Design.
      </p>
      <a
        href="#"
        className="mt-12 border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white"
      >
        Projects
      </a>
    </div>
  );
};
