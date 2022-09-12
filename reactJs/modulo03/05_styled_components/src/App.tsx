/* import { Botao } from './components/Botao';
import { Container } from './components/Container'; */
import * as C from './AppStyles';


const App = () => {
  return (
    <C.Container>
      <p>Texto do Componente</p>
      <C.Botao>Clique aqui</C.Botao>
    </C.Container>
  );
}

export default App;