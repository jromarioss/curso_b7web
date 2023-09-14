import styled from "styled-components"

export const GameMemoryContainer = styled.div`
  width: 100%;
  max-width: 750px;
  margin: auto;
  display: flex;
  padding: 50px 0;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  
  @media(max-width: 768px) {
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
  position: relative;

  h2 {
    margin-top: 5rem;
    align-items: center;
  }

  @media(max-width: 768px) {
    justify-content: center;
    margin: 0 20px;
  }
`;

export const Grid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const GameOver = styled.div`
  width: 430px;
  height: 320px;
  border-radius: 18px; 
  background-color: #0000005f;
  position: absolute;
  top: 0;
  right: 0;

  p {
    padding-top: 5rem;
    font-size: 3rem;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 1px black;
  }
`;
