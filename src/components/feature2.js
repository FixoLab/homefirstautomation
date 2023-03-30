import React from "react";
import { Link } from "react-router-dom";

const Feature2 = ({ title }) => {
  return (
    <div
      className="is-layout-flex wp-block-columns alignfull servicesdualcontainer homedualcontainer homedualmid"
      id="2"
    >
      <div className="is-layout-flow wp-block-column homedual2 duallefttext">
        <h2>{title}</h2>
        <p className="minigray leftsidetextspace">
          As a turnkey provider to our clients, we excel with an exemplary
          reputation for getting the job done right the first time. We will work
          with you and your designer, architect, and builder, from concept to
          completion, with full integration of your IoT technologies designed to
          make your dream home a reality.
        </p>
        <div className="is-layout-flex wp-container-16 wp-block-columns iconsbox">
          <div className="is-layout-flow wp-block-column">
            <i className="far fa-user"></i>
            <p>Discrete</p>
            <p className="hideonshow">
              We give clients the upmost confidentiality for whatever need they
              have.
            </p>
          </div>
          <div className="is-layout-flow wp-block-column">
            <i className="fas fa-brain"></i>
            <p>Experienced</p>
            <p className="hideonshow">
              With over 20 years experience there is no project we can tackle.
            </p>
          </div>
        </div>
        <div className="is-layout-flex wp-container-19 wp-block-columns iconsbox">
          <div className="is-layout-flow wp-block-column">
            <i className="fas fa-headset"></i>
            <p>24/7 Support</p>
            <p className="hideonshow">
              Join one of our many support packages for around the clock
              support.
            </p>
          </div>
          <div className="is-layout-flow wp-block-column">
            <i className="fas fa-certificate"></i>
            <p>Certified</p>
            <p className="hideonshow">
              We are always training our staff on the latest certifications and
              safety precautions.
            </p>
          </div>
        </div>
        <p className="learnmorebutton">
          <Link to="/contact-us">Contact us</Link>
        </p>
      </div>
      <div className="is-layout-flow wp-block-column servicesimages sidevideoleft">

        <video
          id="video-background"
          className="customsized"
          autoPlay
          muted
          loop="loop"
          width="300"
          height="150"
          playsInline=""
          loading="lazy"
        >
          <source src="assets/video/middlearea4.mp4" type="video/mp4" />
          <source src="assets/video/middlearea4.oggtheora.ogv" type="video/ogg" />
        </video>
      </div>
    </div>
  );
};

export default Feature2;
