import React from "react";
import { Link } from "react-router-dom";
const CallToAction = React.lazy(() => import("../components/call-to-action"));

const SmartSecurity = () => {
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
                  src="assets/video/smart-security-final-smaller.mov"
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
                      <h1>SMART SECURITY</h1>

                      <p>
                        <a aria-label="Scroll down01" href="#1">MULTI ROOM</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down02" href="#2">OUTDOOR SYSTEMS</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down03" href="#3">HIGH PERFORMANCE</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down04" href="#4">HIDDEN PERIPHERALS</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down05" href="#5">MEDIA CONTROL</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down06" href="#6">COMMERCIAL</a>
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
                21st century criminals need 21st century security. There is
                nothing more important than you and your loved ones. Our{" "}
                <Link to="/alarm-com">smart home security systems</Link> and devices will
                give you piece of mind during the day, night, and away from your
                Orlando Florida home.
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
                  src="assets/images/security1.jpg"
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
                  src="assets/images/security-10.jpg"
                  alt=""
                  className="wp-image-1863"
                />
              </figure>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="1"
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
                  src="assets/images/smart2.jpg"
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
                  <h2>Entry Systems</h2>

                  <p className="pointsmade homeauto">
                    A good alarm system does not only protect you from intruders
                    but monitors multiple security aspects of your life. From
                    controlling your lighting setups, to monitoring weather,
                    hazardous gases, to screening unwanted guests. A top end
                    alarm system will protect your home 24/7 and allow you to
                    quickly contact extra security with a touch of a button or
                    voice command.
                  </p>
                </div>
              </div>
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
                  src="assets/images/security12.jpg"
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
                  <h2>SMART ENTRY SYSTEMS</h2>

                  <p className="pointsmade homeauto">
                    Screen everyone before you decide to allow them inside with
                    a smart entry system. Entry systems can be built into your
                    smart locking system, come with video systems to see who is
                    at your door, and even allow audio systems to be setup with
                    them. Best of all you can control your entire entry system
                    with a simple click on your phone.
                  </p>
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
                  src="assets/images/security8.jpg"
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
                  <h2>SECURITY LANDSCAPE LIGHTING</h2>
                  <p className="pointsmade homeauto">
                    Exterior landscape lighting not only helps to keep your
                    residency looking great, but dissuades would be intruders
                    from going near your home. Our landscape lighting can be set
                    with smart devices to automatically turn on at dusk and turn
                    off at dawn, or if you want a more secure type of lighting
                    you can have us install motion lighting.
                  </p>
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
                  src="assets/images/security14.jpg"
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
                  src="assets/images/security-18.jpg"
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
                  src="assets/images/security-13.jpg"
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
                  <h2>SURVEILLANCE SYSTEMS</h2>

                  <p className="pointsmade homeauto">
                    Monitor your entire home with a cutting edge security camera
                    system. Our surveillance systems use the latest and greatest
                    home security cameras. Monitor outside your home in high
                    quality definition with integrated outdoor security cameras
                    via smart devices. Record minutes, hours, days, or weeks of
                    security footage. Easily screen guests during the evening
                    with night vision mode.
                  </p>
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
                  src="assets/images/security-17.jpg"
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
                  <h2>SMART LOCK SYSTEMS</h2>

                  <p className="pointsmade homeauto">
                    The next generation of smart locks are not just a keypad
                    anymore. Set up your smart system to unlock when it detects
                    your phone nearby. Automatically unlock the doors with
                    specific voice commands or smart phone security keys. Alert
                    security companies or the police with unique codes.
                  </p>
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
                  src="assets/images/security16.jpg"
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
                  <h2>ELECTRIC SHADES</h2>

                  <p className="pointsmade homeauto">
                    Electric Shading, otherwise known as smart shades, is the
                    next generation in window amenities. Electric Shading allows
                    your windows to rise or lower your shades based on a variety
                    of factors. The amount of sunlight being let in, by a simple
                    clock of the button, on a voice comment, or based on a set
                    timer. These features give you the ultimate security for
                    keeping prying eyes from viewing things you want to keep
                    hidden.
                  </p>
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

export default SmartSecurity;
