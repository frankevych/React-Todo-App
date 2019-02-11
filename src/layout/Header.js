import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export const Header = (props) => {
    return (
        <header className="header-style">
            <h1>How To Capture World List</h1>
            <Link className="btn btn-link" to="/">HOME</Link> | 
            <Link className="btn btn-link" to="/about">about</Link>
        </header>
    )
};