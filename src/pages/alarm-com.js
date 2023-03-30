import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const StartJourney = React.lazy(() => import("../components/start-journey"));

const AlarmCom = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta
          name="description"
          content="Keep your home or business secure with the latest smart security solutions from Alarm.com. Our top-of-the-line systems and devices can provide the ultimate protection."
        />
        <title>
        Secure Your Home & Business with World-Leading Smart Security Solutions from Alarm.com
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
                <source
                  src="/assets/video/alarmdotcom-about3.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/video/alarmdotcom-about3.oggtheora.ogv"
                  type="video/ogg"
                />
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
                Alarm.com is the world’s leading authority when it comes to
                smart home security systems, smart business security systems,
                and smart devices / software.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/alarmdotcom3-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="alarm.com app & Devices"
                      src="/assets/images/alarmdotcom3.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/alarmdotcom2-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="commercial alarms systems orlando"
                      src="/assets/images/alarmdotcom2.webp"
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
                <source
                  src="/assets/video/alarmdotcom-home1.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/video/alarmdotcom-home1.oggtheora.ogv"
                  type="video/ogg"
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
                  <h2>ALARM.COM SMART HOME</h2>

                  <p className="pointsmade homeauto">
                    Alarm.com Smart Home System allows you to control every
                    smart security device you could possibly need. Such as:
                    controlling your lighting systems to make it seem that you
                    are home, or turn on in the evening to scare away would be
                    intrudes, controlling your electric shades, motion cameras,
                    smart security systems, and more.
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
                      srcSet="/assets/images/alarmdotcom5-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="best wireless home security systems"
                      src="/assets/images/alarmdotcom5.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
                <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/alarmdotcom6-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="home automation alarm system"
                      src="/assets/images/alarmdotcom6.webp"
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
                  src="/assets/video/alarmdotcom-business.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/video/alarmdotcom-business.oggtheora.ogv"
                  type="video/ogg"
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
                  <h2>ALARM.COM SMART BUSINESS</h2>

                  <p className="pointsmade homeauto">
                    With Alarm.com smart business you have all the tools to
                    protect your business and increase productivity. Monitor
                    your business while you’re away, keep tabs on employees and
                    patrons. Make sure after hours you are 100% secure, and
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
                      srcSet="/assets/images/alarmdotcom4-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="alarm.com for business"
                      src="/assets/images/alarmdotcom4.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/alarmdotcom1-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="system monitoring"
                      src="/assets/images/alarmdotcom1.webp"
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
                  src="/assets/video/alarmdotcom-custom.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/video/alarmdotcom-custom.oggtheora.ogv"
                  type="video/ogg"
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
                  <h2>ALARM CUSTOM SECURITY</h2>

                  <p className="pointsmade homeauto">
                    Have a unique camera system, video systems, or other 3rd
                    party equipment? Alarm.com is made to integrate easily with
                    all sorts of devices. Merely give HomeFirst a call
                    and we can help guide you through setting up your devices
                    within the Alarm.com ecosystem.
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
                      srcSet="/assets/images/alarmdotcom7-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="alarm.com business devices"
                      src="/assets/images/alarmdotcom7.webp"
                    />
                  </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/alarmdotcom8-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="1500"
                       height="1000"
                      alt="alarm.com cuxtom security"
                      src="/assets/images/alarmdotcom8.webp"
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

export default AlarmCom;
