import getDisplayName from './getDisplayName';

const wrapDisplayName = (Component, wrapperName) =>
  `${wrapperName}(${getDisplayName(Component)})`;

export default wrapDisplayName;
