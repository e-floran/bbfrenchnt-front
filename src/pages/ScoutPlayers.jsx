import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { parseString } from "xml2js";

import bbApiRequest from "../api/bbApiRequest";
// import { divisionsPerCountries } from "../utils/divisionsPerCountries";

import InProgress from "../components/reusableComponents/InProgress";
import PlayersList from "../components/scoutPlayers/PlayersList";
import ScoutForm from "../components/scoutPlayers/ScoutForm";

export default function ScoutPlayers() {
  // const [searchCountries, setSearchCountries]=useState(11);
  const [searchLeagues, setSearchLeagues] = useState([]);
  const [searchTeams, setSearchTeams] = useState([]);
  const [searchPlayers, setSearchPlayers] = useState([]);
  const [playerCountry, setPlayerCountry] = useState("France");
  const [playerAge, setPlayerAge] = useState(null);

  const retrievingLeagues = () => {
    let stockLeagues = [];
    let i = 1;
    // for (let c = 0; c < divisionsPerCountries.length; c++) {}
    bbApiRequest.defaults.withCredentials = true;
    bbApiRequest
      .get(`leagues.aspx?countryid=11&level=${i}`)
      .then((response) => {
        console.log("retrieving leagues 2 : ", response);
        parseString(response.data, function (err, result) {
          console.log("retrievingLeagues : ", result.bbapi.division[0].league);
          for (let j = 0; j < result.bbapi.division[0].league.length; j++) {
            stockLeagues.push(result.bbapi.division[0].league[j]);
          }
        });
        setSearchLeagues(stockLeagues);
        return stockLeagues;
      })
      .then((stockLeagues) => {
        retrievingTeams(stockLeagues);
      })
      .catch((err) => {
        console.log(
          "erreur au niveau de la requete de récupération des ligues : ",
          err
        );
        // streamstoreFeedBackBuilder(
        //   false,
        //   `Echec dans la récupération des données`
        // );
      });
  };

  const retrievingTeams = (inputLeagues) => {
    let stockTeams = [];
    bbApiRequest.defaults.withCredentials = true;
    bbApiRequest
      .get(`standings.aspx?leagueid=${inputLeagues[0].$.id}`)
      .then((response) => {
        parseString(response.data, function (err, result) {
          console.log(
            "retrievingTeams : ",
            result.bbapi.standings[0].regularSeason[0].conference
          );
          for (
            let j = 0;
            j < result.bbapi.standings[0].regularSeason[0].conference.length;
            j++
          ) {
            for (
              let i = 0;
              i <
              result.bbapi.standings[0].regularSeason[0].conference[j].team
                .length;
              i++
            ) {
              stockTeams.push(
                result.bbapi.standings[0].regularSeason[0].conference[j].team[i]
              );
            }
          }
          setSearchTeams(stockTeams);
        });
      })
      .then(() => {
        retrievingPlayers(stockTeams);
      })
      .catch((err) => {
        console.log(
          "erreur au niveau de la requete de récupération des équipes : ",
          err
        );
        // streamstoreFeedBackBuilder(
        //   false,
        //   `Echec dans la récupération des données`
        // );
      });
  };

  const retrievingPlayers = (inputTeams) => {
    let stockPlayers = [];
    bbApiRequest.defaults.withCredentials = true;
    bbApiRequest
      .get(`roster.aspx?teamid=${inputTeams[0].$.id}`)
      .then((response) => {
        parseString(response.data, function (err, result) {
          for (let j = 0; j < result.bbapi.roster[0].player.length; j++) {
            stockPlayers.push(result.bbapi.roster[0].player[j]);
          }
        });
        setSearchPlayers(stockPlayers);
      })
      .catch((err) => {
        console.log(
          "erreur au niveau de la requete de récupération des joueurs : ",
          err
        );
        // streamstoreFeedBackBuilder(
        //   false,
        //   `Echec dans la récupération des données`
        // );
      });
  };

  useEffect(() => {
    console.log("scout players : ", searchLeagues);
  }, [searchLeagues]);

  useEffect(() => {
    console.log("scout players 2 : ", searchTeams);
  }, [searchTeams]);

  useEffect(() => {
    console.log("scout players 3 : ", searchPlayers);
  }, [searchPlayers]);

  

  return (
    <div className="pageGlobalContainer">
      <h2>Récupérer les joueurs depuis l'API Buzzerbeater</h2>
      <ScoutForm
        playerAge={playerAge}
        playerCountry={playerCountry}
        setPlayerAge={setPlayerAge}
        setPlayerCountry={setPlayerCountry}
        retrievingLeagues={retrievingLeagues}
      />
      <PlayersList players={searchPlayers} />
      <InProgress />
    </div>
  );
}
