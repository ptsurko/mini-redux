import React from 'react';
import { compose } from '@ptsurko/mini-redux';
import { withProps } from '@ptsurko/mini-recompose';
import Timer from './Timer';

class TimerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
    };
    this.timeId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      // this.forceUpdate();
      this.setState(({ time }) => ({
        time: time + 1,
        // time,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    setInterval(this.timerId);
  }

  render() {
    return (<Timer time={this.state.time} />);
  }
}

export default compose(
  withProps(({ time }) => ({
    time: time + 10,
  })),
)(TimerContainer);
