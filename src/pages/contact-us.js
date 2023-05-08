import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyIframe } from "react-lazy-media";
import { Helmet, HelmetProvider } from "react-helmet-async";

const contactFrom = process.env.REACT_APP_CONTACTFROM;

const ContactUs = () => {
  const [answer, setAnswer] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  useEffect(() => {
    const randomFirstNumber = Math.floor(Math.random() * 101);
    setFirstNumber(randomFirstNumber);
    const randomSecondNumber = Math.floor(Math.random() * 101);
    setSecondNumber(randomSecondNumber);
  }, []);

  const captureAnswer = firstNumber + secondNumber

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
          content="Get smart home automation, entertainment, or security solutions from our experts in Orlando, Florida with over 100 years of combined experience. Contact us today."
        />
        <title>Smart Home Automation & Security Solutions in Orlando, FL</title>
      </Helmet>

      <div id="site-content" className="contact-us-page">
        <div className="post-inner thin ">
          <div className="entry-content">
            <div>
              <div className="is-layout-flow wp-block-group homevideo servicespages">
                <div className="wp-block-group__inner-container">
                  <video
                    id="video-background"
                    classes="high4kres"
                    autoPlay
                    loop="loop"
                    muted
                    playsInline=""
                    width="300"
                    height="150"
                  >
                    <source
                      src="assets/video/contact-final-video.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="assets/video/contact-final-video.oggtheora.ogv"
                      type="video/ogg"
                    />
                  </video>
                  <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                    <div className="wp-block-group__inner-container">
                      <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                        <div className="wp-block-group__inner-container">
                          <h1>Connect With Our Experts</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="is-layout-flow wp-block-group pagewhitebackground">
                <div className="wp-block-group__inner-container">
                  <div className="is-layout-flex wp-container-7 wp-block-columns pagecolumns">
                    <div className="is-layout-flow wp-block-column contactcolumn1">
                      <i className="fas fa-phone"></i>
                      <p>
                        <strong>Phone:</strong> 407.228.3000
                      </p>
                      <i className="fas fa-regular fa-location-dot"></i>
                      <p>
                        <strong>Address</strong> 6735 Conroy Windermere Rd,
                        Suite 219, Orlando, Florida 32835
                      </p>
                      <i className="fas fa-clock"></i>
                      <p>
                        <strong>Hours:</strong> Monday - Friday 8am-6pm Saturday
                        11am-4pm Sunday Closed
                      </p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <p>
                        With over 100 years of combined experience our smart
                        home and <Link to="/home-theatre">AV company</Link> can
                        help you with all your smart home automation,
                        entertainment, or security needs in the Orlando, Florida
                        area. Use the form below to touch base with one of our
                        specialists and we will contact you back as soon as
                        possible. Want a more personalized conversation? Stop on
                        by our store front or give us a call.
                      </p>
                      <div
                        className="wp-block-spacer"
                        style={{ height: "30px" }}
                        aria-hidden="true"
                      >
                        &nbsp;
                      </div>
                      <div
                        role="form"
                        className="wpcf7"
                        id="wpcf7-f1145-p1042-o1"
                        lang="en-US"
                        dir="ltr"
                      >
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
                                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
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
                                  type="email"
                                  name="email"
                                  defaultValue=""
                                  size="40"
                                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                  placeholder="Email Address"
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
                                  className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                  placeholder="Phone Number"
                                />
                              </span>{" "}
                            </label>
                          </p>
                          <p>
                            <label>
                              <br />
                              <span>
                                <textarea
                                  name="your-message"
                                  cols="40"
                                  rows="10"
                                  className="wpcf7-form-control wpcf7-textarea"
                                  placeholder="How can we help you"
                                ></textarea>
                              </span>{" "}
                            </label>
                          </p>
                         <div className="math-question">
                         <label htmlFor="math-question">
                         What is {firstNumber} + {secondNumber} ?
                          </label>
                          <input
                            type="number"
                            id="math-question"
                            name="math-question"
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
                            />
                            <span className="wpcf7-spinner"></span>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="is-layout-flex wp-container-10 wp-block-columns alignfull servicesdualcontainer mapscontain">
                <div className="is-layout-flow wp-block-column servicesimages bigoldmap">
                  <LazyIframe
                    type="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.504532399776!2d-81.47616788457283!3d28.494464397066498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ff626830657%3A0x655de93f0d245402!2sHomeFirst%20Security%20and%20Automation!5e0!3m2!1sen!2sbd!4v1674917196012!5m2!1sen!2sbd"
                  >
                    <p>Loading...</p>
                  </LazyIframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ContactUs;
