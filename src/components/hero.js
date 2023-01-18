import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="is-layout-flow wp-block-group homevideo">
        <div className="wp-block-group__inner-container">
          <figure
            className="wp-block-image size-large homephone"
            style={{ opacity: "0.9999" }}
          >
            <img
              width="470"
              height="938"
              src="images/phoneoverlay4.png"
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
            data-origwidth="300"
            data-origheight="150"
          >
            <source src="images/newhome.mp4" type="video/mp4" />
          </video>

          <div className="is-layout-flow wp-block-group homeintrotop centerintro">
            <div className="wp-block-group__inner-container">
              <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                <div className="wp-block-group__inner-container">
                  <h1>Luxury Smart Home Systems</h1>

                  <div className="homenumber" style={{ display: "none" }}>
                    (310)-402-4818
                  </div>

                  <div className="wp-block-image control4small homecedialogo">
                    <figure className="alignleft size-large is-resized">
                      <Link to="#">
                        <img
                          src="images/cediacit.png"
                          alt="hero"
                          className="wp-image-3276"
                          width="159"
                          height="159"
                        />
                      </Link>
                    </figure>
                  </div>

                  <p>
                    <Link to="#">Learn More</Link>
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
