import styled from 'styled-components';
// $FlowFixMe
import { Card, Label } from 'semantic-ui-react';

export const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 40px 20px 20px 20px;
  @media (min-width: 768px) {
    padding: 50px 20px 20px 20px;
    width: calc(100% - 20px);
  }
  
  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;

export const CardWrapper = styled(Card)`
  &&& {
    display: flex;
    margin-top: 60px;
    justify-content: center;
    min-height: 240px;
    width: 100%;
    
    @media (min-width: 768px) {
      width: calc(100% - 20px);
    }
    
    @media (min-width: 992px) {
      margin-top: 60px;
      width: 932px;
      padding: 20px;
    }
  }
`;

export const CardDescription = styled(Card.Description)`
  &&& {
    @media (min-width: 768px) {
      margin: 10px 0 20px 0;
    }
    
    @media (min-width: 992px) {
      font-size: 16px;
      text-align: justify;
      margin: 30px 0 20px 0 !important;
    }
  }
`;

export const CardInfo = styled.span`
  margin-right: 10px;
`;

export const LabelAdapter = styled(Label)`
  display: flex;
  font-size: 10px !important;
  
  @media (min-width: 768px) {
    font-size: 18px !important;
  }
  
  @media (min-width: 992px) {
    font-size: 14px !important;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
  
  @media (min-width: 992px) {
    font-size: 28px;
    margin: 10px 0 20px 0;
  }
`;
