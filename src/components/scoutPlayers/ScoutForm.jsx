import { useState } from "react";

import "../../styles/form.css";

export default function ScoutForm() {
  const [playerCountry, setPlayerCountry] = useState("France");
  const [playerAge, setPlayerAge] = useState(null);
  return (
    <form className="apiRequestForm">
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
      <button type="submit">Rechercher</button>
    </form>
  );
}
