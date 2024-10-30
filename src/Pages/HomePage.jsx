import React from "react";
import '../Components/Videos/Videostyle.css'
// for the your vids
import YoutubeEmbed from "../Components/Videos/YoutubeEmbed.jsx";

// Home page 


export default function HomePage() {

    return (
        <main className="bg-[url('/assets/AnimeBackdrop.png')]">
            <h1 className="text-3x1 text-blue-800 font-mono ">The Place where Anime Fandom Lives!!</h1>
            <br/>
            <br/>
            <br/>
            <p className="text-green-500 font-sans font-semibold p-4 m-3">Rather you are on the look out for a new Anime to watch. Or  
            Give your opinion on what you already a have seen. This Anime Fan Blog is the right place for you!</p>

            <div>
                <h2 className="text-green-700 flex items-center justify-center">
                    From Humble Begins comes the Mightiest forces!
                </h2>
                <YoutubeEmbed embedId="JzUoThKGxT8?si=pfwRHKuGc_5SuNV8" />
            </div>
            <div>
            <h2 className=" text-green-700 flex items-center justify-center">Anime Is Better... Because it is!</h2>
            <YoutubeEmbed embedId="79JpLhYfk10?si=Nm1h0lbtOgGvszcK" />
            </div>
            <div>
           
            <hr/>
            <h2 className="text-green-700 flex items-center justify-center">Anime Is Very Important..In fact its vital!</h2>
            <YoutubeEmbed embedId="CNSu7dyODCA?si=W21sKdoPcyuc0jvW" />
            </div>
            

        </main>
    )
};