import Card from './components/card'
import { useCallback, useContext, useState } from 'react'
import Header from './components/header'
import NavBar from './components/navBar'
import * as S from './style'
import Modal from './components/modal'
import { PokemonSetupContext } from './context/PokemonSetupProvider'

// const pokemonMock = [
//   {
//     id: 132,
//     name: 'ditto',
//     type: 'normal',
//     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
//     fav: true
//   },
//   {
//     id: 25,
//     name: 'pikachu',
//     type: 'eletric',
//     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
//     fav: false
//   }
// ]

function App (): JSX.Element {
  const { pokemons, handleModal } = useContext(PokemonSetupContext)
  const renderPoke = useCallback((pokemons: any) => {
    return pokemons.map((pokemon: any) => {
      return (
        <Card
          key={pokemon.sprite}
          name={pokemon.name}
          id={pokemon.id}
          sprite={pokemon.sprite}
          type={pokemon.type}
          fav={pokemon.fav}
          onClick={() => handleModal(pokemon.name, pokemons)}
        />
      )
    })
  }, [])

  const renderModal = useCallback((pokemons: any) => {
    return pokemons.map((pokemon: any) => {
      console.log(pokemon.name, ': ', pokemon.modalIsOpen)
      return (
        <Modal
          key={pokemon.sprite}
          fav={pokemon.fav}
          isOpen={pokemon.modalIsOpen}
          name={pokemon.name}
          sprite={pokemon.sprite}
          id={pokemon.id}
          type={pokemon.type}
          hp={10}
          attack={10}
          especialAttack={10}
          defense={10}
          especialDefense={10}
          weight={10}
        />
      )
    })
  }, [])

  return (
    <div className="App">
      <>
        {/* <Modal isOpen={true} fav={false} name={pokemonMock[1].name} id={pokemonMock[1].id} sprite={pokemonMock[1].sprite} type={pokemonMock[1].type}/> */}
        <Header />
        <S.WrapperList>
          {renderPoke(pokemons)}
          {renderModal(pokemons)}
        </S.WrapperList>
        <NavBar />
      </>
    </div>
  )
};

export default App
