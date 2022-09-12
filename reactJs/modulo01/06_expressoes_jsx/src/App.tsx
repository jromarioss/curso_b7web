const App = () => {
  let name: string = 'José';
  let lastName: string = 'Santos';
  let n1: number = 10;
  let n2: number = 3;
  let link: string = 'https://jromarioss.github.io/portfolio/';

  function somar(n1: number, n2: number): number {
    return n1 + n2
  }

  return (
    <div>
      <p>Olá {`${name.toUpperCase()} ${lastName.toUpperCase()}`}, tudo bem?</p>
      <p>Adição: {somar(n1, n2)}</p>
      <p>Link para o site:</p>
      <a href={link}>Clique aqui para acessar</a>
    </div>
  );
}

export default App;