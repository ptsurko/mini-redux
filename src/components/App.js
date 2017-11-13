import React from 'react'
import PropTypes from 'prop-types'
import connect from '../mini-redux/connect'
import { counterSelector, doubleCounterSelector } from './../reducers/counter'

class App extends React.Component {
  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  render() {
    return (
      <div>
        <h1>Mini Redux!</h1>
        <button onClick={this.increment}>Increment</button>{' '}
        {this.props.counter}{' '}
        {this.props.doubleCounter}{' '}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: counterSelector(state),
    doubleCounter: doubleCounterSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
