import { Link } from "react-router-dom";

const Feature = ({ leftPosition }) => {
  return (
    <div
      className="is-layout-flex wp-container-13 wp-block-columns alignfull homedualcontainer"
      id="3"
    >
      <div className="is-layout-flow wp-block-column homedual2">
        <h2>Smart System Technology</h2>

        <p className="minigray">
          Homefirst is a trusted <Link to="/about-us">home automation company</Link> in Orlando, Florida
          that provides cutting-edge smart home and security solutions. What’s
          more? We provide everything in between with exclusive offerings of
          services from high-end sophisticated home environments that demand
          better than best, to entry level home theater projects.
        </p>

        <div className="is-layout-flex wp-container-7 wp-block-columns iconsbox">
          <div className="is-layout-flow wp-block-column">
            <Link to="/smart-home-automation">
              <i className="fas fa-tablet"></i>
              <p> Smart Home Automation</p>
            </Link>
          </div>

          <div className="is-layout-flow wp-block-column">
            <Link to="/home-theatre">
              <i className="fas fa-video"></i>
              <p> Home Theater</p>
            </Link>
          </div>
        </div>

        <div className="is-layout-flex wp-container-10 wp-block-columns iconsbox">
          <div className="is-layout-flow wp-block-column">
            <Link to="/lighting-systems">
              <i className="far fa-lightbulb"></i>
              <p>Lighting control</p>
            </Link>
          </div>

          <div className="is-layout-flow wp-block-column">
            <Link to="/audio-systems">
              <i className="fas fa-music"></i>
              <p> Multi-Room Music</p>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="is-layout-flow wp-block-column homedual2 homelighting"
        style={{ backgroundPositionX: leftPosition }}
      ></div>
    </div>
  );
};

export default Feature;
