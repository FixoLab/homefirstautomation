import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [subMenuActive2, setSubMenuActive2] = useState(false);
  const [subMenuActive3, setSubMenuActive3] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    setMenuActive(!menuActive);
  };
  const subMenuToggleClass = () => {
    setSubMenuActive(!subMenuActive);
  };
  const subMenuToggleClass2 = () => {
    setSubMenuActive2(!subMenuActive2);
  };
  const subMenuToggleClass3 = () => {
    setSubMenuActive3(!subMenuActive3);
  };

  useEffect(() => {
    function handleWindowScroll() {
      setScrollPosition(window.scrollY);

      // topScroll Class
      const st = window.pageYOffset || document.documentElement.scrollTop;
      setLastScrollTop(st <= 0 ? 0 : st);

      // is-sticky class
      const stickyWrapper = document.getElementById(
        "site-header-sticky-wrapper"
      );
      const scroll = window.scrollY;

      if (scroll > 1) {
        stickyWrapper.classList.add("is-sticky");
      } else {
        stickyWrapper.classList.remove("is-sticky");
      }

      // going-up class
      const header = document.getElementById("site-header");
      if (scrollPosition >= 135) {
        header.classList.add("topscroll");
      } else {
        header.classList.remove("topscroll");
      }
    }

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [scrollPosition, lastScrollTop]);

  return (
    <>
      <div
        id="site-header-sticky-wrapper"
        className="sticky-wrapper"
        style={{ height: "12.25em" }}
      >
        <header id="site-header" className="header-footer-group" role="banner">
          <div className="header-inner section-inner">
            <div className="header-titles-wrapper">
              <button
                aria-label="mini button"
                className={`toggle nav-toggle mobile-nav-toggle ${
                  menuActive ? "active" : ""
                }`}
                onClick={toggleDrawer}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <div className="nav-location">
                <Link aria-label="contact" to="/contact-us">
                  <i className="fas fa-solid fa-location-dot" />
                </Link>
                <a aria-label="Phone Icon" href="tel:4072283000">
                  <i className="fas fa-phone" />
                </a>
              </div>
              <div className="header-titles">
                <div className="site-logo faux-heading">
                  <Link
                    to="/"
                    className="custom-logo-link"
                    rel="home"
                    aria-current="page"
                  >
                    <img
                      width="200"
                      height="40"
                      src="/assets/images/homefirst-automation-logo.webp"
                      className="custom-logo"
                      alt="home automation Logo"
                    />
                  </Link>
                  <span className="screen-reader-text">Homefirst</span>
                </div>
              </div>
            </div>

            <div className="header-navigation-wrapper">
              <nav
                className="primary-menu-wrapper"
                aria-label="Horizontal"
                role="navigation"
              >
                <ul className="primary-menu reset-list-style">
                  <li
                    id="menu-item-1903"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1903"
                  >
                    <Link to="start-your-project">Start Your Project</Link>
                  </li>
                  <li
                    id="menu-item-484"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-459"
                  >
                    <Link to="#">About</Link>
                    <span className="icon"></span>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/about">About</Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/careers">Careers</Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/our-process">Our Process</Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/partners">Partners</Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/partners/interior-designers">
                          Interior Designers
                        </Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/partners/contractors">Contractors</Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/partners/design-build-partners">
                          Design Build Partners
                        </Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/partners/realtors">Realtors</Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/concierge-care-program">
                          Concierge care program
                        </Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/title-insurance-faq">
                          Title insurance faq
                        </Link>
                      </li>
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/budget-calculator">Budget calculator</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-459"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-459"
                  >
                    <Link to="#">Connected Living</Link>
                    <span className="icon"></span>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/indoor-living">Indoor Living</Link>
                      </li>
                      <li
                        id="menu-item-924"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-924"
                      >
                        <Link to="/a-day-in-the-life">A Day in the Life</Link>
                      </li>
                      <li
                        id="menu-item-955"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-955"
                      >
                        <Link to="/connected-home">Connected Home</Link>
                      </li>
                      <li
                        id="menu-item-970"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970"
                      >
                        <Link to="/connected-studio-living">
                          Connected Studio Living
                        </Link>
                      </li>
                      <li
                        id="menu-item-970"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970"
                      >
                        <Link to="/commercial/automation-system">
                          Commercial Solutions: Automation
                        </Link>
                      </li>
                      <li
                        id="menu-item-970"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970"
                      >
                        <Link to="/commercial/audio-visual-system">
                          Commercial Solutions: Audio / Video
                        </Link>
                      </li>
                      <li
                        id="menu-item-970"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970"
                      >
                        <Link to="/commercial/security-system">
                          Commercial Solutions: Security
                        </Link>
                      </li>
                      <li
                        id="menu-item-970"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970"
                      >
                        <Link to="/commercial/technology">
                          Commercial Solutions: Technology
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-459"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-459"
                  >
                    <Link to="#">Services</Link>
                    <span className="icon"></span>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-896"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"
                      >
                        <Link to="/smart-home-automation">
                          Smart Home Automation
                        </Link>
                      </li>
                      <li
                        id="menu-item-924"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-924"
                      >
                        <Link to="/home-theatre">Home Theater</Link>
                      </li>
                      <li
                        id="menu-item-955"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-955"
                      >
                        <Link to="/lighting-systems">Lighting Systems</Link>
                      </li>
                      <li
                        id="menu-item-970"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970"
                      >
                        <Link to="/audio-systems">Audio Solutions</Link>
                      </li>
                      <li
                        id="menu-item-1604"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1604"
                      >
                        <Link to="/smart-security">Smart Security</Link>
                      </li>
                      <li
                        id="menu-item-1603"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1603"
                      >
                        <Link to="/wifi-networking-services">
                          WiFi / Networking
                        </Link>
                      </li>
                      <li
                        id="menu-item-1603"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1603"
                      >
                        <Link to="/golf-simulators">Golf Simulators</Link>
                      </li>
                      <li
                        id="menu-item-1602"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1602"
                      >
                        <Link to="/commercial">Commercial Integration</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1041"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1041"
                  >
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li
                    id="menu-item-1539"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1539"
                  >
                    <Link to="/brands">Brands</Link>
                  </li>
                  <li
                    id="menu-item-1188"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1188"
                  >
                    <Link to="/contact-us">Contact</Link>
                  </li>
                  <li
                    id="menu-item-1193"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1193"
                  >
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li
                    id="menu-item-3288"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3288"
                  >
                    <a aria-label="Phone Icon" href="tel:4072283000">
                      <i className="fas fa-solid fa-phone-flip"></i>407.228.3000
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="nav-drawer"
      >
        <div
          className={`menu-modal cover-modal header-footer-group ${
            menuActive ? "show-modal active" : ""
          }`}
        >
          <div className="menu-modal-inner modal-inner">
            <div className="menu-wrapper">
              <div className="menu-top">
                <button
                  className="toggle close-nav-toggle close-drawer"
                  onClick={toggleDrawer}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>

                <nav
                  className="mobile-menu"
                  aria-label="Mobile"
                  role="navigation"
                >
                  <ul className="modal-menu reset-list-style">
                    <li
                      onClick={toggleDrawer}
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1903"
                    >
                      <div className="ancestor-wrapper">
                        <Link to="/start-your-project">Start Your Project</Link>
                      </div>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-459">
                      <div className="ancestor-wrapper">
                        <Link to="#">About</Link>
                        <button
                          className={`toggle sub-menu-toggle fill-children-current-color ${
                            subMenuActive3 ? "active" : ""
                          }`}
                          onClick={subMenuToggleClass3}
                        >
                          <span className="screen-reader-text">
                            Show sub menu
                          </span>
                          <svg
                            className="svg-icon"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            xmlns="https://www.w3.org/2000/svg"
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                          >
                            <polygon
                              fill=""
                              fillRule="evenodd"
                              points="1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358"
                              transform="translate(-1310 -358)"
                            ></polygon>
                          </svg>
                        </button>
                      </div>
                      <ul
                        onClick={toggleDrawer}
                        className={`sub-menu ${subMenuActive3 ? "active" : ""}`}
                      >
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/about">About</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/careers">Careers</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/our-process">Our Process</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/partners">Partners</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/partners/interior-designers">
                              Interior Designers
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/partners/contractors">Contractors</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/partners/design-build-partners">
                              Design Build Partners
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/partners/realtors">Realtors</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/concierge-care-program">
                              Concierge care program
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/title-insurance-faq">
                              Title insurance faq
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/budget-calculator">
                              Budget calculator
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-459">
                      <div className="ancestor-wrapper">
                        <Link to="#">Connected Living</Link>
                        <button
                          className={`toggle sub-menu-toggle fill-children-current-color ${
                            subMenuActive2 ? "active" : ""
                          }`}
                          onClick={subMenuToggleClass2}
                        >
                          <span className="screen-reader-text">
                            Show sub menu
                          </span>
                          <svg
                            className="svg-icon"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            xmlns="https://www.w3.org/2000/svg"
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                          >
                            <polygon
                              fill=""
                              fillRule="evenodd"
                              points="1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358"
                              transform="translate(-1310 -358)"
                            ></polygon>
                          </svg>
                        </button>
                      </div>
                      <ul
                        onClick={toggleDrawer}
                        className={`sub-menu ${subMenuActive2 ? "active" : ""}`}
                      >
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/indoor-living">Indoor Living</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-924">
                          <div className="ancestor-wrapper">
                            <Link to="/a-day-in-the-life">
                              A Day in the Life
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-955">
                          <div className="ancestor-wrapper">
                            <Link to="/connected-home">Connected Home</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                          <div className="ancestor-wrapper">
                            <Link to="/connected-studio-living">
                              Connected Studio Living
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                          <div className="ancestor-wrapper">
                            <Link to="/commercial/automation-system">
                              Commercial Solutions: Automation
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                          <div className="ancestor-wrapper">
                            <Link to="/commercial/audio-visual-system">
                              Commercial Solutions: Audio / Video
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                          <div className="ancestor-wrapper">
                            <Link to="/commercial/security-system">
                              Commercial Solutions: Security
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                          <div className="ancestor-wrapper">
                            <Link to="/commercial/technology">
                              Commercial Solutions: Technology
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-459">
                      <div className="ancestor-wrapper">
                        <Link to="#">Services</Link>
                        <button
                          className={`toggle sub-menu-toggle fill-children-current-color ${
                            subMenuActive ? "active" : ""
                          }`}
                          onClick={subMenuToggleClass}
                        >
                          <span className="screen-reader-text">
                            Show sub menu
                          </span>
                          <svg
                            className="svg-icon"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            xmlns="https://www.w3.org/2000/svg"
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                          >
                            <polygon
                              fill=""
                              fillRule="evenodd"
                              points="1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358"
                              transform="translate(-1310 -358)"
                            ></polygon>
                          </svg>
                        </button>
                      </div>
                      <ul
                        onClick={toggleDrawer}
                        className={`sub-menu ${subMenuActive ? "active" : ""}`}
                      >
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                          <div className="ancestor-wrapper">
                            <Link to="/smart-home-automation">
                              Smart Home Automation
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-924">
                          <div className="ancestor-wrapper">
                            <Link to="/home-theatre">Home Theater</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-955">
                          <div className="ancestor-wrapper">
                            <Link to="/lighting-systems">Lighting Systems</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                          <div className="ancestor-wrapper">
                            <Link to="/audio-systems">Audio Solutions</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1604">
                          <div className="ancestor-wrapper">
                            <Link to="/smart-security">Smart Security</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1603">
                          <div className="ancestor-wrapper">
                            <Link to="/wifi-networking-services">
                              WiFi / Networking
                            </Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1603">
                          <div className="ancestor-wrapper">
                            <Link to="/golf-simulators">Golf Simulators</Link>
                          </div>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1602">
                          <div className="ancestor-wrapper">
                            <Link to="/commercial">Commercial Integration</Link>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li
                      onClick={toggleDrawer}
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1041"
                    >
                      <div className="ancestor-wrapper">
                        <Link to="/portfolio">Portfolio</Link>
                      </div>
                    </li>
                    <li
                      onClick={toggleDrawer}
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1539"
                    >
                      <div className="ancestor-wrapper">
                        <Link to="/brands">Brands</Link>
                      </div>
                    </li>
                    <li
                      onClick={toggleDrawer}
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1188"
                    >
                      <div className="ancestor-wrapper">
                        <Link to="/contact-us">Contact</Link>
                      </div>
                    </li>
                    <li
                      onClick={toggleDrawer}
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1193"
                    >
                      <div className="ancestor-wrapper">
                        <Link to="/blog">Blog</Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
