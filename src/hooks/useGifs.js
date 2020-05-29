import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/gifsContext'

const useGifs = ({ keyword } = { keyword: 'bolivia' }) => {
  // console.log("][", props)
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  // console.log('[KEYWORD]', keyword)

  useEffect(() => {
    setLoading(true)
    const lastKeyword = keyword || localStorage.getItem('lastKeyword')
    getGifs({ keyword: lastKeyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs])

  return { loading, gifs }
}

export default useGifs