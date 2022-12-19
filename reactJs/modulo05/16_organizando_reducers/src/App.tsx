import { useContagem } from './reducers/contagem';

export function App() {
  const [contagem, ctDispatch] = useContagem();

  return (
    <div className="p-5">
      <p>Contagem: { contagem.count }</p>
      <hr />
      <button className="p-2 border-2 rounded mt-2 mr-2" onClick={ () => ctDispatch({ type: 'ADD' })}>Adicionar</button>
      <button className="p-2 border-2 rounded mt-2 mr-2" onClick={ () => ctDispatch({ type: 'DEL' })}>Remover</button>
      <button className="p-2 border-2 rounded mt-2 mr-2" onClick={ () => ctDispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
