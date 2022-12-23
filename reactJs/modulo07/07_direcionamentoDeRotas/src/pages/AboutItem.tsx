import { useParams, useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

export function AboutItem() {
  const params = useParams(); // tem acesso aos valores do parametro da url
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); // volta uma página anterior
  }

  function handleBackToHome() {
    navigate('/');
    navigate('/about/seiLa');
  }

  return (
    <div>
      <p>Página SOBRE {params.slug}</p>
      <button onClick={handleBack}>voltar</button>
      <button onClick={handleBackToHome}>home</button>
    </div>
  );
}