import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LazyImage } from '../src';

const PREVIEW_IMAGE_SRC = 'https://cdn-images-1.medium.com/freeze/max/30/1*gEqk6LuZwjQDcP1vCOchQg.jpeg?q=20';
const IMAGE_SRC = 'https://cdn-images-1.medium.com/max/600/1*gEqk6LuZwjQDcP1vCOchQg.jpeg';

storiesOf('LazyImage', module)
  .add('simple', () => (
    <LazyImage
      previewSrc={PREVIEW_IMAGE_SRC}
      src={IMAGE_SRC}
    />
  ));
