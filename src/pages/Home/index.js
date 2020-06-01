import React, { useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import { useLocation } from 'wouter'
import TrendingSearching from 'components/Trending'
import './styles.css'
import SearchForm from 'components/SearchForm'

const Home = () => {

  const [, pushLocation] = useLocation()

  const { gifs } = useGifs()
  // console.log("[LOCATION]", location)
  const handleSubmit = useCallback(({ keyword }) => {
    // e.preventDefault()
    // console.log(keyword)
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])


  return <>
    <h1>Home</h1>
    <ul>
      <SearchForm onSubmit={handleSubmit} />
      <h3>Trendings <span role='img' aria-label='dedos'>🤞</span></h3>
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