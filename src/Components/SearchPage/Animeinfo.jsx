import React from "react"
import { AnimeList } from "./AnimeList"
import SearchPage from "./Search"
import './Anime.css'
// This component is the data render after u search and click on 1 of the Anime

// Adding props to Content function for on the OnSubmit and a value to input
// from  Jikan docs have to use props and there query values i couldnt get the  data loop and map to work in previous code version so im just going list them out its easier
// cant do genres is in array and that cant be passed done as prop

// HAHA i got the video to work embed url just pass down like the imgs props
// still have auto play issue ..but working is working cant be picky now autoPlay="false", autoPlay={false}, autoplay="false" all not working
export const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration,genres,episodes,year,synopsis,trailer:{embed_url}}=props.animeInfo
    return (
        <>
        <div className="anime-content bg-orange-200">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <iframe autoPlay="false" width="853"
      height="480" src={embed_url} allowFullScreen allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" alt=""/>
            <div className="info">
                <h3>#Rank: {rank}</h3>
                <h3>#Score: {score}</h3>
                <h3>#Popularity: {popularity}</h3><br />
                {/* <h4>Members: {members}</h4> */}
                <h4>Source: {source}</h4>
                <br/>
                <h4>Duration: {duration}</h4>
                <br/>
                <h4>Episodes: {episodes}</h4>
                <br/>
                <h4>Status: {status}</h4>
                <br/>
                <h4>Release Year : {year}</h4>
                <br/>
                <h4 className="text-violet-800">Synopsis : {synopsis}</h4>
                <br/>
                <h4>Rating: {rating}</h4>
                <hr/>
                <br/>

            </div>
        </div>
    </>
  )
}