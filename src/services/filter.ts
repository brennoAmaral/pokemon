import axios from 'axios'

interface Response {
  data: { pokemon: [
    {
      name: string
      url: string
    }
  ] }
}
interface Pokemon {
  id: number | undefined
  name: string
  types: [{
    type: {
      slot: number
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
  }]
}

const getPokemonsByElement = async (pokemonType: number): Promise<Pokemon[]> => {
  // @ts-expect-error
  return await axios.get<any, Response<Pokemon>>(`https://pokeapi.co/api/v2/type/${pokemonType}`)
    .then(async (response) => {
      console.log('eleteeeeeeee', response)
      const pokemons: Array<{ pokemon: { name: string, url: string } }> = response.data.pokemon
      return await Promise.all(pokemons.map(async (pokemon, key) => {
        return await axios.get(pokemons[key].pokemon.url)
      }))
    }).then((results) => {
      return results.map((result) => {
        return result.data
      }) as unknown as Pokemon[]
    }).catch((error) => {
      console.log(error)
    })
}

export default getPokemonsByElement
