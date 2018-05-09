import React from 'react';
import { Section, Heading as H, User } from '@ptsurko/mini-components';
import Counter from './Counter';
import Timer from './Timer';
import Auth from './Auth';

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
