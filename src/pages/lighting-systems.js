import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
const CallToAction = React.lazy(() => import("../components/call-to-action"));

const LightingSystems = () => {
  return (
    <HelmetProvider>
     <Helmet>
        <meta
          name="description"
          content="Transform your Orlando, Florida home into the ultimate visual experience with custom light control systems. Experience the quality of custom lighting today."
        />
        <title>
        Custom Light Control Systems for Your Home in Orlando, FL
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
                  src="assets/video/lighting-services-final.mp4"
                  type="video/mp4"
                />
                <source
                  src="assets/video/lighting-services-final.oggtheora.ogv"
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
                      <h1>LIGHTING SYSTEMS</h1>

                      <p>
                        <a aria-label="Scroll down01" href="#1">TIMED LIGHTING</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down02" href="#2">MEDIA LIGHTING</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down03" href="#3">OUTDOOR LIGHTING</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down04" href="#4">SECURITY LIGHTING</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down05" href="#5">MOOD LIGHTING</a>
                      </p>

                      <p>
                        <a aria-label="Scroll down06" href="#6">EASILY MANAGED</a>
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
                Create the ultimate visual experience with proper lighting.
                Custom light control systems let you manage a perfect lighting
                situation throughout your Orlando, Florida home with your fingertips.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/audio9-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="smart lighting control systems"
                  src="assets/images/audio9.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/lighting-7-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="smart home lighting systems"
                  src="assets/images/lighting-7.webp"
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
                  srcSet="assets/images/audio8-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="timed lightning"
                  src="assets/images/audio8.webp"
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
                  <h2>TIMED LIGHTING</h2>

                  <p className="pointsmade homeauto">
                    Never touch a light switch again. Timed lighting will
                    automatically change based on the time of the day and
                    brightness around.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/lutron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/lutron-services.webp"
                        alt=""
                        className="wp-image-2424"
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
                        className="wp-image-2425"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/crestron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/crestron-services.webp"
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
                  srcSet="assets/images/lighting1-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="media lightning"
                  src="assets/images/lighting1.webp"
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
                  <h2>MEDIA LIGHTING</h2>

                  <p className="pointsmade homeauto">
                    Manage your home’s natural and artificial light and give it
                    a unique feeling anytime of the day with motorized Lutron
                    shades and smart lighting control. From spending time with
                    your family indoors, to romantic dinner lighting outside
                    under the Orlando, Florida sky.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/lutron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/lutron-services.webp"
                        alt=""
                        className="wp-image-2424"
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
                        className="wp-image-2425"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/crestron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/crestron-services.webp"
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
            className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="3"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/lighting9-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="landscape lightning"
                  src="assets/images/lighting9.webp"
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
                  <h2>LANDSCAPE LIGHTING</h2>

                  <p className="pointsmade homeauto">
                    Outdoor Lighting, otherwise known as landscape lighting can
                    make or break a homes look. Not only does it offer
                    protection from would be intruders, it gives you the
                    elegance you want from the outside.
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

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="savant">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/savant-services.webp"
                        alt=""
                        className="wp-image-2425"
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
                  srcSet="assets/images/lighting6-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="home lighting automation"
                  src="assets/images/lighting6.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/audio10-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="best lighting automation"
                  src="assets/images/audio10.webp"
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
                  srcSet="assets/images/lighting5-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="security lightning"
                  src="assets/images/lighting5.webp"
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
                  <h2>SECURITY LIGHTING</h2>

                  <p className="pointsmade homeauto">
                    Proper security lighting can not only keep you safe, but
                    blend in well with your home to create a great atmosphere.
                    Have lighting setup to run during the evening, or have it
                    only turn on based on motion detected.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="coastal-source">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/coastalsource-services.webp"
                        alt=""
                        className="wp-image-2424"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="alarm-com">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/alarmdotcom-services.webp"
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
                  srcSet="assets/images/audio3-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="mood lightning"
                  src="assets/images/audio3.webp"
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
                  <h2>MOOD LIGHTING</h2>

                  <p className="pointsmade homeauto">
                    A mood can be changed simply by the lighting around you.
                    Make sure you, your loved ones, and your guests all feel
                    great based on the mood lighting you have. Mood lighting
                    scenes can be conjured at the touch of a button using your
                    Savant system or Crestron Home system.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="coastal-source">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/coastalsource-services.webp"
                        alt=""
                        className="wp-image-2424"
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
                        className="wp-image-2425"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/crestron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/crestron-services.webp"
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
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/audio2-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="smart lightning conrol"
                  src="assets/images/audio2.webp"
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
                  <h2>EASILY MANAGED</h2>

                  <p className="pointsmade homeauto">
                    With a simple voice control or a touch of a button you can
                    create the ultimate lighting atmosphere.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/lutron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/lutron-services.webp"
                        alt=""
                        className="wp-image-2424"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/crestron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/crestron-services.webp"
                        alt=""
                        className="wp-image-2425"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/josh-ai">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/josh-ai-services.webp"
                        alt=""
                        className="wp-image-2426"
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

export default LightingSystems;
