import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
const CallToAction = React.lazy(() => import("../components/call-to-action"));

const HomeTheater = () => {
  return (
    <HelmetProvider>
     <Helmet>
        <meta
          name="description"
          content="Looking for a top tier home theater system in Orlando, Florida? Let our expert team of home theater installers make your dreams a reality. Contact us today."
        />
        <title>
        Home Theatre Installation in Orlando, Florida | Homefirst
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
                  src="assets/video/theater-services-final.mp4"
                  type="video/mp4"
                />
                <source
                  src="assets/video/theater-services-final.oggtheora.ogv"
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
                      <h1>HOME THEATER</h1>

                      <p>
                        <a aria-label="Scroll down01" href="#1">
                          Kitchen
                        </a>
                      </p>
                      <p>
                        <a aria-label="Scroll down02" href="#2">
                          Lighting
                        </a>
                      </p>
                      <p>
                        <a aria-label="Scroll down03" href="#3">
                          Shading
                        </a>
                      </p>
                      <p>
                        <a aria-label="Scroll down04" href="#4">
                          Audio
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down05" href="#5">
                          Theater
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down06" href="#6">
                          Security
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
                A great movie can only be increased by a great home theater
                installation. This includes audio, visuals, and the smart home
                experience. Find out how we can blend a top tier home theater
                system seamlessly into your Orlando, Florida property.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/theater18-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                    width="1197"
                    height="900"
                  alt="home theater installation orlando"
                  src="assets/images/theater18.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250">
                <source
                  srcSet="assets/images/theater19-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="Outdoor Smart Theater Systems"
                  src="assets/images/theater19.webp"
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
                  srcSet="assets/images/theater10-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="smart kitchen"
                  src="assets/images/theater10.webp"
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
                  <h2>KITCHEN</h2>

                  <p className="pointsmade homeauto">
                    A person can spend more than 10% of their life in the
                    kitchen. Why not enjoy it to the maximum. Have us add in
                    audio and visual systems that are hidden from the eye. With
                    a simple click your picture turns into a TV, your cabinets
                    start playing your favorite music, and your dinning
                    experience is elevated.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.webp"
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
            className="is-layout-flex wp-container-16 wp-block-columns alignfull servicesdualcontainer"
            id="2"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/theater5-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="smart bedroom"
                  src="assets/images/theater5.webp"
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
                  <h2>BEDROOM</h2>

                  <p className="pointsmade homeauto">
                    Wake up to your favorite news segment playing, or just lay
                    the day away watching all the latest movies. The option is
                    yours. Our job is to make it as comfortable, audio stunning,
                    and visually stunning as possible.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.webp"
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
            className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="3"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/theater10-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="smart kitchen"
                  src="assets/images/theater10.webp"
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
                  <h2>LIVING ROOM</h2>

                  <p className="pointsmade homeauto">
                    Have your living room work with only the top end audio and
                    visual settings. We at HomeFirst can mold any living room
                    into a state of the art home theater setup.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/lutron">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/lutron-services-1.webp"
                        alt=""
                        className="wp-image-2424"
                      />
                    </Link>
                  </figure>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/hunter">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/hunter-douglas-services.webp"
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
          <div className="is-layout-flex wp-container-23 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/theater14-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="home theater control systems"
                  src="assets/images/theater14.webp"
                />
              </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250">
                <source
                  srcSet="assets/images/theater6-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="Room Control system"
                  src="assets/images/theater6.webp"
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
                  srcSet="assets/images/theater2-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="Outdoor Smart Theater "
                  src="assets/images/theater2.webp"
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
                  <h2>GAME ROOM</h2>

                  <p className="pointsmade homeauto">
                    Want a private, public, or retail game room? We can create
                    that theater system. We will work with our design team, or
                    yours to create something that is visually stunning, and
                    easy for all your guests to interact with.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.webp"
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
            className="is-layout-flex wp-container-31 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="5"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image" data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                <source
                  srcSet="assets/images/theater16-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="theatre room"
                  src="assets/images/theater16.webp"
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
                  <h2>THEATER ROOM</h2>

                  <p className="pointsmade homeauto">
                    Create the ultimate viewing experience for you home. Have us
                    design and build a theater room that nothing can come close
                    to. Or have us upgrade your current system with all the
                    latest and greatest in audio, visual, and smart
                    technologies.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.webp"
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
                  srcSet="assets/images/theater3-mini.webp"
                  media="(max-width: 600px)"
                />
                <img
                   width="1197"
                   height="900"
                  alt="outdoor theater"
                  src="assets/images/theater3.webp"
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
                  <h2>OUTDOOR THEATER</h2>

                  <p className="pointsmade homeauto">
                    Watch your videos in style with an outdoor theater system.
                    These systems can be customized for any weather condition.
                    From our Sunny Orlando Summers to our all day rain sessions.
                    Our outdoor theater systems can do it all.
                  </p>

                  <figure className="wp-block-image size-large servicebrands">
                    <Link to="/brands/control-4">
                      <img
                        width="180"
                        height="180"
                        src="assets/images/control4-services.webp"
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
          <CallToAction />
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default HomeTheater;
