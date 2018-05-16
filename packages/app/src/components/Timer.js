import React from 'react';
import { compose } from '@ptsurko/mini-redux';
import { pure, onlyUpdateForKeys, toClass } from '@ptsurko/mini-recompose';

const Timer = ({ time }) => {
  return (
    <div>Time: {time}</div>
  );
};

export default compose(
  pure(),
  onlyUpdateForKeys(['time']),
  toClass(),
)(Timer);
