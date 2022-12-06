import { FC, useCallback, useEffect, useState } from 'react'
import Star from '../../assets/svg/star'
import { setFavorite, setDisfavor } from '../../services/favorite'
import theme from '../../styles/theme'
import Button from '../button'
import Text from '../text'
import * as S from './styled'

interface CardProps {
  name: string
  id: number
  type: string
  sprite: string
  hp: number
  attack: number
  especialAttack: number
  defense: number
  especialDefense: number
  speed: number
  weight: number
  onClick: () => void
}

const Card: FC<CardProps> = (props) => {
  const {
    name,
    id,
    type,
    sprite,
    hp,
    attack,
    especialAttack,
    defense,
    especialDefense,
    speed,
    weight,
    onClick
  } = props

  const [fav, setFav] = useState<boolean>(false)

  const isFavorite = (): void => {
    let favorite = JSON.parse(localStorage.getItem('favorites'))
    if (favorite !== null) {
      let itsHere = favorite.find(x => x.data.id === id)
      if (itsHere !== undefined) {
        setFav(true)
      }
    } else {
      setFav(false)
    }
  }
  const handleFavorite = useCallback((): void => {
    setFav(true)
    setFavorite(name, sprite, id, type, hp, attack, especialAttack, defense, especialDefense, speed, weight)
  }, [])

  const handleDisfavor = useCallback((): void => {
    setFav(false)
    setDisfavor(id)
  }, [])

  const buttonRender = useCallback(() => {
    if (fav) {
      return (
        <Button
          onClick={() =>
            handleDisfavor()
          }
          height="auto"
        >
          <Star fill={theme.yellow} stroke={theme.darkBlue} />
        </Button>
      )
    } else {
      return (
        <Button
          onClick={() =>
            handleFavorite()
          }
          height="auto"
        >
          <Star fill={theme.white} stroke={theme.darkBlue} />
        </Button>
      )
    }
  }, [fav])

  useEffect(() => {
    isFavorite()
  })

  return (
    <S.WrapperCard>
      <S.WrapperStar>
        {buttonRender()}
      </S.WrapperStar>
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
    </S.WrapperCard>
  )
}

export default Card
