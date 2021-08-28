import React, { Component } from 'react'    
import { Link } from 'react-router-dom';
import './episode.css'

export default class Episode extends Component {
    render() {
        return (
            
    
            <div id="episodeCard" className="card w-25">
                <div className="card-body">
                    <h5 className="card-title">{this.props.id}</h5>
                    <h5 className="card-title">{this.props.episode}</h5>
                    <h5 className="card-title">{this.props.name}</h5>
                    <Link className="btn btn-primary" to={`/episode/${this.props.id}`} >About</Link>
                </div>
            </div>    
         
            
        )
    }
}