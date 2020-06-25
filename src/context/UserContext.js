import React, { createContext, useState } from 'react'

const Context = createContext({})

export function UserContextProvider({ children }) {

  const [favs, setFavs] = useState([])
  const [jwt, setJwt] = useState(() =>
    window.sessionStorage.getItem('jwt'))

  return <Context.Provider value={{ jwt, setJwt, favs, setFavs }}>
    {children}
  </Context.Provider>
}

export default Context