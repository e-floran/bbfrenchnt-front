import { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../context/Context'

import bbApiRequest from "../api/bbApiRequest";

import LoginForm from "../components/home/LoginForm";
import InProgress from "../components/reusableComponents/InProgress";

export default function Home() {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("")

  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const { dispatch } = useContext(Context)

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

  const handleUserName = e => {
    setUserName(e)
  }
  const handlePassword = e => {
    setPassword(e)
  }

  const handleLogIn = async e => {
    e.preventDefault()
    const resCo = await axios
      .post(`http://localhost:3000/auth`, {
        log: userName,
        password: password
      })
      .then(result => {
        if (result.data != 'Invalid') {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: result.data
          })
        }})
      }

      const handleLogOut = async e => {
        e.preventDefault()
        dispatch({
          type: 'LOGOUT'
        })
      }

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
      <div className='AdminConnection'>
        <form>
          <fieldset>
            <label htmlFor='userName'>
              Nom d'utilisateur <span className='connection-required'>*</span>
            </label>
            <input
              type='text'
              id='userName'
              onChange={e => handleUserName(e.target.value)}
            />
            <caption>
              Saississez votre nom d'utilisateur pour Greeters Loire Valley
            </caption>
          </fieldset>
          <fieldset>
            <label htmlFor='password'>
              Mot de passe <span className='connection-required'>*</span>
            </label>
            <input
              type='password'
              id='password'
              onChange={e => handlePassword(e.target.value)}
            />
            <caption>
              Saississez le mot de passe correspondant à votre nom d'utilisateur
            </caption>
          </fieldset>
          <button onClick={handleLogIn}>Se connecter</button>
        </form>
      </div>
      <button onClick={handleLogOut}> test Logout</button>
    </div>
  );
}
