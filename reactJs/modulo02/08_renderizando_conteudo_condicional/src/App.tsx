import { useState } from 'react';

const App = () => {
  let [show, setShow] = useState(false);

  const handleButton = () => {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={ handleButton }>{ show ? 'Ocultar' : 'Mostrar' }</button>
      {show == true && 
        <p>Bom dia!</p>
      }
    </div>
  );
}

export default App;