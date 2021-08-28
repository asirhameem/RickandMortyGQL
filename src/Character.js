import React, { Component } from 'react'    
import { Link } from 'react-router-dom';
import './Character.css'

export default class Character extends Component {
    render() {
        return (
            
            <div className="card" id="mainCard">
                <img src={this.props.image} className="card-img-top" alt={this.props.name}/>
                <div className="card-body">
                    <h6 className="card-title">{this.props.name}</h6>
                    
                    <Link to={`/character/${this.props.id}`} className="btn btn-primary">About Me</Link>
                    
                </div>
                
            </div>
 
        )
    }
}
