import Card from './components/card';
import getPokemon, { Pokemon } from './services/pokeSearch';
import { FC, useCallback, useContext } from 'react';
import { PokemonSetupContext } from './context/PokemonSetupProvider';
import Header from './components/header';
import NavBar from './components/navBar';
import * as S from './style';

let pokemonMock = [
  {
      id: 132,
      name: 'ditto',
      type: 'normal',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
  },
  {
      id: 25,
      name: 'pikachu',
      type: 'eletric',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  }
];

function App() {
 //const { pokeArray } = useContext(PokemonSetupContext)

  const renderPoke = useCallback((pokemons:Pokemon[])=>{
    return pokemons.map((pokemon) => {
      return (
        <Card pokeProps={pokemon} />
      );
    })
  },[]);

  return (
    <div className="App">
      <>
        <Header />
        <S.WrapperList>
          {renderPoke(pokemonMock)}
        </S.WrapperList>
        <NavBar />
      </>
    </div>
  )
};

export default App;
