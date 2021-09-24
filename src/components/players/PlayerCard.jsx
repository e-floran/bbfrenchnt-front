// import { useState, useEffect, useContext } from "react";

export default function PlayerCard({ player }) {
  return (
    <article
      className="playerCardContainer"
      //   onClick={() => {
      //     setOpenedCard(!openedCard);
      //   }}
    >
      <h5>{player.name}</h5>
      <p>{player.age}</p>
      <p>{player.potential}</p>
      <p>{player.size}</p>
      <p>{player.js}</p>
      <p>{player.jr}</p>
      <p>{player.od}</p>
      <p>{player.ha}</p>
      <p>{player.dr}</p>
      <p>{player.pa}</p>
      <p>{player.is}</p>
      <p>{player.id}</p>
      <p>{player.re}</p>
      <p>{player.bl}</p>
      <p>{player.ss}</p>
    </article>
  );
}
