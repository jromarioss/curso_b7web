import * as C from './AppStyles';

const App = () => {
  return (
    <C.Container cor="gray">
      <span>Texto do Componente</span>
      <a href="https://jromarioss.github.io/portfolio/" className="link">Link qualquer</a>
      <C.Botao bg="red" >Botão grande</C.Botao>
      <C.Botao bg="lightgreen" small >Botão pequeno</C.Botao>
    </C.Container>
  );
}

export default App;