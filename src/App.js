import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Link } from 'wouter'
import SearchGifs from './pages/SearchGifs'
import Details from './pages/Details'
import Login from './pages/Login'

// import Context from './context'

import { UserContextProvider } from './context/UserContext'
import { GifsContextProvider } from './context/gifsContext'
import { Header } from './components/Header'

function App() {

  return (
    <UserContextProvider>
      <div className="app">
        <section className="app__wrapper">
          <Header />
          <h2>Giffy</h2>
          <button type='button'><Link href="/">Home</Link></button>
          {/* <SearchGifs gifs={gifs} /> */}
          <GifsContextProvider>
            <Route
              component={Home}
              path='/'
            />
            <Route
              component={SearchGifs}
              path='/search/:keyword/:rating?'
            />
            <Route
              component={Details}
              path='/search/:id'
            />
            <Route
              component={Login}
              path='/login'
            />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  )
}

export default App;
