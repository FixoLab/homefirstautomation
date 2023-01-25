import React from "react";
import { Link } from "react-router-dom";
const CallToAction = React.lazy(() => import("../components/call-to-action"));

const SmartHomeAutomation = () => {
  return (
    <div id="site-content">
      <div className="post-inner thin ">
        <div className="entry-content">
          <div className="is-layout-flow wp-block-group homevideo servicespages">
            <div className="wp-block-group__inner-container">
              <video
                id="video-background"
                className="high4kres"
                autoPlay
                loop="loop"
                muted
                playsInline=""
                width="300"
                height="150"
              >
                <source
                  src="assets/video/smart-services-new-final.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                <div className="wp-block-group__inner-container">
                  <div
                    className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    <div className="wp-block-group__inner-container">
                      <h1>Smart Home Automation</h1>

                      <p>
                        <a aria-label="Scroll down01" href="#1">
                          Networking
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down02" href="#2">
                          Lighting
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down03" href="#3">
                          Shading
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down04" href="#4">
                          Audio
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down05" href="#5">
                          Theater
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down06" href="#6">
                          Security
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="is-layout-flow wp-block-group serviceswhitebackground">
            <div className="wp-block-group__inner-container">
              <p
                className="has-text-align-center servicesleader eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Over the last decade, HomeFirst has been the industry leader for
                clients that strive for the the latest in technology mixed with
                the best design possible for their projects. Whether it be a
                private residence, local business, or advertising display.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="2000"
                  height="1503"
                  src="assets/images/home-show2-1.jpg"
                  alt=""
                  className="wp-image-853"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1024"
                  height="769"
                  src="assets/images/smart10.jpg"
                  alt=""
                  className="wp-image-1863"
                />
              </figure>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-12 wp-block-columns alignfull servicesdualcontainer"
            id="1"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>Wifi / Networking</h2>

                  <p className="pointsmade homeauto">
                    Enjoy your private residence without wires obstructing your
                    view from the public’s eye. Our WiFi systems are the top of
                    the line and nothing can compare. Give a simple home WiFi, a
                    multiple room home, or an entire office building. There is
                    no WiFi or networking project to large for us to handle.
                  </p>

                  <figure className="wp-block-image size-large is-resized servicebrands">
                    <Link to="/ruckus">
                      <img
                        src="assets/images/ruckus.png"
                        alt=""
                        className="wp-image-2402"
                        width="150"
                        height="150"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1024"
                  height="770"
                  src="assets/images/smart2.jpg"
                  alt=""
                  className="wp-image-1544"
                />
              </figure>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-16 wp-block-columns alignfull servicesdualcontainer"
            id="2"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1024"
                  height="770"
                  src="assets/images/smart7.jpg"
                  alt=""
                  className="wp-image-1715"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>Smart Lighting</h2>

                  <p className="pointsmade homeauto">
                    Our patented software system control4 allows you to control
                    every light in your house. Create dynamic lighting effects
                    for movies, or a smooth lighting setup for an intimate
                    night. You’re only hindered by your imagination, and you can
                    always ask our professionals for opinions.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/lutron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/lutron-services.png"
                        alt=""
                        className="wp-image-2420"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/coastal-source">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/coastalsource-services.png"
                        alt=""
                        className="wp-image-2428"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/knx">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/knx-company-services.png"
                        alt=""
                        className="wp-image-2433"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="3"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1197"
                  height="900"
                  src="assets/images/home-shades.jpg"
                  alt=""
                  className="wp-image-846"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>Smart Shading</h2>

                  <p className="pointsmade homeauto">
                    We use only the top of the line shading systems for Los
                    Angeles homes. Control your custom roller shades and
                    motorized blinds with ease with a set timer, voice
                    controlled, or with our top of the line smart technology
                    systems on your phone, tablet, or computer.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/lutron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/lutron-services-1.png"
                        alt=""
                        className="wp-image-2424"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/hunter-douglas">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/hunter-douglas-services.png"
                        alt=""
                        className="wp-image-2425"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/savant">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/savant-services.png"
                        alt=""
                        className="wp-image-2426"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="is-layout-flex wp-container-23 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="931"
                  height="700"
                  src="assets/images/smart-4.jpg"
                  alt=""
                  className="wp-image-1547"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1915"
                  height="1440"
                  src="assets/images/home-audio-1.jpg"
                  alt=""
                  className="wp-image-847"
                />
              </figure>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-27 wp-block-columns alignfull servicesdualcontainer"
            id="4"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="2396"
                  height="1600"
                  src="assets/images/home-audio1.jpg"
                  alt=""
                  className="wp-image-848"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>Smart Audio Systems</h2>

                  <p className="pointsmade homeauto">
                    Create top tier audio systems completely out of view and
                    listen to your favorite musical pieces inside the house, or
                    even outside by the pool relaxing or entertaining guests in
                    sunny Orlando Florida. With a Crestron Home or{" "}
                    <Link to="/control-4">Control4 installation</Link>, you can
                    fully control song selection, audio levels, and pretty much
                    every audio style you can imagine.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.png"
                        alt=""
                        className="wp-image-2435"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/crestron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/crestron-services.png"
                        alt=""
                        className="wp-image-2429"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/coastal-source">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/coastalsource-services.png"
                        alt=""
                        className="wp-image-2428"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-31 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="5"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1024"
                  height="752"
                  src="assets/images/smart61.jpg"
                  alt=""
                  className="wp-image-1711"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>Smart Theater Systems</h2>

                  <p className="pointsmade homeauto">
                    Have the ultimate viewing experience with smart technology
                    added. With a click of a button or specific phrase turn on
                    your desired lighting setup, have your projector screen pop
                    up or down, and start enjoying the latest cinematic
                    masterpieces. Or smart theater systems allow you to easily
                    control everything without leaving the couch.{" "}
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.png"
                        alt=""
                        className="wp-image-2435"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/crestron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/crestron-services.png"
                        alt=""
                        className="wp-image-2429"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/savant">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/savant-services.png"
                        alt=""
                        className="wp-image-2426"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-35 wp-block-columns alignfull servicesdualcontainer"
            id="6"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1915"
                  height="1440"
                  src="assets/images/home-security1.jpg"
                  alt=""
                  className="wp-image-845"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>Smart Security Systems</h2>

                  <p className="pointsmade homeauto">
                    Gain piece of mind with a click of a button with the top
                    tier security systems out there. Use top of the line cameras
                    and view everything going on around your residence on your
                    phone. Set up alert prompts to instantly call emergency
                    services if need be. Auto lock your front doors after a set
                    time period, and open them up with a click of a button on
                    your phone. Welcome to the future of security.{" "}
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/alarm-com">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/alarmdotcom-services.png"
                        alt=""
                        className="wp-image-2438"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/josh-ai">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/josh-ai-services.png"
                        alt=""
                        className="wp-image-2437"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/knx">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/knx-company-services.png"
                        alt=""
                        className="wp-image-2433"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-39 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="5"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1024"
                  height="769"
                  src="assets/images/smart12a.jpg"
                  alt=""
                  className="wp-image-2491"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>Smart Video Conferencing</h2>

                  <p className="pointsmade homeauto">
                    Talk with friends, family, coworkers, and more with a smart
                    home conferencing system. Homefirst can analyze
                    your current setup, install a top of the line model, and
                    give you a quick run down of all your new features. Video
                    conferencing has never been easier.{" "}
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/josh-ai">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/josh-ai-services.png"
                        alt=""
                        className="wp-image-2437"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/knx">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/knx-company-services.png"
                        alt=""
                        className="wp-image-2433"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/crestron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/crestron-services.png"
                        alt=""
                        className="wp-image-2429"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default SmartHomeAutomation;
