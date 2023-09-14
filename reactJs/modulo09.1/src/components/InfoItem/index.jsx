import { InfoItemContainer, InfoItemLabel, InfoItemValue } from "./styles";

export const InfoItem = ({ label, value }) => {
  return(
    <InfoItemContainer>
      <InfoItemLabel>{label}</InfoItemLabel>

      <InfoItemValue>{value}</InfoItemValue>
    </InfoItemContainer>
  )
}
