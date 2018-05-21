import React from 'react';
import Level from './Level';

export default ({ children }) => (
  <section>
    <Level.Consumer>
      {(level) => (
        <Level.Provider value={level + 1}>
          {children}
        </Level.Provider>
      )}
    </Level.Consumer>
  </section>
);
