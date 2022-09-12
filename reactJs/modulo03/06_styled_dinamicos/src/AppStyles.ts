import styled from "styled-components";

type ContainerProps = {
  cor: string;
}
export const Container = styled.div<ContainerProps>`
background-color: ${(props) => props.cor};
color: white;
padding: 20px;
`;

type BotaoProps = {
  small?: boolean;
  bg: string;
}

export const Botao = styled.button<BotaoProps>`
  font-size: ${(props) => props.small ? '15px' : '30px' };
  background-color: ${(props) => props.bg};
`;