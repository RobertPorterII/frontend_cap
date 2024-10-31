import { FaBinoculars } from "react-icons/fa";
// Top page

// ordered list was not showing numbers .. looking at stack overflow turning them to upper roman numerals did but probably was indentation issue

// <ol className=" w-full flex-row flex-wrap p-5 m-5 items-center justify-center text-rose-900 text-2xl" style={{ listStyleType: "upper-roman" }}>
// 

export default function TopPage() {
    return(
        <>
        <h1>The Top 10 Must Watch Anime for all True Fans!</h1>
        <div>
            <ol className=" w-full flex-row flex-wrap items-center justify-center text-center bg-center place-items-center text-rose-950 text-3xl" style={{ listStyleType: "upper-roman" }}>
                <li>BerSerk</li>
                <li>Full Metal Alchemist</li>
                <li>Gantz</li>
                <li>Black Lagoon</li>
                <li>GunGrave</li>
                <li>Bleach</li>
                <li>CowBoy BeBop</li>
                <li>Tokyo Ghoul</li>
                <li>Parasyte: The Maxim</li>
                <li>Attack on Titan</li>
            </ol>
        
        </div>
        <br/>
        <p> <FaBinoculars className="text-amber-500" />The order really does not matter, but they are all must see Shows!! <FaBinoculars className="text-amber-500" /> </p>
        
        </>
    )
}