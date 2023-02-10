import React from "react";
const StartJourney = React.lazy(() => import("../components/start-journey"));

const Savant = () => {
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
                <source src="assets/video/Mainvideo-1.mp4" type="video/mp4" />
              </video>

              <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                <div className="wp-block-group__inner-container">
                  <div className="wp-block-image">
                    <figure className="aligncenter size-large is-resized">
                      <img
                        src="assets/images/savant.webp"
                        alt=""
                        className="wp-image-2104"
                        width="192"
                        height="37"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="is-layout-flow wp-block-group serviceswhitebackground">
            <div className="wp-block-group__inner-container">
              <p>
                Savant was established in 2005 with the objective of giving the
                best involvement with home automation. To us, that implies items
                that are imaginative, simple to utilize, and
                future-accommodating, so our clients will have the option to
                appreciate them for quite a long time.
              </p>

              <p>
                As the main home computerization organization to grasp versatile
                innovation, we saw early that the client experience could reach
                out past the home and open up additional opportunities for
                control.
              </p>

              <p>
                Throughout the long term, our innovation has advanced and our
                organization has developed, however our objective continues as
                before. We’ve become the home computerization brand of decision
                for the world’s most lavish homes, palaces, and even yachts.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="assets/images/savant1-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/savant1.webp"
                    />
                  </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="assets/images/savant2-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/savant2.webp"
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
                  src="assets/images/haslam-15.webp"
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
                  src="assets/video/savant-shades2.mp4"
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
                  <h2>SAVANT LIGHTING</h2>

                  <p className="pointsmade homeauto">
                    Create the perfect mood lighting for events indoors, let
                    guests enjoy extravagant outdoor events, or simply make your
                    life easier with automated savant lighting.
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
                      srcSet="assets/images/savant3-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/savant3.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="assets/images/savant4-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/savant4.webp"
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
                  src="assets/images/haslam-15.webp"
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
                <source src="assets/video/savant-light.mp4" type="video/mp4" />
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
                  <h2>SAVANT SMART HOME AUTOMATION</h2>

                  <p className="pointsmade homeauto">
                    Monitor and Control your smart home with Savant’s easy to
                    use smart system. Whether it be controlling your
                    entertainment systems through one easy to use remote,
                    monitoring and changing your wine cellar from your smart
                    watch, or voice commands to control your home’s security.
                    Savant has a way to do it.
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
                      srcSet="assets/images/savant5-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/savant5.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="assets/images/savant6-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/savant6.webp"
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
                  src="assets/images/haslam-15.webp"
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
                  src="assets/video/savant-remote2.mp4"
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
                  <h2>SAVANT SMART HOME AUTOMATION</h2>

                  <p className="pointsmade homeauto">
                    Monitor and Control your smart home with Savant’s easy to
                    use smart system. Whether it be controlling your
                    entertainment systems through one easy to use remote,
                    monitoring and changing your wine cellar from your smart
                    watch, or voice commands to control your home’s security.
                    Savant has a way to do it.
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
                      srcSet="assets/images/savant7-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/savant7.webp"
                    />
                  </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1915"
                  height="1440"
                  src="assets/images/savant8.webp"
                  alt=""
                  className="wp-image-847"
                />
              </figure>
            </div>
          </div>
          <StartJourney />
        </div>
      </div>
    </div>
  );
};

export default Savant;
