import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const CallToAction = React.lazy(() => import("../components/call-to-action"));

const Crestron = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Experience the power of automation in the convenience of your home with Crestron. Discover how easy it is to create a smart home with Crestron. Contact us today to get started."
        />
        <title>Crestron - Smart Homes Smart Offices Automation System</title>
      </Helmet>

      <div id="site-content">
        <div className="post-inner thin ">
          <div className="entry-content">
            <div className="is-layout-flow wp-block-group homevideo servicespages">
              <div className="wp-block-group__inner-container">
                <video
                  id="video-background"
                  className="fulltextvid"
                  autoPlay
                  preload="none"
                  loop="loop"
                  muted
                  width="300"
                  height="150"
                >
                  <source
                    src="/assets/video/creston-about-video.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/assets/video/creston-about-video.oggtheora.ogv"
                    type="video/ogg"
                  />
                </video>

                <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                  <div className="wp-block-group__inner-container">
                    <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                      <div className="wp-block-group__inner-container">
                        <div className="wp-block-image">
                          <figure className="aligncenter size-large is-resized">
                            <img
                              src="/assets/images/crestron-2-logo.webp"
                              alt="crestron logo"
                              className="wp-image-2116"
                              width="192"
                              height="144"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="is-layout-flow wp-block-group serviceswhitebackground">
              <div className="wp-block-group__inner-container">
                <p className="has-text-align-center servicesleader eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                  Crestron Electronics has cut the way for mechanical
                  development since 1972. We make computerization arrangements
                  that change the manner in which individuals carry on with
                  their lives, filling their heart with joy to-day assignment
                  simpler and improving proficiency and profitability. We
                  endeavor to be at the bleeding edge of forefront innovation,
                  continually offering quicker, better arrangements that address
                  the requirement of client the world over. With Crestron, you
                  aren’t simply purchasing first in class hardware, you are
                  putting resources into versatile and redid arrangements,
                  increasing all day, every day worldwide assistance and uphold,
                  and supporting items that are planned and fabricated in
                  America.
                </p>
              </div>
            </div>

            <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
              <div className="is-layout-flow wp-block-column servicesimages">
                <picture
                  className="wp-block-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <source
                    srcSet="/assets/images/crestron-main12-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    width="1197"
                    height="900"
                    alt="Crestron Smart Home Automation Florida"
                    src="/assets/images/crestron-main12.webp"
                  />
                </picture>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <picture
                  className="wp-block-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <source
                    srcSet="/assets/images/crestron-main13-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    width="1197"
                    height="900"
                    alt="Crestron Home Automation System"
                    src="/assets/images/crestron-main13.webp"
                  />
                </picture>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-12 wp-block-columns alignfull servicesdualcontainer"
              id="3"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <div className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible animated fadeInUp delay1 duration3">
                  <div className="wp-block-group__inner-container">
                    <h2>Crestron Home</h2>

                    <p className="pointsmade homeauto">
                      Our cell phones assist us with disentangling regular life
                      and make it simpler. The Crestron Home™ application
                      carries that equivalent experience to the work
                      environment. Go into a room and easily, securely, and
                      safely control everything – while never touching anything
                      besides your own cell phone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages sidevideo">
                <figure className="wp-block-image size-full eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                  <img
                    width="1197"
                    height="900"
                    src="/assets/images/home-shades.webp"
                    alt="Home shades"
                    className="wp-image-846"
                  />
                </figure>

                <video
                  id="video-background"
                  autoPlay
                  loop="loop"
                  muted
                  width="300"
                  height="150"
                >
                  <source
                    src="/assets/video/crestron-os.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/assets/video/crestron-os.oggtheora.ogv"
                    type="video/ogg"
                  />
                </video>
              </div>
            </div>

            <div className="is-layout-flex wp-container-15 wp-block-columns alignfull servicesdualcontainer">
              <div className="is-layout-flow wp-block-column servicesimages">
                <picture
                  className="wp-block-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <source
                    srcSet="/assets/images/crestron-main9-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    width="1197"
                    height="900"
                    alt="home automation setup"
                    src="/assets/images/crestron-main9.webp"
                  />
                </picture>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <picture
                  className="wp-block-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <source
                    srcSet="/assets/images/crestron-main8-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    width="1197"
                    height="900"
                    alt="living room automation"
                    src="/assets/images/crestron-main8.webp"
                  />
                </picture>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-19 wp-block-columns alignfull servicesdualcontainer"
              id="2"
            >
              <div className="is-layout-flow wp-block-column servicesimages sidevideoleft">
                <video
                  id="video-background"
                  autoPlay
                  loop="loop"
                  muted
                  width="300"
                  height="150"
                >
                  <source
                    src="/assets/video/crestron-remote2.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/assets/video/crestron-remote2.oggtheora.ogv"
                    type="video/ogg"
                  />
                </video>
              </div>

              <div
                className="is-layout-flow wp-block-column servicesimages"
                style={{ padding: "100px 0" }}
              >
                <div className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible animated fadeInUp delay1 duration3">
                  <div className="wp-block-group__inner-container">
                    <h2>Crestron Remotes</h2>

                    <p className="pointsmade homeauto">
                      The stunning HR-310 and TSR-310 are Crestron handheld
                      controllers reconsidered. They join all the best
                      components of our past with considerably further developed
                      usefulness and brilliant ergonomic design, amazing button
                      feel, voice control, custom engravable buttons, profiles
                      settings, and substantially more.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="is-layout-flex wp-block-columns alignfull servicesdualcontainer">
              <div className="is-layout-flow wp-block-column servicesimages">
                <picture
                  className="wp-block-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <source
                    srcSet="/assets/images/crestron-main7-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    width="1197"
                    height="900"
                    alt="crestron remotes"
                    src="/assets/images/crestron-main7.webp"
                  />
                </picture>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <picture
                  className="wp-block-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <source
                    srcSet="/assets/images/crestron-main6-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    width="1197"
                    height="900"
                    alt="crestron devices"
                    src="/assets/images/crestron-main6.webp"
                  />
                </picture>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-26 wp-block-columns alignfull servicesdualcontainer"
              id="1"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <div className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible animated fadeInUp delay1 duration3">
                  <div className="wp-block-group__inner-container">
                    <h2>Crestron Flex</h2>

                    <p className="pointsmade homeauto">
                      The present reality requests expanded UC limit, an
                      overhauled insight, and an approach to connect the
                      separation between the workplace, design room, and home
                      more than ever. Flex MM answers the call.
                    </p>
                  </div>
                </div>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages sidevideo">
                <figure className="wp-block-image size-large eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                  <img
                    width="1024"
                    height="769"
                    src="/assets/images/haslam-6.webp"
                    alt="Crestron Home Automation System Cost"
                    className="wp-image-984"
                  />
                </figure>

                <video
                  id="video-background"
                  autoPlay
                  loop="loop"
                  muted
                  width="300"
                  height="150"
                >
                  <source src="/assets/video/flex7.mp4" type="video/mp4" />
                  <source
                    src="/assets/video/flex7.oggtheora.ogv"
                    type="video/ogg"
                  />
                </video>
              </div>
            </div>

            <div className="is-layout-flex wp-container-29 wp-block-columns alignfull servicesdualcontainer">
              <div className="is-layout-flow wp-block-column servicesimages">
                <picture
                  className="wp-block-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <source
                    srcSet="/assets/images/crestron-main3-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    width="1197"
                    height="900"
                    alt="creston office setup"
                    src="/assets/images/crestron-main3.webp"
                  />
                </picture>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <picture
                  className="wp-block-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <source
                    srcSet="/assets/images/crestron-main5-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    width="1197"
                    height="900"
                    alt="smart video conferencing"
                    src="/assets/images/crestron-main5.webp"
                  />
                </picture>
              </div>
            </div>

            <CallToAction />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Crestron;
