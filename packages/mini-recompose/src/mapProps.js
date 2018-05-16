import React from 'react';
import wrapDisplayName from './wrapDisplayName';
import setDisplayName from './setDisplayName';

const mapProps = (propsMapper) => (BaseComponent) => {
  const hoc = (props) => (
    <BaseComponent
      {...(typeof propsMapper === 'function' ? propsMapper(props) : propsMapper)}
    />
  );

  return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(hoc);
};

export default mapProps;
