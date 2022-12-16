import { LevelsType } from '../../helpers/imc';

import upImg from '../../assets/up.png';
import downImg from '../../assets/down.png';

import { Icon, Info, ItemsContainer, Title, Imc } from './styles';

interface ItemsProps {
  item: LevelsType;
}

export function Items({ item }: ItemsProps) {
  return (
    <ItemsContainer style={{ backgroundColor: item.color }}>
      <Icon>
        {item.icon === 'up' ? 
          <img src={upImg} alt='' width='30' />
          :
          <img src={downImg} alt='' width='30' />
        }
      </Icon>

      <Title>{item.title}</Title>

      {item.yourImc &&
        <Imc>Seu IMC é de {item.yourImc}</Imc>
      }

      <Info>{`IMC está entre ${item.imc[0]} e ${item.imc[1]}`}</Info>
    </ItemsContainer>
  );
}
