import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  max-width: 900px;
  margin: auto;

  @media(max-width: 768px) {
    flex-direction: column;
    padding: 0 1.25rem;
    gap: 3rem;
    margin-bottom: 5rem;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  margin-right: 2.5rem;

  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: ${props => props.theme["color-title"]};
  }

  p {
    font-size: 1rem;
    margin-bottom: 2.5rem;
    color: ${props => props.theme["color-text"]};
  }

  input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${props => props.theme["color-border"]};
    padding: 0.625rem 0.125rem;
    margin-bottom: 1.25rem;
    outline: 0;
    font-size: 0.875rem;
  }

  input:disabled {
    opacity: 0.5;
  }

  button {
    width: 100%;
    padding: 0.875rem 0;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["color-button"]};
    font-size: 0.9375rem;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 2.5rem;
    transition: opacity ease .3s;

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media(max-width: 768px) {
    margin-right: 0;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2.5rem;

  @media(max-width: 768px) {
    margin-left: 0;
  }
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media(max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

export const GridOne = styled.div`
  flex: 1;
  display: flex;
`;

export const Icon = styled.div`
  position: absolute;
  background-color: ${props => props.theme["color-button"]};
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  margin-left: -2.1875rem;
  margin-top: 9.0625rem;
  transition: opacity ease .3s;

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 768px) {
    margin-left: 0;
    margin-top: 0;
    border-radius: 10px;
  }
`;
