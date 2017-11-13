import React from 'react'
import PropTypes from 'prop-types'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName ||
         WrappedComponent.name ||
         'Component'
}

const connect = (mapStateToProps = () => {}, mapDispatchToProps = () => {}) => {
  return (Component) => {
    return class extends React.Component {
      static contextTypes = {
        store: PropTypes.object
      }

      static displayName = `connect${getDisplayName(Component)}`

      componentDidMount() {
        this.unsubscribeFromStore = this.context.store.subscribe(() => this.forceUpdate())
      }

      componentWillUnmount() {
        this.unsubscribeFromStore()
      }

      render() {
        const { store } = this.context
        const mergedStateProps = { ...mapStateToProps(store.getState()), ...this.props }
        const mergedDispatchProps = mapDispatchToProps(store.dispatch)
        const props = { ...mergedStateProps, ...mergedDispatchProps, ...this.props }

        return <Component { ...props }/>
      }
    }
  }
}

export default connect
