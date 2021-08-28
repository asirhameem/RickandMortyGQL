import React, { Component } from 'react'    
import { Link } from 'react-router-dom';
import './location.css'

export default class Location extends Component {
    render() {
        return (
            
    
            <div id="locationCard" className="card w-25">
                <div className="card-body">
                    <h5 className="card-title">{this.props.id}</h5>
                    <h5 className="card-title">{this.props.name}</h5>
                    <Link className="btn btn-primary" to={`/location/${this.props.id}`} >About</Link>
                </div>
            </div>    
         
            
        )
    }
}