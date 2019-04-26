import React from 'react';

import Logo from '../../components/Shared/Logo';
import ProductCard from '../../components/ProductCard';

import { ListContainer, ListPageWrapper, LogoWrapper } from './styles';

type Props = {
  products: ProductType[]
};
type State = {};

class ProductList extends React.Component<Props, State> {
  render() {
    const { products } = this.props;
    return (
      <ListPageWrapper>
        <ListContainer>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          {products && products.map(ad => (
            <ProductCard key={ad.id} data={ad} />
          ))}
        </ListContainer>
      </ListPageWrapper>
    );
  }
}

export default ProductList;
