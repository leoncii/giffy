
import React from 'react'
import { Link } from 'wouter'
const Gif = ({ id, title, url}) => {
  return (
    <Link href={`/search/${id}`}>
      <h3>{title}</h3>
      <img src={url} alt="giffy" />
    </Link>
  )
}

export default Gif