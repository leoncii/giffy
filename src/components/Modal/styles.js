import styled from 'styled-components'

export const ModalContainer = styled.div`
  background: #111;
  width: 300px;
  padding: 10px 20px;
  height: 80vh;
  margin: 10vh auto;
  position: relative;
`

export const Button = styled.button`
  display: block;
`

export const Container = styled.div`
  background-color: rgba(255,255,255, .8);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`
