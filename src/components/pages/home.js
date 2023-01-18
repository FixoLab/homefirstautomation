import React, { useEffect, useState } from "react";
import Feature from "../feature";
import Feature2 from "../feature2";
import Feature3 from "../feature3";
import Hero from "../hero";

const Home = () => {
  const [windowTop, setWindowTop] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setWindowTop(window.pageYOffset);
    }
    window.addEventListener("load", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const leftPosition = -(windowTop * 0.075);
  const leftbotPosition = -(windowTop * 0.075) + 100;
  // const rightPosition = 100 - windowTop * 0.025 + "%";

  return (
    <div id="site-content">
      <div className="post-inner thin ">
        <div className="entry-content">
          <Hero leftbotPosition={leftbotPosition} />
          <Feature leftPosition={leftPosition} />
          <Feature2 title="Earning Your Trust" />
          <Feature3 leftPosition={leftPosition} />
        </div>
      </div>
    </div>
  );
};

export default Home;
