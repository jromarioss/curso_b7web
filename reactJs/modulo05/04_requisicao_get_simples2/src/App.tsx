import { useState, useEffect } from 'react';

interface Movie {
  titulo: string;
  avatar: string;
}

export function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  /* useEffect(() => {
    loadMovies();
  }, []); */

  function loadMovies() {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovies(json);
      });
  }

  return (
    <div className='m-2'>
      <button className="bg-blue-400 rounded font-bold p-2" onClick={ loadMovies }>Carregar Filmes</button>
      <p>Total de filmes: { movies.length }</p>
      <div className="grid grid-cols-6 gap-2">
        { movies.map((item, ) => (
          <div key={ item.titulo }>
            <img src={ item.avatar } alt="imagem filme" className="w-32 block" />
            <h3>{ item.titulo }</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
