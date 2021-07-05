import React from 'react';

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


import Navbar from '../components/ui/Navbar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DCScreen from '../components/dc/DCScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import HeroesAllScreen from '../components/heroes/HeroesAllScreen';
import SearchScreen from '../components/search/SearchScreen';


function DashboardRouters() {
    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <Switch>
                    <Route exact path="/" component={ HeroesAllScreen } />
                    <Route path="/marvel" component={ MarvelScreen } />
                    <Route path="/hero/:heroId" component={ HeroScreen } />
                    <Route path="/dc" component={ DCScreen } />
                    <Route path="/search" component={SearchScreen} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRouters
