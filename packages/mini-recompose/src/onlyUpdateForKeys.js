import React from 'react';
import { isShallowEqualByKeys } from '@ptsurko/mini-lodash';
import wrapDisplayName from './wrapDisplayName';
import setDisplayName from './setDisplayName';

const onlyUpdateForKeys = (propKeys) => (BaseComponent) => {
  class WrapperComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
      return !isShallowEqualByKeys(this.props, nextProps, propKeys);
    }

    render() {
      return (
        <BaseComponent {...this.props} />
      );
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForKeys'))(WrapperComponent);
};

export default onlyUpdateForKeys;
