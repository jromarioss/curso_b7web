import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { useEffect, useState } from 'react';
import { api } from './api';

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
      let json = await api.getAllPosts();
      setLoading(false);
      setPosts(json);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  }

  async function handleAddPost(title: string, body: string) {
    let json = await api.addNewPost(title, body, 1);
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
