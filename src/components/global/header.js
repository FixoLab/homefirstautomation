import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);

  const menuToggleClass = () => {
    setMenuActive(!menuActive);
  };
  const subMenuToggleClass = () => {
    setSubMenuActive(!subMenuActive);
  };
  return (
    <>
      <div
        id="site-header-sticky-wrapper"
        className="sticky-wrapper"
        style={{ height: "136px" }}
      >
        <header id="site-header" className="header-footer-group" role="banner">
          <div className="header-inner section-inner">
            <div className="header-titles-wrapper">
              <div className="header-titles">
                <div className="site-logo faux-heading">
                  <Link
                    href="/"
                    className="custom-logo-link"
                    rel="home"
                    aria-current="page"
                  >
                    <img
                      width="261"
                      height="90"
                      src="images/Homefirst_Auto.png"
                      className="custom-logo"
                      alt="PROJECT: automate"
                      decoding="async"
                    />
                  </Link>
                  <span className="screen-reader-text">Homefirst</span>
                </div>
              </div>

              <button
                className={`toggle nav-toggle mobile-nav-toggle ${
                  menuActive ? "active" : ""
                }`}
                onClick={menuToggleClass}
              >
                <span className="toggle-inner">
                  <span className="toggle-icon">
                    <svg
                      className="svg-icon"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="7"
                      viewBox="0 0 26 7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M332.5,45 C330.567003,45 329,43.4329966 329,41.5 C329,39.5670034 330.567003,38 332.5,38 C334.432997,38 336,39.5670034 336,41.5 C336,43.4329966 334.432997,45 332.5,45 Z M342,45 C340.067003,45 338.5,43.4329966 338.5,41.5 C338.5,39.5670034 340.067003,38 342,38 C343.932997,38 345.5,39.5670034 345.5,41.5 C345.5,43.4329966 343.932997,45 342,45 Z M351.5,45 C349.567003,45 348,43.4329966 348,41.5 C348,39.5670034 349.567003,38 351.5,38 C353.432997,38 355,39.5670034 355,41.5 C355,43.4329966 353.432997,45 351.5,45 Z"
                        transform="translate(-329 -38)"
                      ></path>
                    </svg>{" "}
                  </span>
                  <span className="toggle-text">Menu</span>
                </span>
              </button>
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
                    <Link to="start-your-project/">Start Your Project</Link>
                  </li>
                  <li
                    id="menu-item-484"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-484"
                  >
                    <Link to="about">About</Link>
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
                        <Link to="#">Smart Home Automation</Link>
                      </li>
                      <li
                        id="menu-item-924"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-924"
                      >
                        <Link to="#">Home Theater</Link>
                      </li>
                      <li
                        id="menu-item-955"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-955"
                      >
                        <Link to="#">Lighting Systems</Link>
                      </li>
                      <li
                        id="menu-item-970"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970"
                      >
                        <Link to="#">Audio Solutions</Link>
                      </li>
                      <li
                        id="menu-item-1604"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1604"
                      >
                        <Link to="#">Smart Security</Link>
                      </li>
                      <li
                        id="menu-item-1603"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1603"
                      >
                        <Link to="wifi-networking-services/">
                          WiFi / Networking
                        </Link>
                      </li>
                      <li
                        id="menu-item-1602"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1602"
                      >
                        <Link to="#">Commercial Integration</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1041"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1041"
                  >
                    <Link to="#">Portfolio</Link>
                  </li>
                  <li
                    id="menu-item-1539"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1539"
                  >
                    <Link to="#">Brands</Link>
                  </li>
                  <li
                    id="menu-item-2848"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2848"
                  >
                    <Link to="#">Partners</Link>
                  </li>
                  <li
                    id="menu-item-1188"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1188"
                  >
                    <Link to="#">Contact</Link>
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
                    <Link to="tel:3104024818">
                      <i className="fas fa-solid fa-phone-flip"></i>310.402.4818
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div
        className={`menu-modal cover-modal header-footer-group ${
          menuActive ? "show-modal active" : ""
        }`}
        data-modal-target-string=".menu-modal"
      >
        <div className="menu-modal-inner modal-inner">
          <div className="menu-wrapper section-inner">
            <div className="menu-top">
              <button
                className="toggle close-nav-toggle fill-children-current-color"
                onClick={menuToggleClass}
                data-toggle-target=".menu-modal"
                aria-expanded="false"
                data-set-focus=".menu-modal"
              >
                <span className="toggle-text">Close Menu</span>
                <svg
                  className="svg-icon"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <polygon
                    fill=""
                    fillRule="evenodd"
                    points="6.852 7.649 .399 1.195 1.445 .149 7.899 6.602 14.352 .149 15.399 1.195 8.945 7.649 15.399 14.102 14.352 15.149 7.899 8.695 1.445 15.149 .399 14.102"
                  ></polygon>
                </svg>{" "}
              </button>

              <nav
                className="mobile-menu"
                aria-label="Mobile"
                role="navigation"
              >
                <ul className="modal-menu reset-list-style">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1903">
                    <div className="ancestor-wrapper">
                      <Link to="#">Start Your Project</Link>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-484">
                    <div className="ancestor-wrapper">
                      <Link href="about">About</Link>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-459">
                    <div className="ancestor-wrapper">
                      <Link to="#">Services</Link>
                      <button
                        className={`toggle sub-menu-toggle fill-children-current-color ${
                          subMenuActive ? "active" : ""
                        }`}
                        onClick={subMenuToggleClass}
                        data-toggle-target=".menu-modal .menu-item-459 > .sub-menu"
                        data-toggle-type="slidetoggle"
                        data-toggle-duration="250"
                        aria-expanded="false"
                      >
                        <span className="screen-reader-text">
                          Show sub menu
                        </span>
                        <svg
                          className="svg-icon"
                          aria-hidden="true"
                          role="img"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
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
                    <ul className={`sub-menu ${subMenuActive ? "active" : ""}`}>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                        <div className="ancestor-wrapper">
                          <Link to="#">Smart Home Automation</Link>
                        </div>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-924">
                        <div className="ancestor-wrapper">
                          <Link to="#">Home Theater</Link>
                        </div>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-955">
                        <div className="ancestor-wrapper">
                          <Link to="#">Lighting Systems</Link>
                        </div>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                        <div className="ancestor-wrapper">
                          <Link to="#">Audio Solutions</Link>
                        </div>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1604">
                        <div className="ancestor-wrapper">
                          <Link to="#">Smart Security</Link>
                        </div>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1603">
                        <div className="ancestor-wrapper">
                          <Link to="wifi-networking-services/">
                            WiFi / Networking
                          </Link>
                        </div>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1602">
                        <div className="ancestor-wrapper">
                          <Link to="#">Commercial Integration</Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1041">
                    <div className="ancestor-wrapper">
                      <Link to="#">Portfolio</Link>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1539">
                    <div className="ancestor-wrapper">
                      <Link to="#">Brands</Link>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2848">
                    <div className="ancestor-wrapper">
                      <Link to="#">Partners</Link>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1188">
                    <div className="ancestor-wrapper">
                      <Link to="#">Contact</Link>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1193">
                    <div className="ancestor-wrapper">
                      <Link to="#">Blog</Link>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3288">
                    <div className="ancestor-wrapper">
                      <Link to="tel:3104024818">
                        <i className="fas fa-phone"></i>310.402.4818
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="menu-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
