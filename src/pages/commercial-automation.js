import React from "react";

const CommercialAutomation = () => {
  return (
    <>
      <div id="site-content">
        <div className="csca">
          <video
            autoPlay
            loop="loop"
            muted
            playsInline=""
            width="300"
            height="150"
          >
            <source
              src="assets/video/commurcial-automation-hero.mp4"
              type="video/mp4"
            />
          </video>
          <div className="csca-content">
            <div className="csca-content-area">
              <div className="csca-icon">
                <svg
                  uk-scrollspy="cls:uk-animation-stroke"
                  id="commercial_automation"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="10 0 79 79"
                  className="uk-scrollspy-inview"
                >
                  <path
                    className="outline"
                    d="M17.4,71h58.9 M57.4,27.7h-21c-2.1,0-3.8,1.7-3.8,3.8V71h28.7V31.5C61.2,29.4,59.5,27.7,57.4,27.7z M52.1,22.8
		H41.6c-2.1,0-3.8,1.7-3.8,3.8v1.1H56v-1.1C56,24.5,54.2,22.8,52.1,22.8z M38.2,35.8h17.3 M38.2,42h17.3 M38.2,48.3h17.3 M38.2,54.5
		h17.3 M65.2,43.8c2.7-1.4,4.5-4,4.5-7s-1.8-5.7-4.5-7 M67.5,47.8c4.2-2.1,7-6.2,7-11s-2.8-8.9-7-11 M28.9,29.7
		c-2.7,1.4-4.5,4-4.5,7s1.8,5.7,4.5,7 M26.6,25.8c-4.2,2.1-7,6.2-7,11s2.8,8.9,7,11 M47.3,64.1h-0.9c-2.1,0-3.8,1.7-3.8,3.8v3h8.6
		v-3C51.2,65.8,49.4,64.1,47.3,64.1z"
                  ></path>
                </svg>
              </div>
              <h1>Commercial Automation</h1>
              <h6>
                IMPROVE BUSINESS OPERATIONS AND EMPLOYEE COLLABORATION WITH
                INTEGRATED AND AUTOMATED CONTROL OF MEDIA, LIGHTING, SHADES AND
                SECURITY.
              </h6>
            </div>
          </div>
        </div>
        <div className="csca-nav">
          <div className="control4-nav">
            <div className="control4-nav-area">
              <div className="nav-area">
                <a href="#1">CONTROL4 OS3</a>
                <a href="#2">WHOLE HOME</a>
                <a href="#3">CLIMATE AND COMFORT</a>
                <a href="#4">SAFETY & SECURITY</a>
                <a href="#5">INTERCOM ANYWHERE</a>
                <a href="#6">UNIVERSAL REMOTE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="extra-padding"></div>
        <div className="post-inner thin commercial-page">
          <div className="entry-content">
            {/* <div className="is-layout-flow wp-block-group homevideo servicespages">
            <div className="wp-block-group__inner-container commercial-automantion-video">
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
                  src="assets/video/commurcial-automation-hero.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="overlay" />

              <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                <div className="wp-block-group__inner-container">
                  <div
                    className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    <div className="wp-block-group__inner-container max-width-hero">
                      <div className="solutions-svg">
                        <svg
                          uk-scrollspy="cls:uk-animation-stroke"
                          id="commercial_automation"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="10 0 79 79"
                          className="uk-scrollspy-inview"
                        >
                          <path
                            className="outline"
                            d="M17.4,71h58.9 M57.4,27.7h-21c-2.1,0-3.8,1.7-3.8,3.8V71h28.7V31.5C61.2,29.4,59.5,27.7,57.4,27.7z M52.1,22.8
		H41.6c-2.1,0-3.8,1.7-3.8,3.8v1.1H56v-1.1C56,24.5,54.2,22.8,52.1,22.8z M38.2,35.8h17.3 M38.2,42h17.3 M38.2,48.3h17.3 M38.2,54.5
		h17.3 M65.2,43.8c2.7-1.4,4.5-4,4.5-7s-1.8-5.7-4.5-7 M67.5,47.8c4.2-2.1,7-6.2,7-11s-2.8-8.9-7-11 M28.9,29.7
		c-2.7,1.4-4.5,4-4.5,7s1.8,5.7,4.5,7 M26.6,25.8c-4.2,2.1-7,6.2-7,11s2.8,8.9,7,11 M47.3,64.1h-0.9c-2.1,0-3.8,1.7-3.8,3.8v3h8.6
		v-3C51.2,65.8,49.4,64.1,47.3,64.1z"
                          ></path>
                        </svg>
                      </div>
                      <h1>Commercial Automation</h1>
                      <div>
                        <p className="minigray">
                          IMPROVE BUSINESS OPERATIONS AND EMPLOYEE COLLABORATION
                          WITH INTEGRATED AND AUTOMATED CONTROL OF MEDIA,
                          LIGHTING, SHADES AND SECURITY.
                        </p>
                      </div>
                      <p>
                        <a aria-label="Scroll down01" href="#1">
                          Room control
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down02" href="#2">
                          Lighting Control
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down03" href="#3">
                          window Treatments
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down04" href="#4">
                          Media Control
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down05" href="#5">
                          NetWorking
                        </a>
                      </p>

                      <p>
                        <a aria-label="Scroll down06" href="#6">
                          Unified Communications & Collaboration
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="control4-nav indoor-living-mobile-nav">
            <div className="control4-nav-area">
              
              <div className="nav-area">
                <a href="#1">Room control</a>
                <a href="#2">Lighting control</a>
                <a href="#3">window Treatments</a>
                <a href="#4">Media Control</a>
                <a href="#5">Networking</a>
                <a href="#6">Unified Communications & Collaboration</a>
              </div>
            </div>
          </div> */}
            <div
              className="is-layout-flex wp-container-16 wp-block-columns alignfull servicesdualcontainer"
              id="1"
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
                    height="770"
                    src="assets/images/commercial-automation-1.webp"
                    alt=""
                    className="wp-image-1715"
                  />
                </figure>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <div
                  className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>Integrated Room Control</h2>

                    <p className="pointsmade homeauto">
                      TRANSFORM YOUR COMPANY’S MOST IMPORTANT ROOMS WITH OFFICE
                      AUTOMATION
                    </p>
                    <ul className="commercial-automation-ul">
                      <li>
                        Operate all the technology from one device using a
                        building automation system
                      </li>
                      <li>
                        Office automation lets you create the ideal environment
                        for meetings and presentations with the tap of a button
                      </li>
                      <li>
                        Prepare and adjust quickly for more efficient use of
                        your Seattle, WA workspaces
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
              id="2"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <figure
                  className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <img
                    width="1197"
                    height="900"
                    src="assets/images/commercial-automation-2.webp"
                    alt=""
                    className="wp-image-846"
                  />
                </figure>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <div
                  className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>Lighting Control</h2>

                    <p className="pointsmade homeauto">
                      HARNESS THE FULL POWER OF NATURAL AND ARTIFICIAL LIGHTING
                    </p>

                    <ul className="commercial-automation-ul">
                      <li>
                        Easily manage lights via keypads, apps or touchpads
                      </li>
                      <li>
                        Minimize costs through occupancy sensors and timers
                      </li>
                      <li>
                        Adjusts lights according to time, function and room
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-27 wp-block-columns alignfull servicesdualcontainer"
              id="3"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <figure
                  className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <img
                    width="2396"
                    height="1600"
                    src="assets/images/commercial-automation-3.webp"
                    alt=""
                    className="wp-image-848"
                  />
                </figure>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <div
                  className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>Motorized Window Treatments</h2>

                    <p className="pointsmade homeauto">
                      REVITALIZE YOUR BUSINESS WITH FLAWLESS CONTROL OF NATURAL
                      LIGHT
                    </p>
                    <ul className="commercial-automation-ul">
                      <li>
                        Embrace sunlight for enhanced comfort and well-being
                      </li>
                      <li>
                        Eliminate heat gain, glare and UV damage to furnishings
                      </li>
                      <li>
                        Designer window treatments available in various fabrics
                        and colors
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
              id="4"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <figure
                  className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <img
                    width="1197"
                    height="900"
                    src="assets/images/commercial-automation-4.webp"
                    alt=""
                    className="wp-image-846"
                  />
                </figure>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <div
                  className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>Media Control</h2>

                    <p className="pointsmade homeauto">
                      EXCEPTIONAL CONTROL OF ALL YOUR MEDIA CONTENT AT A
                      BUTTON’S PRESS
                    </p>

                    <ul className="commercial-automation-ul">
                      <li>
                        Instantly change content or adjust volume from a
                        touchscreen, app or keypad
                      </li>
                      <li>
                        Integrate endless source options including computer,
                        cable and streaming
                      </li>
                      <li>
                        Limit clutter by reducing remotes and locating AV gear
                        in technology closets
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="is-layout-flex wp-container-27 wp-block-columns alignfull servicesdualcontainer"
              id="5"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <figure
                  className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <img
                    width="2396"
                    height="1600"
                    src="assets/images/commercial-automation-5.webp"
                    alt=""
                    className="wp-image-848"
                  />
                </figure>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <div
                  className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="wp-block-group__inner-container">
                    <h2> Networking</h2>

                    <p className="pointsmade homeauto">
                      INTENT-BASED NETWORKS BRIDGE THE GAP BETWEEN BUSINESS AND
                      IT
                    </p>
                    <ul className="commercial-automation-ul">
                      <li>
                        Application-based hardware enhances network reliability
                        and speed
                      </li>
                      <li>
                        Network management software optimizes performance for
                        applications and devices
                      </li>
                      <li>
                        Mitigate threats to security with firewalls, encryption
                        and network security software
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
              id="6"
            >
              <div className="is-layout-flow wp-block-column servicesimages">
                <figure
                  className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <img
                    width="1197"
                    height="900"
                    src="assets/images/commercial-automation-6.webp"
                    alt=""
                    className="wp-image-846"
                  />
                </figure>
              </div>

              <div className="is-layout-flow wp-block-column servicesimages">
                <div
                  className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="wp-block-group__inner-container">
                    <h2>Unified Communications & Collaboration (UCC)</h2>

                    <p className="pointsmade homeauto">
                      WORK TOGETHER FROM ANYWHERE WITH INTEGRATED COMMUNICATION
                      TOOLS
                    </p>

                    <ul className="commercial-automation-ul">
                      <li>
                        Consolidate voice, chat, e-mail, file sharing, video and
                        more into one platform
                      </li>
                      <li>
                        Quickly connect, collaborate and share with staff and
                        clients on virtually any device
                      </li>
                      <li>
                        Integrate premier conferencing hardware from Logitech
                        and Poly that works seamlessly with Zoom, Webex, Teams
                        and Google Meet
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="commercial-automation-bottom">
              <a href="#site-content">
                <i className="fa-solid fa-arrow-up"></i>
              </a>
              <h2>Leverage Technology for Smoother Operations</h2>
              <p className="minigray">
                Want technology that offers a direct ROI? Manage your energy
                use, streamline daily tasks and optimize meeting spaces with an
                integrated technology solution.
              </p>
              <a className="button__primary" href="/contact-us">
                Request a custom solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommercialAutomation;
