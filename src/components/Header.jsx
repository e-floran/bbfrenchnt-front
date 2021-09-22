import { Link } from "react-router-dom";

import "../styles/header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <h1>Équipes de France Buzzerbeater</h1>
      <button>
        <Link to={`/`}>Déconnexion</Link>
      </button>
      <Navbar />
    </header>
  );
}
