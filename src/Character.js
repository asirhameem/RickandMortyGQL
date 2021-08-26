import React, { Component } from 'react'    
import { Switch, Route, Link } from 'react-router-dom';
import CharacterDetails from './CharacterDetails'

export default class Character extends Component {
    render() {
        return (
            
            <div className="card" id="mainCard">
                <img src={this.props.image} className="card-img-top" alt={this.props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.type}</p>
                    
                    <Link to={`/character/${this.props.id}`} className="btn btn-primary">Go somewhere  </Link>
                    
                </div>
                
            </div>

           
            
        )
    }
}
