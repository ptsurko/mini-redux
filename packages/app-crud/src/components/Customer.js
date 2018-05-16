import React from 'react';
import { connect, bindActionCreators } from '@ptsurko/mini-redux';
import { Heading as H } from '@ptsurko/mini-components';
import { fetchRecord, select } from '@ptsurko/mini-redux-crud-store';

class Customer extends React.Component {
  constructor(props) {
    super(props);

    this.handleFetchCustomer = this.handleFetchCustomer.bind(this);
  }

  handleFetchCustomer() {
    const { id, customer, actions } = this.props;
    if (customer.needsFetch) {
      actions.fetchCustomer(id);
    }
  }

  render() {
    const { customer } = this.props;
    return (
      <div>
        <H>Customer</H>
        {customer.isLoading && <div>Loading...</div>}
        {customer.data && (
          <div>
            Customer:
            <div>id: {customer.data.id}</div>
            <div>name: {customer.data.name}</div>
            <div>age: {customer.data.age}</div>
            <div>sex: {customer.data.sex}</div>
          </div>)}
        <button
          disabled={!customer.needsFetch}
          onClick={this.handleFetchCustomer}
        >
          Fetch Customer
        </button>
      </div>
    );
  }
}

const fetchCustomer = (id) => fetchRecord('customers', id, `customers/${id}`);

const mapStateToProps = (state, props) => {
  return {
    customer: select(fetchCustomer(props.id), state.models),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      fetchCustomer,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
