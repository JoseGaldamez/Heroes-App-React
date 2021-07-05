import React, { useMemo, useState } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import HeroCard from '../heroes/HeroCard';
import getHeroesByName from '../../selectors/getHeroesByName';


const SearchScreen = ({history}) => {


    //getting the query from the url location
    const location = useLocation();
    // queryString is a package from NPM
    // https://www.npmjs.com/package/query-string
    const {q} = queryString.parse(location.search);

    // Init state reading the query or a String empty
    const [search, setSearch] = useState(q || '');

    const heroesFiltered = useMemo(() => getHeroesByName(q || ''), [q] );


    // handle
    const handlerSearch = (e) => {
        e.preventDefault();
        const argument = e.target.search.value;
        history.push('?q='+argument);
    }

    const handlerChangeSearch = (e) => {
        setSearch(e.target.value);
    }



    return (
        <div>
            <h1>Search a hero</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Form</h4>
                    <form onSubmit={handlerSearch}>
                        <input value={search} name="search" onChange={handlerChangeSearch} type="search" placeholder="Find your hero" className="form-control" />

                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr />
                        {
                            heroesFiltered.map(hero => (
                                <HeroCard key={hero.id} hero={hero} />
                            ))
                        }
                        {
                            (q === undefined) && <div className="alert alert-info">Search a hero</div>
                        }
                        {
                            (heroesFiltered.length === 0 && q !== '' && q !== undefined ) && <div className="alert alert-warning">There are no heroes with: {q} </div>
                        }
                         {
                            (heroesFiltered.length === 0 && q === '') && <div className="alert alert-info">Search a hero</div>
                        }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
