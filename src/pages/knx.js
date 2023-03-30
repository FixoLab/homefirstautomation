import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const StartJourney = React.lazy(() => import("../components/start-journey"));

const Knx = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta
          name="description"
          content="With KNX, you can easily integrate your lighting, security, HVAC, and more into one easy to configure network. Don't miss out on the revolutionary KNX control system today!"
        />
        <title>
        Control All Your Systems Easily with KNX in Orlando FL
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
                <source src="/assets/video/knx-about.mp4" type="video/mp4" />
                <source src="/assets/video/knx-about.oggtheora.ogv" type="video/ogg" />
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
                KNX is a revolutionary control software that allows you to
                easily integrate all your devices into one easy to use control
                standard. This allows the combination of your lighting,
                security, HVAC, and more into one easy to configure network that
                homes, storefronts, and large scale corporations can use.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/knx-10-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="knx visualisation software"
                      src="/assets/images/knx-10.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/knx7-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="knx smart home"
                      src="/assets/images/knx7.webp"
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
                <source src="/assets/video/knx-home.mp4" type="video/mp4" />
                <source src="/assets/video/knx-home.oggtheora.ogv" type="video/ogg" />
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
                  <h2>KNX FOR THE HOME</h2>

                  <p className="pointsmade homeauto">
                    KNX for your home can let you control the key features of
                    your life. Lighting controls for managing when, where, and
                    how your lights turn on and off. Security systems that give
                    you full control of watching everything around your house.
                    HVAC system control to make sure your house is always the
                    perfect temperature for you, your family, and guests. Plus
                    more.
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
                      srcSet="/assets/images/knx-12-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="knx for home"
                      src="/assets/images/knx-12.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/knx4-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="knx home conrol"
                      src="/assets/images/knx4.webp"
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
                <source src="/assets/video/knx-business.mp4" type="video/mp4" />
                <source src="/assets/video/knx-business.oggtheora.ogv" type="video/ogg" />
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
                  <h2>KNX FOR THE BUSINESS</h2>

                  <p className="pointsmade homeauto">
                    With KNX systems your business can go that extra distance
                    over the competition. This includes dynamic lighting system
                    controls to create great outdoor and indoor lighting for
                    customers and clients. Lighting, security, and more can be
                    integrated with a KNX system.
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
                      srcSet="/assets/images/knx5-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="knx for business"
                      src="/assets/images/knx5.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/knx9-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="knx lighting control"
                      src="/assets/images/knx9.webp"
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
                  alt="knx custom solution"
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
                <source src="/assets/video/knx-custom.mp4" type="video/mp4" />
                <source src="/assets/video/knx-custom.oggtheora.ogv" type="video/ogg" />
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
                  <h2>KNX CUSTOM SOLUTIONS</h2>

                  <p className="pointsmade homeauto">
                    KNX can be customized to every smart device system you could
                    need. From upgrading systems on the open sea, to a popup
                    store front. KNX can and will give you the customization and
                    features you need.
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
                      srcSet="/assets/images/knx6-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="knx custom solution"
                      src="/assets/images/knx6.webp"
                    />
                  </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/knx-2-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="knx smart device system"
                      src="/assets/images/knx-2.webp"
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

export default Knx;
