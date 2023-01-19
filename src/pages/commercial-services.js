import React from "react";
import { Link } from "react-router-dom";
const CallToAction = React.lazy(() => import("../components/call-to-action"));

const CommercialServices = () => {
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
                  src="assets/video/commercial-services-2.mp4"
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
                      <h1>COMMERCIAL SERVICES</h1>
                      <p>
                        <a href="#1">NETWORKING</a>
                      </p>
                      <p>
                        <a href="#2">LIGHTING</a>
                      </p>
                      <p>
                        <a href="#3">SHADING</a>
                      </p>
                      <p>
                        <a href="#4">AUDIO</a>
                      </p>
                      <p>
                        <a href="#5">VIDEO</a>
                      </p>
                      <p>
                        <a href="#6">REMOTE CONTROL</a>
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
                Let PROJECT: automate help to expand your current Los Angeles
                business, setup a brand new point of sale location, or create a
                top of the line <Link to="#">commercial room design.</Link>{" "}
                Whatever your commercial application is we can help.
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
                  src="assets/images/commercial-23-1024x769.jpg"
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
                  src="assets/images/commercial-22-1024x769.jpg"
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
                  src="assets/images/commercial-15-1024x752.jpg"
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
                  <h2>COMMERCIAL WI-FI</h2>

                  <p className="pointsmade homeauto">
                    Commercial networking is important for all business sizes,
                    and we can help. From setting up a Ethernet system for your
                    new store front. To creating a multi level wireless network
                    for your skyscraper. We have seen everything out there, and
                    have achieved it all.
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
                  src="assets/images/commercial-3.jpg"
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
                  <h2>COMMERCIAL LIGHTING</h2>

                  <p className="pointsmade homeauto">
                    Some say the proper lighting can make or break a business.
                    Too harsh and you can drive away customers, too dim and the
                    quality of the business is questioned. We will work with
                    your brand image and create a lighting scheme that suits
                    you, your employees, and all visitors to your establishment.
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
                  src="assets/images/commercial-1-1024x770.jpg"
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
                  <h2>COMMERCIAL SHADING</h2>
                  <p className="pointsmade homeauto">
                    Whatever the size of your business having proper shading
                    throughout can save your immensely on HVAC costs. Our
                    motorized shading, otherwise known as electric shades can
                    reduce your bill but automatically shading your business
                    during the hottest times of the day.
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
                  src="assets/images/commercial-9-1024x770.jpg"
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
                  src="assets/images/commercial-10-1024x770.jpg"
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
                  src="assets/images/commercial-21-1024x769.jpg"
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
                  <h2>COMMERCIAL VIDEO & AUDIO SYSTEMS</h2>

                  <p className="pointsmade homeauto">
                    Create the perfect ambience for clients waiting in your
                    waiting room with a custom AV installation. Create crystal
                    clear video calls with clients or add in a top of the line
                    speaker system for the building.
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
                  src="assets/images/commercial-13-1024x752.jpg"
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
                  <h2>COMMERCIAL VIDEO CONFERENCING</h2>

                  <p className="pointsmade homeauto">
                    Make sure you have the best presentation possible with our
                    video conferencing systems. We will analyze your current
                    conference room, give you a variety of options, and
                    implement what you feel is best based on our professional
                    advice. Leave your clients impressed by your setup, and your
                    staff impressed by the ease of use.
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
                  src="assets/images/commercial-20-1024x769.jpg"
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
                  <h2>COMMERCIAL SMART SYSTEMS</h2>

                  <p className="pointsmade homeauto">
                    Monitor your business from afar with a top of the line smart
                    system. View client’s entering the building, keep tabs on
                    employee locations, and overall make sure your investment is
                    safe. Our smart systems and smart security systems are the
                    nation’s leaders in the field..
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

export default CommercialServices;
