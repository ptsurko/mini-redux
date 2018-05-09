import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return this.props.children;
  }
}

Provider.propTypes = {
  store: PropTypes.object.isRequired,
};

Provider.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default Provider;
