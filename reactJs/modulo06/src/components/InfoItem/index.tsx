import { InfoItemContainer, Label, Value } from './styles';

interface InfoItemProp {
  label: string;
  value: string;
}

export function InfoItem({ label, value }: InfoItemProp) {
  return (
    <InfoItemContainer>
      <Label>{label}</Label>

      <Value>{value}</Value>

    </InfoItemContainer>
  );
}