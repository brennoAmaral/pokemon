import { FC } from 'react'
import * as S from './styled'

const Header: FC = () => {
  return (
    <S.Header>
      <S.PokemonLogo />
      <S.WrapperPokeBall>
        <S.Pokeball />
      </S.WrapperPokeBall>
    </S.Header>
  )
}

export default Header
