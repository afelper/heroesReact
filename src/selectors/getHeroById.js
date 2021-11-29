import { heroes } from "../data/heroes";

//método find para mostrar resultado con Id
export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id)
}