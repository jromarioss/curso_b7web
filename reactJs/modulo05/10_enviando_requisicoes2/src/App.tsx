import { ChangeEvent, useEffect, useState } from 'react';
import { Post } from './types/Posts';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const [addtitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    setLoading(true);
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setLoading(false);
    setPosts(json);
  }

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  }

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  }

  const handleAddClick = async () => {
    if (addtitleText && addBodyText) {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
          title: addtitleText,
          body: addBodyText,
          userId: 1
        }),
        headers: {
          'Content-Type': 'applicaton/json'
        }
      });
      let json = await response.json();
      
      if (json.id) {
        alert("Post adicionado com sucesso.");
      } else {
        alert("Ocorreu algum error...");
      }
    } else {
      alert("Preencha os dados...");
    }
  }

  return (
    <div className="p-5">
      { loading && <div>Carregando...</div> }
      <fieldset className="border-2 mb-3 p-3">
        <legend className="font-bold">Adicionar Novo Post</legend>
        <input
          className="border block mb-3 p-2"
          type="text"
          value={ addtitleText }
          placeholder="Digite o seu título"
          onChange={ handleAddTitleChange }
          />
        <textarea
          className="border block mb-3 p-2"
          value={ addBodyText }
          onChange={ handleAddBodyChange }
        ></textarea>
        <button
          className="border block p-2 rounded bg-orange-400 border-zinc-800 font-bold hover:bg-orange-600 ease-in duration-300"
          onClick={ handleAddClick }
        >Adicionar</button>
      </fieldset>
      { !loading && posts.length > 0 && 
        <>
          <div>
            {posts.map((item, index) => (
              <div key={ index } className="mb-4 border-2 p-3">
                <h4 className="font-bold">{ item.title }</h4>
                <small># { item.id } - Usuário: { item.userId }</small>
                <p>{ item.body }</p>
              </div>
            ))}
          </div>
        </>
      }
      { !loading && posts.length === 0 &&
        <div>
          <h3>Não há posts para exibir...</h3>
        </div>
      }
    </div>
  );
}

export default App;