import React from "react";
import "./Office.css";
import office1 from "../../assets/images/i/office1.png";
import office2 from "../../assets/images/i/office2.png";
import office3 from "../../assets/images/i/office3.png";
import office4 from "../../assets/images/i/office4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Office = () => {
  return (
    <div className="office">
      <div className="gallery">
        <img src={office1} alt="office" className="galleryImg" />
        <img src={office2} alt="office" className="galleryImg" />
        <img src={office3} alt="office" className="galleryImg" />
        <img src={office4} alt="office" className="galleryImg" />
      </div>
      <button className="btnDark">
        See more here <FontAwesomeIcon icon={faArrowRight} className="icon" />
      </button>
    </div>
  );
};

export default Office;
