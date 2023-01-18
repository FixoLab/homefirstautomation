import React from "react";
import { Link } from "react-router-dom";

const Feature3 = ({ leftPosition }) => {
  return (
    <div className="is-layout-flex wp-container-31 wp-block-columns alignfull homedualcontainer bottomdual">
      <div className="is-layout-flow wp-block-column homedual2">
        <h2>Smart Situational Solutions</h2>

        <p className="minigray">
          Our services include everything you need for a secure and smart house
          environment for you and your family: Custom home theater design,
          high-tech security, surveillance systems, audio &amp; video, lighting
          control, motorized shades, networking &amp; Wi-Fi.
        </p>

        <div className="is-layout-flex wp-container-25 wp-block-columns iconsbox">
          <div className="is-layout-flow wp-block-column">
            <Link to="#">
              <i className="fas fa-lock"></i>
              <p> Smart Security</p>
            </Link>
          </div>

          <div className="is-layout-flow wp-block-column">
            <Link to="#">
              <i className="fas fa-wifi"></i>
              <p>Wi-Fi / Networking</p>
            </Link>
          </div>
        </div>

        <div className="is-layout-flex wp-container-28 wp-block-columns iconsbox">
          <div className="is-layout-flow wp-block-column">
            <Link to="#">
              <i className="fas fa-volume-up"></i>
              <p>High Performance Audio</p>
            </Link>
          </div>

          <div className="is-layout-flow wp-block-column">
            <Link to="#">
              <i className="far fa-building"></i>
              <p>Commercial Integration</p>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="is-layout-flow wp-block-column homedual2 homeshow3"
        style={{ backgroundPositionX: leftPosition }}
      ></div>
    </div>
  );
};

export default Feature3;
