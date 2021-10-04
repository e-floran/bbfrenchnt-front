import { useState } from "react";

import bbApiRequest from "../api/bbApiRequest";

import LoginForm from "../components/home/LoginForm";
import InProgress from "../components/reusableComponents/InProgress";

export default function Home() {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const bbApiLoging = (e) => {
    e.preventDefault();
    bbApiRequest.defaults.withCredentials = true;
    bbApiRequest
      .get(`login.aspx?login=${loginName}&code=${loginPassword}`)
      .then((response) => {
        console.log(typeof response.data, response.data);
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
    <div className="pageGlobalContainer">
      <h2>Bienvenue sur l'outil de suivi des joueurs français</h2>
      <LoginForm
        loginName={loginName}
        loginPassword={loginPassword}
        setLoginName={setLoginName}
        setLoginPassword={setLoginPassword}
        bbApiLoging={bbApiLoging}
      />
      <InProgress />
    </div>
  );
}
