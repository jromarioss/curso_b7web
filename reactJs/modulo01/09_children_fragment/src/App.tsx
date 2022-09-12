import { Header } from './components/Header';
import { Photo } from './components/Photo';

const App = () => {
  return (
    <div>
      <Header title="Título qualquer!" />
      <p>Olá Mundo!</p>
      <Photo legend="Itachi Uchiha">
        <img src="http://pm1.narvii.com/6415/6e1156057bb682b026b50dc4c66d26f185267c96_00.jpg" alt="itachi uchiha" />
      </Photo>
    </div>
  );
}

export default App;