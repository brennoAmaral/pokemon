import { ReactNode, useState, createContext } from 'react'
import type { FC } from 'react'

interface Pokemon {
  id: number | undefined
  name: string
  type: string
  sprite: string
}

interface PokemonSetupDataStructure {
  pokeArray: Pokemon[]
  setPokeArray: (arr: Pokemon[]) => void
}

interface PokemonSteupProps {
  children: ReactNode
}

const initialPokemonSetup = {
  pokeArray: [
    {
      id: 132,
      name: 'ditto',
      type: 'normal',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
    },
    {
      id: 25,
      name: 'pikachu',
      type: '25',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    }
  ],
  setPokeArray: () => undefined
}

export const PokemonSetupContext = createContext<PokemonSetupDataStructure>(initialPokemonSetup)

const PokemonSetup: FC<PokemonSteupProps> = (props) => {
  const { children } = props
  const [pokeArray, setPokeArray] = useState<Pokemon[]>(
    initialPokemonSetup.pokeArray
  )
  return (
        <PokemonSetupContext.Provider value={{ pokeArray, setPokeArray }}>
            {children}
        </PokemonSetupContext.Provider>
  )
}

export default PokemonSetup
