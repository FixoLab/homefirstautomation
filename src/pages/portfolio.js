import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="site-content">
      <div
        className="uk-section-secondary uk-position-relative"
        tm-header-transparent="light"
      >
        <div
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-large uk-flex uk-flex-middle"
          uk-height-viewport="offset-top: true; offset-bottom: 20;"
          style={{
            backgroundImage: "url(assets/images/portfolio-hero.webp)",
          }}
        >
          <div
            className="uk-position-cover"
            style={{
              backgroundImage:
                "linear-gradient(266deg, rgba(8,8,9,0) 0%, rgba(16,23,27,0.8) 60%)",
              backgroundClip: "padding-box",
            }}
          ></div>

          <div className="uk-width-1-1">
            <div className="uk-container uk-container-xlarge uk-position-relative">
              <div
                className="tm-header-placeholder uk-margin-remove-adjacent"
                style={{ height: "101px" }}
              ></div>
              <div
                id="p1"
                className="uk-margin-remove-top tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
                uk-grid=""
              >
                <div className="uk-width-1-1@m uk-first-column">
                  <div className="uk-hidden@s">
                    <br />
                  </div>
                  <h1 className="uk-text-left" style={{ fontWeight: "300" }}>
                    Artfully Crafted Spaces
                  </h1>
                  <div className="uk-panel uk-margin uk-width-large">
                    Designed to blend style and function, explore how our
                    technology would look in your California space. <br />
                    <br />
                  </div>
                  <div className="uk-margin uk-width-xlarge uk-text-left">
                    <a className="button__primary" href="#1">
                      View Gallery
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-inner thin commercial-page portfolio-page">
        <div className="entry-content">
          <div className="alignfull Portfolio-navigation eds-on-scroll eds-scroll-visible">
            <div className="Portfolio-navigation-container">
              <a href="#1">Lighting & shading</a>
              <a href="#2">Audio / Video</a>
              <a href="#3">Home Theater</a>
              <a href="#4">Exterior</a>
            </div>
          </div>

          <div className="portfolio-content alignfull" id="1">
            <div className="connected-living-title-section ">
              <div className="title-inner">
                <h4>LIGHTING AND SHADING</h4>
                <p className="minigray">
                  A well-lit space is a beautiful space. Easily control natural
                  and artificial lighting with a{" "}
                  <Link to="/lighting-systems">smart home lighting system</Link>{" "}
                  that is both comfortable and stylish.
                </p>
              </div>
            </div>

            <div
              className="portfolio-content-grid "
              data-uk-lightbox="animation: slide"
            >
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-1.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-1.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-2.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-2.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-3.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-3.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-4.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-4.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-5.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-5.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-6.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-6.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-7.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-7.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-8.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-8.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-9.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-9.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-10.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-10.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-11.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-11.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-12.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-12.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-13.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-13.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-14.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-14.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-15.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-15.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-16.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-16.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-17.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-17.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-18.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-18.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-19.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-19.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-20.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-20.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-21.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-21.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-22.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-22.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-23.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-23.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-24.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-24.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-25.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-25.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-26.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-26.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-27.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-27.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-28.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-28.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-29.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-29.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-30.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-30.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-31.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-31.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-32.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-32.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-33.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-33.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-34.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-34.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-35.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-35.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-36.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-36.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-37.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-37.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-38.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-38.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-39.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-39.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-40.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-40.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-41.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-41.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-42.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-42.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-43.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-43.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-44.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-44.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-45.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-45.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-46.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-46.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-47.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-47.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-content alignfull" id="2">
            <div className="connected-living-title-section ">
              <div className="title-inner">
                <h4>AUDIO / VIDEO</h4>
                <p className="minigray">
                  Optimize your entertainment with a{" "}
                  <Link to="/commercial-solutions-commercial-audio-video">
                    multi room audio system
                  </Link>{" "}
                  , high-resolution video and gear that blends seamlessly with
                  your home’s décor.
                </p>
              </div>
            </div>

            <div
              className="portfolio-content-grid "
              data-uk-lightbox="animation: slide"
            >
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-8.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-8.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-37.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-37.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-10.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-10.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-24.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-24.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-35.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-35.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-41.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-41.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-42.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-42.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-7.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-7.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-47.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-47.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-32.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-32.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-content alignfull" id="3">
            <div className="connected-living-title-section ">
              <div className="title-inner">
                <h4>HOME THEATER</h4>
                <p className="minigray">
                  Naturally tailored environments for an exhilarating viewing
                  experience that exceeds that of a traditional theater.
                </p>
              </div>
            </div>

            <div
              className="portfolio-content-grid "
              data-uk-lightbox="animation: slide"
            >
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-1.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-1.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-30.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-30.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-23.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-23.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-47.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-47.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-35.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-35.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-content alignfull" id="4">
            <div className="connected-living-title-section ">
              <div className="title-inner">
                <h4>EXTERIOR</h4>
                <p className="minigray">
                  Naturally tailored environments for an exhilarating viewing
                  experience that exceeds that of a traditional theater.
                </p>
              </div>
            </div>

            <div
              className="portfolio-content-grid "
              data-uk-lightbox="animation: slide"
            >
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-45.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-45.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-4.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-4.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-13.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-13.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-20.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-20.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-40.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-40.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-21.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-21.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-34.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-34.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-43.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-43.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-44.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-44.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-36.jpeg"
                >
                  <img
                    src="assets/images/portfolio-lighting-36.jpeg"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="commercial-automation-bottom">
            <a href="#site-content">
              <i className="fa-solid fa-arrow-up"></i>
            </a>
            <h2>EMBRACE A BEAUTIFULLY FUNCTIONAL SPACE</h2>
            <p className="minigray">
              Get More out of Your Technology Without Sacrificing Style
            </p>
            <a className="button__primary" href="/contact-us">
              Transform your space
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
