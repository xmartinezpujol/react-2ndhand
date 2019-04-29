import React from 'react';
import StoryRouter from 'storybook-react-router';

import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';

import ProductDetail from '../components/ProductDetail';

storiesOf('ProductDetail', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('default', () => {
    const product = {
      "id": "205799123",
      "title": "iphone 5s 16gb silver bialy stan dbd Pl dystrybucja 100% sprawny",
      "created": "10  lut",
      "description": "Sprzedam Iphone 5s w bdb stanie technicznym i wizualnym (jak na foto) telefon jest w 100 % sprawny wszystko dziala nie zawiesza sie i nie gubi sieci. Wizualnie jak na zdjeciach posiada normalne slady urzytkowania,\nPl dystrybucja telefon fabrycznie bez blokady simlock. \nTelefon sprzedaje w kmpl \nW sklad zestawu wchodzi telefon ladowarka (ori) kabel sluchawki i opakowanie zgodne z imei",
      "params": [
        [
          "Marka",
          "iPhone"
        ],
        [
          "Stan",
          "Używane"
        ]
      ],
      "city_label": "Kobyłka"
    };
    return (
      <ProductDetail product={product} />
    );
  });
