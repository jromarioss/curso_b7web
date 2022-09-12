import styled from "styled-components";

type ContainerProps = {
  cor: string;
}
export const Container = styled.div<ContainerProps>`
  max-width: 800px;
  margin: auto;
  background-color: ${(props) => props.cor};
  color: white;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  gap: 10px;

  span {
    font-weight: bold;
    color: black;
  }
  
  .link {
    color: white;
    text-decoration: none;
    &:hover {
      color: yellow;
    }
  }

  @media (max-width: 600px) {
    background-color: green;
    flex-direction: column;

    span {
      color: yellow;
    }
  }
`;

type BotaoProps = {
  small?: boolean;
  bg: string;
}

export const Botao = styled.button<BotaoProps>`
  font-size: ${(props) => props.small ? '15px' : '30px' };
  background-color: ${(props) => props.bg};

  @media (max-width: 600px) {
    color: blue;
  }
`;