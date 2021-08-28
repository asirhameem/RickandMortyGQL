import React, { Component } from 'react'
import './Gaia.css'
import { gql } from "@apollo/client";
import Character from './Character';
import Client from './Client'

  





export default class PlanetGaia extends Component {

    constructor(props){
        super(props);
        this.state = {
            characters : []
        }
    }

    

    componentDidMount(){
    
        Client.query({
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
    
        
        console.log(this.state.characters)
    }
    

    
    render() {
        let characterArray = this.state.characters;
        return (
            <div>
                <div className="characters">
                    {characterArray.map(character=>(
                        <Character key={character.id} id={character.id} name={character.name} image={character.image} type={character.type}  />
                    ))}
                </div>
                
            </div>
        )
    }
}
