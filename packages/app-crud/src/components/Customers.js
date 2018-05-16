import React from 'react';
import { connect, bindActionCreators } from '@ptsurko/mini-redux';
import { fetchCollection, select } from '@ptsurko/mini-redux-crud-store';
import { Heading as H } from '@ptsurko/mini-components';

class Customers extends React.Component {
  constructor(props) {
    super(props);

    this.handleFetchCustomers = this.handleFetchCustomers.bind(this);
  }

  handleFetchCustomers() {
    this.props.actions.fetchCustomers();
  }

  render() {
    const { customers } = this.props;

    return (
      <div>
        <H>Customers</H>
        {customers.isLoading && <div>Loading...</div>}
        {customers.data && (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>sex</th>
              </tr>
            </thead>
            <tbody>
              {customers.data.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.age}</td>
                  <td>{customer.sex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button
          disabled={!customers.needsFetch}
          onClick={this.handleFetchCustomers}
        >
          Fetch Customers
        </button>
      </div>
    );
  }
}

const fetchCustomers = () => fetchCollection('customers', `customers`);

const mapStateToProps = (state, props) => {
  return {
    customers: select(fetchCustomers(), state.models),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      fetchCustomers,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
