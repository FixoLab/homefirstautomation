import React from "react";
import { Link } from "react-router-dom";

const StartJourney = () => {
  return (
    <div
      className="is-layout-flex wp-container-27 wp-block-columns alignfull servicesdualcontainer"
      id="4"
    >
      <div className="is-layout-flow wp-block-column servicesimages">
        <figure
          className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <img
            width="2396"
            height="1600"
            src="assets/images/haslam17.jpg"
            alt=""
            className="wp-image-848"
          />
        </figure>
      </div>

      <div className="is-layout-flow wp-block-column servicesimages">
        <div
          className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="wp-block-group__inner-container">
            <h2>LETS START YOUR JOURNEY</h2>

            <p className="pointsmade homeauto">
              Want to see what we can do for you? Contact us today and we can go
              over all your options. Whether price is a factor or not, we can
              work with you to make your dreams come true, our give you ideas to
              create your dreams.
            </p>
            <p className="pointsmade homeauto">
              <Link to="/contact">Contact Us</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
