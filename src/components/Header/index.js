import React from 'react'
import { Link } from 'wouter'
import { HeaderStyled } from './styles'

import useUser from 'hooks/useUser'


export function Header() {
  const { isLogged, logout } = useUser()

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <HeaderStyled >
      {
        isLogged
          ? <Link to='/' onClick={handleClick}>Logout</Link>
          : <Link to='login'>
            Login
      </Link>
      }
    </HeaderStyled>
  )
}