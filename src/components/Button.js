
import React from 'react';
import compose from '../mini-redux/compose';
import { pure } from '../mini-recompose';


const Button = ({ children, onClick }) => {
  console.log('Button.render');
  return (
    <button onClick={onClick}>{children}</button>
  );
};

export default compose(
  pure(),
)(Button);
