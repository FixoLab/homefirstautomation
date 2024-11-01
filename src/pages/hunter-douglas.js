import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const StartJourney = React.lazy(() => import("../components/start-journey"));

const HunterDouglas = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta
          name="description"
          content="Create the perfect mood for your home, business, or event with Hunter Douglas. Enjoy the privacy, energy-efficiency, and safety of Hunter Douglas. Contact us today."
        />
        <title>
        Experience Privacy, Efficiency, and Safety with Hunter Douglas
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
                  src="/assets/video/hunterdouglas-intro.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/video/hunterdouglas-intro.oggtheora.ogv"
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
                Hunter Douglas combines privacy, with energy efficient and
                safety to create the perfect mood for whatever situation you
                want. Treat your windows to the best possible experience and
                enhance your home, business, or event. Hunter Douglas also comes
                with a lifetime warrant on all products.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/hunterdouglas7-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="Hunter Douglas dealers   "
                      src="/assets/images/hunterdouglas7.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/hunterdouglas8-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="Hunter Douglas Window Treatment"
                      src="/assets/images/hunterdouglas8.webp"
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
                  src="/assets/video/hunterdouglas-homeshades.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/video/hunterdouglas-homeshades.oggtheora.ogv"
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
                  <h2>HUNTER DOUGLAS RESIDENTIAL SHADING</h2>

                  <p className="pointsmade homeauto">
                    A great shading system isn’t just for dimming the sun
                    anymore. With the next generation of shading things,
                    everything is now automated by electric shades. These give
                    you a professional look from inside your home, and curb
                    appeal to others passing by. Plus they come with multiple
                    safety and automated features to save you money and keep
                    your loved ones safe.
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
                      srcSet="/assets/images/hunterdouglas1-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="Hunter Douglas shading"
                      src="/assets/images/hunterdouglas1.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/hunterdouglas2-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="Residential shading"
                      src="/assets/images/hunterdouglas2.webp"
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
                  alt="Hunter Douglas shading system"
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
                  src="/assets/video/hunterdouglas-shadingsystem.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/video/hunterdouglas-shadingsystem.oggtheora.ogv"
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
                  <h2>HUNTER DOUGLAS SHADING SYSTEM</h2>

                  <p className="pointsmade homeauto">
                    Hunter Douglas has spent years perfecting the ultimate
                    shading software. Set shades to automatically drop based on
                    the current heat of your system, or time of the day. Or
                    maybe you simply want privacy, and you can easily click a
                    button on your phone to open or close all your shades
                    throughout your residence or business.
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
                      srcSet="/assets/images/hunterdouglas3-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="Hunter Douglas shading system"
                      src="/assets/images/hunterdouglas3.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/hunterdouglas4-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="window treatment services"
                      src="/assets/images/hunterdouglas4.webp"
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
                  src="/assets/video/hunterdouglas-officeshading.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/video/hunterdouglas-officeshading.oggtheora.ogv"
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
                  <h2>HUNTER DOUGLAS COMMERCIAL SHADING</h2>

                  <p className="pointsmade homeauto">
                    Hunter Douglas Electric Shading isn’t just for residential
                    homes, they also specialize in commercial grade shading.
                    From a small business shop, to a multi level building, they
                    have the shading that can fit within your budget and
                    expectations. Also remember with their top of the line
                    motorized shading system everything can be automated.
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
                      srcSet="/assets/images/hunterdouglas5-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="Hunter Douglas commercial shading"
                      src="/assets/images/hunterdouglas5.webp"
                    />
                  </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="/assets/images/hunterdouglas6-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt="best commercial shading services"
                      src="/assets/images/hunterdouglas6.webp"
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

export default HunterDouglas;
