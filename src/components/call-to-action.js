/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CallToAction = () => {
  return (
    <div className="is-layout-flex wp-container-42 wp-block-columns alignfull servicesdualcontainer">
      <div className="is-layout-flow wp-block-column servicesimages homeprojectdisplay">
        <picture
          className="wp-block-image"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <source
            srcSet="assets/images/project1-a-mini.webp"
            media="(max-width: 600px)"
          />
          <img alt="smart house automation systems" src="assets/images/project1-a.webp" />
        </picture>
        <div
          className="is-layout-flow wp-block-group serviceswhitebackground eds-on-scroll eds-scroll-visible"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="wp-block-group__inner-container bottom">
            <h2 className="has-text-align-center">
              Miami Home Automation Project
            </h2>
            <p className="has-text-align-center pointsmade homeauto">
              Working with our client’s strict idea for a new age home, together
              we worked to create something extraordinary. We applied the upmost
              sophistication to create an outdoor environment that will allow
              him to entertain guests with a view, or have a relaxing night at
              home. Because we value our client’s privacy above all else, this
              project was only shared after being granted permission to do so.
            </p>

            <p className="has-text-align-center pointsmade homeauto">
              <a href="#">View Project Overview</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
