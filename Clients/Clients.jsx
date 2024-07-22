import React, { useRef } from "react";
import "./Clients.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import user1 from "../../assets/images/i/user1.png";
import user2 from "../../assets/images/i/user2.png";
import user3 from "../../assets/images/i/user3.png";
import user4 from "../../assets/images/i/user4.png";

const Clients = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="clients">
      <button className="nextBtn" onClick={slideForward}>
        <FontAwesomeIcon icon={faArrowRight} fontSize="large" />
      </button>
      <button className="backBtn" onClick={slideBackward}>
        <FontAwesomeIcon icon={faArrowLeft} fontSize="large" />
      </button>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} />
                <div>
                  <h3>Jesse Jackson</h3>
                  <span>Brussels, Belgium</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                numquam voluptatum, enim cum, optio itaque aliquid rem
                asperiores, eius tempore magni accusamus quasi? Enim quaerat
                soluta repudiandae iusto, maxime tempora?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} />
                <div>
                  <h3>Jesse Jackson</h3>
                  <span>Brussels, Belgium </span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                numquam voluptatum, enim cum, optio itaque aliquid rem
                asperiores, eius tempore magni accusamus quasi? Enim quaerat
                soluta repudiandae iusto, maxime tempora?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} />
                <div>
                  <h3>Jesse Jackson</h3>
                  <span>Brussels, Belgium</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                numquam voluptatum, enim cum, optio itaque aliquid rem
                asperiores, eius tempore magni accusamus quasi? Enim quaerat
                soluta repudiandae iusto, maxime tempora?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} />
                <div>
                  <h3>Jesse Jackson</h3>
                  <span>Brussels, Belgium</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                numquam voluptatum, enim cum, optio itaque aliquid rem
                asperiores, eius tempore magni accusamus quasi? Enim quaerat
                soluta repudiandae iusto, maxime tempora?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Clients;
