import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background: #fc0;
  :disabled {
    opacity: .3;
    pointer-events: none;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input{
    border:none;
    margin: .6em;
  }
`

export const Span = styled.span`
  p {
    color:red;
  }

`