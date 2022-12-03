import { FC } from 'react'
import * as S from './styled'

interface ModalProps {
  children: JSX.Element
  isOpen?: boolean
}

const Modal: FC<ModalProps> = (props) => {
  const {
    children,
    isOpen = false
  } = props
  return (
    <S.Modal isOpen={isOpen}>
      {children}
    </S.Modal>
  )
}

export default Modal
