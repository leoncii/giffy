import { useContext, useState } from "react";
import Context from '../context/UserContext'
import { useCallback } from "react";
import loginService from '../services/login'
import addFavService from '../services/addFavService'

export default function useUser() {
  const { jwt, setJwt, setFavs, favs } = useContext(Context)
  const [state, setState] = useState({
    loading: false,
    error: false
  })
  const login = useCallback(({ username, password }) => {
    // setJwt('test')
    setState({ loading: true, error: false })
    loginService({ username, password })
      .then(jwt => {
        window.sessionStorage.setItem('jwt', jwt)
        setJwt(jwt)
        setState({ loading: false, error: false })
      })
      .catch(e => {
        window.sessionStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.log(e)
      })
  }, [setJwt])

  const fav = useCallback(({ id }) => {
    addFavService({ id, jwt })
      .then(setFavs)
      .catch(e => console.log(e))
  }, [jwt, setFavs])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJwt(null)
  }, [setJwt])

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    isLoginError: state.error,
    fav,
    favs,
    login,
    logout
  }
}