import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navStyle = {
        padding: '10px',
        marginBottom:'20px',
    };

    const linkStyle ={
        margin: '0 10px',
        textDecoration: 'none',
        color: 'blue',
    };

    return(
        <nav style={navStyle}>
            <Link to="/" style ={linkStyle}>Home</Link>
            <Link to="/about" style ={linkStyle}>About</Link>
            <Link to="/skills" style ={linkStyle}>Skills</Link>
            <Link to="/contact" style ={linkStyle}>Contact</Link>
        </nav>
    );
};

export default Navigation;
