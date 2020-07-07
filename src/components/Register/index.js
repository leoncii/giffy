import React from 'react'
import register from 'services/register'
import { Formik } from 'formik'
import { Button, Span, Form } from './styles.js'
import { useState } from 'react'

export default function Register() {
  const [registered, setRegistered] = useState(false)

  if (registered) {
    return <h4>Congratulations! You've been successfully registered!</h4>
  }

  return <>
    <h1>Formulario de registro</h1>
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      validate={values => {
        const errors = {}
        if (!values.username) {
          errors.username = 'Username requerido'
        }
        if (!values.password) {
          errors.password = 'Password requerido'
        }
        return errors
      }}
      onSubmit={(values, setFieldError) => {
        return register(values)
          .then(() => {
            setRegistered(true)
          })
          .catch(() => {
            setFieldError('username', 'No es valido')
          })
      }}
    >
      {
        ({ errors, handleChange, handleSubmit, isSubmitting }) => <Form onSubmit={handleSubmit}>
          <label>
            Username:
            <input name='username' onChange={handleChange} type="text" />
          </label>
          <Span >
            {errors.username ? <p>{errors.username}</p> : ''}
          </Span>
          <label>
            Password:
          <input name='password' onChange={handleChange} type="text" />
          </label>
          <Span >
            {errors.password ? <p>{errors.password}</p> : ''}
          </Span>
          <Button disabled={isSubmitting}>Registrarse</Button>
        </Form>
      }
    </Formik>
  </>
}