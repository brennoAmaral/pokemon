import { FC } from 'react'
import Star from '../../assets/svg/star'
import theme from '../../styles/theme'
import Button from '../button'
import Text from '../text'
import * as S from './styled'

interface ModalProps {
  isOpen: boolean
  fav: boolean
  name: string
  sprite: string
  id: number
  type: string
  hp: number
  attack: number
  especialAttack: number
  defense: number
  especialDefense: number
  weight: number
}

const Modal: FC<ModalProps> = (props) => {
  const {
    isOpen,
    fav,
    name,
    sprite,
    id,
    type,
    hp,
    attack,
    especialAttack,
    defense,
    especialDefense,
    weight
  } = props
  return (
    <S.Shadow isOpen={isOpen}>
      <S.Modal isOpen={isOpen}>
        <S.HeaderModal>
          <Text fontSize='35px' bold margin='2px 0 0 0'>
            {name}
          </Text>
          <S.WrapperStar>
            <Button onClick={() => console.log(`${name} favoritado com sucesso`)} height='auto'>
              <Star fill={fav ? theme.yellow : theme.white} size={35} />
            </Button>
          </S.WrapperStar>
        </S.HeaderModal>
        <img src={sprite} height={'200px'} width={'200px'} />
        <S.WrapperText>
          <Text fontSize='22px' color={theme.darkBlue} margin={'0 0 10px 0'}>
            {`ID: ${id}`}
          </Text>
          <Text fontSize='22px' color={theme.darkBlue} margin={'0 0 10px 0'}>
            {`Type: ${type}`}
          </Text>
          <Text fontSize='22px' color={theme.darkBlue} margin={'0 0 10px 0'}>
            {`HP: ${hp}`}
          </Text>
          <Text fontSize='22px' color={theme.darkBlue} margin={'0 0 10px 0'}>
            {`Attack: ${attack}`}
          </Text>
          <Text fontSize='22px' color={theme.darkBlue} margin={'0 0 10px 0'}>
            {`Special Attack: ${especialAttack}`}
          </Text>
          <Text fontSize='22px' color={theme.darkBlue} margin={'0 0 10px 0'}>
            {`Defense: ${defense}`}
          </Text>
          <Text fontSize='22px' color={theme.darkBlue} margin={'0 0 10px 0'}>
            {`Special Defense: ${especialDefense}`}
          </Text>
          <Text fontSize='22px' color={theme.darkBlue} margin={'0 0 10px 0'}>
            {`Weight: ${weight}`}
          </Text>
        </S.WrapperText>
      </S.Modal>
    </S.Shadow>
  )
}

export default Modal
