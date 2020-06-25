import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'
import { useEffect } from 'react'

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, location] = useLocation()
  const { login, isLogged, isLoginLoading, isLoginError } = useUser()

  useEffect(() => {
    if (isLogged) location('/')
  }, [isLogged, location])

  const handleSubmit = e => {
    e.preventDefault()
    login({ username, password })
    // location('/')
  }

  return (
    <>
      <h2>Login</h2>
      {
        isLoginLoading && <strong>Verificando usuario</strong>
      }
      {
        !isLoginLoading && <form onSubmit={handleSubmit}>
          <input
            type="username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button>Login</button>
        </form>
      }
      {
        isLoginError && <strong>usuario invalido</strong>
      }
    </>
  )
}