import React from "react";
const StartJourney = React.lazy(() => import("../components/start-journey"));

const Portfolio = () => {
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
                <source src="assets/video/haslam-full-1.mp4" type="video/mp4" />
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
                      <h1>HASLAM TERRACE</h1>
                      <p>
                        <a href="#1">INTERIOR LIGHTING</a>
                      </p>
                      <p>
                        <a href="#2">ELECTRIC SHADING</a>
                      </p>
                      <p>
                        <a href="#3">LANDSCAPE LIGHTING</a>
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
                Our Haslam Terrace client has us create a state of the art smart
                home with a focus on cutting edge lighting, security lighting,
                and shading to give as top notch feel for anyone viewing from
                the outside or interior of the residence.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="2000"
                  height="1503"
                  src="assets/images/haslam-3.jpg"
                  alt=""
                  className="wp-image-853"
                />
              </figure>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1024"
                  height="769"
                  src="assets/images/haslam-9.jpg"
                  alt=""
                  className="wp-image-1863"
                />
              </figure>
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
                  src="assets/images/haslam-15.jpg"
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
                <source src="assets/video/haslam-lights.mp4" type="video/mp4" />
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
                  <h2>A KITCHEN MADE FOR ROYALTY</h2>

                  <p className="pointsmade homeauto">
                    Lighting can turn an ordinary kitchen into a great kitchen,
                    so when we install proper lighting to an amazing kitchen it
                    turns into a work of art. Multiple Smart Recessed ceiling
                    lights were installed, and setup up with an overall smart
                    home system that can be individually controlled with button
                    touch or voice commands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="2000"
                  height="1503"
                  src="assets/images/haslam-7.jpg"
                  alt=""
                  className="wp-image-853"
                />
              </figure>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1024"
                  height="769"
                  src="assets/images/haslam-8.jpg"
                  alt=""
                  className="wp-image-1863"
                />
              </figure>
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
                  src="assets/images/haslam-15.jpg"
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
                  src="assets/video/haslam-shades-1.mp4"
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
                  <h2>STUNNING PRIVACY</h2>

                  <p className="pointsmade homeauto">
                    Our client stressed privacy was a key concern so we
                    implemented electric shading to their residence. This
                    allowed them to set their shades to automatically close and
                    rise based on the time of day, or they can have them rise or
                    lower with a simple touch of a button or voice command. This
                    gave them them privacy with class.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="2000"
                  height="1503"
                  src="assets/images/haslam-12.jpg"
                  alt=""
                  className="wp-image-853"
                />
              </figure>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1024"
                  height="769"
                  src="assets/images/haslam-11.jpg"
                  alt=""
                  className="wp-image-1863"
                />
              </figure>
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
                  src="assets/images/haslam-15.jpg"
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
                  src="assets/video/haslam-security-2.mp4"
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
                  <h2>ELEGANT SAFETY</h2>

                  <p className="pointsmade homeauto">
                    We worked with our client to not only provide security for
                    those walking around their multiple pools at night, but also
                    allow the lighting to boost the overall atmosphere outside.
                    All lights slowly change as the day progresses so by
                    nightfall you have the perfect lighting setup. However if
                    our client wants a tad more privacy, all lights can be
                    turned off or dimmed instantly with a touch of a button.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="is-layout-flex wp-container-23 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="931"
                  height="700"
                  src="assets/images/haslam-16.jpg"
                  alt=""
                  className="wp-image-1547"
                />
              </figure>
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
                  src="assets/images/haslam-15.jpg"
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

export default Portfolio;
