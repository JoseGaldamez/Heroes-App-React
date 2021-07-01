import React from 'react';
import HeroesList from '../heroes/HeroesList';

function MarvelScreen() {
    return (
        <>
            <h1>Marvel</h1>
            <hr /> 
            <HeroesList publisher="Marvel" />
        </>
    )
}

export default MarvelScreen;
