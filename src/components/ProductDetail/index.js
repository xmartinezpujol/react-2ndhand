import React from 'react';
import { Link } from 'react-router-dom';

import {
  CardDescription,
  CardInfo,
  CardWrapper,
  DetailContainer,
  DetailPageWrapper,
  LabelAdapter,
  Title
} from "./styles";
// $FlowFixMe
import { Card, Icon } from "semantic-ui-react";

const ProductDetail = ({
  product,
}: {
  product: ProductType
}) => (
  <DetailPageWrapper>
    <DetailContainer>
      <Link to="/list" href="/list" data-cy="productCardDetailBackArrow">
        <Icon color='teal' name='arrow left' size='big' />
      </Link>
      <CardWrapper data-cy="productCardDetail">
        {product &&
          <React.Fragment>
            <Card.Content>
              <Card.Header>
                <Title>{product.title}</Title>
              </Card.Header>
              <Card.Meta>
                {product.params.map(param => (
                  <LabelAdapter key={`${product.id}-${param[0]}`} color="teal">{param[0]}
                    <LabelAdapter.Detail>{param[1]}</LabelAdapter.Detail>
                  </LabelAdapter>
                ))}
              </Card.Meta>
              <CardDescription>{product.description}</CardDescription>
            </Card.Content>
            <Card.Content extra>
              <Icon color="teal" name="time" />
              <CardInfo>{`${product.created}`}</CardInfo>
              <Icon color="teal" name="map marker" />
              <CardInfo>{`${product.city_label}`}</CardInfo>
            </Card.Content>
          </React.Fragment>
        }
        {!product &&
          <React.Fragment>
            <Card.Content>
              <Card.Header>
                <Title>Produkt nie znaleziony</Title>
              </Card.Header>
            </Card.Content>
          </React.Fragment>
        }
      </CardWrapper>
    </DetailContainer>
  </DetailPageWrapper>
);

export default ProductDetail;
