import { Routes, Route } from 'react-router-dom';

import { About } from './pages/About';
import { AboutItem } from './pages/AboutItem';
import { RequireAuth } from './RequireAuth';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export function RoutesList() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<RequireAuth><About /></RequireAuth>} />
      <Route path='/about/:slug' element={<AboutItem />} /> {/* rota dinâmica, recebe o parâmetro da url */}
      <Route path='*' element={<NotFound /> } />
    </Routes>
  );
}