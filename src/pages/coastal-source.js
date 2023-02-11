import React from "react";
const StartJourney = React.lazy(() => import("../components/start-journey"));

const CoastalSource = () => {
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
                <source
                  src="assets/video/coastalsource-main1.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                <div className="wp-block-group__inner-container">
                  <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                    <div className="wp-block-group__inner-container">
                      <div className="wp-block-image">
                        <figure className="aligncenter size-full is-resized">
                          <img
                            src="assets/images/mainlogo.webp"
                            alt=""
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
                Coastal Source is a landscape lighting and audio company that
                has built a reputation with over 50 years in the business. This
                has allowed them to create a real world laboratory and have one
                of the worlds best understandings for the challenges with your
                landscape lighting and audio needs. Coastal Source is not the
                cheapest option around, but it is the best, and to further
                iterate that, all Coastal Source outdoor lighting products come
                with a lifetime warrant.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="assets/images/coastalsource3-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/coastalsource3.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="assets/images/coastalsource2-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/coastalsource2.webp"
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
                <source src="assets/video/coastalsource-lighting.mp4" type="video/mp4" />
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
                  <h2>COASTAL SOURCE LANDSCAPE LIGHTING</h2>

                  <p className="pointsmade homeauto">
                  Coastal Source understands that as outdoor living becomes a forefront to property owners, outdoor lighting is important. Outdoor lighting isn’t just an investment into the enjoyment of yourself and the ones you love ,but a way to increase property value via curb appeal and safety.
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
                      srcSet="assets/images/coastalsource4-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/coastalsource4.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="assets/images/coastalsource5-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/coastalsource5.webp"
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
                <source src="assets/video/coastalsource-audio.mp4" type="video/mp4" />
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
                  <h2>COASTAL SOURCE OUTDOOR AUDIO</h2>

                  <p className="pointsmade homeauto">
                  Don’t let your home be the only place with top tier sound quality. Expand your audio all around your house, literally. Coastal Source can integrate outdoor audio solutions into your existing audio system, or create a complete custom setup.
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
                      srcSet="assets/images/coastalsource6-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/coastalsource6.webp"
                    />
                  </picture>
            </div>
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="assets/images/coastalsource7-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/coastalsource7.webp"
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
                <source src="assets/video/coastalsource-system2.mp4" type="video/mp4" />
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
                  <h2>COASTAL SOURCE SYSTEMS</h2>

                  <p className="pointsmade homeauto">
                  With top tier outdoor lighting and audio, you need top tier systems to control it. Coastal Source software systems allow you to control all your lights with a push of a button on your phone, a voice command to your intercom, or simply setup everything to work based on the time of day.
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
                      srcSet="assets/images/coastalsource1b-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/coastalsource1b.webp"
                    />
                  </picture>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
            <picture className="wp-block-image"   data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200">
                    <source
                      srcSet="assets/images/coastalsource8-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                       width="2000"
                       height="1503"
                      alt=""
                      src="assets/images/coastalsource8.webp"
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

export default CoastalSource;
