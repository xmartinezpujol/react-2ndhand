import React from 'react';

import Logo from '../../components/Shared/Logo';
import ProductCard from '../../components/ProductCard';

import { ListContainer, ListPageWrapper, LogoWrapper } from './styles';

import Ads from '../../mocks/ads.json';

class ProductList extends React.Component {
  render() {
    return (
      <ListPageWrapper>
        <ListContainer>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          {Ads.map(page => page.ads.map(ad => (
            <ProductCard key={ad.id} data={ad} />
          )))}
        </ListContainer>
      </ListPageWrapper>
    );
  }
}

export default ProductList;
