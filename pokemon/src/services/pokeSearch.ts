import axios from 'axios';

type pokemon = {
    id: number
    name: string
};

let pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = async (pokeName: string) => {
    axios.get(pokeApi+pokeName)
    .then((response)=>{
        console.log(response)
    });
};

export default getPokemon;
