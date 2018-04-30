import React from 'react';
import PropTypes from 'prop-types';
import { setDisplayName, wrapDisplayName } from '../mini-recompose';

// TODO: Specifically, every time an action is dispatched and subscribers are notified, connect
// checks to see if the root state object has changed. If it hasn't, connect assumes that nothing
// else in the state changed, and skips any further rendering work. (This is why combineReducers
// tries to return the same root state object if possible.) If the root state object did change,
// connect will call the supplied mapStateToProps function, and do a shallow equality check on
// the current result versus the previous returned result, to see if any of the props from store
// data have changed. Again, if the contents of the data appears to be the same,
// connect will not actually re-render the wrapped component. These equality checks in connect
// are why accidental state mutations result in components not re-rendering, because connect
// assumes that data hasn't changed and re-rendering isn't needed.
const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends React.Component {
    componentDidMount() {
      this.unsubscribe = this.context.store.subscribe(() => {
        // TODO: Optimize: compare new props with previous
        this.forceUpdate();
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const state = this.context.store.getState();
      const dispatch = this.context.store.dispatch;
      return (
        <WrappedComponent
          {...this.props}
          {...mapStateToProps(state, this.props)}
          {...mapDispatchToProps(dispatch, this.props)}
        />
      );
    }
  }

  Connect.contextTypes = {
    store: PropTypes.object.isRequired,
  };

  return setDisplayName(wrapDisplayName(WrappedComponent, 'connect'))(Connect);
};

export default connect;
