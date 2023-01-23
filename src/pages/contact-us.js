import React from "react";

const contactFrom = process.env.REACT_APP_CONTACTFROM;

const ContactUs = () => {
  return (
    <div id="site-content" className="contact-us-page">
      <div className="post-inner thin ">
        <div className="entry-content">
          <div>
            <div className="is-layout-flow wp-block-group homevideo servicespages">
              <div className="wp-block-group__inner-container">
                <video
                  id="video-background"
                  className="high4kres"
                  autoPlay
                  loop="loop"
                  muted
                  width="300"
                  height="150"
                >
                  <source
                    src="assets/video/contact-final-video.mp4"
                    type="video/mp4"
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
                    {" "}
                    <i className="fas fa-phone"></i>
                    <p>
                      <strong>Phone:</strong> (310) 402-4818
                    </p>
                    <i className="fas fa-regular fa-location-dot"></i>
                    <p>
                      <strong>Address</strong> 12794 W Washington Blvd Los
                      Angeles, CA 90066
                    </p>
                    <i className="fas fa-clock"></i>
                    <p>
                      <strong>Hours:</strong> Monday - Friday 8am-6pm Saturday
                      11am-4pm Sunday Closed
                    </p>
                  </div>

                  <div className="is-layout-flow wp-block-column">
                    <p>
                      With over 100 years of combined experience our smart home
                      and{" "}
                      <a href="https://www.projectautomate.com/home-theater/">
                        AV company
                      </a>{" "}
                      can help you with all your smart home automation,
                      entertainment, or security needs in the Los Angeles area.
                      Use the form below to touch base with one of our
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
                        <p>
                          <input type="submit" defaultValue="Send" />
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
                {" "}
                <iframe
                  style={{
                    border: "0px",
                    width: "1712px",
                    height: "1284px",
                  }}
                  tabIndex="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8819133803872!2d-118.43925378478643!3d33.99556678062137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba61a5c07e1f%3A0xed961dabad73c8cd!2s12794%20Washington%20Blvd%2C%20Los%20Angeles%2C%20CA%2090066!5e0!3m2!1sen!2sus!4v1600373688107!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  allowFullScreen="allowFullScreen"
                  aria-hidden="false"
                  title="map"
                ></iframe>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
