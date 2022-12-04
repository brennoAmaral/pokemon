import { ReactNode, useState, createContext } from 'react'
import type { FC } from 'react'

export interface Pokemon {
  id: number | undefined
  name: string
  type: string
  sprite: string
  modalIsOpen: boolean
}

interface PokemonSetupDataStructure {
  pokemons: Pokemon[]
  setPokemons: (arr: Pokemon[]) => void
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
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
    },
    {
      id: 25,
      name: 'pikachu',
      type: 'eletric',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    }
  ],
  setPokemons: () => undefined
}

export const PokemonSetupContext = createContext<PokemonSetupDataStructure>(initialPokemonSetup)

const PokemonSetup: FC<PokemonSetupProps> = (props) => {
  const { children } = props
  const [pokemons, setPokemons] = useState<Pokemon[]>(
    initialPokemonSetup.pokemons
  )

  return (
    <PokemonSetupContext.Provider value={{ pokemons, setPokemons}}>
      {children}
    </PokemonSetupContext.Provider>
  )
}

export default PokemonSetup
