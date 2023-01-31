/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IndoorLiving = () => {
  const [windowTop, setWindowTop] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setWindowTop(window.pageYOffset);
    }
    window.addEventListener("load", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rightPosition = 100 - windowTop * 0.025 + "%";
  return (
    <div id="site-content">
      <div className="post-inner thin ">
        <div className="entry-content">
          <div
            className="is-layout-flow wp-block-group homevideo servicespages  commercial-automantion-video"
          >
            <div
              className="wp-block-group__inner-container indoor-living-background"
              style={{
                backgroundImage: "url(assets/images/indoor-1.webp)",
                backgroundPositionX: rightPosition,
              }}
            >
              <div className="overlay" />
              <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                <div className="wp-block-group__inner-container">
                  <div
                    className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    <div className="wp-block-group__inner-container">
                      <h6>INDOOR LIVING</h6>
                      <h1>CAPTURE THE FEELING OF SMARTER LIVING</h1>
                      <p>
                        Discover how smart technology effortlessly blends into
                        the fabric of your Southern California home.
                      </p>

                      <div>
                        <p>
                          <a aria-label="Scroll down01" href="#1">
                            Media Room
                          </a>
                        </p>
                        <p>
                          <a aria-label="Scroll down02" href="#2">
                            Home Theater
                          </a>
                        </p>
                        <p>
                          <a aria-label="Scroll down03" href="#3">
                            Family Room
                          </a>
                        </p>
                        <p>
                          <a aria-label="Scroll down04" href="#4">
                            Bedroom
                          </a>
                        </p>

                        <p>
                          <a aria-label="Scroll down05" href="#5">
                            Bar/Game Room
                          </a>
                        </p>

                        <p>
                          <a aria-label="Scroll down06" href="#6">
                            Whole Home
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="is-layout-flex wp-container-13 wp-block-columns alignfull homedualcontainer">
            <div className="indoor-living-about">
              <div className="is-layout-flow wp-block-column indoor-living-about-box">
                <p className="minigray">Solutions</p>
                <h3 className="">
                  Reimagine How You Enjoy Comfort &amp; Convenience
                </h3>

                <div className="">
                  <p className="minigray">
                    From the bedroom to the wine cellar, smart technology
                    provides the perfect balance of splendor and functionality
                    to every space in your home. Revel in the possibilities
                    below.
                  </p>
                </div>
                <div >
                  <a className="button__primary" aria-label="Scroll down01" href="#1">
                    Explore Spaces
                  </a>
                </div>
              </div>
              <div className="is-layout-flow wp-block-column homedual2 indoor-living-feature">
                <div className="is-layout-flex wp-container-7 wp-block-columns iconsbox">
                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-snowflake"></i>
                    <h3>HOME AUTOMATION</h3>
                    <p className="minigray">
                      Effortless control of all of your home’s technology.
                    </p>
                  </div>

                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-music"></i>
                    <h3>AUDIO / VIDEO</h3>
                    <p className="minigray">
                      Enjoy unprecedented access to high-quality home
                      entertainment.
                    </p>
                  </div>
                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-eye"></i>
                    <h3>SURVEILLANCE</h3>
                    <p className="minigray">
                      Modern security through precise footage and analytics.
                    </p>
                  </div>
                </div>
                <div className="is-layout-flex wp-container-10 wp-block-columns iconsbox">
                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-wifi"></i>
                    <h3>WI-FI / NETWORKING</h3>
                    <p className="minigray">
                      Reliable high-speed internet connectivity for
                      entertainment and control.
                    </p>
                  </div>

                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-house-laptop"></i>
                    <h3>HOME THEATER</h3>
                    <p className="minigray">
                      A luxury theater designed for exceptional quality and
                      comfort.
                    </p>
                  </div>
                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-eye-slash"></i>
                    <h3>HIDDEN TECHNOLOGY</h3>
                    <p className="minigray">
                      Preserve your design with discreet technology solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="1" className="indoor-living-image-section alignfull">
            <div className="title-section">
              <div className="title-inner">
                <div className="section-grid">
                  <div className="grid-item-1">
                    <h4>MEDIA ROOM</h4>
                    <p>
                      Create the perfect environment for entertaining with
                      one-touch control of an immersive audio video
                      entertainment system
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Smart Home Control · Media Control · Lighting Control ·
                      High-Performance Audio · Hidden Audio Video · Universal
                      Remotes · LED Lighting
                    </p>
                  </div>
                  <div className="grid-item-3">
                    <h6>SAMPLE SOLUTIONS</h6>
                    <div className="icon-grid">
                      <div>
                        <i className="fa-regular fa-lightbulb"></i>
                      </div>
                      <div>
                        <i className="fa-brands fa-codepen"></i>
                      </div>
                      <div>
                        <i className="fa-solid fa-house"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/indoor-2.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "65%", left: "18%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">Media Control</h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Effortlessly activate media scenes for any affair, from
                        “Party Music” to “Movie Night” and more. When it’s time,
                        turn everything off in a tap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "44%", left: "39%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      High-Performance Audio
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Delight in audio sources both new and old through a
                        high-fidelity speaker system that creates a beautiful
                        soundscape for any audiophile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "60%", left: "63%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      Universal Remotes
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Activate all of your systems capabilities from a single
                        remote. Streaming your Pandora station or setting the
                        perfect scene for movie night is a simple button press
                        away.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="2" className="indoor-living-image-section alignfull">
            <div className="title-section">
              <div className="title-inner">
                <div className="section-grid">
                  <div className="grid-item-1">
                    <h4>DEDICATED HOME THEATER</h4>
                    <p>
                      A luxury home theater design for exceptional quality and
                      comfort.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Smart Home Control · Media Control · Lighting Control ·
                      High-Performance Audio · Hidden Audio Video · Universal
                      Remotes · LED Lighting
                    </p>
                  </div>
                  <div className="grid-item-3">
                    <h6>SAMPLE SOLUTIONS</h6>
                    <div className="icon-grid">
                      <div>
                        <i className="fa-regular fa-lightbulb"></i>
                      </div>
                      <div>
                        <i className="fa-brands fa-codepen"></i>
                      </div>
                      <div>
                        <i className="fa-solid fa-house"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/indoor-3.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "55%", left: "53%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      High-Performance Audio
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Immerse yourself in distinct surround sound that places
                        you right into the action for a truly realistic viewing
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "27%", left: "66%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">Video Projection</h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Enjoy your favorite films through stunning 4K projection
                        that produces eye-popping color, optimal contrast, and
                        crystal-clear detail every time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "23%", left: "18%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      Acoustic Treatments
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Eliminate muddled, echoey sound with precisely placed
                        acoustic treatments that control reflections and enhance
                        your listening experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="3" className="indoor-living-image-section alignfull">
            <div className="title-section">
              <div className="title-inner">
                <div className="section-grid">
                  <div className="grid-item-1">
                    <h4>FAMILY ROOM</h4>
                    <p>
                      Transform your moments of family fun and relaxation with
                      solutions for enhanced comfort and revelry.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Smart Home Control · Media Control · Lighting Control ·
                      High-Performance Audio · Hidden Audio Video · Universal
                      Remotes · LED Lighting
                    </p>
                  </div>
                  <div className="grid-item-3">
                    <h6>SAMPLE SOLUTIONS</h6>
                    <div className="icon-grid">
                      <div>
                        <i className="fa-regular fa-lightbulb"></i>
                      </div>
                      <div>
                        <i className="fa-brands fa-codepen"></i>
                      </div>
                      <div>
                        <i className="fa-solid fa-house"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/indoor-4.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "62%", left: "45%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      Smart Home Control
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Easily control everything from your favorite movie and
                        music content to lighting and room climate with your
                        mobile device or system remote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "15%", left: "45%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">Lighting Control</h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Craft the perfect lighting for family movie nights, game
                        days, or an afternoon of reading together with
                        custom-tailored scenes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "27%", left: "88%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      Motorized Window Treatments
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Easily adjust your shades and drapes without moving from
                        your couch to bring in natural light for morning
                        relaxation or to avoid sun glare during a movie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="4" className="indoor-living-image-section alignfull">
            <div className="title-section">
              <div className="title-inner">
                <div className="section-grid">
                  <div className="grid-item-1">
                    <h4>BEDROOM</h4>
                    <p>
                      Experience restful slumber and energized mornings with
                      tailored scenes that complement every Newport Beach
                      sunrise and sunset.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Smart Home Control · Media Control · Lighting Control ·
                      High-Performance Audio · Hidden Audio Video · Universal
                      Remotes · LED Lighting
                    </p>
                  </div>
                  <div className="grid-item-3">
                    <h6>SAMPLE SOLUTIONS</h6>
                    <div className="icon-grid">
                      <div>
                        <i className="fa-regular fa-lightbulb"></i>
                      </div>
                      <div>
                        <i className="fa-brands fa-codepen"></i>
                      </div>
                      <div>
                        <i className="fa-solid fa-house"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/indoor-5.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "55%", left: "35%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      Smart Home Control
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Wake up to rising shades and your favorite playlist.
                        Press “Goodnight” to turn out lights, shut off your TV
                        and lower the thermostat—all from your bed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "35%", left: "11%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      Motorized Window Treatments
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Wake up naturally with gradually rising shades in the
                        morning to let in sunlight. In one touch, effortlessly
                        lower shades for privacy and better sleep.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "5%", left: "75%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      Hidden Audio Video
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Enjoy the luxury of an entertainment system without
                        intruding on your bedroom décor with concealed in-wall
                        speakers and mirror or frame TVs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="5" className="indoor-living-image-section alignfull">
            <div className="title-section">
              <div className="title-inner">
                <div className="section-grid">
                  <div className="grid-item-1">
                    <h4>BAR / GAME ROOM</h4>
                    <p>
                      Host the big game with high-performance audio and sleek TV
                      displays that reveal themselves when it’s time to
                      entertain.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Smart Home Control · Media Control · Lighting Control ·
                      High-Performance Audio · Hidden Audio Video · Universal
                      Remotes · LED Lighting
                    </p>
                  </div>
                  <div className="grid-item-3">
                    <h6>SAMPLE SOLUTIONS</h6>
                    <div className="icon-grid">
                      <div>
                        <i className="fa-regular fa-lightbulb"></i>
                      </div>
                      <div>
                        <i className="fa-brands fa-codepen"></i>
                      </div>
                      <div>
                        <i className="fa-solid fa-house"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/indoor-6.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "35%", left: "14%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title"> Media Control </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Easily switch up the entertainment from Netflix to
                        Playstation and more with one-touch control of your
                        4K-compatible video sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "27%", left: "66%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">Lighting Control</h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Transform the ambiance to complement any get-together,
                        from a lavish cocktail party to a relaxing afternoon of
                        playing pool.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "42%", left: "40%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      High-Performance Audio
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Dramatically elevate your listening experience with
                        striking multi-channel audio that envelops you and your
                        guests in your favorite music while you entertain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="6" className="indoor-living-image-section alignfull">
            <div className="title-section">
              <div className="title-inner">
                <div className="section-grid">
                  <div className="grid-item-1">
                    <h4>WHOLE HOME</h4>
                    <p>
                      Create the perfect environment for entertaining with
                      one-touch control of an immersive audio video
                      entertainment system
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Smart Home Control · Media Control · Lighting Control ·
                      High-Performance Audio · Hidden Audio Video · Universal
                      Remotes · LED Lighting
                    </p>
                  </div>
                  <div className="grid-item-3">
                    <h6>SAMPLE SOLUTIONS</h6>
                    <div className="icon-grid">
                      <div>
                        <i className="fa-regular fa-lightbulb"></i>
                      </div>
                      <div>
                        <i className="fa-brands fa-codepen"></i>
                      </div>
                      <div>
                        <i className="fa-solid fa-house"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/indoor-7.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "62%", left: "35%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">Lighting Control</h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Set the mood in any room or throughout your entire home
                        with automated scenes to suit the perfect occasion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "8%", left: "56%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title"> Smart Security </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Monitor your property live from any location. Remotely
                        disarm your home to let in visitors, activate your home
                        once they leave, and <Link to="">receive alerts</Link>
                        when unwanted activity is detected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "70%", left: "50%" }}
              >
                <i className="fa-solid fa-plus"></i>
              </a>
              <div
                style={{
                  width: "300px",
                }}
                uk-drop="pos: top-center; auto-update: false;"
                className="uk-drop"
              >
                <div className="csh-card">
                  <div className="csh-card-content">
                    <h3 className="csh-card-content-title">
                      Automated Door Locks
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                        Manage every entry point throughout your estate whether
                        you’re at home or away to let in guests and to secure
                        your property.
                      </p>
                    </div>
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

export default IndoorLiving;
