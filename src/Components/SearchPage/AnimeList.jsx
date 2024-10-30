/* eslint-disable react/prop-types */
import React from "react";
import { AnimeInfo } from "./Animeinfo";

import './Anime.css'
// going to make the cards for anime to print its data that i fetched...so many times, according to Jikan docs i can pull the images from just grabbing the img url from dev tools. Not entirely sure why it might be switching to arrow functions or importing my search bar to main app jsx but map is working here.. still getting prop error but the code works

export const AnimeList = ({ animelist, setAnimeInfo, handleList}) => {
    
    return (
      <>
        {
          animelist ? (
            
            animelist.map((anime, index) => {
              return (
                <div className="card" key={index} onClick={()=>setAnimeInfo(anime)}>
                  <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                  <div className="anime-info">
                    <h4>{anime.title}</h4>
                    <div className="overlay" onClick={()=>handleList(anime)}>
                        <h4>{anime.title_japanese}</h4>
                        <h3>SYNOPSIS</h3>
                        <div className="synopsis">
                          <p>{anime.synopsis}</p>
                        </div>
                        
                    </div>
  
                  </div>
                </div>
              )
            })
          ) : "Not Found"
        }
  
      </>
    )
  }