/* eslint-disable react/react-in-jsx-scope */
import { FC, useCallback, useEffect, useState } from 'react'
import Star from '../../assets/svg/star'
import { favorite } from '../../services/favorite'
import { Pokemon } from '../../services/pokeSearch'
import theme from '../../styles/theme'
import Button from '../button'
import Text from '../text'
import * as S from './styled'

interface CardProps {
  pokeProps: Pokemon
  pokeName: string
  pokeId: number
  pokeType: string
  pokeSprite: string
  fav: boolean
}

const Card: FC<CardProps> = (props) => {
  const {
    pokeName,
    pokeId,
    pokeType,
    pokeSprite,
    fav
  } = props

  return (
    <Button
      onClick={
        () => console.log('chamar modal detalhada')
      }
      height='auto'
      width='auto'
      margin='0 0 8px 0'
    >
      <S.Card>
        <S.HeaderCard>
          <Text fontSize='18px' bold margin='2px 0 0 0'>
            {pokeName}
          </Text>
          <S.WrapperStar>
            <Button onClick={() => console.log(`${pokeName} favoritado com sucesso`)} height='auto'>
              <Star fill={fav ? theme.yellow : theme.white} />
            </Button>
          </S.WrapperStar>
        </S.HeaderCard>
        <img src={pokeSprite} height={'100px'} width={'100px'} />
        <S.WrapperInfo>
          <S.WrapperText>
            <Text fontSize='15px' color={theme.white}>
              {`id: ${pokeId}`}
            </Text>
            <Text fontSize='15px' color={theme.white}>
              {`Type: ${pokeType}`}
            </Text>
          </S.WrapperText>
        </S.WrapperInfo>
      </S.Card>
    </Button>

  )
}

export default Card
