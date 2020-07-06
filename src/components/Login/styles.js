import styled from 'styled-components'

export const Form = styled.form`
  max-width: 320px;
  width: 100%;
  label {
    display:block;
    margini-bottom: 4px;
  }
  input {
    display:block;
    width: 70%;
    margin:1em auto;
    border: none;
    font-weight: 600;
    font-size: .8em;
  }
  `

export const Button = styled.button`
  display: block;
  width: 75%;
  background: #fc0;
  color: #fff;
  margin: 0 auto;
  letter-spacing: 2px;
  border: none;
`
