import { ReactNode, useState, createContext } from 'react'
import type { FC } from 'react'

interface Pokemon {
  id: number | undefined
  name: string
  type: string
  sprite: string
  modalIsOpen: boolean
}

interface PokemonSetupDataStructure {
  pokemons: Pokemon[]
  setPokemons: (arr: Pokemon[]) => void
  handleModal: (name: string, pokemons: Pokemon[]) => void
}

interface PokemonSetupProps {
  children: ReactNode
}

const initialPokemonSetup = {
  pokemons: [
    {
      id: 132,
      name: 'ditto',
      type: 'normal',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      modalIsOpen: false
    },
    {
      id: 25,
      name: 'pikachu',
      type: 'eletric',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      modalIsOpen: false

    }
  ],
  setPokemons: () => undefined,
  handleModal: () => undefined
}

export const PokemonSetupContext = createContext<PokemonSetupDataStructure>(initialPokemonSetup)

const PokemonSetup: FC<PokemonSetupProps> = (props) => {
  const { children } = props
  const [pokemons, setPokemons] = useState<Pokemon[]>(
    initialPokemonSetup.pokemons
  )
  const handleModal = (name: string, pokemons: Pokemon[]): void => {
    pokemons.forEach((index) => {
      if (index.name === name) {
        if (!index.modalIsOpen) {
          index.modalIsOpen = true
          setPokemons(pokemons)
          console.log(`modal ${index.name}: `, pokemons)
        } else {
          index.modalIsOpen = false
          setPokemons(pokemons)
          console.log(`modal ${index.name}: `, pokemons)
        }
      }
    })
  }

  return (
    <PokemonSetupContext.Provider value={{ pokemons, setPokemons, handleModal }}>
      {children}
    </PokemonSetupContext.Provider>
  )
}

export default PokemonSetup
