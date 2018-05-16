import React from 'react';
import { connect, bindActionCreators } from '@ptsurko/mini-redux';
import { fetchRecord, select } from '@ptsurko/mini-redux-crud-store';
import { Section, Heading as H } from '@ptsurko/mini-components';
import Button from './Button';
import { increment, decrement } from './../reducers/counter';

class Redux extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncrementButton = this.handleIncrementButton.bind(this);
    this.handleDecrementButton = this.handleDecrementButton.bind(this);
    this.handleFetchRecord = this.handleFetchRecord.bind(this);
  }

  handleFetchRecord() {
    this.props.actions.fetchRecord('customer', 100);
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

        <Button onClick={this.handleFetchRecord}>Fetch Record</Button>{' '}
      </Section>
    );
  }
}

const fetchCustomer = (id) => fetchRecord('customer', id);

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
    actions: bindActionCreators({
      increment,
      decrement,
      fetchRecord
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
