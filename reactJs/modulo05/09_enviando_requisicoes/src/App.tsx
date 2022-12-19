import { ChangeEvent, useEffect, useState } from 'react';

interface Post {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const [addtitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  useEffect(() => {
    loadPost();
  }, []);

  async function loadPost() {
    try {
      setLoading(true);
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let json = await response.json();
      setLoading(false);
      setPosts(json);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleAddTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setAddTitleText(e.target.value);
  }

  function handleAddBodyChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setAddBodyText(e.target.value);
  }

  function handleAddClick() {
    alert(`${addtitleText} - ${addBodyText}`)
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
            { posts.map((item) => (
              <div key={ item.id } className="mb-4 border-2 p-3">
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
