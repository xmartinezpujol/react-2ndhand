import React from 'react';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router';
import renderer from 'react-test-renderer';

// $FlowFixMe
import Ads from '../../mocks/ads.json';

import ProductDetail from './index';

describe('ProductDetail', () => {
  const addsByPage = Ads.map(page => page.ads);
  const product = [].concat.apply([], addsByPage)[0];

  it('renders correctly', () => {
    const context = {};
    const tree = renderer.create(
      <StaticRouter location="/list" context={context}>
        <ProductDetail product={product} />
      </StaticRouter>);
    const wrapper = mount(
      <StaticRouter location="/list" context={context}>
        <ProductDetail product={product} />
      </StaticRouter>);
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('CardHeader').length).toBe(1);
    expect(wrapper.find('Label').length).toBe(2);
    expect(wrapper.find('CardMeta').length).toBe(1);
    expect(wrapper.find('CardDescription').length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(3);
  });

  it('renders a message when data is empty', () => {
    const context = {};
    const product = undefined;
    const wrapper = mount(
      <StaticRouter location="/list" context={context}>
        <ProductDetail product={product} />
      </StaticRouter>);
    expect(wrapper.find('CardHeader').length).toBe(1);
    expect(wrapper.find('Label').length).toBe(0);
    expect(wrapper.find('CardMeta').length).toBe(0);
    expect(wrapper.find('CardDescription').length).toBe(0);
    expect(wrapper.find('Icon').length).toBe(1);
  });
});
