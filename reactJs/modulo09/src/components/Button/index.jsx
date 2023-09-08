import { ButtonContainer, IconArea, Label } from "./styles";

export function Button({ label, icon, onClickReset }) {
  return (
    <ButtonContainer onClick={onClickReset}>
      {icon &&
        <IconArea>
          <img src={icon} alt="" />
        </IconArea>
      }
      
      <Label>
        {label}
      </Label>
    </ButtonContainer>
  )
}