import { GridItemType } from '../../App';

import { GridItemContainer, Icon } from './styles';

import { items } from '../../data/items';
import b7webSvg from '../../assets/b7.svg';

interface GridItemProps {
  item: GridItemType,
  onHandleItemClick: () => void;
}

export function GridItem({ item, onHandleItemClick }: GridItemProps) {
  return (
    <GridItemContainer onClick={onHandleItemClick} showBg={item.permanentShown || item.shown} >
      {!item.permanentShown && !item.shown &&
        <Icon src={b7webSvg} alt='' opacity={.1} />
      }
      {(item.permanentShown || item.shown) && item.item !== null &&
        <Icon src={items[item.item].icon} alt='' />
      }
    </GridItemContainer>
  );
}
