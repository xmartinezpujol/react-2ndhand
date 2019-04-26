import React from 'react';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router';
import renderer from 'react-test-renderer';

// $FlowFixMe
import Ads from '../../mocks/ads.json';

import ProductCard from './index';

describe('ProductCard', () => {
  const addsByPage = Ads.map(page => page.ads);
  const product = [].concat.apply([], addsByPage)[0];

  it('renders correctly', () => {
    const context = {};
    const tree = renderer.create(
      <StaticRouter location="/list" context={context}>
        <ProductCard product={product} />
      </StaticRouter>).toJSON();
    const wrapper = mount(
      <StaticRouter location="/list" context={context}>
        <ProductCard product={product} />
      </StaticRouter>);
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('CardHeader').length).toBe(1);
    expect(wrapper.find('Label').length).toBe(2);
    expect(wrapper.find('CardMeta').length).toBe(1);
    expect(wrapper.find('CardDescription').length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(2);
    expect(wrapper.find('CardDescription').getElement().props.children.length).toBe(303);
  });
});

