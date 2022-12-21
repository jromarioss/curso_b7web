import styled from 'styled-components';

interface Props {
  showBg: boolean;
}

export const GridItemContainer = styled.div<Props>`
  background-color: ${props => props.showBg ? '#1550FF' : '#E1E1E2'};
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
`;

interface IconProps {
  opacity?: number;
}

export const Icon = styled.img<IconProps>`
  width: 2.5rem;
  height: 2.5rem;
  opacity: ${props => props.opacity ? props.opacity : 1};
`;