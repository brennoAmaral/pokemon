/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
// @ts-ignore
import axios from 'axios'

interface Response<R> {
  data: { results: R[] }
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

const getPokemons = async (): Promise<Pokemon[]> => {
  // @ts-ignore
  return await axios.get<any, Response<Pokemon>>('https://pokeapi.co/api/v2/pokemon')
    .then(async (response) => {
      const results = response.data.results
      return await Promise.all(results.map(async (result) => {
        return await axios.get(result.url)
      }))
    }).then((results) => {
      return results.map((result, index) => {
        return result
      }) as unknown as Pokemon[]
    }).catch((error) => {
      console.log(error)
    })
}

export default getPokemons
