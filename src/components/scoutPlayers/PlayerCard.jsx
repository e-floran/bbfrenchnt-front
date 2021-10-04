// import { useState, useEffect, useContext } from "react";

export default function PlayerCard({ player }) {
  const parsingHeight = (inputHeight) => {
    return Math.round(inputHeight * 2.54) + " cm";
  };
  return (
    <article
      className="playerCardContainer"
      //   onClick={() => {
      //     setOpenedCard(!openedCard);
      //   }}
    >
      <h5>
        {player.firstName[0]} {player.lastName[0]}
      </h5>
      <p>âge: {player.age[0]}</p>
      <p>potentiel: {player.skills[0].potential[0]}</p>
      <p>taille: {parsingHeight(player.height[0])}</p>
      <p>salaire: {player.salary[0]}$</p>
      <a
        href={`https://www.buzzerbeater.com/player/${player.$.id}/overview.aspx`}
      >
        🏀
      </a>
    </article>
  );
}
