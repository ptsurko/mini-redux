import React, { Component } from 'react';
import wrapDisplayName from './wrapDisplayName';
import setDisplayName from './setDisplayName';

const toClass = () => (BaseComponent) => {
  if (BaseComponent.prototype && BaseComponent.prototype.render) {
    return BaseComponent;
  }

  class WrapperComponent extends Component {
    render() {
      return (<BaseComponent {...this.props} />);
    }
  }

  return setDisplayName(wrapDisplayName(BaseComponent, 'toClass'))(WrapperComponent);
};

export default toClass;
