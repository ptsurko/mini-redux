import React from 'react';
import Level from './Level';

// Managing Heading Levels In Design Systems
//  https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3

export default ({ children }) => (
  <Level.Consumer>
    {(level) => {
      const H = `h${level}`;
      return (<H>{children}</H>);
    }}
  </Level.Consumer>
);
