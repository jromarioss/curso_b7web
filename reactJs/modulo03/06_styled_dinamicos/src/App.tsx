import * as C from './AppStyles';

export function App() {
  return (
    <C.Container cor="gray">
      <p>Component text</p>
      <C.Button bg="red">Big Button</C.Button>
      <C.Button bg="lightgreen" small >Little Button</C.Button>
    </C.Container>
  );
}

export default App;