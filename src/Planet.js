import React from 'react'
import PlanetGaia from './PlanetGaia'
import Navbar from './Navbar'
import CharacterDetails from './CharacterDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Planet() {
    return (
        <div>
            <BrowserRouter>
                
                
                <Navbar/>
                
                <Switch>  
                        <Route exact path="/" render={(routeProps) => <PlanetGaia {...routeProps} /> } />      
                        <Route exact path="/character/:id" render={(routeProps) => <CharacterDetails {...routeProps} /> } />      
                </Switch>

            </BrowserRouter>
                
        </div>
    )
}
