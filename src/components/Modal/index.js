import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContainer, Button, Container } from './styles.js'


function Modal({ children, onClose }) {
  return <Container>
    <ModalContainer>
      <Button onClick={onClose}>X</Button>
      {children}
    </ModalContainer>
  </Container>
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>
      {children}
    </Modal>,
    document.getElementById('modal')
  )
}