
import React from 'react'
import { Link } from 'wouter'
import Fav from '../Fav'
import './styles.css'

const Gif = ({ id, title, url }) => {

  return (
    <div className='gif'>
      <div className='gif-buttons' >
        <Fav id={id}></Fav>
      </div>
      <Link className='gif-link' href={`/search/${id}`}>
        <h3>{title}</h3>
        <img  src={url} alt="giffy" />
      </Link>
      {/* <img src={url} alt="logo"/> */}
    </div>
  )
}

export default React.memo(Gif)