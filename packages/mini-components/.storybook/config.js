import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  require('../stories/Heading.js');
  require('../stories/LazyImage.js');
}

configure(loadStories, module);
