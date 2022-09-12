import { useState, useEffect } from 'react';
import { Movie } from './types/Movie';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async () => {
    let response = await fetch('https://api.b7web.com.br/cinema/');
    let json = await response.json();
    setMovies(json);
  }

  return (
    <div className='m-2'>
      <button className="bg-blue-400 rounded font-bold p-2" onClick={ loadMovies }>Carregar Filmes</button>
      <p>Total de filmes: { movies.length }</p>
      <div className="grid grid-cols-6 gap-2">
        { movies.map((item, index) => (
          <div key={ index }>
            <img src={ item.avatar } alt="imagem filme" className="w-32 block" />
            <h3>{ item.titulo }</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;