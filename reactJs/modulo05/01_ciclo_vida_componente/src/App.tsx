import { useEffect, useState } from 'react';

const App = () => {
  const [name, setName] = useState("José");

  useEffect(() => {
    alert("Executou");
  }, [name]);

  const handleClick = () => {
    setName("Pedro");
  }
  return (
    <div>
      <p>nome: { name }</p>
      <button onClick={ handleClick }>Clique aqui</button>
    </div>
  );
}

export default App;