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
        // for the line break use flex-grow to span the entire screen and border-t-8 to thicken the line up
        <>
        
        <hr className="flex-grow border-t-8 border-emerald-800"/>
        <footer className="flex w-full flex-row flex-wrap items-center justify-center">
        <hr/>
        <a href="https://github.com/RobertPorterII"target="_blank" rel="noopener noreferrer" className="icon p-2 m-2 text-rose-800"><FiGithub />Codes</a>

        <h3 className="flex justify-between 20p font-bold text-fuchsia-950"> &copy; Beta Version: Follow for Future Updates  </h3>
        
        <a href="https://www.linkedin.com/in/robert-porter-ii-3a6ab2320" target="_blank" rel="noopener noreferrer" className="icon p-2 m-2 text-rose-800"><FiLinkedin /> Connect with Me!</a>

        </footer>
        
        </>
    )
}