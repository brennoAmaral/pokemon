import { FC, useEffect } from 'react'
import Star from '../../assets/svg/star'
import theme from '../../styles/theme'
import Button from '../button'
import Text from '../text'
import * as S from './styled'

interface CardProps {
  name: string
  id: number
  type: string
  sprite: string
  fav: boolean
  onClick: () => void
}

const Card: FC<CardProps> = (props) => {
  const {
    name,
    id,
    type,
    sprite,
    fav,
    onClick
  } = props
  useEffect(() => {
    console.log(onClick)
  }, [])
  return (
    <Button
      onClick={onClick}
      height='auto'
      width='auto'
      margin='0 0 8px 0'
    >
      <S.Card>
        <S.HeaderCard>
          <Text fontSize='18px' bold margin='2px 0 0 0'>
            {name}
          </Text>
          <S.WrapperStar>
            <Button onClick={() => console.log(`${name} favoritado com sucesso`)} height='auto'>
              <Star fill={fav ? theme.yellow : theme.white} />
            </Button>
          </S.WrapperStar>
        </S.HeaderCard>
        <img src={sprite} height={'100px'} width={'100px'} />
        <S.WrapperInfo>
          <S.WrapperText>
            <Text fontSize='16px' color={theme.white}>
              {`id: ${id}`}
            </Text>
            <Text fontSize='16px' color={theme.white}>
              {`Type: ${type}`}
            </Text>
          </S.WrapperText>
        </S.WrapperInfo>
      </S.Card>
    </Button>
  )
}

export default Card
