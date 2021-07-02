import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';


function HeroScreen({history}) {

    const {heroId} = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    
    if (!hero) {
        return  <Redirect to="/" />
    }


    // Handle the button goBack
    const handleReturn = () => {

        if(history.length <= 2){
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ '../assets/'+heroId+'.jpeg'} alt={ superhero } className="img-thumbnail" />
            </div>

            <div className="col-8">
                <h3> {superhero} </h3>
                <ul className="list-group list-group-flush">

                    <li className="list-group-item"> Alter ego: {alter_ego} </li>
                    <li className="list-group-item"> Publicado: {publisher} </li>
                    <li className="list-group-item"> Primera aparición: {first_appearance} </li>
                </ul>

                <h5>Personajes</h5>
                <p> {characters} </p>

                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Volver
                </button>
            </div>
        </div>
    )
}

export default HeroScreen;
