import React from "react";
import { Link } from "react-router-dom";

const FooterContact = () => {
  return (
    <div className="footer-widgets column-one grid-item">
      <div className="widget widget_text">
        <div className="widget-content">
          <div className="textwidget">
            <div className="contactarea">
              <div className="contactareabox">
                <h3>Let’s Get Started</h3>
                <p>
                  <span className="minifoot">
                    Contact us for a free consultation
                  </span>
                  <br />
                </p>
                <div
                  role="form"
                  className="wpcf7"
                  id="wpcf7-f378-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                  </div>
                  <form
                    action="#"
                    method="post"
                    className="wpcf7-form init"
                    noValidate="noValidate"
                    data-status="init"
                  >
                    <p>
                      <label>
                        <br />
                        <span className="wpcf7-form-control-wrap your-name">
                          <input
                            type="text"
                            name="your-name"
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Full Name"
                          />
                        </span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <br />
                        <span className="wpcf7-form-control-wrap your-email">
                          <input
                            type="email"
                            name="your-email"
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Email Address"
                          />
                        </span>{" "}
                      </label>
                    </p>
                    <p>
                      <label>
                        <br />
                        <span className="wpcf7-form-control-wrap tel-905">
                          <input
                            type="tel"
                            name="tel-905"
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                            aria-invalid="false"
                            placeholder="Phone Number"
                          />
                        </span>{" "}
                      </label>
                    </p>
                    <p>
                      <label>
                        <br />
                        <span className="wpcf7-form-control-wrap your-message">
                          <textarea
                            name="your-message"
                            cols="40"
                            rows="10"
                            className="wpcf7-form-control wpcf7-textarea"
                            aria-invalid="false"
                            placeholder="How can we help you"
                          ></textarea>
                        </span>{" "}
                      </label>
                    </p>
                    <span className="wpcf7-form-control-wrap recaptcha">
                      <span
                        data-sitekey="6LfdnNIZAAAAACy4jUoSEU1ZjLMrqOk4PhClUrAw"
                        className="wpcf7-form-control g-recaptcha wpcf7-recaptcha"
                      >
                        <div style={{ width: "304px", height: "78px" }}></div>
                      </span>
                      <noscript>
                        <div className="grecaptcha-noscript">
                          <textarea
                            name="g-recaptcha-response"
                            rows="3"
                            cols="40"
                            placeholder="reCaptcha Response Here"
                          ></textarea>
                        </div>
                      </noscript>
                    </span>
                    <p>
                      <input
                        type="submit"
                        className="wpcf7-form-control has-spinner wpcf7-submit"
                      />
                    </p>
                  </form>
                </div>
              </div>
              <div className="contactareabox2">
                <h3>
                  Contact Us <br />
                  Directly
                </h3>
                <p>
                  <Link to="#">
                    <i className="fas fa-map-marker-alt"></i>
                  </Link>
                </p>
                <Link to="#">
                  <p>
                    <strong>Address</strong> <br />
                    12794 W Washington Blvd <br />
                    Los Angeles, CA 90066
                  </p>
                </Link>
                <p>
                  <Link to="tel:310-402-4818">
                    <i className="fas fa-phone-alt"></i>
                  </Link>
                </p>
                <Link to="tel:310-402-4818">
                  <p>
                    <strong>Phone:</strong> <br />
                    (310) 402-4818
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
