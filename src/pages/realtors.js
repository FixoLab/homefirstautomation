import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Realtors = () => {
  return (
    <HelmetProvider>
     <Helmet>
        <meta
          name="description"
          content="We here at HomeFirst have client’s asking us for recommendations on Realtors. You can join our list of recommended realtors by simply joining our partner program"
        />
        <title>
        Join HomeFirst's Partner Program for Recommended Realtors
        </title>
      </Helmet>
    <div className="design-build-partners">
      <div id="site-content">
        <div className="post-inner thin ">
          <div className="entry-content">
            <div className="is-layout-flow wp-block-group homevideo servicespages">
              <div className="wp-block-group__inner-container">
                <div
                  className="fullimagetop"
                  style={{
                    backgroundImage: "url(/assets/images/seller6.webp)",
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
                        <h1>REALTORS</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="is-layout-flow wp-block-group serviceswhitebackground">
              <div className="wp-block-group__inner-container">
                <p className="has-text-align-center">
                  Everyone at one point will need a Realtor. Whether it is
                  someone looking for an investment, someone growing a family,
                  or a business looking for a location. Realtors are a vital
                  part of the economy and we want to work with you.
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
                    src="/assets/images/seller1.webp"
                    alt="recommended realtors Orlando"
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
                    src="/assets/images/seller2.webp"
                    alt="Real estate business in Florida"
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
                  data-aos-delay="250"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>INCREASE YOUR BUSINESS</h2>

                    <p className="pointsmade homeauto">
                      We here at HomeFirst have client’s asking us for
                      recommendations on Realtors. You can join our list of
                      recommended realtors by simply joining our partner program
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
                    src="/assets/images/seller3.webp"
                    alt="smart home and business technology"
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
                    src="/assets/images/seller4.webp"
                    alt="smart home business solution"
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
                    <h2>INCREASE YOUR WALLET</h2>

                    <p className="pointsmade homeauto">
                      As a realtor you are sure to see homes and businesses that
                      could use the latest and greatest in smart home and
                      business technology. Well you can become a rep for
                      HomeFirst and create a new line of revenue for
                      your business.
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
                  data-aos-delay="200"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>INCREASE YOUR REPUTATION</h2>

                    <p className="pointsmade homeauto">
                      Realtors need to know everything about their client’s
                      needs and wants. HomeFirst offers smart technology
                      classes that will allow you have a better understanding of
                      your client’s unique needs, and a way to stand out from
                      the competition with unique certifications.
                    </p>

                    <p className="pointsmade homeauto">
                      <Link to="/start-your-project">Create Account</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <figure
                  className="wp-block-image size-large eds-on-scroll eds-scroll-visible "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <img
                    width="1024"
                    height="769"
                    src="/assets/images/seller5.webp"
                    alt="smart home technology classes"
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
                    src="/assets/images/haslam-17.webp"
                    alt=""
                    className="wp-image-1032"
                  />
                </figure>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <div className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-hidden">
                  <div className="wp-block-group__inner-container">
                    <h2>INCREASE YOUR PARTNERSHIPS</h2>

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
    </HelmetProvider>
  );
};

export default Realtors;
