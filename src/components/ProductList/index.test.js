import React from 'react';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router';
import renderer from 'react-test-renderer';

// $FlowFixMe
import Ads from '../../mocks/ads.json';

import ProductList from './index';

describe('ProductList', () => {
  const addsByPage = Ads.map(page => page.ads);
  const allAds = [].concat.apply([], addsByPage);
  it('renders correctly', () => {
    const context = {};
    const tree = renderer.create(
      <StaticRouter location="/list" context={context}>
        <ProductList products={allAds} />
      </StaticRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders products when data is received', () => {
    const context = {};
    const twoProducts = allAds.slice(0, 2);
    const wrapper = mount(
      <StaticRouter location="/list" context={context}>
        <ProductList products={twoProducts} />
      </StaticRouter>
    );
    expect(wrapper.find('ProductCard').length).toBe(2);
  });
  it('renders no products when data is empty', () => {
    const context = {};
    const products = [];
    const wrapper = mount(
      <StaticRouter location="/list" context={context}>
        <ProductList products={products} />
      </StaticRouter>
    );
    expect(wrapper.find('ProductCard').length).toBe(0);
  });
});
