import { Link } from 'react-router-dom';

export function About() {
  return (
    <div>
      <p>Página SOBRE</p>
      <ul>
        <li><Link to='/about/jose'>José</Link></li>
        <li><Link to='/about/pedro'>Pedro</Link></li>
      </ul>
    </div>
  );
}