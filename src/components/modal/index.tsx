import { FC } from 'react'
import * as S from './styled'

interface ModalProps {
  children: JSX.Element
  isOpen: boolean
  onClose: () => void
  name: string
}

const Modal: FC<ModalProps> = (props) => {
  const {
    children,
    isOpen,
    onClose
  } = props
  return (
    <S.Shadow isOpen={isOpen} onClick={() => onClose()}>
      <S.Modal isOpen={isOpen}>
        {children}
      </S.Modal>
    </S.Shadow>
  )
}

export default Modal
