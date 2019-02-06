import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={{ fontWeight: "700" }}>How To Capture World List</h1>
            <Link className="btn btn-link" to="/">HOME</Link> | 
             <Link className="btn btn-link" to="/about">What i've learned</Link>
        </header>
    )

}
const headerStyle= {
    background: "#F4F6F6",
    color: "#AED6F1",
    textAlign: "center",
    padding: "10px",
    borderRadius: "4px",
}

export default Header