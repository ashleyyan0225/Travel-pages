import React from "react"
import Travel from "./components/Travel"
import data from "./data"

export default function App() {
    const TravelData = data.map((item)=> {
        return (
           <Travel 
           key={item.title}
            {...item} 
            />
        )
    })
    
    
    return (
        <div>
            <nav className="navbar">
                <h5 className="nav-name">my travel journal.</h5>
            </nav>
            <main>
                {TravelData}
            </main>
        </div>
    )
}