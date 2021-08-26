import React, { Component } from 'react'
import './Gaia.css'
import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";
import Character from './Character';


  


const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});


export default class CharacterWithPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            characters:[],
            pageNum: props.match.params.pageNum
        }
    }

    

    componentDidMount(){
    
        client.query({
            query: gql`
                query {
                    characters(page:${this.state.pageNum}) {
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
            <div>
                <div className="characters">
                    {characterArray.map(character=>(
                        <Character key={character.id} id={character.id} name={character.name} image={character.image}  />
                    ))}
                </div>
                
            </div>
        )
    }
}
