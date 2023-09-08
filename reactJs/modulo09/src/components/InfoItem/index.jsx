import { InfoItemContainer, InfoItemLabel, InfoItemValue } from "./styles";

export function InfoItem({ label, value }) {
  return(
    <InfoItemContainer>
      <InfoItemLabel>{label}</InfoItemLabel>

      <InfoItemValue>{value}</InfoItemValue>
    </InfoItemContainer>
  )
}