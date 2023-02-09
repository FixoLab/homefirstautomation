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
                <h2>LIGHTING AND SHADING</h2>
                <p className="minigray">
                  A well-lit space is a beautiful space. Easily control natural
                  and artificial lighting with a{" "}
                  <Link to="/lighting-systems">smart home lighting system</Link>{" "}
                  that is both comfortable and stylish.
                </p>
              </div>
            </div>

            <div
              className="portfolio-content-grid"
              data-uk-lightbox="animation: slide"
            >
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
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
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-2.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-2.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-3.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-3.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-4.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-4.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-5.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-5.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-6.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-6.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-7.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-7.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-8.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-8.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-9.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-9.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-10.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-10.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-11.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-11.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-12.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-12.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-13.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-13.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-14.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-14.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-15.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-15.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-16.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-16.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-17.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-17.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-18.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-18.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-19.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-19.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-20.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-20.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-21.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-21.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-22.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-22.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-23.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-23.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-24.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-24.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-25.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-25.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-26.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-26.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-27.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-27.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-28.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-28.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-29.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-29.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-30.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-30.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-31.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-31.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-32.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-32.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-33.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-33.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-34.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-34.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-35.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-35.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-36.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-36.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-37.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-37.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-38.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-38.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-39.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-39.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-40.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-40.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-41.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-41.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-42.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-42.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-43.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-43.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-44.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-44.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-45.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-45.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-46.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-46.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-47.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-47.webp"
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
                <h2>AUDIO / VIDEO</h2>
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
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-8.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-8.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-37.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-37.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-10.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-10.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-24.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-24.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-35.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-35.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-41.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-41.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-42.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-42.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-7.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-7.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-47.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-47.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-32.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-32.webp"
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
                <h2>HOME THEATER</h2>
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
                  aria-label="lightbox-link"
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
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-30.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-30.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-23.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-23.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-47.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-47.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-35.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-35.webp"
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
                <h2>EXTERIOR</h2>
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
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-45.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-45.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-4.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-4.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-13.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-13.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-20.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-20.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-40.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-40.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-21.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-21.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-34.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-34.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-43.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-43.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-44.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-44.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-36.webp"
                >
                  <img
                    src="assets/images/portfolio-lighting-36.webp"
                    width="1800"
                    height="1200"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="commercial-automation-bottom">
            <a aria-label="lightbox-link" href="#site-content">
              <i className="fa-solid fa-arrow-up"></i>
            </a>
            <h2>EMBRACE A BEAUTIFULLY FUNCTIONAL SPACE</h2>
            <p className="minigray">
              Get More out of Your Technology Without Sacrificing Style
            </p>
            <a
              aria-label="lightbox-link"
              className="button__primary"
              href="/contact-us"
            >
              Transform your space
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
