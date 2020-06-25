import React from 'react'
import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'
import './styles.css'

export default function Fav({ id }) {
  const { isLogged, fav, favs } = useUser()
  const [, location] = useLocation()

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return location('/login')
    fav({ id })
    // isFaved ? deleteFav({id}) : fav({id})
    // alert(id)
  }

  const [
    label,
    emoji
  ] = isFaved
      ? [
        'Remove gif from favorites',
        'X'
      ] : [
        'Add gif to favorites',
        '❤'
      ]

  return <button className='gf-fav' onClick={handleClick}>
    <span aria-label={label} role='img'>{emoji}</span>
  </button>
}