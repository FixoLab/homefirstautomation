import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
const contactFrom = process.env.REACT_APP_CONTACTFROM;

const Careers = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta
          name="description"
          content="We're looking for creative people to join our team and help shape the future of technology. If you're passionate about making a difference, Join HomeFirst and make a difference! "
        />
        <title>
        Join an Innovative Team at HomeFirst | Shape Technology and Create Change
        </title>
      </Helmet>
      <div className="uk-section-secondary uk-position-relative carears-hero">
        <div
          style={{
            backgroundImage: "url(assets/images/careers-hero.webp)",
          }}
          uk-img=""
          className="uk-background-norepeat uk-background-center-center uk-section uk-section-xlarge"
          uk-parallax="bgx: -120,100; bgy: 0,0; easing: 1"
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.58)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="tm-grid-expand uk-grid-margin uk-grid" uk-grid="">
              <div className="uk-width-2-3@m"></div>

              <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m uk-flex-first@m uk-first-column">
                <div className="uk-panel uk-width-1-1">
                  <div className="uk-divider-small uk-text-left"></div>
                  <h2 className="uk-h1 uk-margin-remove-top uk-width-xlarge uk-text-left">
                    Careers
                  </h2>
                  <div className="uk-panel uk-text-lead uk-margin uk-width-xlarge uk-text-left">
                    <p>
                      Are you passionate about technology? In our thriving smart
                      home business, we believe taking great care of our clients
                      is the most important way to set our company apart.
                    </p>
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
                        <picture className="el-image uk-transition-opaque">
                          <source
                            srcSet="assets/images/careers-team-01-mini.webp"
                            media="(max-width: 600px)"
                          />
                          <img
                            width="1000"
                            height="1393"
                            alt="home automation careers"
                            src="assets/images/careers-team-01.webp"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <picture className="el-image uk-transition-opaque">
                          <source
                            srcSet="assets/images/careers-team-02-mini.webp"
                            media="(max-width: 600px)"
                          />
                          <img
                            width="1000"
                            height="667"
                            alt="home automation careers team 1"
                            src="assets/images/careers-team-02.webp"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <picture className="el-image uk-transition-opaque">
                          <source
                            srcSet="assets/images/careers-team-03-mini.webp"
                            media="(max-width: 600px)"
                          />
                          <img
                            width="1000"
                            height="667"
                            alt="home automation careers team 2"
                            src="assets/images/careers-team-03.webp"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <picture className="el-image uk-transition-opaque">
                          <source
                            srcSet="assets/images/careers-team-04-mini.webp"
                            media="(max-width: 600px)"
                          />
                          <img
                            width="1000"
                            height="606"
                            alt="home automation careers team 3"
                            src="assets/images/careers-team-04.webp"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <picture className="el-image uk-transition-opaque">
                          <source
                            srcSet="assets/images/careers-team-05-mini.webp"
                            media="(max-width: 600px)"
                          />
                          <img
                            width="1000"
                            height="1333"
                            alt="home automation careers team 4"
                            src="assets/images/careers-team-05.webp"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <picture className="el-image uk-transition-opaque">
                          <source
                            srcSet="assets/images/careers-team-06-mini.webp"
                            media="(max-width: 600px)"
                          />
                          <img
                            width="1000"
                            height="667"
                            alt="home automation careers team 5"
                            src="assets/images/careers-team-06.webp"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin uk-first-column">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <picture className="el-image uk-transition-opaque">
                          <source
                            srcSet="assets/images/careers-team-07-mini.webp"
                            media="(max-width: 600px)"
                          />
                          <img
                            width="1000"
                            height="667"
                            alt="home automation careers team 6"
                            src="assets/images/careers-team-07.webp"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <picture className="el-image uk-transition-opaque">
                          <source
                            srcSet="assets/images/careers-team-08-mini.webp"
                            media="(max-width: 600px)"
                          />
                          <img
                            width="1000"
                            height="667"
                            alt="home automation careers team 7"
                            src="assets/images/careers-team-08.webp"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="uk-grid-margin">
                    <div className="uk-light">
                      <div className="el-item uk-inline-clip">
                        <picture className="el-image uk-transition-opaque">
                          <source
                            srcSet="assets/images/careers-team-09-mini.webp"
                            media="(max-width: 600px)"
                          />
                          <img
                            width="1000"
                            height="667"
                            alt="home automation careers team 8"
                            src="assets/images/careers-team-09.webp"
                          />
                        </picture>
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
                <picture className="el-image">
                  <source
                    srcSet="assets/images/about-01-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    width="1600"
                    height="1065"
                    alt="smart home technology careers"
                    src="assets/images/about-01.webp"
                  />
                </picture>
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
    </HelmetProvider>
  );
};

export default Careers;
