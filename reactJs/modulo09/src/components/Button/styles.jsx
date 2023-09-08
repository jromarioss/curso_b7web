import styled from "styled-components";

export const ButtonContainer = styled.button`
  all: unset;
  width: 200px;
  height: 50px;
  display: flex;
  background-color: #1550ff;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconArea = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 15px;

  img {
    height: 20px;
  }
`;

export const Label = styled.div`
  flex: 1;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  color: #fff;
`;