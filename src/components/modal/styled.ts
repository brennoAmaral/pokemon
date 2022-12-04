import styled from 'styled-components'

interface ModalProps {
  isOpen: boolean
}
export const Shadow = styled.div<ModalProps>`
  width: 100%;
  height: 100vh;
  background-color: #000000eb;
  position: fixed;
  z-index: 9;
  bottom: ${({ isOpen }) => isOpen ? '0' : '-740px'};
  right: 0;
  transition: 2s;
`
export const Modal = styled.div<ModalProps>`
  width: 100%;
  height: 620px;
  position: absolute;
  transition: 1s;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
`

export const WrapperStar = styled.div`
    position: absolute;
    top: 0px;
    right: 3px;
`

export const HeaderModal = styled.div`
    position: relative;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
`
export const WrapperText = styled.div`
    text-align: initial;
    width: 70%;
`
