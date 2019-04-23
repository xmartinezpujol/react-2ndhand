import styled from 'styled-components';

import { Card, Label } from 'semantic-ui-react';

export const CardWrapper = styled(Card)`
  &&& {
    height: 280px;
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

export const CardInfo = styled.span`
  margin-right: 10px;
`;

export const LabelAdapter = styled(Label)`
  display: flex;
  font-size: 10px !important;
`;

export const Title = styled.div`
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 10px;
`;
