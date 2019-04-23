import styled from 'styled-components';

import { Card } from 'semantic-ui-react';

export const CardWrapper = styled(Card)`
  &&& {
    height: 300px;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      width: calc(50% - 20px);
    }
    
    @media (min-width: 992px) {
      width: calc(33% - 15px);
    }
  }
`;

export const CardDescription = styled(Card.Description)`
  &&& {
    line-clamp: 3;
  }
`;
