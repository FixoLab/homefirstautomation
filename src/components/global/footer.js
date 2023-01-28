import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterContact from "../footer-contact";

const api_domain = process.env.REACT_APP_DOMAIN;

const Footer = () => {
  const [footerMenu, setFooterMenu] = useState(false);
  const [data, setData] = useState([]);

  const footerMenuToggle = () => {
    setFooterMenu(!footerMenu);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${api_domain}/wp-json/wp/v2/posts`);
        setData(result.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <>
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
                          <Link aria-label="Location" to="/#">
                            <img
                              src="/assets/images/Homefirst_Auto.png"
                              alt="project automate logo"
                              width="200"
                              height="80"
                            />
                          </Link>
                          <br />
                          <Link aria-label="Location" to="/#">
                            <p>Corporate Office</p>
                            6735 Conroy Windermere Rd, Suite 219, Orlando,
                            Florida 32835
                          </Link>
                        </div>
                        <div className="footerlinks2">
                          <div className="su-accordion su-u-trim footermenu">
                            <Link to="/start-your-projects">START YOUR PROJECT</Link>
                            <Link to="/about">About</Link>
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
                                <Link to="/audio-systems">
                                  High Performance Audio
                                </Link>
                                <Link to="/commercial-services">
                                  Commercial Integration
                                </Link>
                              </div>
                            </div>
                            <Link to="/portfolio">Gallery</Link>
                            <Link to="/brands-we-carry">Brands</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/contact-us">Contact</Link>
                          </div>
                        </div>
                        <div className="footerlinks3">
                          <div className="su-posts su-posts-default-loop">
                            {data.slice(0, 5).map((blogs) => (
                              <div
                                key={blogs.id}
                                id="su-post-3788"
                                className="su-post"
                              >
                                <h2 className="su-post-title">
                                  <Link
                                    aria-label={blogs.slug}
                                    to={`blog/${blogs.slug}`}
                                  >
                                    {blogs.title.rendered}
                                  </Link>
                                </h2>
                              </div>
                            ))}
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
      <footer
        id="site-footer"
        role="contentinfo"
        className="header-footer-group"
      >
        <div className="section-inner">
          <div className="footer-credits">
            <p className="footer-copyright">
              &copy; HomeFirst LLC 2023 All rights reserved
            </p>
          </div>
          <a aria-label="Scroll Top" className="to-the-top" href="#site-header">
            <span className="to-the-top-long">
              To the top
              <span className="arrow" aria-hidden="true">
                ↑
              </span>
            </span>
            <span className="to-the-top-short">
              Up
              <span className="arrow" aria-hidden="true">
                ↑
              </span>
            </span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
