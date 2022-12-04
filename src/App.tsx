import Card from './components/card'
import { useCallback } from 'react'
import Header from './components/header'
import NavBar from './components/navBar'
import * as S from './style'
import Modal from './components/modal'

const pokemonMock = [
  {
    id: 132,
    name: 'ditto',
    type: 'normal',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    fav: true
  },
  {
    id: 25,
    name: 'pikachu',
    type: 'eletric',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    fav: false
  }
]

function App (): JSX.Element {
  // const { pokeArray } = useContext(PokemonSetupContext)

  const renderPoke = useCallback((pokemons: any) => {
    return pokemons.map((pokemon: any) => {
      return (
        <Card key={pokemon.sprite} name={pokemon.name} id={pokemon.id} sprite={pokemon.sprite} type={pokemon.type} fav={pokemon.fav} />
      )
    })
  }, [])

  return (
    <div className="App">
      <>
      <Modal isOpen={true} fav={false} name={pokemonMock[0].name} id={pokemonMock[0].id} sprite={pokemonMock[0].sprite} type={pokemonMock[0].type}/>
        <Header />
        <S.WrapperList>
          {renderPoke(pokemonMock)}
        </S.WrapperList>
        <NavBar />
      </>
    </div>
  )
};

export default App
