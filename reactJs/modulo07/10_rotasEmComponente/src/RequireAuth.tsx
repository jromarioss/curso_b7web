import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

export function RequireAuth({ children }: Props) {
  const isAuth = true;

  if (isAuth) {
    return children;
  } else {
    return <Navigate to='/' />;
  }
}