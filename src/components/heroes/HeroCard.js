import React from 'react';
import { Link } from 'react-router-dom';


const HeroCard = ( {hero} ) => {

    return (
        <div className="card lg-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ './assets/'+hero.id+'.jpeg' } className="card-img" alt={ './assets/'+hero.id+'.jpeg' } />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {hero.superhero }
                        </h5>

                        <p className="card-text">
                            { 
                                hero.alter_ego 
                            }
                        </p>

                        <p className="card-text">
                            <small className="text-muted"> {hero.first_appearance} </small>
                        </p>

                        <Link to={ './hero/'+hero.id } >
                            Más...
                        </Link>                        

                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeroCard;
