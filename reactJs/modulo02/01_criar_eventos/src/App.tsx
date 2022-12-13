export function App() {

  function handleButtonClick() {
    alert("O botão foi clicado!");
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Clique aqui</button>
    </div>
  );
}