import { ReactNode, useState, createContext, useEffect } from 'react'
import type { FC } from 'react'
import getPokemons from '../services/getPokemons'
import getPokemon from '../services/getPokemon'

interface Result<R> {
  data: { results: R[] }
}

export interface Pokemon {
  id: number | undefined
  name: string
  types: [{
    type: {
      slot: string
      name: string
    }
  }]
  weigth: number
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
  pokemons: Result<Pokemon>
  setPokemons: (arr: Result<Pokemon>) => void
  resetPokemons: () => void
  handleSearch: (name: string) => void
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
  setPokemons: () => undefined,
  resetPokemons: () => undefined,
  handleSearch: () => undefined
}

export const PokemonSetupContext = createContext<PokemonSetupDataStructure>(initialPokemonSetup)

const PokemonSetup: FC<PokemonSetupProps> = (props) => {
  const { children } = props
  const [pokemons, setPokemons] = useState<Result<Pokemon>>(
    initialPokemonSetup.pokemons
  )
  const handleSearch = (name: string) => {
    getPokemon(name).then((result) => {
      setPokemons(result)
    }).catch((error) => {
      console.log(error)
    })
  }
  const resetPokemons = (): void => {
    getPokemons().then((result) => {
      setPokemons(result)
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
