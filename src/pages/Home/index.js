import React, { useState } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import { useLocation } from 'wouter'
import TrendingSearching from 'components/Trending'

const Home = () => {

  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()

  const { gifs } = useGifs()
  // console.log("[LOCATION]", location)
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(keyword)
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return <>
    <h1>Home</h1>
    <ul>
      <form
        onSubmit={handleSubmit}
      >
        <input
          autoFocus
          placeholder='Search gif...'
          type="text"
          onChange={handleChange}
          value={keyword}
          name=""
          id=""
        />
        <button>search</button>
      </form>
      <h3>Trendings-- Last search</h3>
      {
        gifs === undefined
          ? 'cargando'
          : <ListOfGifs gifs={gifs} />
      }
      {
        <TrendingSearching />
      }
    </ul>
  </>
}

export default Home