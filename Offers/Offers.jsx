import React from "react";
import "./offers.css";
import hydrogen_plant from "../../assets/images/i/hydrogenplant.png";
import nuclear_plant from "../../assets/images/i/nuclearplant.png";
import solar_panels from "../../assets/images/i/solarpanels.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faGavel } from "@fortawesome/free-solid-svg-icons";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer">
        <img src={hydrogen_plant} alt="" />
        <div className="caption">
          <FontAwesomeIcon icon={faCommentDots} className="img" />
          <p>Advice</p>
        </div>
      </div>
      <div className="offer">
        <img src={nuclear_plant} alt="" />
        <div className="caption">
          <FontAwesomeIcon icon={faScaleBalanced} className="img" />
          <p>Conciliation</p>
        </div>
      </div>
      <div className="offer">
        <img src={solar_panels} alt="" />
        <div className="caption">
          <FontAwesomeIcon icon={faGavel} className="img" />
          <p>Court</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
