// import { useState } from "react";

import "../../styles/scoutPlayers/playersList.css";

import PlayerCard from "./PlayerCard";

export default function PlayersList({ players }) {
  const returningCards = () => {
    let stockCards = [];
    for (let j = 0; j < players.length; j++) {
      stockCards.push(<PlayerCard player={players[j]} key={`player ${j}`} />);
    }
    return stockCards;
  };

  return <section className="playersListContainer">{returningCards()}</section>;
}
