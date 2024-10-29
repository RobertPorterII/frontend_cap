import { Link } from "react-router-dom"
import React, {useState, useEffect} from "react";
import axios from "axios";

// The content of the Blog posts here to be sent to the Blog file for rendering

export default function Content() {
    const [Blog, setBlogs] = useState([])
    const [Loading, setLoading] = useState(false)
// fetching blogs from backend database with axios and localhost link
    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:3737/Blogs')
    },[])
    return (
        <> 
        <div>
            <div>
            <h4>All Blogs</h4>
            </div>
            <Link to={"/"} target='_blank'>Add New Blog</Link>

        </div>
            {/* <h1>Blog Content</h1>  testing*/}
        </>
    )
}
