
import { HeaderContainer } from './styles';
import poweredImg from '../../assets/powered.png';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={poweredImg} alt='' width='150p' />
      </div>
    </HeaderContainer>
  );
}
