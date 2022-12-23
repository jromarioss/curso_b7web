import { useRoutes } from 'react-router-dom';

import { About } from './pages/About';
import { AboutItem } from './pages/AboutItem';
import { RequireAuth } from './RequireAuth';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export function RoutesList() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <RequireAuth><About /></RequireAuth> },
    { path: '/about/:slug', element: <AboutItem /> },
    { path: '/*', element: <NotFound /> }
  ]);
}