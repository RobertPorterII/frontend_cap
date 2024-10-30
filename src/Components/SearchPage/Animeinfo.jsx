import React from "react"
import { AnimeList } from "./AnimeList"
import SearchPage from "./Search"
import './Anime.css'
// This component is the data render after u search and click on 1 of the Anime

// Adding props to Content function for on the OnSubmit and a value to input
// from  Jikan docs have to use props and there query values i couldnt get the  data loop and map to work in previous code version so im just going list them out its easier

export const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration}=props.animeInfo
    return (
        <>
        <div className="anime-content">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <div className="info">
                <h3>#Rank: {rank}</h3>
                <h3>#Score: {score}</h3>
                <h3>#Popularity: {popularity}</h3><br />
                <h4>Members:{members}</h4>
                <br/>
                <h4>Source:{source}</h4>
                <br/>
                <h4>Duration:{duration}</h4>
                <br/>
                <h4>Status:{status}</h4>
                <br/>
                <h4>Rating:{rating}</h4>
                <hr/>
                <br/>
            </div>
        </div>
    </>
  )
}