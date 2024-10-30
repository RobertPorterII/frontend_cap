import React from "react";
import {useState, useEffect} from 'react'
import { AnimeInfo } from "./Animeinfo";
import { AnimeList } from "./AnimeList";
import './Anime.css'

export default function SearchPage() {
    // Usestate variables for Search engine will be empty string so the search engineis blank on render
const [search, setSearch] = useState("Berserk")
const [animeData, SetAnimeData] = useState()
const [animeInfo, setAnimeInfo] = useState();

    // fetching Anime data for search page
const fetchAnimeData = async() => {
    // forgot the backticks thats y it was making api cal but not running search
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=10`)
    const resData = await res.json();
    // console.log(resData);  === there for testing now adding teh useSTate variables with it
    SetAnimeData(resData.data)
  }
  useEffect(() => {
    fetchAnimeData()
  }, [search])


    return (
        
        <>
        <header>
            <h1>The <strong>A</strong>ni<strong>me </strong>Look<strong> Up</strong></h1>
        </header>
          <div>
            
            
            <div className='content-warp'>
              {/* <Sidebar topHeroes={topHeroes} /> */}
              <main>
              <div className="main-head">
              <form className='search-box'>
              <input type="search" placeholder="Look them up!" required 
                         onChange={(e) => setSearch(e.target.value)}/>   
    
              </form>
              </div>
              <div className='animeInfo'>
              {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
              </div>
              {/* <AnimeInfo />  explaining the Search engine and how it works*/}
              <div className="anime-row">
                <p className="text-heading">Our search engine begins as soon as you start  typing, just scroll on down and look thru our findings once u found the Anime you want; give a quick click and scrolled back to the top for more details on it. When your done just hit Enter in search Box to refresh page and Search for something new</p>
                <div className="row">
                    <AnimeList 
                    animelist={animeData}
                    setAnimeInfo={setAnimeInfo}
                    />
                </div>
                </div>
    
              </main>
            </div>
          
          <div className='container'>
    
            <div className='animeInfo'>
    
            </div>
            <div className='anime-row'>
              <div className='row'>
    
              </div>
            </div>
          </div>
          </div>
          
        </>
      );
    }