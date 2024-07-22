import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure a brighter future in a greener world.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore vero
          commodi quod maxime iure a laboriosam rem adipisci nostrum, itaque
          atque fugit consequuntur libero officiis illo cum pariatur eos.
          Excepturi.
        </p>
        <button className="btn">
          Explore options{" "}
          <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
