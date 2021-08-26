import React, { useState, Component } from 'react'
import './Gaia.css'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
import Character from './Character';
import { Route, Switch } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

  


const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});


export default class PlanetGaia extends Component {

    constructor(props){
        super(props);
        this.state = {
            characters : []
        }
    }

    async componentDidMount(){
        
        await client.query({
            query: gql`
                query {
                    characters {
                        results {
                            id
                            name
                            image
                            type
                        }
                    }
                }
            `
        })
        .then(result => {
            this.setState({
                characters : result.data.characters.results
            });
        });
       
    }
    

    
    render() {
        let characterArray = this.state.characters;
        return (
            <>
                <div className="characters">
                    {characterArray.map(character=>(
                        <Character key={character.id} id={character.id} name={character.name} image={character.image} type={character.type}  />
                    ))}
                </div>
                
            </>
        )
    }
}
