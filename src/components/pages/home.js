import React from "react";
import Feature from "../feature";
import Feature2 from "../feature2";
import Feature3 from "../feature3";
import Hero from "../hero";

const Home = () => {
  return (
    <div id="site-content">
      <div className="post-inner thin ">
        <div className="entry-content">
          <Hero />
          <Feature />
          <Feature2 title="Earning Your Trust" />
          <Feature3 />
        </div>
      </div>
    </div>
  );
};

export default Home;
