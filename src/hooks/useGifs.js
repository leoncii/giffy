import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/gifsContext'

const INITIAL_PAGE = 0
const useGifs = ({ keyword } = { keyword: 'bolivia' }) => {
  // console.log("][", props)
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  // console.log('[KEYWORD]', keyword)

  const lastKeyword = keyword || localStorage.getItem('lastKeyword')

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: lastKeyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, lastKeyword, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: lastKeyword, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })

  }, [page, lastKeyword, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}

export default useGifs