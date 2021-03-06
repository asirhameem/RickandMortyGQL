import React from 'react'
import PlanetGaia from './PlanetGaia'
import Navbar from './Navbar'
import CharacterDetails from './CharacterDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Pagination from './Pagination'
import CharacterWithPage from './CharactersWithPage'
import LocationsList from './LocationsList'
import LocationDetails from './LocationDetails'
import EpisodesList from './EpisodesList'
import EpisodeDetails from './EpisodeDetails'



export default function Planet() {
    return (
        <div>
            <BrowserRouter>
                
                
                <Navbar/>
                <Pagination/>
                <Switch>  
                    <Route exact path="/" render={(routeProps) => <PlanetGaia {...routeProps} /> } /> 
                    <Route exact path="/page/:pageNum" render={(routeProps) => <CharacterWithPage {...routeProps} /> } />      
                    <Route exact path="/character/:id" render={(routeProps) => <CharacterDetails {...routeProps} /> } />    
                    <Route exact path="/locations" render={(routeProps)=> <LocationsList {...routeProps}/>} />  
                    <Route exact path="/location/:id" render={(routeProps)=> <LocationDetails {...routeProps}/>} />  
                    <Route exact path="/episodes" render={(routeProps)=> <EpisodesList {...routeProps}/>} />  
                    <Route exact path="/episode/:id" render={(routeProps)=> <EpisodeDetails {...routeProps}/>} />  
                </Switch>

            </BrowserRouter>
                
        </div>
    )
}
