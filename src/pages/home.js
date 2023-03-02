import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Hero = React.lazy(() => import("../components/hero"));
const Feature = React.lazy(() => import("../components/feature"));
const Feature2 = React.lazy(() => import("../components/feature2"));
const Feature3 = React.lazy(() => import("../components/feature3"));

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
  // const leftBotPosition = -(windowTop * 0.075) + 100;
  const rightPosition = 100 - windowTop * 0.025 + "%";

  return (
    <HelmetProvider>
     <Helmet>
        <meta name="description" content="Homefirst is your trusted home automation provider in Orlando, offering cutting-edge smart home, security, and home theater solutions for all levels of project complexity. Get top-notch services from the experts today!" />
        <title>Professional Home Automation Services in Orlando | Homefirst</title>
      </Helmet>
    <div id="site-content">
      <div className="post-inner thin ">
        <div className="entry-content">
          <Hero />
          <Feature leftPosition={leftPosition} />
          <Feature2 title="Earning Your Trust" />
          <Feature3 leftPosition={rightPosition} />
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default Home;
