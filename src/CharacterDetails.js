import React, { Component } from 'react'
import './CharacterDetails.css';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";



const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});

export default class CharacterDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            characterInfo : [],
            characterLocation : [],
            characterOrigin: [],
            characterEpisodes: []
        }
    }
    componentDidMount(){
        
        client.query({
            query: gql`
                query{
                    charactersByIds(ids: ${this.props.match.params.id}){
                        id,
                        name,
                        status,
                        species,
                        type,
                        gender,
                        origin{
                            id,
                            name,
                            type,
                            dimension
                        },
                        location {
                            id,
                            name,
                            type,
                            dimension
                        },
                        image,
                        episode{
                            name,
                            air_date
                        },
                        created
                    }
                }
            `
        })
        .then(result => {
            this.setState({
                characterInfo : result.data.charactersByIds["0"],
                characterLocation : result.data.charactersByIds["0"].location,
                characterOrigin : result.data.charactersByIds["0"].origin,
                characterEpisodes : result.data.charactersByIds["0"].episode
            });
            // console.log(characterName);
            // console.log(result.data.charactersByIds[0].location.name);
            console.log(this.state.characterInfo, this.state.characterLocation);
        });
        
       
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="main-body">
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src={this.state.characterInfo.image} alt="Admin" className="rounded-circle" width="150" />
                                            <div className="mt-3">
                                                <h4>{this.state.characterInfo.name}</h4>
                                                <p className="text-secondary mb-1">{this.state.characterInfo.species}</p>
                                                <p className="text-muted font-size-sm">{this.state.characterOrigin.name}, {this.state.characterOrigin.type}, {this.state.characterOrigin.dimension}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <   h6 className="mb-0">ID</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {this.state.characterInfo.id}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <   h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {this.state.characterInfo.name}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <   h6 className="mb-0">Gender</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {this.state.characterInfo.gender}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Species</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {this.state.characterInfo.species}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Type</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {this.state.characterInfo.type == "" ? "None" : this.state.characterInfo.type1}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Status</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {this.state.characterInfo.status}
                                            </div>
                                        </div>  

                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Location</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                Id: {this.state.characterLocation.id}, Name : {this.state.characterLocation.name} , Dimension: {this.state.characterLocation.dimension}, Type: {this.state.characterLocation.type}
                                            </div>
                                        </div>  

                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Origin</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                Id: {this.state.characterOrigin.id}, Name : {this.state.characterOrigin.name} , Dimension: {this.state.characterOrigin.dimension}, Type: {this.state.characterOrigin.type}
                                            </div>
                                        </div>  
                                        
                                        <hr/>
                                        
                                        {this.state.characterEpisodes.map(episode =>
                                            <div className="row"> 
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Episode</h6>
                                                </div>
                                            
                                                <div className="col-sm-9 text-secondary">
                                                    Name: {episode.name}, Air Date : {episode.air_date} 
                                                </div>
                                                <hr/>
                                            </div>    
                                        )}
                                            
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
