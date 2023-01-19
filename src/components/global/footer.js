import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerMenu, setFooterMenu] = useState(false);
  const footerMenuToggle = () => {
    setFooterMenu(!footerMenu);
  };

  return (
    <>
      <div className="footer-nav-widgets-wrapper header-footer-group">
        <div className="footer-inner section-inner">
          <aside className="footer-widgets-outer-wrapper">
            <div className="footer-widgets-wrapper">
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
                              <p
                                role="status"
                                aria-live="polite"
                                aria-atomic="true"
                              ></p>
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
                                  <div
                                    style={{ width: "304px", height: "78px" }}
                                  ></div>
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
              <div className="footer-widgets column-two grid-item">
                <div className="  widget widget_text">
                  <div className="widget-content">
                    <div className="textwidget">
                      <div className="footerlinks">
                        <div className="footerlinks1">
                          <Link to="#">
                            <img
                              decoding="async"
                              src="assets/images/Homefirst_Auto.png"
                              alt="project automate logo"
                              width="200"
                              height="80"
                            />
                          </Link>
                          <br />
                          <Link to="#">
                            12794 W Washington Blvd
                            <br />
                            Los Angeles, CA 90066
                          </Link>
                          <br />
                          <a className="footerphone" href="tel:310-402-4818">
                            (310) 402-4818
                          </a>
                          <div className="aps-social-icon-wrapper">
                            <div className="aps-group-horizontal">
                              <div
                                className="aps-each-icon icon-1-1"
                                style={{ margin: "10px" }}
                              >
                                <Link
                                  to="#"
                                  target='"_blank"'
                                  className="aps-icon-link animated aps-tooltip"
                                  rel="noopener"
                                >
                                  <i className="fa-brands fa-facebook-f"></i>
                                </Link>
                              </div>

                              <div className="aps-each-icon icon-1-2">
                                <Link
                                  to="#"
                                  target='"_blank"'
                                  className="aps-icon-link animated aps-tooltip"
                                  rel="noopener"
                                >
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="footerlinks2">
                          <div className="su-accordion su-u-trim footermenu">
                            <Link to="#">Home</Link>
                            <Link to="/about">About</Link>
                            <div
                              className={`su-spoiler su-spoiler-style-default su-spoiler-icon-chevron ${
                                footerMenu ? "" : "su-spoiler-closed"
                              }`}
                              data-scroll-offset="0"
                              data-anchor-in-url="no"
                              onClick={footerMenuToggle}
                            >
                              <div
                                className="su-spoiler-title"
                                tabIndex="0"
                                role="button"
                              >
                                <span className="su-spoiler-icon"></span>
                                Services
                              </div>
                              <div className="su-spoiler-content su-u-clearfix su-u-trim">
                                <Link to="#">Smart Home Automation</Link>
                                <Link to="#">Home Theater</Link>
                                <Link to="#">Lighting Control</Link>
                                <Link to="#">Multi-Room Music</Link>
                                <Link to="#">Smart Security</Link>
                                <Link to="#">WiFi / Networking</Link>
                                <Link to="#">High Performance Audio</Link>
                                <Link to="#">Commercial Integration</Link>
                              </div>
                            </div>
                            <Link to="#">Gallery</Link>
                            <Link to="#">Brands</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Contact</Link>
                          </div>
                        </div>
                        <div className="footerlinks3">
                          <div className="su-posts su-posts-default-loop">
                            <div id="su-post-3788" className="su-post">
                              <h2 className="su-post-title">
                                <Link to="#">
                                  Top Elements of a High-Class Surround Sound
                                  Installation
                                </Link>
                              </h2>

                              <div className="su-post-meta">
                                Posted: 11/18/2022{" "}
                              </div>

                              <div className="su-post-excerpt">
                                <p>
                                  Enjoy the ultimate listening experience with
                                  our unique installations!&nbsp; Every modern
                                  smart home needs a space where you can sit […]
                                </p>
                              </div>
                              <Link to="#" className="su-post-comments-link">
                                0 comments
                              </Link>
                            </div>

                            <div id="su-post-3782" className="su-post">
                              <h2 className="su-post-title">
                                <Link to="#">
                                  Top Reasons You Need a Control4 System at Home
                                </Link>
                              </h2>

                              <div className="su-post-meta">
                                Posted: 10/31/2022{" "}
                              </div>

                              <div className="su-post-excerpt">
                                <p>
                                  Create a home that’s more comfortable,
                                  beautiful and enjoyable! Having a home you can
                                  perfectly customize to satisfy your every […]
                                </p>
                              </div>

                              <Link to="#" className="su-post-comments-link">
                                0 comments
                              </Link>
                            </div>

                            <div id="su-post-3777" className="su-post">
                              <h2 className="su-post-title">
                                <Link to="#">
                                  The Must-Have Elements of a Home Theater
                                  System
                                </Link>
                              </h2>

                              <div className="su-post-meta">
                                Posted: 09/12/2022{" "}
                              </div>

                              <div className="su-post-excerpt">
                                <p>
                                  Integrate these technologies and create a
                                  world-class entertainment experience at home!
                                  There’s nothing like watching an exciting
                                  sports event with […]
                                </p>
                              </div>

                              <Link to="#" className="su-post-comments-link">
                                0 comments
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <footer
        id="site-footer"
        role="contentinfo"
        className="header-footer-group"
      >
        <div className="section-inner">
          <div className="footer-credits">
            <p className="footer-copyright">
              © 2023
              <Link to="#">PROJECT: automate</Link>
            </p>

            <p className="powered-by-wordpress">
              <Link to="https://wordpress.org/">Powered by WordPress </Link>
            </p>
          </div>
          <a className="to-the-top" href="#site-header">
            <span className="to-the-top-long">
              To the top
              <span className="arrow" aria-hidden="true">
                ↑
              </span>
            </span>
            <span className="to-the-top-short">
              Up
              <span className="arrow" aria-hidden="true">
                ↑
              </span>
            </span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
