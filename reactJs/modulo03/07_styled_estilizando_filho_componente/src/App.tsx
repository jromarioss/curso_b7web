import * as C from './AppStyles';

export function App() {
  return (
    <C.Container cor="gray">
      <span>Component text</span>
      <a href="https://github.com/jromarioss" className="link">Any link</a>
      <C.Button bg="red" >Big Button</C.Button>
      <C.Button bg="lightgreen" small >Little Button</C.Button>
    </C.Container>
  );
}