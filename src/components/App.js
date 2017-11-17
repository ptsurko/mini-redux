import React from 'react';
import connect from '../mini-redux/connect';
import bindActionCreators from '../mini-redux/bindActionCreators';
import {
  counterSelector,
  doubleCounterSelector,
  structuredSelector,
  increment,
  decrement,
  asyncIncrement,
  asyncDecrement,
} from './../reducers/counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Mini Redux!</h1>
        <button onClick={this.props.increment}>Increment</button>{' '}
        <button onClick={this.props.asyncActions.increment}>Async increment</button>{' '}
        {this.props.counter}{' '}
        {this.props.doubleCounter}{' '}
        <button onClick={this.props.decrement}>Decrement</button>{' '}
        <button onClick={this.props.asyncActions.decrement}>Async decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: counterSelector(state),
    doubleCounter: doubleCounterSelector(state),
    structuredCounter: structuredSelector(state),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
    asyncActions: bindActionCreators({
      increment: asyncIncrement,
      decrement: asyncDecrement,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
