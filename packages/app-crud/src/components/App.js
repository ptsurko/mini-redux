import React from 'react';
import { Section, Heading as H, User } from '@ptsurko/mini-components';
import Customer from './Customer';
import Customers from './Customers';

class App extends React.Component {
  render() {
    return (
      <User.Provider value={{ name: 'John' }}>
        <Section>
          <H>Mini Redux</H>
          <Customer id={1} />
          <Customers />
        </Section>
      </User.Provider>
    );
  }
}

export default App;
