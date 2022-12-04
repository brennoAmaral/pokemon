import { FC } from 'react'
import Star from '../../assets/svg/star'
import theme from '../../styles/theme'
import Button from '../button'
import Text from '../text'
import * as S from './styled'

interface ModalProps {
  isOpen: boolean
  name: string
  id: number
  type: string
  sprite: string
  fav: boolean
}

const Modal: FC<ModalProps> = (props) => {
  const {
    isOpen,
    name,
    id,
    type,
    sprite,
    fav
  } = props
  return (
    <S.Shadow>
      <S.Modal isOpen={isOpen}>
        <S.HeaderModal>
          <Text fontSize='18px' bold margin='2px 0 0 0'>
            {name}
          </Text>
          <S.WrapperStar>
            <Button onClick={() => console.log(`${name} favoritado com sucesso`)} height='auto'>
              <Star fill={fav ? theme.yellow : theme.white} />
            </Button>
          </S.WrapperStar>
        </S.HeaderModal>
        <img src={sprite} height={'100px'} width={'100px'} />
        <S.WrapperText>
          <Text fontSize='15px' color={theme.darkBlue}>
            {`id: ${id}`}
          </Text>
          <Text fontSize='15px' color={theme.darkBlue}>
            {`Type: ${type}`}
          </Text>
        </S.WrapperText>
      </S.Modal>
    </S.Shadow>
  )
}

export default Modal
