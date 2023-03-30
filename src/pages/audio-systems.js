import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
const CallToAction = React.lazy(() => import("../components/call-to-action"));

const AudioSystems = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta
          name="description"
          content="Create the perfect listening experience for your Orlando, FL property with a custom multi-room music system, 2-channel audio, or a cinema surround sound system. Let our expert audio engineers design and install a tailor-made audio system for you."
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
                  src="assets/video/audio-services2.mp4"
                  type="video/mp4"
                />
                <source
                  src="assets/video/audio-services2.oggtheora.ogv"
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
                      <h1>AUDIO SOLUTIONS</h1>

                      <p>
                        <a aria-label="Scroll down01" href="#1">
                          MULTI ROOM
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down02" href="#2">
                          OUTDOOR SYSTEMS
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down03" href="#3">
                          HIGH PERFORMANCE
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down04" href="#4">
                          HIDDEN PERIPHERALS
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down05" href="#5">
                          MEDIA CONTROL
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down06" href="#6">
                          COMMERCIAL
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
                Enjoy music your way with a multi-room music system, 2-channel
                audio, a cinema surround sound system or an outdoor speaker
                system consisting of state-of-the-art high-end speakers. Find
                out how we can design and install a custom music system
                seamlessly into your Orlando, Florida property.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/audio14-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="custom automated music system Florida"
                  src="assets/images/audio14.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/media6-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="multi-room wireless speaker system"
                  src="assets/images/media6.webp"
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
                  srcSet="assets/images/media7-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="multi room music"
                  src="assets/images/media7.webp"
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
                  <h2>MULTI-ROOM MUSIC</h2>

                  <p className="pointsmade homeauto">
                    Enjoy your private residence without wires obstructing your
                    view from the public’s eye. Our WiFi systems are the top of
                    the line and nothing can compare. Give a simple home WiFi, a
                    multiple room home, or an entire office building. There is
                    no WiFi or networking project to large for us to handle.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/savant">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/savant-services.webp"
                        alt=""
                        className="wp-image-2424"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.webp"
                        alt=""
                        className="wp-image-2425"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/savant">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/savant-services.webp"
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
            className="is-layout-flex wp-container-16 wp-block-columns alignfull servicesdualcontainer"
            id="2"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/audio-13-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="oudoor speakers"
                  src="assets/images/audio-13.webp"
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
                  <h2>OUTDOOR SPEAKERS</h2>

                  <p className="pointsmade homeauto">
                    Our patented software system control4 allows you to control
                    every light in your house. Create dynamic lighting effects
                    for movies, or a smooth lighting setup for an intimate
                    night. You’re only hindered by your imagination, and you can
                    always ask our professionals for opinions.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/coastal-source">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/coastalsource-services.webp"
                        alt=""
                        className="wp-image-2424"
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
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/audio15-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="home automation Florida"
                  src="assets/images/audio15.webp"
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
                  <h2>HIGH PERFORMANCE SYSTEMS</h2>

                  <p className="pointsmade homeauto">
                    Using only the top of the line audio equipment and systems
                    you can create the best sound quality available.
                  </p>
                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.webp"
                        alt=""
                        className="wp-image-2426"
                      />
                    </Link>
                  </figure>
                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/coastal-source">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/coastalsource-services.webp"
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
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/media3-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="media control system"
                  src="assets/images/media3.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/audio-16-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="outdoor speaker system"
                  src="assets/images/audio-16.webp"
                />
              </picture>
            </div>
          </div>
          <div
            className="is-layout-flex wp-container-27 wp-block-columns alignfull servicesdualcontainer"
            id="4"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/media8-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="peripheral devices"
                  src="assets/images/media8.webp"
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
                  <h2>HIDDEN PERIPHERALS</h2>

                  <p className="pointsmade homeauto">
                    Create top tier audio systems completely out of view and
                    listen to your favorite musical pieces inside the house, or
                    even outside by the pool relaxing or entertaining guests.
                    Our smart audio systems allow you to fully control song
                    selection, audio levels, and pretty much every audio style
                    you can imagine.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/savant">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/savant-services.webp"
                        alt=""
                        className="wp-image-2424"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.webp"
                        alt=""
                        className="wp-image-2425"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/savant">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/savant-services.webp"
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
            className="is-layout-flex wp-container-31 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="5"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/media4-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="effortless control system"
                  src="assets/images/media4.webp"
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
                  <h2>EFFORTLESS CONTROL</h2>

                  <p className="pointsmade homeauto">
                    Have the ultimate viewing experience with smart technology
                    added. With a click of a button or specific phrase turn on
                    your desired lighting setup, have your projector screen pop
                    up or down, and start enjoying the latest cinematic
                    masterpieces. Or smart theater systems allow you to easily
                    control everything without leaving the couch.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/savant">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/savant-services.webp"
                        alt=""
                        className="wp-image-2424"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.webp"
                        alt=""
                        className="wp-image-2425"
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
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/media-10-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="commercial system"
                  src="assets/images/media-10.webp"
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
                  <h2>COMMERCIAL SYSTEMS</h2>

                  <p className="pointsmade homeauto">
                    Gain piece of mind with a click of a button with the top
                    tier security systems out there. Use top of the line cameras
                    and view everything going on around your residence on your
                    phone. Set up alert prompts to instantly call emergency
                    services if need be. Auto lock your front doors after a set
                    time period, and open them up with a click of a button on
                    your phone. Welcome to the future of security.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/savant">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/savant-services.webp"
                        alt=""
                        className="wp-image-2424"
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
    </HelmetProvider>
  );
};

export default AudioSystems;
