import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { useEffect, useState } from 'react';

export interface Post {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

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

  async function handleAddPost(title: string, body: string) {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: { 'Content-Type': 'applicaton/json' }
    });
    let json = await response.json();
    
    if (json.id) {
      alert("Post adicionado com sucesso.");
    } else {
      alert("Ocorreu algum error...");
    }
  }

  return (
    <div className="p-5">
      { loading && <div>Carregando...</div> }

      <PostForm onAdd={ handleAddPost } />
      
      { !loading && posts.length > 0 && 
        <>
          <div>
            {posts.map((item) => (
              <PostItem data={ item }  key={ item.id }/>
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
