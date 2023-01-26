import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="site-content" className="about">
      <div className="post-inner thin ">
        <div className="entry-content">
          <div className="vce-row-container">
            <div className="vce-row-content">
              <div className="vce-text-block-wrapper vce" id="el-595684fb">
                <div className="is-layout-flow wp-block-group homevideo">
                  <div className="wp-block-group__inner-container">
                    <video
                      id="video-background"
                      autoPlay
                      loop="loop"
                      muted
                      width="300"
                      height="150"
                    >
                      <source
                        src="assets/video/aboutus-final.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                      <div className="wp-block-group__inner-container">
                        <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible">
                          <div className="wp-block-group__inner-container">
                            <h1>Who is HomeFirst ?</h1>

                            <p>
                              <Link to="#1">
                                Learn about our core values, certifications we
                                have in the field, and option plans we give
                                clients.
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="is-layout-flow wp-block-group pagewhitebackground">
                  <div className="wp-block-group__inner-container">
                    <div className="is-layout-flex wp-container-7 wp-block-columns pagecolumns">
                      <div
                        className="is-layout-flow wp-block-column"
                        style={{ flexBasis: "66.66%" }}
                      >
                        <h2>It starts with a dream</h2>
                        <div style={{ height: "30px" }}>&nbsp;</div>
                        <p>
                          Homefirst started over 10 years ago with one simple
                          idea in mind. Give the best technological upgrades to
                          homes and businesses.
                        </p>
                        <div style={{ height: "30px" }}>&nbsp;</div>
                        <p>
                          We started as a simple mobile service traveling to our
                          clients' places of residence and/or business giving
                          them the upmost care with installations. Word quickly
                          got around of our attention to detail and strive to
                          make every client happy with the end result.
                        </p>
                        <div style={{ height: "30px" }}>&nbsp;</div>
                        <p>
                          Now decades later, Homefirst is one of the
                          largest installers in Orlando, Florida for security
                          systems,{" "}
                          <Link to="/smart-home-demo-2">
                            smart home systems
                          </Link>
                          , theater systems, commercial automation systems, and
                          overall home/business technological upgrades.
                        </p>
                        <div style={{ height: "30px" }}>&nbsp;</div>
                        <p>
                          We couldn't do it without our vast clientele
                          recommending us to friends and family so we want to
                          say thank you to everyone that has helped to not only
                          make one man's dream and reality, but create something
                          truly wonderful that tens of thousands of people have
                          enjoyed over the years.
                        </p>
                        <div style={{ height: "30px" }}>&nbsp;</div>
                        <p>Thank You from us at Homefirst.</p>
                        <div style={{ height: "30px" }}>&nbsp;</div>
                        <div style={{ height: "30px" }}>&nbsp;</div>
                        <p>&nbsp;</p>
                        <img
                          width="335"
                          height="61"
                          className="wp-image-695"
                          src="assets/images/signature.png"
                          alt=""
                        />
                      </div>

                      <div
                        className="is-layout-flow wp-block-column"
                        style={{ flexBasis: "33.33%" }}
                      >
                        <Link
                          style={{
                            display: "block",
                            margin: "0 auto 45px",
                          }}
                          to="#"
                        >
                          <img
                            style={{ display: "block" }}
                            src="assets/images/boha-2019-solid-border.png"
                            alt="Project Automate - Best of HomeAdvisor"
                          />
                        </Link>
                        <table
                          className="houzztable"
                          style={{ width: "125px" }}
                          cellSpacing="0"
                          cellPadding="0"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <Link to="#">
                                  <img
                                    src="assets/images/badge125.png"
                                    alt="Joshua Trevithick in Orlando, Florida, CA on Houzz"
                                    width="125"
                                    height="125"
                                    border="0"
                                  />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          style={{ width: "159px" }}
                          cellSpacing="0"
                          cellPadding="0"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <Link to="#">
                                  <img
                                    src="assets/images/badge54.png"
                                    alt="Joshua Trevithick in Orlando, Florida, CA on Houzz"
                                    width="80"
                                    height="80"
                                    border="0"
                                  />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <figure className="wp-block-image size-large cediasmall">
                          <img
                            width="376"
                            height="365"
                            className="wp-image-566"
                            src="assets/images/cedia2-logo.png"
                            alt=""
                          />
                        </figure>
                        <Link
                          id="bbblink"
                          className="ruhzbul"
                          style={{ padding: "0px", margin: "0px" }}
                          title="Project Automate, Audio Visual Equipment, Orlando, Florida, CA"
                          to="#"
                        >
                          <img
                            id="bbblinkimg"
                            style={{ padding: "0px", border: "none" }}
                            src="assets/images/project1.png"
                            alt="Project Automate, Audio Visual Equipment, Orlando, Florida, CA"
                            width="400"
                            height="90"
                          />
                        </Link>
                        <figure className="wp-block-image size-large control4small">
                          <img
                            width="675"
                            height="690"
                            className="wp-image-536"
                            src="assets/images/control4gold-logo.png"
                            alt=""
                          />
                        </figure>
                        <div className="wp-block-image control4small">
                          <figure className="alignleft size-large is-resized">
                            <Link to="#">
                              <img
                                className="wp-image-3276"
                                src="assets/images/cediacit.png"
                                alt=""
                                width="159"
                                height="159"
                              />
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>

                    <h2>An Ever Growing Family of Professionals</h2>

                    <div className="is-layout-flex wp-container-14 wp-block-columns picturetime">
                      <div className="is-layout-flow wp-block-column">
                        <figure className="wp-block-image size-large">
                          <img
                            width="600"
                            height="600"
                            className="wp-image-545"
                            src="assets/images/coming-soon.jpg"
                            alt=""
                          />
                          <figcaption>
                            <strong>Semir Nayar</strong> Ceo/Founder
                          </figcaption>
                        </figure>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <figure className="wp-block-image size-large">
                          <img
                            width="600"
                            height="600"
                            className="wp-image-555"
                            src="assets/images/coming-soon.jpg"
                            alt=""
                          />
                          <figcaption>
                            <strong>John Madrick</strong>
                            Installation Manager
                          </figcaption>
                        </figure>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <figure className="wp-block-image size-large">
                          <img
                            width="600"
                            height="600"
                            className="wp-image-552"
                            src="assets/images/coming-soon.jpg"
                            alt=""
                          />
                          <figcaption>
                            <strong>Semir Nayar</strong> Ceo/Founder
                          </figcaption>
                        </figure>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <figure className="wp-block-image size-large">
                          <img
                            width="600"
                            height="600"
                            className="wp-image-548"
                            src="assets/images/coming-soon.jpg"
                            alt=""
                          />
                          <figcaption>
                            <strong>John Madrick</strong>
                            Installation Manager
                          </figcaption>
                        </figure>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <figure className="wp-block-image size-large">
                          <img
                            width="600"
                            height="600"
                            className="wp-image-556"
                            src="assets/images/coming-soon.jpg"
                            alt=""
                          />
                          <figcaption>
                            <strong>Semir Nayar</strong> Ceo/Founder
                          </figcaption>
                        </figure>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <figure className="wp-block-image size-large">
                          <img
                            width="600"
                            height="600"
                            className="wp-image-550"
                            src="assets/images/coming-soon.jpg"
                            alt=""
                          />
                          <figcaption>
                            <strong>John Madrick</strong>
                            Installation Manager
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="pickareaheading">Whats your Interest</h2>

                <div className="is-layout-flex wp-container-28 wp-block-columns pickanarea">
                  <div className="is-layout-flow wp-block-column">
                    <div className="is-layout-flex wp-container-20 wp-block-columns">
                      <div
                        className="is-layout-flow wp-block-column"
                        style={{ flexBasis: "25%" }}
                      >
                        <p>
                          <Link to="/smart-home-automation">
                            Smart Home Automation
                          </Link>
                        </p>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <p><Link to="/home-theater">Home Theater</Link></p>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <p><Link to="/lighting-control">Lighting control</Link></p>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <p><Link to="/audio-systems">Multi-Room Music</Link></p>
                      </div>
                    </div>
                  </div>

                  <div className="is-layout-flow wp-block-column">
                    <div className="is-layout-flex wp-container-26 wp-block-columns">
                      <div
                        className="is-layout-flow wp-block-column"
                        style={{ flexBasis: "25%" }}
                      >
                        <p><Link to="/smart-security">Smart Security</Link></p>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <p><Link to="/wifi-networking-services">Wi-Fi / Networking</Link></p>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <p><Link to="/audio-systems">High Performance Audio</Link></p>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        <p><Link to="/commercial-services">Commercial Integration</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
