import React from "react";
import { Link } from "react-router-dom";

const contactFrom = process.env.REACT_APP_CONTACTFROM;

const StartYourProject = () => {
  return (
    <>
      <main id="site-content" className="start-your-project" role="main">
        <article
          className="post-1884 page type-page status-publish hentry odd"
          id="post-1884"
        >
          <div className="post-inner thin ">
            <div className="entry-content">
              <div className="is-layout-flow wp-block-group homevideo servicespages">
                <div className="wp-block-group__inner-container">
                  <div
                    className="halfimagetop"
                    style={{
                      backgroundImage: "url(/assets/images/start-1.jpg)",
                    }}
                  ></div>

                  <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                    <div className="wp-block-group__inner-container">
                      <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                        <div className="wp-block-group__inner-container">
                          <h1>Start Your Project</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="is-layout-flow wp-block-group pagewhitebackground">
                <div className="wp-block-group__inner-container start-project">
                  <div className="is-layout-flex wp-container-7 wp-block-columns pagecolumns">
                    <div className="is-layout-flow wp-block-column contactcolumn1">
                      <i className="fas fa-phone"></i>

                      <p>
                        <strong>Phone:</strong>
                        <br />
                        (310) 402-4818
                      </p>

                      <i className="fas fa-map-marker-alt"></i>

                      <p>
                        <strong>Address</strong>
                        <br />
                        12794 W Washington Blvd
                        <br />
                        Los Angeles, CA 90066
                      </p>

                      <i className="fas fa-clock"></i>

                      <p>
                        <strong>Hours:</strong>
                        <br />
                        Monday – Friday
                        <br />
                        8am-6pm
                        <br />
                        <br />
                        Saturday
                        <br />
                        11am-4pm
                        <br />
                        <br />
                        Sunday
                        <br />
                        Closed
                      </p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <p>
                        Work with our team to create your Los Angeles home
                        automation system or commercial technology project by
                        using the form below. Upload your images, tell us your
                        time frame, what services you may need, and more.
                      </p>

                      <p>
                        Want a more personalized conversation? Give us a call
                        and one of our{" "}
                        <Link to="/smart-home-automation">
                          smart home installation
                        </Link>{" "}
                        specialists will help you reach your goals.
                      </p>

                      <div
                        style={{ height: "30px" }}
                        aria-hidden="true"
                        className="wp-block-spacer"
                      ></div>

                      <div
                        role="form"
                        className="wpcf7"
                        id="wpcf7-f1885-p1884-o1"
                        lang="en-US"
                        dir="ltr"
                      >
                        <div className="screen-reader-response">
                          <p
                            role="status"
                            aria-live="polite"
                            aria-atomic="true"
                          ></p>{" "}
                          <ul></ul>
                        </div>
                        <form
                          action={contactFrom}
                          method="post"
                          className="wpcf7-form init"
                        >
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="name"
                                  defaultValue=""
                                  size="40"
                                  placeholder="Full Name"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="addressLine1"
                                  defaultValue=""
                                  size="40"
                                  placeholder="Address Line 1"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="addressLine2"
                                  defaultValue=""
                                  size="40"
                                  className="wpcf7-form-control wpcf7-text"
                                  aria-invalid="false"
                                  placeholder="Address Line 2"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="addressCity"
                                  defaultValue=""
                                  size="40"
                                  placeholder="City"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="addressState"
                                  defaultValue=""
                                  size="40"
                                  placeholder="State"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="addressZip"
                                  defaultValue=""
                                  size="40"
                                  placeholder="Zip"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="tel"
                                  name="phone"
                                  defaultValue=""
                                  size="40"
                                  placeholder="Phone Number"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="email"
                                  name="email"
                                  defaultValue=""
                                  size="40"
                                  placeholder="Email Address"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <select
                                  name="projectPhaseStage"
                                  className="wpcf7-form-control wpcf7-select"
                                  aria-invalid="false"
                                >
                                  <option defaultValue="Current Project Phase">
                                    Current Project Phase
                                  </option>
                                  <option defaultValue="Planning">
                                    Planning
                                  </option>
                                  <option defaultValue="Retro-Fit (Existing House)">
                                    Retro-Fit (Existing House)
                                  </option>
                                  <option defaultValue="New Construction">
                                    New Construction
                                  </option>
                                </select>
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <select
                                  name="projectStartDate"
                                  className="wpcf7-form-control wpcf7-select"
                                  aria-invalid="false"
                                >
                                  <option defaultValue="Projected Start Date">
                                    Projected Start Date
                                  </option>
                                  <option defaultValue="Immediately">
                                    Immediately
                                  </option>
                                  <option defaultValue="1-2 Weeks">
                                    1-2 Weeks
                                  </option>
                                  <option defaultValue="1-2 Months">
                                    1-2 Months
                                  </option>
                                  <option defaultValue="2+ Months">
                                    2+ Months
                                  </option>
                                </select>
                              </span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <select
                                  name="projectFocus"
                                  className="wpcf7-form-control wpcf7-select"
                                  aria-invalid="false"
                                >
                                  <option defaultValue="Primary Project Interest">
                                    Primary Project Interest
                                  </option>
                                  <option defaultValue="Home Theater">
                                    Home Theater
                                  </option>
                                  <option defaultValue="Home Automation">
                                    Home Automation
                                  </option>
                                  <option defaultValue="Distributed Audio">
                                    Distributed Audio
                                  </option>
                                  <option defaultValue="Distributed Video">
                                    Distributed Video
                                  </option>
                                  <option defaultValue="CCTV Surveillance">
                                    CCTV Surveillance
                                  </option>
                                  <option defaultValue="Alarm">Alarm</option>
                                  <option defaultValue="Motorized Shades/Blinds">
                                    Motorized Shades/Blinds
                                  </option>
                                  <option defaultValue="Access Control">
                                    Access Control
                                  </option>
                                  <option defaultValue="Phone System">
                                    Phone System
                                  </option>
                                  <option defaultValue="Ethernet Network">
                                    Ethernet Network
                                  </option>
                                  <option defaultValue="Lighting Systems">
                                    Lighting Systems
                                  </option>
                                </select>
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="firstImage"
                                  defaultValue=""
                                  size="40"
                                  placeholder="First Image Link"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="secondImage"
                                  defaultValue=""
                                  size="40"
                                  placeholder="Second Image Link"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="thirdImage"
                                  defaultValue=""
                                  size="40"
                                  placeholder="Third Image Link"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <input
                                  type="text"
                                  name="otherPlansImage"
                                  defaultValue=""
                                  size="40"
                                  placeholder="Other Plans Image Link"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <input
                              type="submit"
                              defaultValue="Send"
                              className="wpcf7-form-control has-spinner wpcf7-submit"
                            />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="is-layout-flex wp-container-10 wp-block-columns alignfull servicesdualcontainer mapscontain">
                <div className="is-layout-flow wp-block-column servicesimages bigoldmap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8819133803872!2d-118.43925378478643!3d33.99556678062137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba61a5c07e1f%3A0xed961dabad73c8cd!2s12794%20Washington%20Blvd%2C%20Los%20Angeles%2C%20CA%2090066!5e0!3m2!1sen!2sus!4v1600373688107!5m2!1sen!2sus"
                    style={{
                      border: "0px",
                      width: "1902px",
                      height: "1426.5px",
                    }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    width="600"
                    height="450"
                    title="map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="section-inner"></div>
        </article>
      </main>
    </>
  );
};

export default StartYourProject;
