import { items } from "../../data/items";

import b7Svg from "../../assets/svg/b7.svg";

import { GridItemContainer, Icon } from "./styles";

export const GridItem = ({ item, onItemClick }) => {

  return (
    <GridItemContainer
      $shownBg={item.permanentShown || item.shown} /* mudar a cor da carta conforme a exibição */
      onClick={onItemClick}
    >
      {!item.permanentShown && !item.shown &&
        <Icon src={b7Svg} alt="" opacity={0.3} />
      }

      {/* se uma ou outra tiver como true exiba, mais se não for null */}
      {(item.permanentShown || item.shown) && item.item !== null &&
        <Icon src={items[item.item].icon}  alt={items[item.item].name} />
      }
    </GridItemContainer>
  )
}