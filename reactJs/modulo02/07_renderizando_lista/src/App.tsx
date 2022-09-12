import { Pessoa } from './components/Pessoa';

const App = () => {
  let list = [
    {name: 'José', age: 28},
    {name: 'Pedro', age: 15},
    {name: 'Maria', age: 55},
    {name: 'Miguel', age: 3},
    {name: 'Giovana', age: 24},
    {name: 'Bruna', age: 32},
  ];

  return (
    <div>
      <h2>Lista de Presença</h2>
      <hr />
      <ul>
        {list.map((item, index) => (
          <Pessoa key={ index } data={ item } />
        ))}
      </ul>
    </div>
  );
}

export default App;