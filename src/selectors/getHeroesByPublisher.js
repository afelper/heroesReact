import { heroes } from "../data/heroes";

//método para filtrar resultados con nombre  publisher
export const getHeroesByPublisher = (publisher) => {
    return heroes.filter(hero => hero.publisher === publisher)
}