import React from 'react';
import Counter from './Counter';
import Timer from './Timer';
import Auth from './Auth';
import { Section, Heading as H } from './../mini-components/Heading';
import { User } from './../mini-components/User';

class App extends React.Component {
  render() {
    return (
      <User.Provider value={{ name: 'John' }}>
        <Section>
          <H>Mini Redux</H>
          <Counter />
          <Timer time={10} />
          <Auth />
        </Section>
      </User.Provider>
    );
  }
}

export default App;
