import React from 'react';
import { isShallowEqual } from '@ptsurko/mini-lodash';
import wrapDisplayName from './wrapDisplayName';
import setDisplayName from './setDisplayName';

const pure = () => (BaseComponent) => {
  class WrapperComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
      return !isShallowEqual(this.props, nextProps);
    }

    render() {
      return (
        <BaseComponent {...this.props} />
      );
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'pure'))(WrapperComponent);
};

export default pure;
