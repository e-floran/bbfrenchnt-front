import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="headerNavbar">
      <ul>
        <li>
          <Link to={`/`}>Accueil</Link>
        </li>
        <li>
          <Link to={`/database`}>Base de données</Link>
        </li>
        <li>
          <Link to={`/scoutplayers`}>Trouver des joueurs</Link>
        </li>
      </ul>
    </nav>
  );
}
