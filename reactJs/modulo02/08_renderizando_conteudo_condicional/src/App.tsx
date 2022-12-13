import { useState } from 'react';

export function App() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {show ? 'hidden' : 'show'}
      </button>

      {show && 
        <div>Any text...</div>
      }
    </div>
  );
}