import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 12.5rem;
  height: 3.125rem;
  display: flex;
  background-color: #1550ff;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease .5s;

  &:hover {
    opacity: .8;
  }
`;

export const IconArea = styled.div`
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, .2);
  padding: 0 0.9375rem;
`;

export const Icon = styled.img`
  height: 1.25rem;
`;

export const Label = styled.div`
   height: inherit;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
   padding: 0 1.25rem;
`;