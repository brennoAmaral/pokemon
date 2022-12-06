
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
  stats: [
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

export const setFavorite = (
  pokemonName: string,
  pokemonSprite: string,
  pokemonId: number,
  pokemonType: string,
  pokemonHp: number,
  pokemonAttack: number,
  pokemonEspecialAttack: number,
  pokemonDefense: number,
  pokemonEspecialDefense: number,
  speed: number,
  pokemonWeight: number
): void => {
  const pokemon: Pokemon = {
    name: pokemonName,
    id: pokemonId,
    sprites: { front_default: pokemonSprite },
    types: [{
      type: {
        slot: 1,
        name: pokemonType
      }
    }],
    weight: pokemonWeight,
    stats: [
      {
        base_stat: pokemonHp,
        stat: {
          name: 'hp'
        }
      },
      {
        base_stat: pokemonAttack,
        stat: {
          name: 'attack'
        }
      },
      {
        base_stat: pokemonDefense,
        stat: {
          name: 'defense'
        }
      },
      {
        base_stat: pokemonEspecialAttack,
        stat: {
          name: 'especial-attack'
        }
      },
      {
        base_stat: pokemonEspecialDefense,
        stat: {
          name: 'especial-defense'
        }
      },
      {
        base_stat: speed,
        stat: {
          name: 'speed'
        }
      }
    ]

  }
  const pokeStorage = localStorage.getItem('favorites')
  if (pokeStorage !== null) {
    const arrayPokemon: Pokemon = pokemon
    const newStorage = JSON.parse(pokeStorage)
    newStorage.push(arrayPokemon)
    localStorage.setItem('favorites', JSON.stringify(newStorage))
  } else if (pokeStorage === null) {
    const arrayPokemon: [Pokemon] = [pokemon]
    localStorage.setItem('favorites', JSON.stringify(arrayPokemon))
  }
}

export const setDisfavor = (pokemonId: number): void => {
  const pokeStorage: Pokemon[] = JSON.parse(localStorage.getItem('favorites') as string)
  const newStorage: Pokemon[] = pokeStorage.filter(item => item.id !== pokemonId)
  localStorage.removeItem('favorites')
  if (newStorage.length !== 0) {
    localStorage.setItem('favorites', JSON.stringify(newStorage))
  }
}
