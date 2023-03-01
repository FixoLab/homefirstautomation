import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const StartJourney = React.lazy(() => import("../components/start-journey"));

const Ruckus = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta
          name="description"
          content="Discover unbeatable networking solutions for your home and business with RUCKUS. Take advantage of RUCKUS and enjoy the best in user experience, scalability, and performance."
        />
        <title>
        Unbeatable Networking Solutions with RUCKUS in Orlando FL
        </title>
      </Helmet>
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
                <source src="/assets/video/ruckus-intro.mp4" type="video/mp4" />
              </video>
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
                RUCKUS makes your networking life simple. They deliver a top
                tier user experience with speeds that few, if any, can complete
                with. RUCKUS systems can scale from a simple home wifi setup, to
                a multi billion dollar skyscraper. With machine learning AI,
                RUCKUS is the industries choice for top tier networking systems.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/ruckus1-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="ruckus networking"
                      src="/assets/images/ruckus1.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/ruckus5-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="ruckus medical services"
                      src="/assets/images/ruckus5.webp"
                    />
                  </picture>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="1"
          >
            <div className="is-layout-flow wp-block-column servicesimages sidevideo">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1915"
                  height="1440"
                  src="/assets/images/haslam-15.webp"
                  alt=""
                  className="wp-image-847"
                />
              </figure>
              <video
                id="video-background"
                autoPlay
                loop="loop"
                muted
                width="300"
                height="150"
                playsInline=""
                style={{ width: "951px", height: "475.5px" }}
              >
                <source src="/assets/video/ruckus-home.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>RUCKUS HOME SOLUTIONS</h2>

                  <p className="pointsmade homeauto">
                    RUCKUS gives your home the upmost care possible. To start
                    they have award winning hardware and software that leads in
                    the industry. With a RUCKUS home network your cables will be
                    out of sight, and you can easily control all your devices
                    with ease, such as automated lighting, or wireless virtual
                    reality headsets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/ruckus7-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="ruckus home solution"
                      src="/assets/images/ruckus7.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/ruckus6-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="ruckus smart devices"
                      src="/assets/images/ruckus6.webp"
                    />
                  </picture>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-16 wp-block-columns alignfull servicesdualcontainer"
            id="2"
          >
            <div className="is-layout-flow wp-block-column servicesimages sidevideo">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1915"
                  height="1440"
                  src="/assets/images/haslam-15.webp"
                  alt=""
                  className="wp-image-847"
                />
              </figure>
              <video
                id="video-background"
                autoPlay
                loop="loop"
                muted
                width="300"
                height="150"
                playsInline=""
                style={{ width: "951px", height: "475.5px" }}
              >
                <source
                  src="/assets/video/ruckus-business1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>RUCKUS BUSINESS SOLUTIONS</h2>

                  <p className="pointsmade homeauto">
                    RUCKUS networking devices and software can scale for any
                    business. From managing airport terminals, to a small up and
                    coming restaurant, to a major data server. With RUCKUS your
                    businesses network will never be a concern.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/ruckus9-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="ruckus business solution"
                      src="/assets/images/ruckus9.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/ruckus8-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="ruckus networking devices"
                      src="/assets/images/ruckus8.webp"
                    />
                  </picture>
            </div>
          </div>
          <div
            className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="3"
          >
            <div className="is-layout-flow wp-block-column servicesimages sidevideo">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1915"
                  height="1440"
                  src="/assets/images/haslam-15.webp"
                  alt=""
                  className="wp-image-847"
                />
              </figure>
              <video
                id="video-background"
                autoPlay
                loop="loop"
                muted
                width="300"
                height="150"
                playsInline=""
                style={{ width: "951px", height: "475.5px" }}
              >
                <source
                  src="/assets/video/ruckus-software.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>RUCKUS SOFTWARE</h2>

                  <p className="pointsmade homeauto">
                    RUCKUS Networking software was built from the ground up and
                    keeps being reinvented to stay on top of the latest trends
                    in technology. For example RUCKUS is one of the worlds only
                    A.I. (Artificial Intelligence) systems out there. That means
                    it keeps learning based on your needs and adapts to make
                    your user experience the best possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="is-layout-flex wp-container-23 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/ruckus10-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="ruckus software"
                      src="/assets/images/ruckus10.webp"
                    />
                  </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/ruckus11-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="RUCKUS Networking software"
                      src="/assets/images/ruckus11.webp"
                    />
                  </picture>
            </div>
          </div>
          <StartJourney />
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default Ruckus;
