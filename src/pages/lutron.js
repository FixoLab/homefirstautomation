import React from "react";
const StartJourney = React.lazy(() => import("../components/start-journey"));

const Ruckus = () => {
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
                <source src="/assets/video/lutronintro.mp4" type="video/mp4" />
              </video>
              <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                <div className="wp-block-group__inner-container">
                  <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                    <div className="wp-block-group__inner-container">
                      <div className="wp-block-image">
                        <figure className="aligncenter size-full is-resized">
                          <img
                            src="/assets/images/img_logo_lutron1.gif"
                            alt="lutron logo"
                            className="wp-image-2096"
                            width="170"
                            height="25"
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
              <p
                className="has-text-align-center servicesleader eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Lutron is a technology company founded in the 1950s that centers
                around lighting. This includes lighting switches, lighting
                controls, lights, electric shades, and wireless systems to
                control and remove complications from your visual experiences.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/lutron2-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="Lutron Smart Home Automation Florida"
                      src="/assets/images/lutron2.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/lutron1-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="Lutron smart devices"
                      src="/assets/images/lutron1.webp"
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
                <source src="/assets/video/lutronshades1.mp4" type="video/mp4" />
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
                  <h2>LUTRON ELECTRIC SHADES</h2>

                  <p className="pointsmade homeauto">
                    Lutron’s electric shades are known throughout the world as
                    one of the premier motorized shading distributors. They have
                    been in the business of shading for nearly a century.
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
                      srcSet="/assets/images/lutron3-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="Lutron Lighting Control Installer"
                      src="/assets/images/lutron3.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/lutron4-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="lutron dimmer"
                      src="/assets/images/lutron4.webp"
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
                <source src="/assets/video/lutrondimmer1.mp4" type="video/mp4" />
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
                  <h2>LUTRON DIMMER AND SWITCHES</h2>

                  <p className="pointsmade homeauto">
                    Lutron dimmer switches, lighting switches, and motorized
                    shading switches are top of the line. All major home,
                    businesses, and events use Lutron switches to complete they
                    projects and give the upmost presentation.
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
                      srcSet="/assets/images/lutron6-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="lutron smart system"
                      src="/assets/images/lutron6.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/lutron5-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="lutron smart control devices"
                      src="/assets/images/lutron5.webp"
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
                <source src="/assets/video/lutronos1.mp4" type="video/mp4" />
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
                  <h2>LUTRON SMART SYSTEMS</h2>

                  <p className="pointsmade homeauto">
                    Lutron not only dominates in the shading and switches
                    ecosystem, but the lighting control software too. Their
                    patented lighting system is used by luxury homes, billion
                    dollar businesses, and more.
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
                      srcSet="/assets/images/lutron7-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="lutron certified installer"
                      src="/assets/images/lutron7.webp"
                    />
                  </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/lutron9-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="lutron lightning services"
                      src="/assets/images/lutron9.webp"
                    />
                  </picture>
            </div>
          </div>
          <StartJourney />
        </div>
      </div>
    </div>
  );
};

export default Ruckus;
