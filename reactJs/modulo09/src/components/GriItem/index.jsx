import { items } from "../../data/items";

import b7Svg from "../../assets/svg/b7.svg";

import { GridItemContainer, Icon } from "./styles";

export function GridItem({ item, onItemClick }) {

  return (
    <GridItemContainer
      $showBg={item.permanentShow || item.show} /* mudar a cord da carta conforme a exibição */
      onClick={onItemClick}
    >
      {/* se tiver como false não exiba */}
      {item.permanentShow === false && item.show === false &&
        <Icon src={b7Svg} alt="" opacity={0.3} />
      }

      {/* se uma ou outra tiver como true exiba, mais se não for null */}
      {(item.permanentShow || item.show) && item.item !== null &&
        <Icon src={items[item.item].icon}  alt={items[item.item].name} />
      }
    </GridItemContainer>
  )
}