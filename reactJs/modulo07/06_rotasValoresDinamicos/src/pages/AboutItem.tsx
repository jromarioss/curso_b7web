import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";

export function AboutItem() {
  const params = useParams(); // tem acesso aos valores do parametro da url

  return (
    <div>
      <p>Página SOBRE {params.slug}</p>
      <Link to='/about'>voltar</Link>
    </div>
  );
}