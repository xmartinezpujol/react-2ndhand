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
  data,
}: {
  data: ProductType
}) => (
  <CardWrapper link>
    <Card.Content as={Link} href={`/list/${data.id}`} to={`/list/${data.id}`}>
      <Card.Header>
        <Title>
          {data.title}
        </Title>
      </Card.Header>
      <Card.Meta>
        {data.params.map(param => (
          <LabelAdapter key={`${data.id}-${param[0]}`} color="teal">{param[0]}
            <LabelAdapter.Detail>{param[1]}</LabelAdapter.Detail>
          </LabelAdapter>
        ))}
      </Card.Meta>
      <CardDescription>{data.description.length > 100
        ? `${data.description.slice(0, 300)}...`
        : data.description}
      </CardDescription>
    </Card.Content>
    <Card.Content extra>
      <Icon color="teal" name="time" />
      <CardInfo>{`${data.created}`}</CardInfo>
      <Icon color="teal" name="map marker" />
      <CardInfo>{`${data.city_label}`}</CardInfo>
    </Card.Content>
  </CardWrapper>
);

export default ProductCard;
