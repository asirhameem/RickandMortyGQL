import React, { Component } from 'react'
import './CharacterDetails.css';
import { gql } from "@apollo/client";
import Client from './Client';


export default class LocationDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: 0,
            name: "",
            dimension: "",
            locationResidents: []
        }
    }
    componentDidMount(){
        
        Client.query({
            query: gql`
                query{
                    locationsByIds(ids: ${this.props.match.params.id}){
                        id,
                        name,
                        type,
                        dimension,
                        residents {
                            id,
                            name
                        }                        
                        created
                    }
                }
            `
        })
        .then(result => {
            this.setState({
                name : result.data.locationsByIds[0].name,
                dimension : result.data.locationsByIds[0].dimension,
                type : result.data.locationsByIds[0].type,
                id : result.data.locationsByIds[0].id,
                locationResidents : result.data.locationsByIds[0].residents              
            });
            console.log(result);
            console.log(result.data.locationsByIds[0].residents);
            
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
                                            <   h6 className="mb-0">Dimension</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {this.state.dimension == null ? "Null" : this.state.dimension}
                                            </div>
                                        </div>
                                        
                                        
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Type</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {this.state.type === "" ? "None" : this.state.type}
                                            </div>
                                        </div>
                                        
                                        
                                        <hr/>
                                        
                                        {this.state.locationResidents.map(res =>
                                            <div className="row"> 
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Residents:</h6>
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
