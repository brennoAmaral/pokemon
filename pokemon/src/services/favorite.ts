import {Pokemon} from "./pokeSearch";

export const favorite = (pokemon: Pokemon) => {
    let pokeArr;
    let pokeStorage = localStorage.getItem('favorites');
    console.log(pokeStorage);
    if (pokeStorage != null){
        console.log('entrou aqui', pokeStorage);
        //pokeArr = Object.keys(pokeStorage).map(i=> JSON.parse(pokeStorage[Number(i)]));
        pokeArr = JSON.parse(pokeStorage);
        console.log('teste',pokeArr)
        pokeArr.push(pokemon);
        console.log('entrou aqui',pokemon, pokeArr);
        localStorage.setItem('favorites', JSON.stringify(pokeArr));
        console.log('favorites: '+pokeStorage);
    }else{
        pokeArr = [pokemon];
        localStorage.setItem('favorites', JSON.stringify(pokeArr));
        console.log(`${pokemon.name} favoritado com sucesso`);
    };
};