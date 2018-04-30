import React from 'react';
import { setDisplayName, wrapDisplayName } from '../mini-recompose';

const withProps = (propsMapper) => (BaseComponent) => {
  const hoc = (props) => (
    <BaseComponent
      {...propsMapper(props)}
    />
  );

  return setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(hoc);
};

export default withProps;
