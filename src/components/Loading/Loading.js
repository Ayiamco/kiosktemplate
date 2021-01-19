import React from 'react'
import "./Loading.css"

export default function Loading() {
    return (
        <div>
            <div id="Loading-animation">
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            <p id="lds-p">Loading...</p>
        </div>
        
            
    )
}
