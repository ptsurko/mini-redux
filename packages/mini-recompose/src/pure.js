import React from 'react';
import wrapDisplayName from './wrapDisplayName';
import setDisplayName from './setDisplayName';

const shallowEqual = (props, newProps) => {
  return true;
};

const pure = () => (BaseComponent) => {
  class WrapperComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
      return !shallowEqual(this.props, nextProps);
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
