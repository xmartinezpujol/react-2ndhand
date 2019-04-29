import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './index';

describe('Logo', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Logo />);
    expect(tree).toMatchSnapshot();
  });
});
