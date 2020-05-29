import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Link } from 'wouter'
import SearchGifs from './pages/SearchGifs'
import Details from './pages/Details'
import Context from './context'
import { GifsContextProvider } from './context/gifsContext'

function App() {

  return (
    <Context.Provider value={{
      name: 'leoncii',
      tieneHambre: true
    }}>
      <div className="app">
        <section className="app__wrapper">
          <h2>Giffy</h2>
          <button type='button'><Link href="/">Ir home</Link></button>
          {/* <SearchGifs gifs={gifs} /> */}
          <GifsContextProvider>
            <Route
              component={Home}
              path='/'
            />
            <Route
              component={SearchGifs}
              path='/search/:keyword'
            />
            <Route
              component={Details}
              path='/search/:id'
            />
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
