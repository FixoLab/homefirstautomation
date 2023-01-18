import React from "react";

const Feature = () => {
  return (
    <div
      className="is-layout-flex wp-container-13 wp-block-columns alignfull homedualcontainer"
      id="3"
    >
      <div className="is-layout-flow wp-block-column homedual2">
        <h2>Smart System Technology</h2>

        <p className="minigray">
          PROJECT: automate is a trusted{" "}
          <a href="https://www.projectautomate.com/about-us/">
            home automation company
          </a>{" "}
          in Los Angeles that provides cutting-edge smart home and security
          solutions. What’s more? We provide everything in between with
          exclusive offerings of services from high-end sophisticated home
          environments that demand better than best, to entry level home theater
          projects.
        </p>

        <div className="is-layout-flex wp-container-7 wp-block-columns iconsbox">
          <div className="is-layout-flow wp-block-column">
            <a href="https://www.projectautomate.com/smart-home-automation/">
              <i className="fas fa-tablet"></i>
              <p> Smart Home Automation</p>
            </a>
          </div>

          <div className="is-layout-flow wp-block-column">
            <a href="https://www.projectautomate.com/#">
              <i className="fas fa-video"></i>
              <p> Home Theater</p>
            </a>
          </div>
        </div>

        <div className="is-layout-flex wp-container-10 wp-block-columns iconsbox">
          <div className="is-layout-flow wp-block-column">
            <a href="https://www.projectautomate.com/lighting-systems/">
              <i className="far fa-lightbulb"></i>
              <p>Lighting control</p>
            </a>
          </div>

          <div className="is-layout-flow wp-block-column">
            <a href="https://www.projectautomate.com/audio-systems/">
              <i className="fas fa-music"></i>
              <p> Multi-Room Music</p>
            </a>
          </div>
        </div>
      </div>

      <div
        className="is-layout-flow wp-block-column homedual2 homelighting"
        style={{ backgroundPositionX: "-79.35px" }}
      ></div>
    </div>
  );
};

export default Feature;
