import styled from 'styled-components';

export const ListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 30px;
    justify-content: space-between;
  }
  
  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;
