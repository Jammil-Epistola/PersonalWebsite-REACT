import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Skills.css';  // Import the new CSS file

const Skills = () => {
    const [collapseOpen, setCollapseOpen] = useState(false);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
    };

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);  // Move slider to the clicked section
    };

    return (
        <div className="skills-container">
            {/* Top Section */}
            <div className={`top-section ${collapseOpen ? 'collapsed' : ''}`}>
                <h1>My Skills consist of:</h1>

                {/* Button to trigger collapse */}
                <button 
                    className="btn my-3 skills-toggle-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#skillsCollapse" 
                    aria-expanded="false" 
                    aria-controls="skillsCollapse"
                    onClick={() => setCollapseOpen(!collapseOpen)}  // Toggle collapse state
                >
                    {collapseOpen ? 'Hide Skills' : 'Show Skills'}
                </button>

                <div className={`collapse ${collapseOpen ? 'show' : ''}`} id="skillsCollapse">
                    <ul className="list-group skills-list">
                        <li className="list-group-item" onClick={() => goToSlide(0)}>
                            HTML
                        </li>
                        <li className="list-group-item" onClick={() => goToSlide(1)}>
                            CSS
                        </li>
                        <li className="list-group-item" onClick={() => goToSlide(2)}>
                            JavaScript
                        </li>
                        <li className="list-group-item" onClick={() => goToSlide(3)}>
                            React
                        </li>
                    </ul>
                </div>
            </div>

            {/* Slider Section */}
            <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                    <div className="slider-item1">
                        <h2>HTML</h2>
                        <p>My proficiecy in HTML is that I am quite Competent on creating HTMLs. Started learning when I was curious watching 
                            my cousin code a website and somehow enjoyed the process of it.</p>
                    </div>
                    <div className="slider-item2">
                        <h2>CSS</h2>
                        <p>My proficiecy in CSS is quite average in my opininon. I am still learning about designs and color pallete. I do try and experiment different kind of styles 
                            and still learning on how to use CSS frameworks and trying to implement it in my projects.
                        </p>
                    </div>
                    <div className="slider-item3">
                        <h2>JavaScript</h2>
                        <p>In Javascript, I could say I am still a beginner in terms of proficiecy. I still learning more about JavaScript like currently learning on how to use Node.js 
                            which has REACT.
                        </p>
                    </div>
                    <div className="slider-item4">
                        <h2>React</h2>
                        <p>I would say my newly acquired skill. Was enjoying the process of learning and experiment with different components that it has and learning to use bootstrap as well.
                            I also learned the different imports that bootstrap has, an example would be this slider called a React slick carousel that I recently learned!
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Skills;






