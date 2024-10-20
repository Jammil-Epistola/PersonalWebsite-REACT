import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; 

const About = () => {
  // Create a reference for the section you want to scroll to
  const scrollToRef = useRef(null);

  // Function to handle scroll to the specific section
  const handleScroll = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="about-container d-flex flex-column justify-content-center align-items-center">
        <img 
          src="/photos/profilepic.jpg" 
          alt="Jammil C. Epistola" 
          className="rounded-circle about-photo"
        />
        {/* Make the heading a clickable button */}
        <h1
          className="cursor-pointer"
          onClick={handleScroll}
          style={{ cursor: 'pointer' }} 
        >
          - About Myself -
        </h1>
      </div>


      <div
        ref={scrollToRef} 
        id="about-description"
        className="description-container"
      >
        <h2>Hello! My Name is Jammil C. Epistola </h2>
        <hr className="separator-line" />
        <p>I was born in Al Qassin, KSA and was raised in the Philippines.<br />
        Currently 3rd year in Pamantasan ng Cabuyao,Pursuing a Bachelor of Science in Computer Science.
         Willing to learn any skills related to my profession. My Hobbies are reading Manga or Manhwas and playing video games.
         My dream that I want to achieve is to be a good game developer with a great fanbase for my games (Indie or Company). 
         Currently trying to create my first game as my initial step towards that dream although still planning out for a concept.
        </p>
      </div>
    </div>
  );
};

export default About;

