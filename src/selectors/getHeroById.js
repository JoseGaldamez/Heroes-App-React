import { heroes } from '../data/heroes';

export const getHeroById = (id) => {

    const hero = heroes.find(hero => heroes.id === id);

    if (!hero) {
        throw new Error("Id no encontrado");
    }

    return hero[0];
}