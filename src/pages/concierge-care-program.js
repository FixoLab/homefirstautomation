import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/concierge-care.css"

const ConciergeCareProgram = () => {
  return (
    <>
      <div className="uk-section-default uk-light uk-position-relative">
        <div
          style={{
            backgroundSize: "3000px 1688px",
            backgroundImage:
              "url(assets/images/FUHOTH-serviceplans-header-1bd74aec.webp)",
          }}
          uk-img=""
          className="uk-background-norepeat uk-background-center-center uk-section section-padding-top"
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.37)" }}
          ></div>

          <div className="uk-container uk-container-large uk-position-relative">
            <div className="tm-grid-expand uk-grid-margin uk-grid" uk-grid="">
              <div className="uk-width-1-3@m uk-first-column">
                <hr />
                <h3 className="concierge-hero-title"> 24/7 In-house support </h3>
                <div className="uk-panel uk-margin">
                  {" "}
                  <p style={{ color: "#fff", fontWeight: "300" }}>
                    Future Home was one of the first to offer a formal
                    post-installation Concierge Care program. Our 24/7 In-house
                    support is famous for spoiling the most demanding
                    homeowners.{" "}
                  </p>
                </div>
                <div>
                  <br />
                </div>
                <a
                  className="el-content concierge-care-btn"
                  href="#contact"
                  uk-scroll=""
                >
                  Contact Support
                </a>
              </div>
              <div className="uk-width-2-3@m"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="membership" className="uk-section-secondary uk-section">
        <div className="uk-container uk-container-large">
          <div
            className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
            uk-grid=""
          >
            <div className="uk-width-1-1@m uk-first-column">
              <h1 className="uk-text-center concierge-title">
                {" "}
                CONCIERGE CARE PROGRAMS{" "}
              </h1>
              <div className="uk-panel uk-text-emphasis uk-margin uk-text-center">
                *Our Support is 24/7
              </div>
              <hr className="uk-width-small uk-margin-auto" />
            </div>
          </div>
          <div className="tm-grid-expand uk-grid-margin uk-grid" uk-grid="">
            <div className="uk-width-1-3@m uk-first-column"></div>

            <div className="uk-width-1-3@m"></div>

            <div className="uk-width-1-3@m"></div>
          </div>
          <div
            className="uk-margin-remove-top tm-grid-expand uk-grid-margin uk-grid"
            uk-grid=""
            uk-height-match="target: .uk-card"
          >
            <div className="uk-width-1-3@m uk-first-column">
              <div
                className="uk-card uk-card-secondary uk-card-small uk-card-body uk-margin-remove-first-child uk-margin uk-margin-remove-bottom uk-text-center"
                id="page#1"
              >
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                  {" "}
                  <br />à la carte services{" "}
                </h3>

                <div className="el-content uk-panel uk-concierge-text">
                  <br />
                  <div>
                    <br />
                    Regular Rate for Scheduled Site Visits
                    <hr />
                    $150 a month for Network 24/7 Monitoring &amp; Remote Access
                    <hr />
                    Regular Rate for Firmware Upgrades: Crestron &amp; All other
                    devices
                    <hr />
                    Regular Rate for Test &amp; Reset: All Key Components
                    <hr />
                    Regular Rate for Network Health Diagnosis
                    <hr />
                    Regular Rate for Calibration Check: Surround Sound and Video
                    <hr />
                    Regular Rate for Projector Cleaning &amp; Lamp Check
                    <hr />
                    Regular Rate for Checking UPS Batteries &amp; Projector
                    Lamps
                    <hr />
                    Regular Rate for Vacation Return Visits: Check all Systems
                    <hr />
                    Regular Rate for 3rd Party Phone Support (DirecTV, ISP,
                    Vendors, etc.)
                    <hr />
                    1 Hour Minimum for Quick 15 Minute Reset Service Calls
                    <hr />
                    First Hour Rate for One Hour On-Site Service Call
                    <hr />
                    Regular Rate for Lamps &amp; Defective Units Replacement
                    Labor
                    <hr /> Double Time for After 5PM &amp; Weekend Service
                    <hr />
                    Same Day Surcharge for Same Day Response
                    <hr />
                    24/7 Regular Rate for Phone Support
                    <hr />
                    Regular Rate for Remote Software Diagnose &amp; Repairs
                  </div>
                  <br />
                </div>
              </div>
              <div
                id="page#2"
                className="service-cta uk-margin-remove-vertical uk-text-center"
              >
                <Link
                  className="el-content uk-button uk-button-primary uk-button-small"
                  to="/contact-us"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="uk-width-2-3@m">
              <div
                className="uk-card uk-card-secondary uk-card-small uk-card-body uk-margin-remove-first-child uk-margin uk-margin-remove-bottom uk-text-center"
                id="page#3"
              >
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                  {" "}
                  <br />
                  Platinum Care{" "}
                </h3>

                <div className="el-content uk-panel">
                  <p>&nbsp;</p>
                  <div className="newrow">
                    <div className="newcolumnleft">
                      <h4>proactive services</h4>
                      Always like to be a head of the game? Become a Plus Member
                      and enjoy priority service in your Malibu, CA{" "}
                      <a href="/index.php/services/effortless-home-control">
                        smart home
                      </a>
                      . <br /> <br /> Two Annual Scheduled Site Visits
                      <hr />
                      Network 24/7 Monitoring &amp; Remote Access
                      <hr />
                      Firmware Upgrades: Crestron and all other devices
                      <hr />
                      Test and Reset: All major components
                      <hr />
                      Network Health Diagnosis
                      <hr />
                      Calibration Check: Surround Sound and Video
                      <hr />
                      Projector Cleaning &amp; Lamp Check
                      <hr />
                      Check UPS Batteries &amp; Projector Lamps
                      <hr />
                      Two annual Vacation Return Visits: Check all systems
                    </div>
                    <div className="newcolumnright">
                      <h4>service support</h4>
                      Never call Comcast again with our Premium Membership that
                      includes Comcast Assistance. <br /> <br /> 3rd Party Phone
                      Support (DirecTV, ISP, Vendors, etc.)
                      <hr />
                      Free Quick 15 Minute Reset Service Calls
                      <hr />
                      50% Discount on One Hour On-Site service calls
                      <hr />
                      First Hour Free for Lamps &amp; Defective Units
                      Replacement Labor
                      <hr />
                      Regular Rater for After 5PM &amp; Weekend Service
                      <hr />
                      No Extra Charge for Same Day Response
                      <hr />
                      24/7 Phone Support Included
                      <hr />
                      No Charge for Remote Software Diagnose &amp; Repairs
                      <hr />
                      Concierge Budget: Price Based on Project
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="page#4"
                className="service-cta uk-margin-remove-vertical uk-text-center"
              >
                <Link
                  className="el-content uk-button uk-button-primary uk-button-small"
                  to="/contact-us"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="uk-section concierge-care-footer">
        <div className="uk-container uk-container-large">
          <div
            className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
            uk-grid=""
          >
            <div className="uk-width-1-1@m uk-first-column">
              <h2 className="uk-text-center"> Contact Support </h2>
              <div className="uk-panel uk-text-emphasis uk-margin uk-text-center">
                Your Life is 24/7, our support is 24/7
              </div>
              <div className="uk-margin uk-text-center">
                <Link
                  className="el-content uk-button uk-button-primary"
                  to="/contact-us"
                >
                  Reach out Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConciergeCareProgram;
