import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { SRLWrapper } from 'simple-react-lightbox';
import { ProjectScreenshot } from './../types/constants';

interface ImageGalleryProps {
  images?: ProjectScreenshot[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images) return null;

  const isMD = useMediaQuery({ query: '(min-width: 768px)' });

  const getImageRatio = (ratio: ProjectScreenshot['ratio']) => {
    if (!isMD) return '';
    const className =
      ratio == 'portrait' ? ' row-span-portrait ' : ' col-span-horizontal';
    return className;
  };

  const getImageCustomClasses = (ratio: ProjectScreenshot['ratio']) => {
    if (ratio === 'horizontal') {
      return 'w-full';
    } else if (ratio === 'portrait') {
      return 'h-full';
    } else {
      return '';
    }
  };

  return (
    <SRLWrapper>
      <div
        className="grid w-full h-auto gap-8 auto-rows-img-grid-sm 
      grid-cols-img-grid-sm md:auto-rows-img-grid-md md:grid-cols-img-grid-md"
      >
        {images.map(({ src, ratio }) => {
          return (
            <div
              key={src}
              className={`${getImageRatio(ratio)}   
              flex items-center justify-center bg-transparent 
              relative cursor-pointer shadow-xl transition ease-in overflow-hidden 
              hover:scale-105 hover:opacity-70`}
            >
              <img
                src={src}
                className={`${getImageCustomClasses(ratio)}`}
                alt="screenshots"
              />
            </div>
          );
        })}
      </div>
    </SRLWrapper>
  );
};
