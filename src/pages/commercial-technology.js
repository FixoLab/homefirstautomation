/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CommercialTechnology = () => {
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
        <div className="entry-content commercial-technology">
          <div
            className="is-layout-flow wp-block-group homevideo servicespages"
            style={{ height: "90vh" }}
          >
            <div
              className="wp-block-group__inner-container indoor-living-background"
              style={{
                backgroundImage:
                  "url(assets/images/commercial-technology-hero.webp)",
                height: "90vh",
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
                      <h6>COMMERCIAL TECHNOLOGY</h6>
                      <h1>
                        Scalable Technology Solutions for a Smarter Workplace
                      </h1>
                      <p>
                        Set your organization apart with intuitive audio and
                        video technologies that aid growth.
                      </p>

                      <div>
                        <p>
                          <a aria-label="Scroll down01" href="#1">
                            Executive Conference Room
                          </a>
                        </p>
                        <p>
                          <a aria-label="Scroll down02" href="#2">
                            Restaurant / Bar
                          </a>
                        </p>
                        <p>
                          <a aria-label="Scroll down03" href="#3">
                            Professional Office
                          </a>
                        </p>
                        <p>
                          <a aria-label="Scroll down04" href="#4">
                            Training Spaces
                          </a>
                        </p>

                        <p>
                          <a aria-label="Scroll down05" href="#5">
                            Hotel / Hospitality
                          </a>
                        </p>

                        <p>
                          <a aria-label="Scroll down06" href="#6">
                            Retail
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
                  Elevate Your Business with Leading-Edge Technology
                </h3>

                <div className="">
                  <p className="minigray">
                    From corporate to classroom, smart technology puts your
                    business or institution above the rest in overall efficiency
                    and experience. Explore the possibilities below.
                  </p>
                </div>
                <div className="explore-spaces-button">
                  <a aria-label="Scroll down01" href="#1">
                    Explore Spaces
                  </a>
                </div>
              </div>
              <div className="is-layout-flow wp-block-column homedual2 indoor-living-feature">
                <div className="is-layout-flex wp-container-7 wp-block-columns iconsbox">
                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-snowflake"></i>
                    <h3>INTEGRATED BUILDING CONTROL</h3>
                    <p className="minigray">
                      Streamline operations with remotely located equipment
                      racks and automation gear.
                    </p>
                  </div>
                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-eye-slash"></i>
                    <h3>CENTRALIZED DISTRIBUTION</h3>
                    <p className="minigray">
                      Streamline operations with remotely located equipment
                      racks and automation gear.
                    </p>
                  </div>

                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-music"></i>
                    <h3>MOTORIZED WINDOW TREATMENTS</h3>
                    <p className="minigray">
                      Optimize natural light while managing any resulting heat
                      gain or UV damage.
                    </p>
                  </div>
                </div>
                <div className="is-layout-flex wp-container-10 wp-block-columns iconsbox">
                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-eye"></i>
                    <h3>SURVEILLANCE</h3>
                    <p className="minigray">
                      High performance cameras as part of your commercial
                      security system help mitigate threats in the Seattle, WA
                      area.
                    </p>
                  </div>
                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-wifi"></i>
                    <h3>DISTRIBUTED AUDIO</h3>
                    <p className="minigray">
                      Deliver quality sound throughout your facility that is
                      effortless to control.
                    </p>
                  </div>

                  <div className="is-layout-flow wp-block-column">
                    <i className="fas fa-house-laptop"></i>
                    <h3>LIGHTING </h3>
                    <p className="minigray">
                      Improve employee morale and reduce costs with intuitive
                      control.
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
                    <h4> Executive Conference Room</h4>
                    <p>
                      Communicate with your organization's leaders with
                      intuitive and collaborative technologies that are easy to
                      use and provide the highest levels of audio, video and
                      environmental control.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Lighting Control · Integrated Room Control · Presentation
                      Technology · Hidden Audio Video · Motorized Window
                      Treatments · Video Conferencing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/commercial-technology-1.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "16%", left: "43%" }}
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
                        Activate dynamic lighting and shading scenes that are
                        optimized for the purpose of the meeting whether it be a
                        live board meeting or a video conference with the team
                        in San Francisco.
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
                style={{ top: "62%", left: "11%" }}
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
                      Power your meetings without the clutter by implementing concealed in-wall speakers, table inserts for messy wires and motorized lifts for displays.

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
                    <h4>Restaurant / Bar</h4>
                    <p>
                      Create an exceptional dining experience for your patrons
                      with customized scenes that automatically transition your
                      lights, shades, climate and multimedia.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Lighting Control · Distributed Audio · Distributed Video ·
                      Video Displays · Motorized Window Treatments · HVAC
                      Control · LED Lighting · Wi-Fi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/commercial-technology-2.webp"
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
                    Distributed Audio


                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Effortlessly control the audio in every zone of your restaurant from one centralized touch screen to provide seamless listening enjoyment for your patrons.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "20%", left: "66%" }}
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
                    <h3 className="csh-card-content-title">LED Lighting
</h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Transform the ambiance in an instant or with smooth transitions with striking LED lighting fixtures and strip lighting that change in color and intensity via scheduled routines.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "30%", left: "13%" }}
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
                    Wi-Fi

                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Provide guests what they expect in strong Wi-Fi connectivity ensuring they will stay and enjoy their dining experience rather than rush out to check the latest game stats.

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
                    <h4>Professional Office</h4>
                    <p>
                      Improve business operations and morale with integrated
                      technologies, from smart access control to lighting to AV,
                      that help facilitate the safety and success of your
                      company in the Seattle, WA area.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Lighting Control · Motorized Window Treatments · HVAC
                      Control · Sound Masking · Access Control · Smart Building
                      Control · Wi-Fi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/commercial-technology-hero.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "40%", left: "8%" }}
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
                    Access Control

                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Protect your facility with PIN or key card entry for authorized users only. Receive alerts when access is attempted and remotely lock and unlock entries.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "35%", left: "60%" }}
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
                    <h3 className="csh-card-content-title">Sound Masking
</h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Promote productivity and comfort for your staff and visitors by reducing distracting noise around the office with an unobtrusive sound masking system.

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
                      Optimize comfort for your staff and reduce sun glare on monitors and TV displays with motorized solar shades that rise and lower in unison on your command.
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
                    <h4>Training Spaces</h4>
                    <p>
                      Facilitate an effective and dynamic learning environment
                      with scalable collaboration solutions and one-touch
                      integrated room control.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Lighting Control · Integrated Room Control · Presentation
                      Technology · Motorized Window Treatments · Interactive
                      Whiteboards · Video Conferencing · Motion Sensors
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/commercial-technology-3.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "40%", left: "45%" }}
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
                    Presentation Technology

                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Lead effective and engaging training sessions with easy and intuitive to operate room and multimedia control perfectly calibrated for a maximized viewing and listening experience.

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
                    Integrated Room Control

                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Increase training efficiency with one-touch control of your projector system, multimedia presentations, lighting and more.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "29%", left: "65%" }}
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
                    Interactive Whiteboards

                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Promote active learning with interactive displays and whiteboards that encourage tangible connections and better collaboration among your trainees.

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
                    <h4>Hotel / Hospitality</h4>
                    <p>
                      Deliver an exceptional experience to your guests as they
                      enter your property and navigate through common areas and
                      their personal suite.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Lighting Control · Motorized Window Treatments · HVAC
                      Control · Hidden Audio Video · Entry Systems/Access
                      Control · Smart Building Technology · Wi-Fi · Lighted
                      Mirrors
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/commercial-technology-4.webp"
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
                    <h3 className="csh-card-content-title">HVAC Control
 </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Significantly save on heating and cooling costs with automated thermostat control that adjusts to energy-saving temperatures when common areas and individual rooms are unoccupied.

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
                    <h3 className="csh-card-content-title">Smart Building Technology
</h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Improve hotel operations by implementing a comprehensive, centralized control system to monitor, manage and adjust the integrated technology throughout your entire property.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "60%", left: "50%" }}
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
                    Wi-Fi

                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Guarantee fast and reliable Wi-Fi connectivity throughout your property with optimized accent point placement, robust firewall protection and separate networks for guests and staff.

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
                    <h4> Retail</h4>
                    <p>
                      Create excitement, facilitate transactions and increase
                      security within your retail space in Seattle, WA with
                      centralized control of lighting, digital signage, audio
                      systems, commercial security systems and more.
                    </p>
                  </div>
                  <div className="grid-item-2">
                    <h6>COMMON SOLUTIONS</h6>
                    <p>
                      Lighting Control · Motorized Window Treatments · HVAC
                      Control · Hidden Audio Video · Distributed Video ·
                      Surveillance · Facial Detection · Access Control
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="csh-wrapper">
              <img
                style={{ width: "100%" }}
                src="assets/images/commercial-technology-5.webp"
                alt=""
              />
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "20%", left: "8%" }}
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
                    <h3 className="csh-card-content-title">Distributed Audio
</h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Give your brand a voice and increase add-on sales with strategically selected soundtracks that lift the spirits of your shoppers from the sales floor to the fitting room.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "30%", left: "50%" }}
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
                    <h3 className="csh-card-content-title"> Surveillance
 </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Analyze traffic patterns throughout your store to determine any inefficient shopping areas or foot congestion. Remotely monitor live or recorded footage for loiterers, intruders and vandals.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="csh-plus-icon csh-marker uk-marker"
                style={{ top: "37%", left: "78%" }}
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
                    Lighting Control    
                    </h3>
                    <div className="csh-card-content-desc">
                      <p>
                      Visually enhance your displays and merchandise with strategic, dynamic lighting for striking designs that draw the eyes to sales items and new products.
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

export default CommercialTechnology;