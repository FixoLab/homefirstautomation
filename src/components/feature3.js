import React from "react";

const Feature3 = () => {
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
            <a href="https://www.projectautomate.com/smart-security/">
              <i className="fas fa-lock"></i>
              <p> Smart Security</p>
            </a>
          </div>

          <div className="is-layout-flow wp-block-column">
            <a href="https://www.projectautomate.com/wifi-networking-services/">
              <i className="fas fa-wifi"></i>
              <p>Wi-Fi / Networking</p>
            </a>
          </div>
        </div>

        <div className="is-layout-flex wp-container-28 wp-block-columns iconsbox">
          <div className="is-layout-flow wp-block-column">
            <a href="https://www.projectautomate.com/audio-systems/">
              <i className="fas fa-volume-up"></i>
              <p>High Performance Audio</p>
            </a>
          </div>

          <div className="is-layout-flow wp-block-column">
            <a href="https://www.projectautomate.com/commercial-services/">
              <i className="far fa-building"></i>
              <p>Commercial Integration</p>
            </a>
          </div>
        </div>
      </div>

      <div
        className="is-layout-flow wp-block-column homedual2 homeshow3"
        style={{ backgroundPositionX: "-64.925px" }}
      ></div>
    </div>
  );
};

export default Feature3;
