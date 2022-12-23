import { Routes, Route } from 'react-router-dom';

import { About } from './pages/About';
import { AboutItem } from './pages/AboutItem';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <div>
      <h1>Título do site</h1>
      <hr />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:slug' element={<AboutItem />} /> {/* rota dinâmica, recebe o parâmetro da url */}
        <Route path='*' element={<NotFound /> } />
      </Routes>

    </div>
  );
}