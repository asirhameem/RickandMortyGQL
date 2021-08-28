import React, { Component } from 'react'
import { gql } from "@apollo/client";
import client from './Client'
import Location from './Location'
import './location.css'

export default class LocationsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            locationsList : []
        }
    }
    
    async componentDidMount(){
        var locationsArr = [];
        for(var i = 1; i <= 108; i++){
            await client.query({
                query: gql`
                    query {
                        locationsByIds(ids:${i}){
                            id,
                            name
                        }
                    }
                `
            })
            .then(result => {
                locationsArr.push({"id":result.data.locationsByIds[0].id, "name": result.data.locationsByIds[0].name})
            });
        }
        this.setState({
            locationsList : locationsArr
        });        
    }
 
    render() {
        return (
            <div id="mainList">
                {this.state.locationsList.map(location=>(
                    <Location key={location.id} id={location.id} name={location.name}  />
                ))}
            </div>
        )
    }
}
