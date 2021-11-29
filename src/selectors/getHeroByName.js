import { heroes } from "../data/heroes";

//método   
export const getHeroesByName = (name = '') => {

    // console.log('getHeroeByName')

    if(name.length===0){
        return [];
    }

    name = name.toLowerCase()
    // si escriben "man" devuelve spiderman ironman etc por includes.
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}