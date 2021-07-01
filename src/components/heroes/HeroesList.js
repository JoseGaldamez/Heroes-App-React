import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'


function HeroesList({publisher}) {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <>
            <ul>
                {
                    heroes.map(hero => (
                        <li key={hero.id} >
                            {hero.superhero}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default HeroesList
