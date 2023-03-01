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
                  <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-1-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-1.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-2.webp"
                >
                  <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-2-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-2.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-3.webp"
                >
                         <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-3-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-3.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-4.webp"
                >
                         <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-4-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-4.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-5.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-5-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-5.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-6.webp"
                >
                         <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-6-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-6.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-7.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-7-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-7.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-8.webp"
                >
                        <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-8-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-8.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-31.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-31-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-31.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-10.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-10-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-10.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-11.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-11-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-11.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-12.webp"
                >
                         <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-12-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-12.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-13.webp"
                >
                         <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-13-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-13.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-14.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-14-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-14.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-15.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-15-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-15.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-16.webp"
                >
                         <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-16-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-16.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-17.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-17-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-17.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-18.webp"
                >
                           <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-18-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-18.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-19.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-19-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-19.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-20.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-20-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-20.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-21.webp"
                >
                           <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-21-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-21.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-22.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-22-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-22.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-23.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-23-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-23.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-24.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-24-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-24.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-25.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-25-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-25.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-26.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-26-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-26.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-27.webp"
                >
                       <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-27-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-27.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-28.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-28-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-28.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-29.webp"
                >
                         <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-29-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-29.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-30.webp"
                >
                          <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-30-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-30.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-31.webp"
                >
                       <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-31-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-31.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-32.webp"
                >
                       <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-32-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-32.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-33.webp"
                >
                      <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-33-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-33.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-34.webp"
                >
                      <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-34-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-34.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-35.webp"
                >
                       <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-35-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-35.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-36.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-36-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-36.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-37.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-37-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-37.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-38.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-38-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-38.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-39.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-39-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-39.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-40.webp"
                >
                      <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-40-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-40.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-41.webp"
                >
                    <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-41-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-41.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-42.webp"
                >
                    <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-42-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-42.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-43.webp"
                >
                    <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-43-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-43.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-44.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-44-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-44.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-45.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-45-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-45.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-46.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-46-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-46.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-47.webp"
                >
                      <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-47-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-47.webp"
                    />
                  </picture>
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
                  <Link to="/commercial/audio-visual-system">
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
                      <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-8-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-8.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-37.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-37-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-37.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-10.webp"
                >
                    <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-10-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-10.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-24.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-24-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-24.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-35.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-35-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-35.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-41.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-41-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-41.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-42.webp"
                >
                      <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-42-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-42.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-7.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-7-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-7.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-47.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-47-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-47.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-32.webp"
                >
                      <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-32-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-32.webp"
                    />
                  </picture>
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
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-1-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-1.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-30.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-30-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-30.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-23.webp"
                >
                <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-23-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-23.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-47.webp"
                >
                    <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-47-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-47.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-35.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-35-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-35.webp"
                    />
                  </picture>
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
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-45-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-45.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-4.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-4-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-4.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-13.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-13-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-13.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-20.webp"
                >
                      <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-20-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-20.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-40.webp"
                >
                    <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-40-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-40.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-21.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-21-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-21.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-34.webp"
                >
                    <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-34-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-34.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-43.webp"
                >
                     <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-43-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-43.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-44.webp"
                >
                    <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-44-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-44.webp"
                    />
                  </picture>
                </a>
              </div>
              <div className="portfolio-content-grid-item">
                <a
                  aria-label="lightbox-link"
                  className="uk-inline"
                  href="assets/images/portfolio-lighting-36.webp"
                >
                       <picture>
                    <source
                      srcSet="assets/images/portfolio-lighting-36-mini.webp"
                      media="(max-width: 600px)"
                    />
                    <img
                      width="1800"
                      height="1200"
                      alt=""
                      src="assets/images/portfolio-lighting-36.webp"
                    />
                  </picture>
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
