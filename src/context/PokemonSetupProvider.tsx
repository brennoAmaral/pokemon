import { ReactNode, useState, createContext, useEffect } from 'react'
import type { FC } from 'react'
import getPokemons from '../services/getPokemons'
import getPokemon from '../services/getPokemon'

export interface Pokemon {
  id: number
  name: string
  types: [{
    type: {
      slot: string
      name: string
    }
  }]
  weight: number
  sprites: {
    front_default: string
  }
  stats: [{
    base_stat: number
    stat: {
      name: string
    }
  },
  {
    base_stat: number
    stat: {
      name: string
    }
  },
  {
    base_stat: number
    stat: {
      name: string
    }
  },
  {
    base_stat: number
    stat: {
      name: string
    }
  },
  {
    base_stat: number
    stat: {
      name: string
    }
  },
  {
    base_stat: number
    stat: {
      name: string
    }
  },
  {
    base_stat: number
    stat: {
      name: string
    }
  }]
}

interface PokemonSetupDataStructure {
  pokemons: Pokemon[]
  setPokemons: (arr: Pokemon[]) => void
  resetPokemons: () => void
  handleSearch: (name: string) => void
}

interface PokemonSetupProps {
  children: ReactNode
}

const initialPokemonSetup: PokemonSetupDataStructure = {
  pokemons: [
    // {
    //   id: 132,
    //   name: 'ditto',
    //   type: 'normal',
    //   sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
    // },
    // {
    //   id: 25,
    //   name: 'pikachu',
    //   type: 'eletric',
    //   sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    // }
  ],
  setPokemons: () => undefined,
  resetPokemons: () => undefined,
  handleSearch: () => undefined
}

export const PokemonSetupContext = createContext<PokemonSetupDataStructure>(initialPokemonSetup)

const PokemonSetup: FC<PokemonSetupProps> = (props) => {
  const { children } = props
  const [pokemons, setPokemons] = useState<Pokemon[]>(
    initialPokemonSetup.pokemons
  )
  const handleSearch = (name: string): void => {
    getPokemon(name).then((result) => {
      // @ts-expect-error
      setPokemons(result)
    }).catch((error) => {
      console.log('error', error)
    })
  }
  const resetPokemons = (): void => {
    console.log('reset pokemoooooon')
    getPokemons().then((result) => {
      // @ts-expect-error
      setPokemons(result)
      console.log('testeeeee', result)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    resetPokemons()
  }, [])

  return (
    <PokemonSetupContext.Provider value={{ pokemons, setPokemons, handleSearch, resetPokemons }}>
      {children}
    </PokemonSetupContext.Provider>
  )
}

export default PokemonSetup
