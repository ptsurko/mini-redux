import React from 'react';
import { compose } from '@ptsurko/mini-redux';
import { withProps } from '@ptsurko/mini-recompose';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
    };
    this.timeId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(({ time }) => ({
        time: time + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    setInterval(this.timerId);
  }

  render() {
    return (
      <div>{this.state.time}</div>
    );
  }
}

export default compose(
  withProps(({ time }) => ({
    time: time + 10,
  })),
  // pure(),
)(Timer);
