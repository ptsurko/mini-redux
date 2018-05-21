import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Heading, Section } from '../src';

storiesOf('Heading and Section', module)
  .add('one level', () => (
    <Section>
      <Heading>Header1</Heading>
    </Section>
  ))
  .add('multiple levels', () => (
    <Section>
      <Heading>Header1</Heading>
      <Section>
        <Heading>Header2</Heading>
        <Section>
          <Heading>Header3</Heading>
          <Section>
            <Heading>Header4</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  ));
