import styled from 'styled-components'

interface ModalProps {
  isOpen: boolean
}
export const Shadow = styled.div<ModalProps>`
  width: 100%;
  height: ${({ isOpen }) => isOpen ? '100vh' : '0vh'};
  background-color: #000000eb;
  position: fixed;
  z-index: 9;
  bottom: ${({ isOpen }) => isOpen ? '0' : '-100vh'};
  right: 0;
  transition: 0.6s;
`
export const Modal = styled.div<ModalProps>`
  width: 100%;
  height: 80%;
  overflow-x: scroll;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  z-index: 10;
`
