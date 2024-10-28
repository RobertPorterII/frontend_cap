import { Link } from "react-router-dom";

// For the NavBar wrap the App in main.jsx in Browser Router from react -router dom or it wont render on screen or work at all
export default function NavBar() {
    return (
        <nav>
            <h1 className="text-5xl text-blue-500 font-serif" >Anime Blog</h1>
            <div className="text-black justify-between flex hover:cursor-pointer hover:border-r-yellow-500 hover:bg-emerald-950">

            <Link className=" text-purple-500" to="/">Home</Link>
            <Link className="text-red-500" to="/top">Top Anime</Link>
            <Link className=" text-purple-500" to="/search">Search </Link>
            <Link className="text-red-500" to="/blogs">Blogs</Link>
            </div>
            
        </nav>
    )
}