
import React from 'react';
import { compose } from '@ptsurko/mini-redux';
import { pure } from '@ptsurko/mini-recompose';


const Button = ({ children, onClick }) => {
  console.log('Button.render');
  return (
    <button onClick={onClick}>{children}</button>
  );
};

export default compose(
  pure(),
)(Button);
