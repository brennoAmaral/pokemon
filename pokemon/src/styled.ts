import styled from "styled-components";
import Logo from './assets/png/pokemonLogo.png'
import Ball from './assets/png/Pokeball.png'
export const Header = styled.header`
    width: 100%;
    background-color: #071330;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;
    position: relative;
`;

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
`;

export const PokemonLogo = styled.img`
  width: 171px;
  height: 60px;
`;

export const Pokeball = styled.img`
    width: 40px;
`;

export const NavBar = styled.nav`
    width: 100%;
    padding: 10px 0px; 
    background-color: #071330;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    padding-top: 10px;

`;

export const WrapperButton = styled.div`
    width: 100%;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const WrapperChildrenButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

PokemonLogo.defaultProps = {
    src: Logo
  };

Pokeball.defaultProps = {
    src: Ball
};