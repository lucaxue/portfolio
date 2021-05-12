import React, { useState } from 'react';
import { default as NextImage, ImageProps } from 'next/image';
import styled, { css, keyframes } from 'styled-components';

const Image: React.FC<ImageProps> = (props) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Fade isReady={imageIsLoaded}>
      <NextImage
        onLoad={(e) => {
          const target = e.target as HTMLImageElement;
          // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true);
          }
        }}
        {...props}
      />
    </Fade>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Fade = styled.div<{ isReady: boolean }>`
  ${(props) =>
    props.isReady &&
    css`
      animation: ${fadeIn} 2s ease-out;
    `}
`;

export default Image;
