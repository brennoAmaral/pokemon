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
  fav: boolean
}

const Card: FC<CardProps> = (props) => {
  const {
    pokeProps,
    pokeName,
    pokeId,
    pokeType,
    fav
  } = props
  const [pokemon, setPokemon] = useState<Pokemon>({
    id: undefined,
    name: '',
    type: '',
    sprite: ''
  })

  useEffect(() => {
    setPokemon(pokeProps)
    console.log('pokeProps' + pokeProps)
  }, [pokeProps])

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
            <Button onClick={() => favorite(pokemon)} height='auto'>
              <Star fill={fav ? theme.yellow : theme.white} />
            </Button>
          </S.WrapperStar>
        </S.HeaderCard>
        <img src={pokemon.sprite} height={'100px'} width={'100px'} />
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
