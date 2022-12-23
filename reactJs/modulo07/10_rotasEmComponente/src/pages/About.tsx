import { Link, useSearchParams } from 'react-router-dom';

export function About() {
  const [searchParams, setSearchParams] = useSearchParams();// para pegar o query da url

  function setOrder(order: string) {
    searchParams.set('order', order);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <p>Filtro: {searchParams.get('filter')}</p>
      <hr/>
      <button onClick={() => setOrder('asc')}>Asc</button>
      <button onClick={() => setOrder('desc')}>Desc</button>
      <hr />
      <p>Página SOBRE</p>
      <ul>
        <li><Link to='/about/jose'>José</Link></li>
        <li><Link to='/about/pedro'>Pedro</Link></li>
      </ul>
    </div>
  );
}