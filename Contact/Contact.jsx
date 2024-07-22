import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ac5f2980-3505-4a40-965a-035dd5a8430c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message {"    "}
          <FontAwesomeIcon
            icon={faMessage}
            margin-left="10px"
            color="#212ea0"
          />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti
          commodi quisquam voluptatibus recusandae saepe necessitatibus animi
          aperiam laboriosam, placeat cupiditate quia cum odio reprehenderit in
          officiis impedit pariatur.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              fontSize="large"
              color="#212ea0"
              className="icon"
            />{" "}
            sample@email.com
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPhone}
              fontSize="large"
              color="#212ea0"
              className="icon"
            />{" "}
            07468732140
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              fontSize="large"
              color="#212ea0"
              className="icon"
            />{" "}
            99 Example Street, Newtown <br></br> TD32 Z1P, UK{" "}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btnSubmit">
            Submit now
            <FontAwesomeIcon icon={faArrowRight} className="submitArrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
