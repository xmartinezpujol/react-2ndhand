import React from 'react';

import { Link } from 'react-router-dom';
// $FlowFixMe
import { Card, Icon } from 'semantic-ui-react';

import {
  CardDescription,
  CardInfo,
  CardWrapper,
  LabelAdapter,
  Title,
} from './styles';

const ProductCard = ({
  product,
}: {
  product: ProductType
}) => (
  <CardWrapper link data-cy="productCard">
    <Card.Content as={Link} href={`/list/${product.id}`} to={`/list/${product.id}`}>
      <Card.Header>
        <Title>
          {product.title}
        </Title>
      </Card.Header>
      <Card.Meta>
        {product.params.map(param => (
          <LabelAdapter key={`${product.id}-${param[0]}`} color="teal">{param[0]}
            <LabelAdapter.Detail>{param[1]}</LabelAdapter.Detail>
          </LabelAdapter>
        ))}
      </Card.Meta>
      <CardDescription>{product.description.length > 300
        ? `${product.description.slice(0, 300)}...`
        : product.description}
      </CardDescription>
    </Card.Content>
    <Card.Content extra>
      <Icon color="teal" name="time" />
      <CardInfo>{`${product.created}`}</CardInfo>
      <Icon color="teal" name="map marker" />
      <CardInfo>{`${product.city_label}`}</CardInfo>
    </Card.Content>
  </CardWrapper>
);

export default ProductCard;
