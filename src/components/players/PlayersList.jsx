import { useState, useEffect, useContext } from "react";

import "../../styles/players/playersList.css";

import PlayerCard from "./PlayerCard";

export default function PlayersList({ players }) {
  const [subscribedStreams, setSubscribedStreams] = useState([]);

  const returningCards = () => {
    let stockCards = [];
    for (let j = 0; j < players.length; j++) {
      stockCards.push(<PlayerCard player={players[j]} key={`player ${j}`} />);
    }
    return stockCards;
  };

  return (
    <section className="playersListContainer">
      <article className="playersListLabelsContainer">
        <p>nom</p>
        <p>âge</p>
        <p>potentiel</p>
        <p>taille</p>
        <p>JS</p>
        <p>PS</p>
        <p>DE</p>
        <p>AG</p>
        <p>DR</p>
        <p>PA</p>
        <p>SI</p>
        <p>DI</p>
        <p>RE</p>
        <p>CO</p>
        <p>TC</p>
      </article>
      {returningCards()}
    </section>
  );
}
