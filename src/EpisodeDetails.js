import React, { Component } from 'react'
import './CharacterDetails.css';
import { gql } from "@apollo/client";
import Client from './Client';


export default class EpisodeDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: 0,
            name: "",
            air_date: "",
            episode: "",
            created: "",
            episodeCharacters: []
        }
    }
    componentDidMount(){
        
        Client.query({
            query: gql`
                query{
                    episodesByIds(ids: ${this.props.match.params.id}){
                        id,
                        name,
                        air_date,
                        episode,
                        characters{
                        name
                        },
                        created
                    }
                }
            `
        })
        .then(result => {
            this.setState({
                id: result.data.episodesByIds[0].id,
                name : result.data.episodesByIds[0].name,
                air_date : result.data.episodesByIds[0].air_date,
                episode : result.data.episodesByIds[0].episode,
                created : result.data.episodesByIds[0].created,
                episodeCharacters : result.data.episodesByIds[0].characters              
            });
            console.log(result);
            
        });
        
       
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="main-body">
                        <div className="row gutters-sm">
                            
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <   h6 className="mb-0">ID</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {this.state.id}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <   h6 className="mb-0">Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {this.state.name}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <   h6 className="mb-0">Episode Number</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {this.state.episode}
                                            </div>
                                        </div>
                                        
                                        
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Air Date</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {this.state.air_date}
                                            </div>
                                        </div>
                                        
                                        
                                        <hr/>
                                        
                                        {this.state.episodeCharacters.map(res =>
                                            <div className="row"> 
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Character:</h6>
                                                </div>
                                            
                                                <div className="col-sm-9 text-secondary">
                                                    Id: {res.id}, Name : {res.name} 
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
