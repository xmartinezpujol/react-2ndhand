import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Card, Icon } from 'semantic-ui-react';

import {
  CardDescription,
  CardInfo,
  CardWrapper,
  LabelAdapter,
  Title,
} from './styles';

const ProductCard = props => (
  <CardWrapper link>
    <Card.Content as={Link} href={`/list/${props.data.id}`} to={`/list/${props.data.id}`}>
      <Card.Header>
        <Title>
          {props.data.title}
        </Title>
      </Card.Header>
      <Card.Meta>
        {props.data.params.map(param => (
          <LabelAdapter key={`${props.data.id}-${param[0]}`} color="teal">{param[0]}
            <LabelAdapter.Detail>{param[1]}</LabelAdapter.Detail>
          </LabelAdapter>
        ))}
      </Card.Meta>
      <CardDescription>{props.data.description.length > 100
        ? `${props.data.description.slice(0, 300)}...`
        : props.data.description}
      </CardDescription>
    </Card.Content>
    <Card.Content extra>
      <Icon color="teal" name="time" />
      <CardInfo>{`${props.data.created}`}</CardInfo>
      <Icon color="teal" name="map marker" />
      <CardInfo>{`${props.data.city_label}`}</CardInfo>
    </Card.Content>
  </CardWrapper>
);

ProductCard.propTypes = {
  data: PropTypes.shape({
    city_label: PropTypes.string,
    created: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    params: PropTypes.array,
  }).isRequired,
};

export default ProductCard;
