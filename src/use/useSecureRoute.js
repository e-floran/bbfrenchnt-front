import { Context } from '../context/Context'
import { Redirect, Route } from 'react-router'
import { useContext } from 'react'

import axios from 'axios'

export const PrivateRoute = ({ children, ...rest }) => {
  const { dispatch } = useContext(Context)
  const userStorage = localStorage.getItem('admin_session')
  // Defini le Bearer JWT dans header pour les requetes de la page.
  axios.defaults.headers.common['Authorization'] = `Bearer ${userStorage}`

  const testAuth = async () => {
    try {
      await axios.post(`http://localhost:3000/auth/protected`)
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' })
      localStorage.removeItem('admin_session')
    }
  }
  testAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userStorage ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}