import React, { useRef, useEffect, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import { useNearScreen } from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

const SearchGifs = ({ params }) => {
  const { keyword, rating = 'pg-13' } = params
  const { loading, gifs, setPage } = useGifs({ keyword, rating })
  // console.log('----')7
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })
  // const handleNextPage = () => setPage(prevPage => prevPage + 1)
  // const handleNextPage = () => console.log('next page')

  const debouncedHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 500
  ), [setPage])

  useEffect(() => {
    if (isNearScreen) debouncedHandleNextPage()
  }, [isNearScreen, debouncedHandleNextPage])

  return <>
    {
      loading
        ? 'CARGANDO...'
        : <>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id='visor' ref={externalRef}></div>
        </>

    }

  </>
}
//solo mira params
// export default React.memo(SearchGifs)
export default SearchGifs