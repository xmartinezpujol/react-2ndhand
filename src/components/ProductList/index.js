import React from 'react';

import Logo from '../../components/Shared/Logo';
import ProductCard from '../../components/ProductCard';

import {
  ListContainer,
  ListPageWrapper,
  LogoWrapper,
} from './styles';

const ProductList = ({
  products,
}: {
  products: ProductType[]
}) => (
    <ListPageWrapper>
      <ListContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        {products && products.map(ad => (
          <ProductCard key={ad.id} product={ad} />
        ))}
      </ListContainer>
    </ListPageWrapper>
);

export default ProductList;
