import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'

const SearchGifs = ({ params }) => {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })
  // console.log('----')
  return <>
    {
      loading
        ? 'CARGANDO...'
        : <ListOfGifs gifs={gifs} />
    }
  </>
}
//solo mira params
// export default React.memo(SearchGifs)
export default SearchGifs