import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Skills = () => {
    
    const skillsContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        textAlign: 'center', 
        backgroundColor: '#E9DCC9',
    };

    return (
        <div style={skillsContainerStyle}>
            <h1>My Skills consist of:</h1>

            {/* Button to trigger collapse */}
            <button 
                className="btn btn-primary my-3" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#skillsCollapse" 
                aria-expanded="false" 
                aria-controls="skillsCollapse"
            >
                Show Skills
            </button>

            <div className="collapse" id="skillsCollapse">
                <ul className="list-group">
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">CSS</li>
                    <li className="list-group-item">Javascript</li>
                    <li className="list-group-item">React</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;