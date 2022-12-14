import { useState } from 'react';

export function App() {
  const [movies, setMovies] = useState([]);

  function loadMovies(){
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
      <button className='bg-blue-400 rounded font-bold p-2' onClick={ loadMovies }>Carregar Filmes</button>
      <p>Total de filmes: { movies.length }</p>
      <div>

      </div>
    </div>
  );
}

// https://api.b7web.com.br/cinema/