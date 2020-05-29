import React, { useContext } from 'react'
// import Context from '../../context'
import GifsContext from 'context/gifsContext'
import Gif from 'components/Gif'

const Details = ({ params }) => {
  const { gifs } = useContext(GifsContext)
  const gifDetail = gifs.find(item => item.id === params.id)
  console.log(gifDetail)

  return <Gif {...gifDetail} />
}

export default Details