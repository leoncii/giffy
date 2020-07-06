import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'
import { useEffect } from 'react'
import { Form, Button } from './styles.js'

export default function Login({ onLogin }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, location] = useLocation()
  const { login, isLogged, isLoginLoading, isLoginError } = useUser()

  useEffect(() => {
    if (isLogged) {
      location('/')
      onLogin && onLogin()
    }
  }, [isLogged, location, onLogin])

  const handleSubmit = e => {
    e.preventDefault()
    login({ username, password })
    // location('/')
  }

  return (
    <>
      {
        isLoginLoading && <strong>Verificando usuario</strong>
      }
      {
        !isLoginLoading && <Form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="username"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
          </label>
          <label>
            Password
          <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <Button>Login</Button>
        </Form>
      }
      {
        isLoginError && <strong>usuario invalido</strong>
      }
    </>
  )
}