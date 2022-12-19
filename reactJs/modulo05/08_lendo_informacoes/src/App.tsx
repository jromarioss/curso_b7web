import { useEffect, useState } from 'react';

interface Post {
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
      setPosts(json);
      setLoading(false);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="p-5">
      { loading && <div>Carregando...</div> }
      { !loading && posts.length > 0 && 
        <>
          <div>
            {posts.map((item) => (
              <div key={item.id} className="mb-4 border-2 p-3">
                <h4 className="font-bold">{item.title}</h4>
                <small># {item.id} - Usuário: {item.userId}</small>
                <p>{item.body}</p>
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
