import React from "react";
import { Link } from "react-router-dom";

const DesignBuildPartners = () => {
  return (
    <div className="design-build-partners">
      <div id="site-content">
        <div className="post-inner thin ">
          <div className="entry-content">
            <div className="is-layout-flow wp-block-group homevideo servicespages">
              <div className="wp-block-group__inner-container">
                <div
                  className="fullimagetop"
                  style={{
                    backgroundImage: "url(assets/images/design-build-partners.webp)",
                    backgroundPosition: "center",
                    height: "65vh",
                  }}
                ></div>

                <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                  <div className="wp-block-group__inner-container">
                    <div
                      className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200"
                    >
                      <div className="wp-block-group__inner-container">
                        <h1>Architects</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="is-layout-flow wp-block-group serviceswhitebackground">
              <div className="wp-block-group__inner-container">
                <p className="has-text-align-center">
                  Architects plan everything before and manage during a
                  residency or businesses creation. From deciding how the flow
                  of a new property will be, to adding additions to already
                  setup properties, Architects are integral to construction, and
                  we want to work with you.
                </p>
              </div>
            </div>

            <div className="is-layout-flex wp-container-8 wp-block-columns alignfull servicesdualcontainer">
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
                    src="assets/images/design1.webp"
                    alt=""
                    className="wp-image-2755"
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
                    src="assets/images/design2.webp"
                    alt=""
                    className="wp-image-2756"
                  />
                </figure>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-12 wp-block-columns alignfull servicesdualcontainer"
              id="1"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <div
                  className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>Boost Your Business</h2>

                    <p className="pointsmade homeauto">
                      Are you looking for new clients? Well we have hundreds of
                      client’s and they are always after recommendations for
                      Architects. Joining the HomeFirst partner program
                      gives you access to them.
                    </p>

                    <p className="pointsmade homeauto">
                      <Link to="/start-your-project">Create Account</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <figure
                  className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="250"
                >
                  <img
                    width="1024"
                    height="769"
                    src="assets/images/design3.webp"
                    alt=""
                    className="wp-image-2757"
                  />
                </figure>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-16 wp-block-columns alignfull servicesdualcontainer"
              id="2"
            >
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
                    src="assets/images/design4.webp"
                    alt=""
                    className="wp-image-2758"
                  />
                </figure>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <div
                  className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="250"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>Boost Your Revenue</h2>

                    <p className="pointsmade homeauto">
                      As an Architect’s Partner you already have a great eye for
                      things that can improve a business or residence. Joining
                      the HomeFirst partner program give you access to a
                      vast database of professionals you can work with and
                      increase your revenue.
                    </p>

                    <p className="pointsmade homeauto">
                      <Link to="/start-your-project">Create Account</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer"
              id="3"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <div
                  className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="250"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>Boost Your Reputation</h2>

                    <p className="pointsmade homeauto">
                      Do you feel you can improve upon your business? HomeFirst offers classes on smart technologies that give
                      you a national accredited certifications. This not only
                      allows you to more easily represent your clients, but
                      gives you an extra step on top of the competition.{" "}
                    </p>

                    <p className="pointsmade homeauto">
                      <Link to="/start-your-project">Create Account</Link>
                    </p>
                  </div>
                </div>
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
                    src="assets/images/design5.webp"
                    alt=""
                    className="wp-image-2759"
                  />
                </figure>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-24 wp-block-columns alignfull servicesdualcontainer"
              id="2"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <figure className="wp-block-image size-large eds-on-scroll eds-scroll-hidden">
                  <img
                    width="1024"
                    height="769"
                    src="assets/images/haslam-17.webp"
                    alt=""
                    className="wp-image-1032"
                  />
                </figure>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <div className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-hidden">
                  <div className="wp-block-group__inner-container">
                    <h2>Boost With Us</h2>

                    <p className="pointsmade homeauto">
                      Using the link below you will be redirected to our contact
                      form to get a hold of us, or if you want it more personal,
                      give us a call. Our CEO will personally talk with you and
                      opportunities available to your businesses.
                    </p>

                    <p className="pointsmade homeauto">
                      <Link to="/start-your-project">Create Account</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignBuildPartners;
