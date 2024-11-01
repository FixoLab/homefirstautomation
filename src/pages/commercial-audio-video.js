import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const CommercialAudioVideo = () => {
  return (
    <HelmetProvider>
       <Helmet>
        <meta
          name="description"
          content="Get the best automated commercial audio and video solutions tailored to your needs. We offer a comprehensive range of services to meet all your business requirements."
        />
        <title>
        Commercial Audio Video & Automation Solutions | Homefirst
        </title>
      </Helmet>
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
            src="/assets/video/commercial-audio-video-hero.mp4"
            type="video/mp4"
          />
          <source
            src="/assets/video/commercial-audio-video-hero.oggtheora.ogv"
            type="video/ogg"
          />
        </video>
        <div className="uk-position-cover" style={{backgroundColor: "rgba(0, 0, 0, 0)"}}></div>
        <div className="csca-content">
          <div className="csca-content-area">
            <div className="csca-icon">
              <svg
                uk-scrollspy="cls:uk-animation-stroke"
                id="commercial_automation"
                xmlns="https://www.w3.org/2000/svg"
                xmlnsXlink="https://www.w3.org/1999/xlink"
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
            <h1>Commercial Audio/Video</h1>
            <h6>
              ENGAGE STAFF AND CLIENTELE WITH STATE-OF-THE-ART AUDIOVISUAL
              SOLUTIONS THAT BRING ATTENTION TO YOUR BRAND AND HELP STREAMLINE
              MEETINGS AND PRESENTATIONS.
            </h6>
          </div>
        </div>
      </div>
      <div className="csca-nav">
        <div className="control4-nav">
          <div className="control4-nav-area">
            <div className="nav-area">
              <a href="#1">Distributed Audio</a>
              <a href="#2">Distributed Video</a>
              <a href="#3">Video Conferencing</a>
              <a href="#4">Intercom Systems</a>
              <a href="#5">Video Wall</a>
              <a href="#6">Hidden Audio Video</a>
            </div>
          </div>
        </div>
      </div>
      <div className="extra-padding"></div>
      <div className="post-inner thin commercial-page">
        <div className="entry-content">
          <div
            className="is-layout-flex wp-container-16 wp-block-columns alignfull servicesdualcontainer"
            id="1"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
            <picture
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  className="wp-block-image"
                >
                  <source
                    srcSet="/assets/images/commercial-audio-video-1-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                   width="1197"
                   height="900"
                   src="/assets/images/commercial-audio-video-1.webp"
                    alt="Distributed Commercial Audio Systems"
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
                  <h2>Distributed Audio</h2>

                  <p className="pointsmade homeauto">
                    EFFORTLESSLY SEND MUSIC THROUGHOUT YOUR FACILITY WITH
                    CENTRALIZED CONTROL OF MEDIA SOURCES
                  </p>
                  <ul className="commercial-automation-ul">
                    <li>
                      Control all zones and groups from one interface for
                      instant audio control
                    </li>
                    <li>
                      Many size, style and color options ensure you will have
                      the right audio for every zone
                    </li>
                    <li>
                      Both interior and exterior solutions for new-construction
                      and retrofit projects
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
              <picture
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  className="wp-block-image"
                >
                  <source
                    srcSet="/assets/images/commercial-audio-video-2-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                   width="1197"
                   height="900"
                   src="/assets/images/commercial-audio-video-2.webp"
                    alt="Commercial Video Installation "
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
                  <h2> Distributed Video</h2>

                  <p className="pointsmade homeauto">
                    INSTANTLY DELIVER CONTENT TO ANY NUMBER OF DISPLAYS WITH 4K
                    VIDEO SWITCHING TECHNOLOGY
                  </p>

                  <ul className="commercial-automation-ul">
                    <li>
                      AV-over-IP solutions distribute media sources to each
                      display regardless of distance
                    </li>
                    <li>
                      Scalable and modular matrix systems accommodate your
                      projects’ changing needs
                    </li>
                    <li>
                      High-speed ethernet cabling to each display ensures
                      control and 4K video functionality
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
            <picture
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  className="wp-block-image"
                >
                  <source
                    srcSet="/assets/images/commercial-audio-video-3-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                   width="1197"
                   height="900"
                   src="/assets/images/commercial-audio-video-3.webp"
                    alt="Video Conferencing"
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
                  <h2>Video Conferencing</h2>

                  <p className="pointsmade homeauto">
                    MAKE COLLABORATION THE HEART OF YOUR FACILITY WITH
                    INTERACTIVE VIDEO CONFERENCING
                  </p>
                  <ul className="commercial-automation-ul">
                    <li>
                      Reliably connect remote staff and clients with your
                      in-house team in the Seattle, WA area{" "}
                    </li>
                    <li>
                      High-definition commercial AV systems build better trust
                      with staff and clients{" "}
                    </li>
                    <li>
                      Custom background noise cancellation and mic targeting for
                      clear audio during video conferencing
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
            <picture
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  className="wp-block-image"
                >
                  <source
                    srcSet="/assets/images/commercial-audio-video-4-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                   width="1197"
                   height="900"
                   src="/assets/images/commercial-audio-video-4.webp"
                    alt="Intercom system"
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
                  <h2>Intercom Systems</h2>

                  <p className="pointsmade homeauto">
                    COMMUNICATE WITH VISITORS OR STAFF THROUGHOUT YOUR PROPERTY
                    AT THE PRESS OF A BUTTON
                  </p>

                  <ul className="commercial-automation-ul">
                    <li>
                      Communicate with Visitors or Staff Throughout Your
                      Property at the Press of a Button
                    </li>
                    <li>
                      Instantly notify your entire staff of an announcement or
                      emergency
                    </li>
                    <li>
                      Real-time alerts and built-in video cameras provide better
                      peace of mind
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
            <picture
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  className="wp-block-image"
                >
                  <source
                    srcSet="/assets/images/commercial-audio-video-5-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                   width="1197"
                   height="900"
                   src="/assets/images/commercial-audio-video-5.webp"
                    alt="video wall"
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
                  <h2>Video Wall</h2>

                  <p className="pointsmade homeauto">
                    DAZZLE CLIENTS AND PATRONS WITH LARGER-THAN-LIFE DISPLAYS
                    FOR VIDEO AND GRAPHICS
                  </p>
                  <ul className="commercial-automation-ul">
                    <li>
                      Promote your brand and relay messaging with impactful 4K
                      visual designs
                    </li>
                    <li>
                      Experience crystal-clear image brightness and quality in
                      any setting
                    </li>
                    <li>
                      Flexible mounting and narrow bezels for seamless visuals
                      at any scale
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
            <picture
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  className="wp-block-image"
                >
                  <source
                    srcSet="/assets/images/commercial-audio-video-6-mini.webp"
                    media="(max-width: 600px)"
                  />
                  <img
                   width="1197"
                   height="900"
                   src="/assets/images/commercial-audio-video-6.webp"
                    alt="commercial audio video installation company"
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
                  <h2>Hidden Audio Video</h2>

                  <p className="pointsmade homeauto">
                    REDUCE AUDIO AND VIDEO CLUTTER FOR A MORE REFINED INTERIOR
                    DÉCOR
                  </p>

                  <ul className="commercial-automation-ul">
                    <li>
                      Invisible architectural speakers hide within walls and
                      ceilings for easy video conferencing and more
                    </li>
                    <li>
                      Televisions easily vanish behind works of art or elegant
                      mirrors
                    </li>
                    <li>
                      Eliminate the need for commercial AV gear in each room of
                      your Seattle, WA workplace
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
            <h2>Elevate Business Performance and Creativity with HomeFirst</h2>
            <p className="minigray">
              Elevate Business Performance and Creativity with HomeFirst
            </p>
            <a className="button__primary" href="/contact-us">
              Connect with our AV specialist today
            </a>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default CommercialAudioVideo;
