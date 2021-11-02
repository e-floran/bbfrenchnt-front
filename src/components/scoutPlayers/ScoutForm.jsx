import { useEffect, useState } from "react";
import axios from "axios";

import "../../styles/form.css";
import PlayerCard from "./PlayerCard";

export default function ScoutForm({
  playerAge,
  playerCountry,
  setPlayerAge,
  setPlayerCountry,
  retrievingLeagues,
}) {

  const [playerId, setPlayerId] = useState(null);
  const [playerData, setPlayerData] = useState([])
  console.log(playerId)
  
  const getPlayerData = async () => {
    await axios.get(`http://localhost:3000/test`)
    .then((res) => {
      setPlayerData(res)
      console.log(playerData.data)
    })
}

  const handleSubmit = async e => {
    e.preventDefault()
    getPlayerData()
}

  return (
    <>
    <form
      className="apiRequestForm"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   retrievingLeagues();
      // }}
    >
      {/* <label>
        Nationalité :{" "}
        <input
          name="formPlayerId"
          type="text"
          value={playerCountry}
          onChange={(e) => {
            setPlayerCountry(e.target.value);
          }}
        />
      </label>
      <label>
        Âge :{" "}
        <input
          name="formPlayerAge"
          type="number"
          min="18"
          max="200"
          value={playerAge}
          onChange={(e) => {
            setPlayerAge(e.target.value);
          }}
        />
      </label> */}
      <label>
        ID
        <input
          name="formPlayerAge"
          type="number"
          min="18"
          max="200"
          value={playerId}
          onChange={(e) => {
            setPlayerId(e.target.value);
          }}
        />
      </label>
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Rechercher
      </button>
    </form>
    {/* {playerData ? <PlayerCard player={playerData}/> : null} */}
     
     </>
  );
}
