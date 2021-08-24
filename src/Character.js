import React, { Component } from 'react'

export default class Character extends Component {
    render() {
        return (
        
            <div className="card" id="mainCard">
                <img src={this.props.image} className="card-img-top" alt={this.props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.type}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
        )
    }
}
