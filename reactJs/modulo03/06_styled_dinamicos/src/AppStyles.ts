import styled from "styled-components";

interface ContainerProps {
  cor: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.cor};
  color: white;
  padding: 20px;
`;

interface ButtonProps {
  small?: boolean;
  bg: string;
}

export const Button = styled.button<ButtonProps>`
  font-size: ${(props) => props.small ? '15px' : '30px' };
  background-color: ${(props) => props.bg};
`;