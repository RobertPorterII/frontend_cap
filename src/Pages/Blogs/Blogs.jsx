import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Content from "../../Components/Content.jsx"
import axios from "axios"
import './blogStyle.css'
// // Blog Page rendering ...ie connecting back and front end visually


// export default function Blogs() {

//     const [Blog, setBlogs] = useState([])
//     const [Loading, setLoading] = useState(false)
// // fetching blogs from backend database with axios and localhost link
//     useEffect(()=>{
//         setLoading(true)
//         axios.get('http://localhost:3737/Blogs').then((res) =>{
//             setBlogs(res.data.data)
//             setLoading(false)
//         }).catch((error) =>  {
//             console.log(error);
//         })
//     },[])
//     return (
//         <>
//          {/* Blog Home */}
//             <section> </section>
//             {
//                 Loading ? (console.log("Loading")) : (
//                     <>
//                     {/* Fetching all the Blog Posts */}
//                 <section> 
//                 <Content />
//                 {
//                     Blog.map((Item) => (
//                         <h4>{Item._id}</h4>
//                     ))
//                 }
//                 </section>

//                     </>

//                 )
//             }

            
//         </>
//     )
// }

// BLogs are not rending on page the coding example i was using as reference and guide was in typescipt and using unfamiliar methods i reached my limit in refactoring trying methods from class now

export default function BlogPage({blogs, setBlogs}) {
    
    const [formData, setFromData] = useState({
        title:"",
        imgUrl: "",
        intro: "", 
        description:"", 

    });
    
    const handleChange = (e) => {
        setFromData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            //make a Post request to create a Blog 
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs`, {
                headers: {
                    "Content-Type" : "application/json",
                },
                method: "Post",
                body: JSON.stringify(formData),
            });

            // parse data to json

            const data = await res.json();

            console.log(data.blog);

            // adding the newly created blog to the blogs array
            setBlogs([data.blog, ...blogs]);
            
        } catch (error){
            console.error(error);
            
        }
    };

    return (
        // form for teh blogs and its input fields
        <>
            <h1>Blogs HopeFully</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        Title:
                        <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}/>
                    </label>

                    <label htmlFor="imgUrl">
                        Image:
                        <input
                        type="text"
                        name="imgUrl"
                        value={formData.imgUrl}
                        onChange={handleChange}/>
                    </label>
                    <label htmlFor="intro">
                        Intro:
                        <input
                        type="text"
                        name="intro"
                        value={formData.intro}
                        onChange={handleChange}/>
                    </label>
                    <label htmlFor="description">
                        Description:
                        <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}/>
                    </label>
                    
                    <input type="submit" value="Create New Blog" />

                </form>
            </div>

        <div>
            {blogs && blogs.map((blog) => (
                <Link key={blog._id} to={`/blogs/${blog._id}`}>
                    <h2>{blog.title}</h2>
                    <p>{blog.imgUrl}</p>
                    <p>{blog.intro}</p>
                    <p>{blog.description}</p>
                    
                </Link>
            ))}
        </div>


        </>
    )
}

BlogPage.propTypes = {
    blogs: PropTypes.array,
    setBlogs: PropTypes.func
}