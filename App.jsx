import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Offers from "./Components/Offers/Offers";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Office from "./Components/Office/Office";
import Clients from "./Components/Clients/Clients";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Do" />
        <Offers />
        <About setPlayState={setPlayState} />
        <Title title="Our Office" />
        <Office />
        <Title title="What Our Clients Say" />
        <Clients />
        <Title title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
