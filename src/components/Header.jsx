import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from '../context/Context'

// import bbApiRequest from "../api/bbApiRequest";

import "../styles/header.css";
import Navbar from "./Navbar";

export default function Header() {
  // const bbApiLogout = (e) => {
  //   e.preventDefault();
  //   bbApiRequest.defaults.withCredentials = true;
  //   bbApiRequest
  //     .get(`logout.aspx`)
  //     .then((response) => {
  //       // const informations = response.data.data;
  //       // setAvailableAPIStreams(informations);
  //       // setStockAPIStreams(informations);
  //       // setStreamsAssigned(true);
  //     })
  //     .catch((err) => {
  //       console.log(
  //         "erreur au niveau de la requete de connexion à l'API : ",
  //         err
  //       );
  //       // streamstoreFeedBackBuilder(
  //       //   false,
  //       //   `Echec dans la récupération des données`
  //       // );
  //     });
  // };

  const { dispatch } = useContext(Context)

  const handleLogOut = async e => {
    e.preventDefault()
    dispatch({
      type: 'LOGOUT'
    })
  }

  return (
    <header>
      <h1>Équipes de France Buzzerbeater</h1>
      <button type="button" onClick={(e) => handleLogOut(e)}>
        <Link to={`/`}>Déconnexion</Link>
      </button>
      <Navbar />
    </header>
  );
}
