import axios from 'axios';

export type Pokemon = {
    id: number | undefined
    name: string
    type: string
    sprite: string
};

let pokemon: Pokemon = {
    id: undefined,
    name: '',
    type: '',
    sprite: ''
};
let pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = (pokeName: string): Pokemon => {
    axios.get(pokeApi + pokeName)
    .then((response) => {
        console.log(response.data)
        pokemon.id = response.data.id;
        pokemon.name = response.data.name;
        pokemon.type = response.data.types[0].type.name;
        pokemon.sprite = response.data.sprites.front_default
        console.log(pokemon);
    });
    return (pokemon);
};

export default getPokemon;
