import styled from 'styled-components';

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  color: ${props => props.theme.white};

  @media(max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 4.375rem;
  height: 4.375rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.theme['color-bg']};
`;

export const Title = styled.div`
  font-size: 1.375rem;
  font-weight: bold;
`;

export const Info = styled.div`
  font-size: 0.75rem;
`;

export const Imc = styled.div`
  font-size: 1rem;
  margin: 1.5rem 0 3.125rem 0;
`;
