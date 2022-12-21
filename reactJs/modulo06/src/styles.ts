import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 47rem;
  margin: auto;
  display: flex;
  padding: 3.125rem 0;
  font-family: Arial, Helvetica, sans-serif;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media(max-width: 768px) {
    margin-bottom: 3.125rem;
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  display: block;
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 0.625rem 0;

  @media(max-width: 768px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media(max-width: 768px) {
    justify-content: center;
    margin: 0 1.25rem;
  }
`;

export const Grid = styled.div`
  width: 26.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.625rem;

  @media(max-width: 425px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;