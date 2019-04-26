import React from 'react';

import Logo from '../../components/Shared/Logo';
import ProductCard from '../../components/ProductCard';

import { ListContainer, ListPageWrapper, LogoWrapper } from './styles';
// $FlowFixMe
import Ads from '../../mocks/ads.json';

type Props = {};
type State = {};

class ProductList extends React.Component<Props, State> {
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
