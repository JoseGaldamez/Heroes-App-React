import React, { useMemo } from 'react'
import getAllHeroes from '../../selectors/getAllHeroes'

import HeroCard from './HeroCard';


function HeroesAllScreen() {

    
    const heroes = useMemo(() => getAllHeroes(), []);
    

    return (
        <>
            <h1>Todos</h1>
            <hr />
            <div className="card-columns">
                {
                    heroes.map( hero => (
                        <HeroCard key={hero.id} hero={hero} />
                    ) )
                }
            </div>
        </>
    )
}

export default HeroesAllScreen
