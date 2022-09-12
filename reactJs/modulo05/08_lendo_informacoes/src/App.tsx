import { useEffect, useState } from 'react';
import { Post } from './types/Posts';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setPosts(json);
  }

  return (
    <div className="p-5">
      { loading && <div>Carregando...</div> }
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