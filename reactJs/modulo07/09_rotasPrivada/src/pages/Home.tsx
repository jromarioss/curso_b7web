import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <p>Página HOME - <Link to='/about'>ir para about</Link></p>
    </div>
  );
}