import { Botao } from './components/Botao';

const App = () => {
  let txt = "Clique no botão";

  const botaoEventAction = (txt : string) => {
    alert(`Frase do App: ${txt}`);
  }

  return (
    <div>
      <Botao text={ txt } clickFn={ botaoEventAction } />
    </div>
  );
}

export default App;