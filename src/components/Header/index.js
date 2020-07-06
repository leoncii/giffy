import React from 'react'
import { Link } from 'wouter'
import { HeaderStyled } from './styles'

import useUser from 'hooks/useUser'
import { useRoute } from 'wouter'


export function Header() {
  const { isLogged, logout } = useUser()
  const [match] = useRoute('/login')

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const renderLoginButton = ({ isLogged }) => {
    return isLogged
      ? <Link to='/' onClick={handleClick}>Logout</Link>
      : <><Link to='/login'>
        Login
        </Link>
        <Link to='/register'>
          Register
        </Link></>
  }

  const content = match
    ? null
    : renderLoginButton({ isLogged })

  return (
    <HeaderStyled >
      {content}
    </HeaderStyled>
  )
}