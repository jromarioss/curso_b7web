import styled from "styled-components";

export const GridItemContainer = styled.button`
  all: unset;
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$showBg ? '#1550ff' : '#e2e2e3'};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  opacity: ${props => props.opacity ? props.opacity : 1};
`;