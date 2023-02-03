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
                                  <i className="icon-link-google"></i>
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
                                  <i className="icon-link-google"></i>
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
                                  <i className="icon-link-google"></i>
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
              <img src="assets/images/footer-img-01.webp" alt="footer middle" />
            </div>
            <div className="footer-middle-image">
              <img src="assets/images/footer-img-02.webp" alt="footer middle" />
            </div>
            <div className="footer-middle-image">
              <img src="assets/images/footer-img-03.webp" alt="footer middle" />
            </div>
            <div className="footer-middle-image">
              <img src="assets/images/footer-img-04.webp" alt="footer middle" />
            </div>
            <div className="footer-middle-image">
              <img src="assets/images/footer-img-05.webp" alt="footer middle" />
            </div>
          </div>
        </div>
      </div>
      <footer className="header-footer-group footer-bottom">
        <div className="section-inner">
          <ul className="right-footer">
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-houzz"></i>
              </a>
            </li>
          </ul>
          <div className="middle-footer">
            <p>&#169; HomeFirst LLC 2023 All rights reserved</p>
          </div>
          <div className="left-footer">
            <p>
              <a target="_blank" href="/sitemap.xml">
                Sitemap
              </a>
              <a href="/privacy-policy">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
