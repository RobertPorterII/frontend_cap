import { Link } from "react-router-dom"

// footer .. the &copy makes the little copyright icon

export default function Footer() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center">
        <hr />
        <h3 className="flex justify-between 20p font-bold text-fuchsia-950"> &copy; Beta Version: All rights reserved </h3>
        </footer>
        
    )
}