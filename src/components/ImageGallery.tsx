import React from 'react';
import Gallery from 'react-photo-gallery';
import { SRLWrapper } from 'simple-react-lightbox';
import { ProjectScreenshot } from './../types/constants';

interface ImageGalleryProps {
  images?: ProjectScreenshot[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images) return null;

  //have to add empty onclick for show the mouse pointer :S
  //need to check other possibilities
  return (
    <SRLWrapper>
      <div className="bg-gray-300">
        <Gallery margin={15} photos={images} onClick={() => {}} />
      </div>
    </SRLWrapper>
  );
};
