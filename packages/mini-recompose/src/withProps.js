import React from 'react';
import wrapDisplayName from './wrapDisplayName';
import setDisplayName from './setDisplayName';

const withProps = (propsMapper) => (BaseComponent) => {
  const hoc = (props) => (
    <BaseComponent
      {...propsMapper(props)}
    />
  );

  return setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(hoc);
};

export default withProps;
