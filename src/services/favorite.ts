import { Pokemon } from './getPokemon'

export const favorite = (pokemon: Pokemon) => {
  let pokeArr
  const pokeStorage = localStorage.getItem('favorites')
  console.log(pokeStorage)
  if (pokeStorage != null) {
    // pokeArr = Object.keys(pokeStorage).map(i=> JSON.parse(pokeStorage[Number(i)]));
    pokeArr = JSON.parse(pokeStorage)
    pokeArr.forEach((index, keys) => {
      console.log(index.name)
      if (index.name === pokemon.name) {
        console.log('esntrou aqui')
        return
      } else {
        pokeArr.push(pokemon)
        localStorage.setItem('favorites', JSON.stringify(pokeArr))
      };
    })
  } else {
    pokeArr = [pokemon]
    localStorage.setItem('favorites', JSON.stringify(pokeArr))
    console.log(`${pokemon.name} favoritado com sucesso`)
  };
}
