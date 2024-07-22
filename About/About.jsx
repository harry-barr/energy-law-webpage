import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import forest from "../../assets/images/i/forest.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <img src={forest} alt="pic_of_forest" className="aboutImg" />
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="playIcon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="aboutRight">
        <h3>About Us</h3>
        <h2>Lorem, ipsum dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
          labore quas soluta velit non saepe totam impedit quisquam dicta quasi
          minima vitae fugiat, quis sapiente eius delectus fuga? Velit, nemo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
          labore quas soluta velit non saepe totam impedit quisquam dicta quasi
          minima vitae fugiat, quis sapiente eius delectus fuga? Velit, nemo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
          labore quas soluta velit non saepe totam impedit quisquam dicta quasi
          minima vitae fugiat, quis sapiente eius delectus fuga? Velit, nemo!
        </p>
      </div>
    </div>
  );
};

export default About;
