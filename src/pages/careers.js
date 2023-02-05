import React from "react";
import { Link } from "react-router-dom";
const contactFrom = process.env.REACT_APP_CONTACTFROM;

const Careers = () => {
  return (
    <>
      <div id="site-content">
        <div className="is-layout-flow wp-block-group homevideo servicespages commercial-automantion-video">
          <div
            className="wp-block-group__inner-container indoor-living-background career-background"
            style={{
              backgroundImage: "url(assets/images/careers-hero.webp)",
            }}
          >
            <div className="overlay2" />
            <div className="uk-container uk-container-large uk-position-relative">
              <div className="tm-grid-expand uk-grid-margin uk-grid" uk-grid="">
                <div className="uk-width-2-3@m"></div>

                <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m uk-flex-first@m uk-first-column">
                  <div className="uk-panel uk-width-1-1">
                    <h1>
                      Careers
                    </h1>
                    <div >
                      <p className="minigray">
                        Are you passionate about technology? In our thriving
                        smart home business, we believe taking great care of our
                        clients is the most important way to set our company
                        apart.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section-default uk-section careers-team">
        <div className="uk-container uk-container-large">
          <div className="tm-grid-expand uk-grid-margin uk-grid" uk-grid="">
            <div className="uk-width-1-3@m uk-first-column">
              <h1 className="careers-team-title"> Join Our Team </h1>
              <div className="uk-panel uk-margin">
                <p className="minigray">
                  At HomeFirst, we’re passionate about shaping technology that
                  responds to our customers’ needs. If you like new ideas,
                  challenges, and working with a tight-knit group, we want to
                  hear from you. We’re always looking for dedicated, creative
                  people to make HomeFirst even better.
                </p>
              </div>
              <h3> Available Positions </h3>
              <ul className="uk-list">
                <li className="el-item">
                  <div className="el-content uk-panel uk-h6">
                    <Link
                      to="#"
                      className="el-link uk-margin-remove-last-child"
                    >
                      <p>Audio/Video/Home Automation Technician</p>
                    </Link>
                  </div>
                </li>
              </ul>
              <div className="uk-margin">
                <a className="button__primary" href="#jobs" uk-scroll="">
                  Apply Now
                </a>
              </div>
            </div>

            <div className="uk-width-2-3@m">
              <div className="uk-margin uk-text-center">
                <div
                  className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid uk-flex-top uk-flex-wrap-top"
                  uk-grid="masonry: 1;"
                >
                  <div className="uk-first-column">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <img
                          src="assets/images/careers-team-01.webp"
                          width="1000"
                          height="1393"
                          alt="Careers Team"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <img
                          src="assets/images/careers-team-02.webp"
                          width="1000"
                          height="667"
                          alt="Careers Team"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <img
                          src="assets/images/careers-team-03.webp"
                          width="1000"
                          height="667"
                          alt="Careers Team"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <img
                          src="assets/images/careers-team-04.webp"
                          width="1000"
                          height="606"
                          alt="Careers Team"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <img
                          src="assets/images/careers-team-05.webp"
                          width="1000"
                          height="1333"
                          alt="Careers Team"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <img
                          src="assets/images/careers-team-06.webp"
                          width="1000"
                          height="667"
                          alt="Careers Team"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <img
                          src="assets/images/careers-team-07.webp"
                          width="1000"
                          height="667"
                          alt="Careers Team"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <img
                          src="assets/images/careers-team-08.webp"
                          width="1000"
                          height="667"
                          alt="Careers Team"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <img
                          src="assets/images/careers-team-09.webp"
                          width="1000"
                          height="668"
                          alt="Careers Team"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="jobs" className="uk-section-muted uk-section apply-now">
        <div className="uk-container uk-container-large">
          <div
            className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
            uk-grid=""
          >
            <div className="uk-width-1-1@m uk-first-column">
              <div className="uk-card uk-card-body uk-margin-remove-first-child uk-margin">
                <h3>Apply Now</h3>
                <div className="el-content uk-panel uk-margin-top">
                  <div
                    id="cf_6"
                    className="convertforms cf cf-img-above cf-form-bottom cf-success-hideform cf-hasLabels cf-labelpos-top cf-init"
                  >
                    <form method="post" action={contactFrom}>
                      <label htmlFor="name">
                        Name*
                        <input type="text" id="name" name="name" required />
                      </label>
                      <label htmlFor="name">
                        Email*
                        <input type="email" id="email" name="email" required />
                      </label>
                      <label htmlFor="phone">
                        Phone Number (optional)
                        <input type="text" id="phone" name="phone" />
                      </label>
                      <label htmlFor="position">
                        Position Applying For *
                        <input type="text" id="position" name="position" />
                      </label>
                      <label htmlFor="cover-letter">
                        Cover Letter *
                        <textarea name="cover-letter" rows="3"></textarea>
                      </label>
                      <label htmlFor="resume">
                        Upload Resume Link
                        <input type="text" id="resume" name="resume" />
                      </label>
                      <button type="submit" className="button__primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section-secondary uk-section uk-section-large about-us">
        <div className="uk-container uk-container-large">
          <div className="tm-grid-expand uk-grid-margin uk-grid" uk-grid="">
            <div className="uk-width-1-2@m uk-first-column">
              <div className="uk-margin">
                <img
                  src="assets/images/about-01.webp"
                  width="1600"
                  height="1065"
                  className="el-image"
                  alt="Careers Team"
                />
              </div>
            </div>

            <div className="uk-width-1-2@m">
              <h1> About Us </h1>
              <div className="uk-panel uk-margin">
                <p>
                  We are a full-service residential and commercial custom
                  electronics design and integration company. Our smart home
                  technology solutions make your home safe, elegant, fun and
                  easy to use. Businesses experience increased productivity,
                  enhanced environments for employees and customers, and simple
                  control. Our team is comprised of world-class experts in av
                  calibration, <Link to="#">low-voltage contractors</Link>, and
                  every field whose number one priority is to provide the best
                  products and services to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
