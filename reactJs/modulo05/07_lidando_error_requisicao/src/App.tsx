import { useState } from 'react';
import { Movie } from './types/Movie';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  /* const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovies(json);
      })
      .catch((error) => {
        setLoading(false);
        setMovies([]);
        console.error(error);
      });
  } */

  const loadMovies = async () => {
    try {
      setLoading(true);
      let response = await fetch('https://api.b7web.com.br/cinema/');
      let json = await response.json();
      setLoading(false);
      setMovies(json);
    } catch(error){
      setLoading(false);
      setMovies([]);
      console.error(error);
    }
  }

  return (
    <div className='m-2'>
      <button className="bg-blue-400 rounded font-bold p-2" onClick={ loadMovies }>Carregar Filmes</button>
      { loading &&
        <p>Carregando...</p>
      }
      { !loading && movies.length > 0 &&
        <>
          <p>Total de filmes: { movies.length }</p>
          <div className="grid grid-cols-6 gap-2">
          { movies.map((item, index) => (
            <div key={ index }>
              <img src={ item.avatar } alt="imagem filme" className="w-32 block" />
              <h3>{ item.titulo }</h3>
            </div>
          ))}
          </div>
        </>
      }
    </div>
  );
}

export default App;