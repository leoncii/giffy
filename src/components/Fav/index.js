import React from 'react'
import useUser from 'hooks/useUser'
// import { useLocation } from 'wouter'
import './styles.css'
import { useState } from 'react'
import Modal from 'components/Modal'
import Login from 'components/Login'

export default function Fav({ id }) {
  const { isLogged, fav, favs } = useUser()
  // const [, location] = useLocation()
  const [showModal, setShowModal] = useState(false)

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return setShowModal(true)
    fav({ id })
  }
  const handleClose = () => {
    setShowModal(false)
  }

  const handleLogin = () => {
    setShowModal(false)
  }

  let [
    label,
    emoji
  ] = isFaved ? [
    'Remove gif from favorites',
    'X'
  ] : [
        'Add gif to favorites',
        '❤'
      ]

  return (
    <div>
      <button className='gf-fav' onClick={handleClick}>
        <span aria-label={label} role='img'>{emoji}</span>
      </button>
      {
        showModal && <Modal onClose={handleClose}><Login onLogin={handleLogin} /></Modal>
      }
    </div>
  )
}
