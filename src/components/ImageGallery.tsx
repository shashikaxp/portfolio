import React from 'react';
import Gallery from 'react-photo-gallery';
import { SRLWrapper } from 'simple-react-lightbox';

interface img {
  src: string;
  width: number;
  height: number;
}

interface ImageGalleryProps {
  images?: img[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images) return null;

  return (
    <SRLWrapper>
      <Gallery photos={images} />
    </SRLWrapper>
  );
};
