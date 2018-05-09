import React from 'react';
import { connect, bindActionCreators } from '@ptsurko/mini-redux';
import { Section, Heading as H } from '@ptsurko/mini-components';
import Button from './Button';
import {
  // counterSelector,
  // doubleCounterSelector,
  increment,
  decrement,
  // asyncIncrement,
  // asyncDecrement,
} from './../reducers/counter';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncrementButton = this.handleIncrementButton.bind(this);
    this.handleDecrementButton = this.handleDecrementButton.bind(this);
  }

  handleIncrementButton() {
    this.props.actions.increment();
  }

  handleDecrementButton() {
    this.props.actions.decrement();
  }

  render() {
    return (
      <Section>
        <H>Counter</H>
        <Button onClick={this.handleIncrementButton}>Increment</Button>{' '}
        {/* <button onClick={this.props.asyncActions.increment}>Async increment</button>{' '} */}
        {this.props.counter}{' '}
        {/* {this.props.doubleCounter}{' '} */}
        <Button onClick={this.handleDecrementButton}>Decrement</Button>{' '}
        {/* <button onClick={this.props.asyncActions.decrement}>Async decrement</button> */}
      </Section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
    actions: bindActionCreators({ increment, decrement }, dispatch),
  };
};

// const mapStateToProps = (state) => {
//   return {
//     counter: counterSelector(state),
//     doubleCounter: doubleCounterSelector(state),
//     structuredCounter: structuredSelector(state),
//   };
// };


// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: bindActionCreators(increment, dispatch),
//     decrement: bindActionCreators(decrement, dispatch),
//     asyncActions: bindActionCreators({
//       increment: asyncIncrement,
//       decrement: asyncDecrement,
//     }, dispatch),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
