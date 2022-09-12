import * as C from './AppStyles';

const App = () => {
  return (
    <C.Container cor="gray">
      <p>Texto do Componente</p>
      <C.Botao bg="red" >Botão grande</C.Botao>
      <C.Botao bg="lightgreen" small >Botão pequeno</C.Botao>
    </C.Container>
  );
}

export default App;