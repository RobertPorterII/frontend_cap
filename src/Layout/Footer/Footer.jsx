import { Link } from "react-router-dom";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { FiGithub, FiLinkedin } from "react-icons/fi"

// footer .. the &copy makes the little copyright icon
 // will try for SOcial links later currently breaking code
//  const socialLinks = [
//     {
//         icon: <FiLinkedin />,
//         url:"www.linkedin.com/in/robert-porter-ii-3a6ab2320"
//     }
//  ]
// Never mind i found a code that can work

export default function Footer() {
    
    return (
        
        <>
        

        <footer className="flex w-full flex-row flex-wrap items-center justify-center">
        <hr />
        <h3 className="flex justify-between 20p font-bold text-fuchsia-950"> &copy; Beta Version: All rights reserved  </h3>
        
        <a href="https://www.linkedin.com/in/robert-porter-ii-3a6ab2320" target="_blank" rel="noopener noreferrer" className="icon p-2 m-2"><FiLinkedin /> Connect with Me!</a>

        </footer>
        
        </>
    )
}