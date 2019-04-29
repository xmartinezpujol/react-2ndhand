import React from 'react';

import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';

import Logo from '../components/Shared/Logo';

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add('OLX', () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Logo />
      </div>
    );
  });
