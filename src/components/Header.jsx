import { Link } from "react-router-dom";

import bbApiRequest from "../api/bbApiRequest";

import "../styles/header.css";
import Navbar from "./Navbar";

export default function Header() {
  const bbApiLogout = (e) => {
    e.preventDefault();
    bbApiRequest.defaults.withCredentials = true;
    bbApiRequest
      .get(`logout.aspx`)
      .then((response) => {
        // const informations = response.data.data;
        // setAvailableAPIStreams(informations);
        // setStockAPIStreams(informations);
        // setStreamsAssigned(true);
      })
      .catch((err) => {
        console.log(
          "erreur au niveau de la requete de connexion à l'API : ",
          err
        );
        // streamstoreFeedBackBuilder(
        //   false,
        //   `Echec dans la récupération des données`
        // );
      });
  };

  return (
    <header>
      <h1>Équipes de France Buzzerbeater</h1>
      <button type="button" onClick={(e) => bbApiLogout(e)}>
        <Link to={`/`}>Déconnexion</Link>
      </button>
      <Navbar />
    </header>
  );
}
