import styled from 'styled-components'
import Ball from '../../assets/png/pokeball.png'
import Logo from '../../assets/png/pokemonLogo.png'

export const Header = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.darkBlue};
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;
    position: relative;
`

export const WrapperPokeBall = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -25px;
    background-color: #071330;
    border-radius: 100%;
`

export const PokemonLogo = styled.img`
  width: 171px;
  height: 60px;
`

export const Pokeball = styled.img`
    width: 40px;
`

PokemonLogo.defaultProps = {
  src: Logo
}

Pokeball.defaultProps = {
  src: Ball
}
