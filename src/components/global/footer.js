/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import FooterContact from "../footer-contact";

const Footer = () => {
  const [footerMenu, setFooterMenu] = useState(false);
  const [footerMenu2, setFooterMenu2] = useState(false);
  const [footerMenu3, setFooterMenu3] = useState(false);

  const footerMenuToggle = () => {
    setFooterMenu(!footerMenu);
    setFooterMenu2(false);
    setFooterMenu3(false);
  };

  const footerMenuToggle2 = () => {
    setFooterMenu2(!footerMenu2);
    setFooterMenu(false);
    setFooterMenu3(false);
  };
  const footerMenuToggle3 = () => {
    setFooterMenu3(!footerMenu3);
    setFooterMenu(false);
    setFooterMenu2(false);
  };

  return (
    <div>
      <div className="footer-nav-widgets-wrapper header-footer-group">
        <div className="footer-inner section-inner">
          <aside className="footer-widgets-outer-wrapper">
            <div className="footer-widgets-wrapper">
              <FooterContact />
              <div className="footer-widgets column-two grid-item">
                <div className="  widget widget_text">
                  <div className="widget-content">
                    <div className="textwidget">
                      <div className="footerlinks">
                        <div className="footerlinks1">
                          <img
                            src="/assets/images/Homefirst_Auto.png"
                            alt="HomeFirst logo"
                            width="200"
                            height="80"
                            loading="lazy"
                          />
                          <br />
                          <p>Corporate Office</p>
                          6735 Conroy Windermere Rd,
                          <br /> Suite 219, Orlando, Florida 32835
                        </div>
                        <div className="footerlinks2">
                          <div className="su-accordion su-u-trim footermenu">
                            <Link to="/start-your-projects">
                              START YOUR PROJECT
                            </Link>
                            <div
                              className={`su-spoiler su-spoiler-style-default su-spoiler-icon-chevron ${
                                footerMenu2 ? "" : "su-spoiler-closed"
                              }`}
                              data-scroll-offset="0"
                              data-anchor-in-url="no"
                              onClick={footerMenuToggle2}
                            >
                              <div
                                className="su-spoiler-title"
                                tabIndex="0"
                                role="button"
                              >
                                <span className="su-spoiler-icon"></span>
                                About
                              </div>
                              <div className="su-spoiler-content su-u-clearfix su-u-trim">
                                <Link to="/about">About</Link>
                                <Link to="/careers">Careers</Link>
                                <Link to="/our-process">Our process</Link>
                                <Link to="/partners">Partners</Link>
                                <Link to="/interior-designers">
                                  Interior Designers
                                </Link>
                                <Link to="/contractors">Contractors</Link>
                                <Link to="/design-build-partners">
                                  Design Build Partners
                                </Link>
                                <Link to="/realtors">Realtors</Link>
                              </div>
                            </div>
                            <div
                              className={`su-spoiler su-spoiler-style-default su-spoiler-icon-chevron ${
                                footerMenu3 ? "" : "su-spoiler-closed"
                              }`}
                              data-scroll-offset="0"
                              data-anchor-in-url="no"
                              onClick={footerMenuToggle3}
                            >
                              <div
                                className="su-spoiler-title"
                                tabIndex="0"
                                role="button"
                              >
                                <span className="su-spoiler-icon"></span>
                                CONNECTED LIVING
                              </div>
                              <div className="su-spoiler-content su-u-clearfix su-u-trim">
                                <Link to="/indoor-living">Indoor Living</Link>
                                <Link to="/a-day-in-the-life">
                                  A Day in the Life
                                </Link>
                                <Link to="/connected-home">Connected Home</Link>
                                <Link to="/connected-studio-living">
                                  Connected Studio Living
                                </Link>
                                <Link to="/commercial-solutions-commercial-automation">
                                  Commercial Solutions: Commercial Automation
                                </Link>
                                <Link to="/commercial-solutions-commercial-audio-video">
                                  Commercial Solutions: Commercial Audio / Video
                                </Link>
                                <Link to="/commercial-solutions-commercial-security">
                                  Commercial Solutions: Security
                                </Link>
                                <Link to="/commercial-solutions-commercial-technology">
                                  Commercial Technology
                                </Link>
                              </div>
                            </div>
                            <div
                              className={`su-spoiler su-spoiler-style-default su-spoiler-icon-chevron ${
                                footerMenu ? "" : "su-spoiler-closed"
                              }`}
                              data-scroll-offset="0"
                              data-anchor-in-url="no"
                              onClick={footerMenuToggle}
                            >
                              <div
                                className="su-spoiler-title"
                                tabIndex="0"
                                role="button"
                              >
                                <span className="su-spoiler-icon"></span>
                                Services
                              </div>
                              <div className="su-spoiler-content su-u-clearfix su-u-trim">
                                <Link to="/smart-home-automation">
                                  Smart Home Automation
                                </Link>
                                <Link to="/home-theater">Home Theater</Link>
                                <Link to="/lighting-systems">
                                  Lighting Control
                                </Link>
                                <Link to="/smart-home-automation">
                                  Multi-Room Music
                                </Link>
                                <Link to="/smart-security">Smart Security</Link>
                                <Link to="/wifi-networking-services">
                                  WiFi / Networking
                                </Link>
                                <Link to="/golf-simulators">
                                  Golf Simulators
                                </Link>
                                <Link to="/audio-systems">
                                  High Performance Audio
                                </Link>
                                <Link to="/commercial-services">
                                  Commercial Integration
                                </Link>
                              </div>
                            </div>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/brands-we-carry">Brands</Link>
                            <Link to="/contact-us">Contact</Link>
                            <Link to="/blog">Blog</Link>
                          </div>
                        </div>
                        <div className="footerlinks3">
                          <div className="review">
                            <Swiper
                              className="mySwiper"
                              autoplay
                              loop
                              modules={[Autoplay]}
                            >
                              <SwiperSlide>
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                </ul>
                                <p className="minigray">
                                  "Kurt went out of his way (literally 120 miles
                                  out of his way) to make sure I was satisfied
                                  with the installation and service. Couldn't
                                  ask for more."
                                </p>
                                <div className="google-icon">
                                  <svg
                                    width="20px"
                                    height="20px"
                                    xmlns="https://www.w3.org/2000/svg"
                                    viewBox="0 0 326667 333333"
                                    shapeRendering="geometricPrecision"
                                    textRendering="geometricPrecision"
                                    imageRendering="optimizeQuality"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                  >
                                    <path
                                      d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                                      fill="#4285f4"
                                    ></path>
                                    <path
                                      d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                                      fill="#34a853"
                                    ></path>
                                    <path
                                      d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                                      fill="#fbbc04"
                                    ></path>
                                    <path
                                      d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                                      fill="#ea4335"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="user">
                                  <p>deion athias</p>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                </ul>
                                <p className="minigray">
                                  "Rick and the team at HomeFirst are fantastic!
                                  Rick took the time to walk me through my A/V
                                  options, helping me find the right equipment
                                  for my budget, all while listening and
                                  understanding. Rick and Kurt did a great job
                                  with installation as well. Careful, focused
                                  and dedicated. I highly recommend HomeFirst!"
                                </p>
                                <div className="google-icon">
                                  <svg
                                    width="20px"
                                    height="20px"
                                    xmlns="https://www.w3.org/2000/svg"
                                    viewBox="0 0 326667 333333"
                                    shapeRendering="geometricPrecision"
                                    textRendering="geometricPrecision"
                                    imageRendering="optimizeQuality"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                  >
                                    <path
                                      d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                                      fill="#4285f4"
                                    ></path>
                                    <path
                                      d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                                      fill="#34a853"
                                    ></path>
                                    <path
                                      d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                                      fill="#fbbc04"
                                    ></path>
                                    <path
                                      d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                                      fill="#ea4335"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="user">
                                  <p>Magic Shaq</p>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                  </li>
                                </ul>
                                <p className="minigray">
                                  "HomeFirst is absolutely the best in service
                                  and customer service! We have used them for 8
                                  + years and have never been disappointed. They
                                  are like family. We are so grateful to have
                                  found them. Highly recommended"
                                </p>
                                <div className="google-icon">
                                  <svg
                                    width="20px"
                                    height="20px"
                                    xmlns="https://www.w3.org/2000/svg"
                                    viewBox="0 0 326667 333333"
                                    shapeRendering="geometricPrecision"
                                    textRendering="geometricPrecision"
                                    imageRendering="optimizeQuality"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                  >
                                    <path
                                      d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                                      fill="#4285f4"
                                    ></path>
                                    <path
                                      d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                                      fill="#34a853"
                                    ></path>
                                    <path
                                      d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                                      fill="#fbbc04"
                                    ></path>
                                    <path
                                      d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                                      fill="#ea4335"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="user">
                                  <p>Flyboyshevy87</p>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-middle-wrapper">
          <div className="footer-middle-area">
            <div className="footer-middle-image">
              <img
                loading="lazy"
                src="assets/images/footer-img-01.webp"
                alt="footer middle"
              />
            </div>
            <div className="footer-middle-image">
              <img
                loading="lazy"
                src="assets/images/footer-img-02.webp"
                alt="footer middle"
              />
            </div>
            <div className="footer-middle-image">
              <img
                loading="lazy"
                src="assets/images/footer-img-03.webp"
                alt="footer middle"
              />
            </div>
            <div className="footer-middle-image">
              <img
                loading="lazy"
                src="assets/images/footer-img-04.webp"
                alt="footer middle"
              />
            </div>
            <div className="footer-middle-image">
              <img
                loading="lazy"
                src="assets/images/footer-img-05.webp"
                alt="footer middle"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="header-footer-group footer-bottom">
        <a aria-label="scroll to top" className="toTop" href="#site-content">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
        <div className="section-inner">
          <ul className="right-footer">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/"
                aria-label="instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/"
                aria-label="linkedin"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/"
                aria-label="facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://houzz.com/"
                aria-label="houzz"
              >
                <i className="fa-brands fa-houzz"></i>
              </a>
            </li>
          </ul>
          <div className="middle-footer">
            <p>&#169; HomeFirst LLC 2023 All rights reserved</p>
          </div>
          <div className="left-footer">
            <p>
              <a target="_blank" rel="noreferrer" href="/sitemap.xml">
                Sitemap
              </a>
              <span>|</span>
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
            <p className="license-number">FL LIC# EC13011053</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
