import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/gifsContext'

const INITIAL_PAGE = 0

const useGifs = ({ keyword, rating } = { keyword: 'bolivia', rating: 'r' }) => {
  // console.log("][", props)
  // console.log('[][][]', keyword)
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  // console.log('[KEYWORD]', keyword)

  const lastKeyword = keyword || localStorage.getItem('lastKeyword')

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: lastKeyword, rating })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, lastKeyword, setGifs, rating])

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true)

    getGifs({ keyword: lastKeyword, page, rating })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })

  }, [page, lastKeyword, setGifs, rating])

  return { loading, loadingNextPage, gifs, setPage }
}

export default useGifs