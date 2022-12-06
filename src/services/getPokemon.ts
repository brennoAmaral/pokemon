// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
import axios, { Axios } from 'axios'

interface Response<R> {
  data: { results: R[] }
}
interface Pokemon {
  id: number | undefined
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
  }]
}

const getPokemon = async (name: string): Promise<Pokemon[]> => {
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  return await axios.get<any, Response<Pokemon>>(`https://pokeapi.co/api/v2/pokemon/${name}?`)
    .then(async (response) => {
      return [response]
    }).then((results) => {
      return results as unknown as Pokemon[]
    })
    .catch((error) => {
      let errors = error.response.status
      if (errors === 404) {
        alert('non-existent information')
        return []
      }
      console.log('erroooooo', error.response.status)
    })
}
export default getPokemon
