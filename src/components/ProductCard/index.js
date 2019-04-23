import React from 'react';
import PropTypes from 'prop-types';

import { Card, Icon, Label } from 'semantic-ui-react';

import { CardDescription, CardWrapper } from './styles';

const ProductCard = props => (
  <CardWrapper>
    <Card.Content>
      <Card.Header>{props.data.title}</Card.Header>
      <Card.Meta>
        {props.data.params.map(param => (
          <Label>{param[1]}</Label>
        ))}
      </Card.Meta>
      <CardDescription>{props.data.description.length > 100
        ? `${props.data.description.slice(0, 300)}...`
        : props.data.description}
      </CardDescription>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="time" />
        {`${props.data.created}`}
        <Icon name="map marker" />
        {`${props.data.city_label}`}
      </a>
    </Card.Content>
  </CardWrapper>
);

ProductCard.propTypes = {
  data: PropTypes.shape({
    city_label: PropTypes.string,
    created: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    params: PropTypes.array,
  }).isRequired,
};

export default ProductCard;
