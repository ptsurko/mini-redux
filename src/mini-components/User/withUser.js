import React from 'react';
import User from './User';

export default () => (Component) => (props) => (
  <User.Consumer>
    {(user) => user && <Component user={user} {...props} />}
  </User.Consumer>
);
