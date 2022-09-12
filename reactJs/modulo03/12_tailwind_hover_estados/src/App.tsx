const App = () => {
  return (
    <div className="bg-blue-200 p-5">
      <input
        className="outline-none border border-transparent bg-white rounded p-2 focus:ring-2 focus:ring-red-500 "
        type="text"
        placeholder="Digite alguma coisa"
      />
      <button 
        className="ml-3 p-3 bg-blue-400 rounded text-white font-bold hover:bg-blue-600 ease-in duration-300"
      >Clique aqui</button>
    </div>
  );
}

export default App;