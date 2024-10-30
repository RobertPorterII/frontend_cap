
import { Link, useParams, useNavigate } from "react-router-dom";

import { MdOutlineDeleteForever } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import PropTypes from 'prop-types';
import React, {useState, useEffect} from "react";
import axios from "axios";

/*The content of the Blog posts here to be sent to the Blog file for rendering
here the frontend and backend will meet as the State variables will be used to showcase the CRUD on the Live Delpoyed App */

export default function Content({blogs, setBlogs}) {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);

    // useSTate variables for the BLog update state will showcase the put method on frontend

    const [blog, setBlog] = useState(null);
    const [updateFormData, setUpdateFormData] = useState({});
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    // fetching the blog by id

    useEffect(() => {
        const fetchBlog = async() => {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs/${params.id}`);
            const data = await res.json();
            console.log(data);

            setBlog(data.blog); // current blog
            setUpdateFormData(data.blog); // form data for updating blog
            
        }
        fetchBlog()
    }, [params.id]);

    if(!blog) {
        return (
            <main>
                <h3>Blog Not Here Buddy-Boy!</h3>
                <Link to='/blogs'>Return to Blogs</Link>
            </main>
        );

    }

    // Delete Method  on frontend
    const handleDelete = async() => {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs${params.id}`, {
            method:'DELETE',
        });
        console.log(res);
        
        if (res.ok) {
            setBlogs(prevBlog => prevBlog.filter(p =>
                p._id !== params.id))
                navigate('/blogs');
        }
        
    };
    const handleChange = (e) => {
        setUpdateFormData({
           ...updateFormData,
           [e.target.name]: e.target.value 
        })
    }

    // the Put Method on frontend

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs/${params.id}`, {
                headers : {
                    'Content-Type': "application/json"
                },
                method: 'PUT',
                body: JSON.stringify(updateFormData)
            });
            // SHould receive the updated Blog
            const data = await res.json();
            console.log(data);
            // updated the current Blog State
            
            
        } catch (error) {
            
        }
    }
 
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
