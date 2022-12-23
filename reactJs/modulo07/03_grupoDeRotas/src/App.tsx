import { Routes, Route } from 'react-router-dom';

import { About } from './pages/About';
import { AboutJose } from './pages/AboutJose';
import { AboutPedro } from './pages/AboutPedro';
import { Home } from './pages/Home';

export function App() {
  return (
    <div>
      <h1>Título do site</h1>
      <hr />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/jose' element={<AboutJose />} />
        <Route path='/about/pedro' element={<AboutPedro />} />
      </Routes>

    </div>
  );
}