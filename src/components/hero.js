import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const element = document.querySelector(".homephone");
      element.style.opacity =
        ((element.offsetHeight - scrollTop) / element.offsetHeight) * 0.9999;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="is-layout-flow wp-block-group homevideo hero">
        <div className="wp-block-group__inner-container">
          <figure className="wp-block-image size-large homephone">
            <img
              width="470"
              height="938"
              src="assets/images/phoneoverlay4.png"
              alt="hero"
              className="wp-image-1922"
            />
          </figure>

          <video
            id="video-background"
            autoPlay
            muted
            loop="loop"
            width="300"
            height="150"
            playsInline=""
          >
            <source src="assets/video/newhome.mp4" type="video/mp4" />
          </video>
          <div className="is-layout-flow wp-block-group homeintrotop centerintro">
            <div className="wp-block-group__inner-container">
              <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible">
                <div className="wp-block-group__inner-container">
                  <h1>Luxury Smart Home Systems</h1>

                  <div className="homenumber" style={{ display: "none" }}>
                    (310)-402-4818
                  </div>
                  <div className="wp-block-image control4small homecedialogo">
                    <figure className="alignleft size-large is-resized">
                      <Link aria-label="hero image" to="#">
                        <img
                          src="assets/images/cediacit.png"
                          alt="hero"
                          className="wp-image-3276"
                          width="159"
                          height="159"
                        />
                      </Link>
                    </figure>
                  </div>
                  <p>
                    <a aria-label="Scroll down" href="#3">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
