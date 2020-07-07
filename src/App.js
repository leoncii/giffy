import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Link } from 'wouter'
import SearchGifs from './pages/SearchGifs'
import Details from './pages/Details'
import Login from './pages/Login'
import Register from './pages/Register'

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
          <Link href="/" >
            <h2 style={{ cursor: "pointer" }}>Giffy</h2>
          </Link>
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
            <Route
              component={Register}
              path='/register'
            />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  )
}

export default App;
