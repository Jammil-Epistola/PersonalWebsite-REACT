import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return(
        <div className="title-container">
                <div className="title-content">
                    <h1>Welcome to My Personal Website</h1>
                    <p className ="title-name">My Name is Jammil C. Epistola. I aspire to become a Game Developer</p>
                    <Link to="/About">
                    <button className="btnAbout">About Me</button>
                    </Link>
                </div>
        </div>
    );
};

export default Home;
