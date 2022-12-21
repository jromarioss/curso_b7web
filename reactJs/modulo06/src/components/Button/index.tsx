import React from 'react';

import { ButtonContainer, Icon, IconArea, Label } from './styles';

interface ButtonProps {
  label: string;
  icon?: any;
  onClick: () => void;
}

export function Button({ label, icon, onClick }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick}>
      { icon &&
        <IconArea>
          <Icon src={icon} />
        </IconArea>
      }
      <Label>{label}</Label>
    </ButtonContainer>
  );
}
