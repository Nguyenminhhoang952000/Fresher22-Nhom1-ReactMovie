import React from 'react'
import './Circle.scss'
function Circle() {
    return (
        <div>
            <div className="pie animate" style={{"--p":"90","--c":"lightgreen"}}> 90%</div>
        </div>
    )
}
export default Circle