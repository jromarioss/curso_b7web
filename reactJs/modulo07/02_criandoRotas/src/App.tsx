import { Routes, Route } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';

export function App() {
  return (
    <div>
      <h1>Título do site</h1>
      <hr />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  );
}