// import React, { useContext } from 'react'
import React from 'react'
// import Context from '../../context'
// import GifsContext from 'context/gifsContext'
import { Redirect } from 'wouter'
import Gif from 'components/Gif'
import useSingleGif from 'hooks/useSingleGif'
// import getSingleGif from 'services/getSingleGif'

const Details = ({ params }) => {
  // const { gifs } = useContext(GifsContext) 
  const { isLoading, isError, gif } = useSingleGif({ id: params.id })
  // const gifDetail = gifs.find(item => item.id === params.id)
  // const { id, title, url } = getSingleGif({ id: params.id })
  // console.log({ id, title, url })
  if (isLoading) return 'Cargando...'
  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return <Gif id={gif.id} title={gif.title} url={gif.url} />
}

export default React.memo(Details)