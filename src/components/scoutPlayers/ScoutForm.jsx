// import { useState } from "react";

import "../../styles/form.css";

export default function ScoutForm({
  playerAge,
  playerCountry,
  setPlayerAge,
  setPlayerCountry,
  retrievingLeagues,
}) {
  return (
    <form
      className="apiRequestForm"
      onSubmit={(e) => {
        e.preventDefault();
        retrievingLeagues();
      }}
    >
      <label>
        Nationalité :{" "}
        <input
          name="formPlayerCountry"
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
      </label>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          retrievingLeagues();
        }}
      >
        Rechercher
      </button>
    </form>
  );
}
