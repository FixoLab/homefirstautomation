import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
const CallToAction = React.lazy(() => import("../components/call-to-action"));

const WifiNetworkingServices = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta
          name="description"
          content="Get lightning-fast Internet speeds and instant device access with a professional home networking installation in Orlando, FL. Contact us today for a reliable and fast home networking setup."
        />
        <title>
        Enjoy Music Your Way with a Custom Music System in Orlando, FL
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
                  src="assets/video/wifi-services-final.mp4"
                  type="video/mp4"
                />
                <source
                  src="assets/video/wifi-services-final.oggtheora.ogv"
                  type="video/ogg"
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
                      <h1>WIFI – NETWORKING SERVICES</h1>
                      <p>
                        <a aria-label="Scroll down01" href="#1">SMART HOME</a>
                      </p>
                      <p>
                        <a aria-label="Scroll down02" href="#2">NETWORKING</a>
                      </p>
                      <p>
                        <a aria-label="Scroll down03" href="#3">SECURITY</a>
                      </p>
                      <p>
                        <a aria-label="Scroll down04" href="#4">WI-FI</a>
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
                The first step in having a ground-breaking smart home is having
                the foundation for your smart home created. Homefirst
                has all the <Link to="/brands/ruckus">networking solutions</Link> you need to
                bring your Orlando, Florida home up to date.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/wifi12-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="Wi-Fi Networking Solutions"
                  src="assets/images/wifi12.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/wifi14-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="Wireless Network Support Orlando"
                  src="assets/images/wifi14.webp"
                />
              </picture>
            </div>
          </div>

          <div
            className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="1"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/wifi-8-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="Full System smart home"
                  src="assets/images/wifi-8.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>FULL SYSTEM SMART HOME</h2>

                  <p className="pointsmade homeauto">
                    Let us go through and setup your entire smart home system.
                    This will include us giving you a tour of using your system
                    in different rooms of your house and setting up every piece
                    of smart equipment with your system.
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
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/wifi6-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="networking services"
                  src="assets/images/wifi6.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>NETWORKING</h2>

                  <p className="pointsmade homeauto">
                    A good Wi-Fi system still needs to have a strong home
                    network setup to support it. We can install all your
                    Ethernet cables throughout your Orlando, Florida residence so no
                    one can view them. This includes setting up your security
                    systems. Adding fiber wiring throughout your residence and
                    making sure all your devices are properly setup to take full
                    advantage of your network.
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
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/wifi5-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="Home Wi-Fi Setup"
                  src="assets/images/wifi5.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>WI-FI SETUP</h2>
                  <p className="pointsmade homeauto">
                    Have our professionals create access points throughout your
                    home network to make sure you have the optimal signal
                    strength throughout your residency. On top of that we can
                    make sure your Wi-Fi systems conform to the look of your
                    home and help to add extra security to protect your Wi-Fi
                    transmissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="is-layout-flex wp-container-16 wp-block-columns alignfull servicesdualcontainer"
            id="4"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/wifi7-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="wireless security"
                  src="assets/images/wifi7.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>WIRELESS SECURITY</h2>

                  <p className="pointsmade homeauto">
                    Protect your online information with a proper wireless and
                    wired security system. Our professionals can inspect your
                    current setup and give you options on how you can improve
                    upon it. Schedule a remote diagnostic today and make sure
                    your online identity and information is safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="is-layout-flex wp-container-23 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/wifi3-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="ornaldo networking services"
                  src="assets/images/wifi3.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/wifi4-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="smart home networking"
                  src="assets/images/wifi4.webp"
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

export default WifiNetworkingServices;
