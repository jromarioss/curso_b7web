import styled  from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  margin: auto;
  display: flex;
  padding: 50px 0;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  display: block;
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-inline: 20px;
  }
`;

export const Grid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media (max-width: 412px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
