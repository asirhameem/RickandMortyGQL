import React, { Component } from 'react'
import { gql } from "@apollo/client";
import client from './Client'
import Episode from './Episode';


export default class EpisodesList extends Component {

    constructor(props){
        super(props);
        this.state = {
            episodesList : []
        }
    }
    
    async componentDidMount(){
        var episodeArr = [];
        for(var i = 1; i <= 41; i++){
            await client.query({
                query: gql`
                    query {
                        episodesByIds(ids:${i}){
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
                episodeArr.push({"id":result.data.episodesByIds[0].id, "episode":result.data.episodesByIds[0].episode, "name": result.data.episodesByIds[0].name})
            });
            console.log(i);
        }
        this.setState({
            episodesList : episodeArr
        });        
        console.log(episodeArr);
    }
 
    render() {
        return (
            <div id="mainList">
                {this.state.episodesList.map(episode=>(
                    <Episode key={episode.id} id={episode.id} episode={episode.episode} name={episode.name}  />
                ))}
            </div>
        )
    }
}
