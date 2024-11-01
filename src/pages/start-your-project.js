import React, { useState, useEffect } from "react";
import { LazyIframe } from "react-lazy-media";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const contactFrom = process.env.REACT_APP_CONTACTFROM;

const StartYourProject = () => {
  const [answer, setAnswer] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  useEffect(() => {
    const randomFirstNumber = Math.floor(Math.random() * 20);
    setFirstNumber(randomFirstNumber);
    const randomSecondNumber = Math.floor(Math.random() * 20);
    setSecondNumber(randomSecondNumber);
  }, []);

  const captureAnswer = firstNumber + secondNumber;

  // Handle changes to the math question input
  function handleAnswerChange(event) {
    const value = event.target.value;
    setAnswer(value);
    setSubmitDisabled(value !== captureAnswer.toString()); // Check if the answer is correct
  }

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Kickstart your home automation or commercial technology project in Orlando, Florida. Upload images, tell us your time frame, and which services you need to get started with our team."
        />
        <title>
          Start Your Orlando Home Automation or Commercial Technology Project
        </title>
      </Helmet>

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
                      backgroundImage: "url(/assets/images/start-1.webp)",
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
                        4072283000
                      </p>

                      <i className="fas fa-regular fa-location-dot"></i>

                      <p>
                        <strong>Address</strong>
                        <br />
                        6735 Conroy Windermere Rd, <br />
                        Suite 219, <br />
                        Orlando, Florida 32835
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
                        Work with our team to create your Orlando, Florida home
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
                                  placeholder="First Floor Image Link"
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
                                  placeholder="Second Floor Image Link"
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
                                  placeholder="Third Floor Image Link"
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
                          <div className="math-question">
                            <label htmlFor="math-question">
                              What is {firstNumber} + {secondNumber} ?
                            </label>
                            <input
                              type="number"
                              value={answer}
                              onChange={handleAnswerChange}
                              placeholder="Write Answer"
                            ></input>
                          </div>
                          <p>
                            <input
                              type="submit"
                              defaultValue="Send"
                              disabled={submitDisabled}
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
                  <LazyIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.504532399776!2d-81.47616788457283!3d28.494464397066498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ff626830657%3A0x655de93f0d245402!2sHomeFirst%20Security%20and%20Automation!5e0!3m2!1sen!2sbd!4v1674917196012!5m2!1sen!2sbd" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-inner"></div>
        </article>
      </main>
    </HelmetProvider>
  );
};

export default StartYourProject;
