import React from "react";
import { Link } from "react-router-dom";

const JoshAi = () => {
  return (
    <div id="site-content">
      <div className="post-inner thin commercial-page josh-ai-page">
        <div className="">
          <div className="is-layout-flow wp-block-group homevideo servicespages">
            <div className="wp-block-group__inner-container commercial-automantion-video">
              <video
                id="video-background"
                className="high4kres"
                autoPlay
                loop="loop"
                muted
                playsInline=""
                width="300"
                height="150"
              >
                <source src="assets/video/josh-ai-hero.mp4" type="video/mp4" />
              </video>
              <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                <div className="wp-block-group__inner-container">
                  <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible">
                    <div className="wp-block-group__inner-container max-width-hero">
                      <h1>Voice Control for the Connected Home</h1>
                      <div>
                        <p className="minigray">
                          More than a smart speaker, Josh is a privacy-based
                          luxury home control system that delivers an effortless
                          and exciting living experience through natural
                          interfaces like voice and touch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="alignfull josh-ai-navigation eds-on-scroll eds-scroll-visible"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="josh-ai-navigation-grid">
              <div>
                <img
                  src="assets/images/josh-ai-logo.webp"
                  alt=""
                  className="wp-image-2104"
                  width="192"
                  height="37"
                />
              </div>
              <div className="josh-ai-navigation-container">
                <a href="#1">Artificial Intelligence</a>
                <a href="#2">Uncompromising Privacy</a>
                <a href="#3">voice Recognition</a>
              </div>
            </div>
          </div>
          <div id="1"
            className="home-standard"
            style={{
              backgroundImage: "url(/assets/images/josh-ai-speaker.webp)",
            }}
          >
            <div className="home-standard-area">
              <div className="content">
                <div className="top">
                  <h3> Artificial Intelligence</h3>
                  <p className="minigray">
                    Josh is always learning based on the amount of data that you
                    are comfortable sharing. As Josh acclimates to your
                    environment, it will offer suggestions to make your smart
                    home experience more convenient and personalized. Speak
                    naturally to Josh as you would a friend, and rest
                    confidently knowing that your privacy always comes first.
                  </p>
                </div>
                <div className="image">
                  <img src="assets/images/josh-ai-speaker.webp" alt="" />
                </div>
                <div className="bottom">
                  <h4>Live Smarter with Josh.ai</h4>
                  <h6>
                    Interact with your environment in whatever way is most
                    natural.
                  </h6>
                  <a href="/contact-us">Invite Jost Into Your Home</a>
                </div>
              </div>
            </div>
          </div>
          {/* features section */}
          <div className="josh-ai-feature">
            <div
              className="uk-visible@l uk-section-default uk-section uk-padding-remove-vertical uk-flex uk-flex-middle"
              uk-height-viewport="offset-top: true; offset-bottom: 20;"
              style={{ minHeight: "calc(80vh)" }}
            >
              <div className="uk-width-1-1">
                <div
                  className="uk-margin-remove-top tm-grid-expand uk-grid-collapse uk-grid"
                  uk-grid=""
                >
                  <div className="uk-grid-item-match uk-width-2-5@m uk-first-column">
                    <div className="uk-tile-default uk-tile">
                      <div className="uk-panel uk-width-1-1">
                        <div
                          className="uk-visible@l uk-position-absolute uk-width-1-1 uk-text-center"
                          uk-parallax="x: 0,0; y: 0,0; scale: 1.25,1.75; opacity: .5,1; easing: 1;"
                        >
                          <img
                            src="assets/images/josh-ai-1.webp"
                            width="1500"
                            height="1500"
                            className="el-image"
                            alt=""
                          />
                        </div>

                        <div
                          className="uk-hidden uk-position-absolute uk-width-1-1"
                          uk-parallax="scale: 1,1.5; opacity: .5,1; easing: 1;"
                        >
                          <img
                            src="assets/images/josh-ai-1.webp"
                            width="1500"
                            height="1500"
                            className="el-image"
                            alt=""
                          />
                        </div>

                        <div className="uk-visible@l uk-position-absolute uk-width-1-1">
                          <img
                            src="assets/images/josh-ai-2.webp"
                            width="1500"
                            height="1500"
                            className="el-image"
                            alt=""
                          />
                        </div>

                        <div className="uk-hidden uk-position-absolute uk-width-1-1">
                          <img
                            src="assets/images/josh-ai-2.webp"
                            width="1200"
                            height="1200"
                            className="el-image"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="uk-grid-item-match uk-flex-middle uk-width-3-5@m">
                    <div className="uk-panel uk-width-1-1">
                      <div className="uk-visible@xl uk-margin uk-text-center">
                        <div
                          className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match uk-grid josh-ai-feature-desktop"
                          uk-grid=""
                        >
                          <div className="uk-first-column">
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <img
                                src="assets/images/josh-ai-3.webp"
                                width="150"
                                height="150"
                                className="el-image"
                                alt="Brain icon"
                                style={{ margin: "0 auto" }}
                              />

                              <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                                Pattern Recognition
                              </h3>

                              <div className="el-content uk-panel uk-margin-top minigray">
                                Josh learns your living patterns and adapts
                                behind the scenes to optimize your smart home
                                experience . Sit back and allow Josh to turn the
                                lights off for you when you go to sleep or pause
                                the music when you leave for work. The Josh app
                                dashboard also presents proactive
                                recommendations based on the state of your home
                                or the time of day.
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <img
                                src="assets/images/josh-ai-4.webp"
                                width="150"
                                height="150"
                                className="el-image"
                                alt="safe icon"
                                style={{ margin: "0 auto" }}
                              />

                              <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                                Secure &amp; Private
                              </h3>

                              <div className="el-content uk-panel uk-margin-top minigray">
                                Your privacy is Josh.ai’s top priority. With
                                that responsibility in mind, Josh never shares
                                data for marketing or sales purposes and gives
                                its users complete control over the information
                                that is collected. Josh does its processing
                                locally whenever possible while tirelessly
                                improving upon its best-in-class standards to
                                ensure that what you say and do in your home
                                stays there.
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="el-item uk-panel uk-margin-remove-first-child">
                              <img
                                src="assets/images/josh-ai-5.webp"
                                width="150"
                                height="150"
                                className="el-image"
                                alt="sun icon"
                                style={{ margin: "0 auto" }}
                              />

                              <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                                Improving Daily
                              </h3>

                              <div className="el-content uk-panel uk-margin-top minigray">
                                While other control systems only know one trick,
                                Josh evolves alongside your ever-changing
                                lifestyle. Josh is always learning and growing
                                to make your home as advanced as possible. The
                                more you interact with Josh, the smarter your
                                home will become.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tm-grid-expand uk-grid-column-collapse uk-grid-margin uk-grid"
                  uk-grid=""
                >
                  <div className="uk-width-1-5@m uk-first-column"></div>

                  <div className="uk-width-4-5@m">
                    <div className="uk-hidden@xl uk-margin uk-text-center">
                      <div
                        className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match uk-grid uk-grid-stack josh-ai-feature-tablet"
                        uk-grid=""
                      >
                        <div className="uk-first-column">
                          <div className="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-3.webp"
                              width="150"
                              height="150"
                              className="el-image"
                              alt="Brain icon"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                              Pattern <br />
                              Recognition
                            </h3>

                            <div className="el-content uk-panel uk-margin-top minigray">
                              Josh intelligently learns your living patterns
                              behind the scenes to make life easier. Enjoy a
                              home that’s smart enough to turn the lights off
                              for you when you go to sleep or pause the music
                              when you leave for work. The Josh app dashboard
                              also presents proactive recommendations based on
                              the state of your home or the time of day.
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-4.webp"
                              width="150"
                              height="150"
                              className="el-image"
                              alt="safe icon"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                              Secure &amp;
                              <br /> Private
                            </h3>

                            <div className="el-content uk-panel uk-margin-top minigray">
                              Your privacy and data security are top priority.
                              With that responsibility in mind, Josh never
                              shares data for marketing or sales purposes and
                              gives users complete control over the information
                              collected. Josh orchestrates your smart home
                              locally rather than through the cloud, ensuring
                              everything you say and do in your home stays
                              there.
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-5.webp"
                              width="150"
                              height="150"
                              className="el-image"
                              alt="sun icon"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                              Improving
                              <br /> Daily
                            </h3>

                            <div className="el-content uk-panel uk-margin-top minigray">
                              While other home control systems only know one
                              trick, Josh grows and adapts alongside your
                              ever-evolving life. Josh is continuously learning
                              more natural voice commands for the smart home to
                              make your life easier, safer and more enjoyable.
                              The more you interact with your environment, the
                              smarter your home becomes.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-hidden@l uk-section-default uk-section">
              <div className="uk-container">
                <div
                  className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
                  uk-grid=""
                >
                  <div className="uk-width-1-1 uk-first-column">
                    <div className="uk-hidden@xl uk-margin uk-text-center">
                      <div
                        className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match uk-grid uk-grid-stack"
                        uk-grid=""
                      >
                        <div className="uk-first-column">
                          <div className="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-3.webp"
                              width="150"
                              height="150"
                              className="el-image"
                              alt="Brain icon"
                              loading="lazy"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                              Pattern <br />
                              Recognition
                            </h3>

                            <div className="el-content uk-panel uk-margin-top minigray">
                              Josh intelligently learns your living patterns
                              behind the scenes to make life easier. Enjoy a
                              home that’s smart enough to turn the lights off
                              for you when you go to sleep or pause the music
                              when you leave for work. The Josh app dashboard
                              also presents proactive recommendations based on
                              the state of your home or the time of day.
                            </div>
                          </div>
                        </div>
                        <div className="uk-grid-margin uk-first-column">
                          <div className="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-4.webp"
                              width="150"
                              height="150"
                              className="el-image"
                              alt="safe icon"
                              loading="lazy"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                              Secure &amp;
                              <br /> Private
                            </h3>

                            <div className="el-content uk-panel uk-margin-top minigray">
                              Your privacy and data security are top priority.
                              With that responsibility in mind, Josh never
                              shares data for marketing or sales purposes and
                              gives users complete control over the information
                              collected. Josh orchestrates your smart home
                              locally rather than through the cloud, ensuring
                              everything you say and do in your home stays
                              there.
                            </div>
                          </div>
                        </div>
                        <div className="uk-grid-margin uk-first-column">
                          <div className="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-5.webp"
                              width="150"
                              height="150"
                              className="el-image"
                              alt="sun icon"
                              loading="lazy"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                              Improving
                              <br /> Daily
                            </h3>

                            <div className="el-content uk-panel uk-margin-top minigray">
                              <p>
                                While other home control systems only know one
                                trick,
                                <a href="/index.php/blog/why-josh-ai-is-the-superior-choice-for-voice-control-in-a-smart-home">
                                  Josh.ai
                                </a>
                                grows and adapts alongside your ever-evolving
                                life. Josh is continuously learning more natural
                                voice commands for the smart home to make your
                                life easier, safer and more enjoyable in
                                Charlotte, NC. The more you interact with your
                                environment, the smarter your home becomes.
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
          </div>
          <div id="2"
            className="home-standard"
            style={{
              backgroundImage: "url(/assets/images/josh-ai-6.webp)",
            }}
          >
            <div className="home-standard-area">
              <div className="content" style={{ margin: "0 0 auto auto" }}>
                <div className="top">
                  <h3>Uncompromising Privacy</h3>
                  <p className="minigray">
                    Josh’s sole focus is providing you with as delightful of a
                    smart home experience as possible, which includes peace of
                    mind that what is said behind closed doors stays there. Rest
                    assured that no one is listening in the background or
                    sharing any information with third parties.
                  </p>
                </div>
                <div className="image">
                  <img src="assets/images/josh-ai-6.webp" alt="" />
                </div>
                <div className="bottom">
                  <h4>A Smart Home Built On Privacy</h4>
                  <h6>
                    Enjoy limitless customization with unparalleled peace of
                    mind.
                  </h6>
                  <a href="/contact-us">Welcome Josh Home</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="is-layout-flex wp-container-16 wp-block-columns alignfull servicesdualcontainer"
            id="1"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-large eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1024"
                  height="770"
                  src="assets/images/josh-ai-8.webp"
                  alt=""
                  className="wp-image-1715"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>Complete Control</h2>
                  <p className="text-32">
                    Access to the Josh.ai platform is designed entirely with you
                    in mind. From the amount of data Josh is allowed to collect
                    to user access and permission management, you have the power
                    to specify what information Josh stores as well as the smart
                    home functionality that household members have access to. As
                    a certified Josh.ai dealer, we’ll show you just how simple
                    it is to customize your experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="is-layout-flex wp-container-20 wp-block-columns alignfull servicesdualcontainer reversetheflex"
            id="2"
          >
            <div className="is-layout-flow wp-block-column servicesimages">
              <figure
                className="wp-block-image size-full eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  width="1197"
                  height="900"
                  src="assets/images/josh-ai-9.webp"
                  alt=""
                  className="wp-image-846"
                />
              </figure>
            </div>

            <div className="is-layout-flow wp-block-column servicesimages">
              <div
                className="is-layout-flow wp-block-group servicestextcontainer eds-on-scroll eds-scroll-visible"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="wp-block-group__inner-container">
                  <h2>No Data Sharing</h2>

                  <p className="text-32">
                    While the cost of some smart homes is user and data privacy,
                    Josh is firmly against any intrusions and has an
                    uncompromising stance on privacy. Rest confidently knowing
                    your data is never shared or sold to third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-section-default uk-section josh-ai-privacy">
            <div className="uk-container">
              <div
                className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
                uk-grid=""
              >
                <div className="uk-width-1-1@m uk-first-column">
                  <h3 className="uk-text-center">
                    Built-In Privacy Protection
                  </h3>
                  <div className="uk-margin uk-text-center">
                    <div
                      className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match uk-grid"
                      uk-grid=""
                    >
                      <div className="uk-first-column">
                        <div className="el-item uk-panel uk-margin-remove-first-child">
                          <img
                            src="assets/images/josh-ai-10.webp"
                            width="1200"
                            height="857"
                            className="el-image"
                            alt="Brain icon"
                            loading="lazy"
                          />

                          <h4 className="el-title uk-margin-top uk-margin-remove-bottom">
                            Switches
                          </h4>

                          <div className="el-content uk-panel uk-margin-top minigray">
                            Use the built-in privacy switch to physically
                            disconnect Josh Nano’s microphones and ensure that
                            certain moments remain private.
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="el-item uk-panel uk-margin-remove-first-child">
                          <img
                            src="assets/images/josh-ai-11.webp"
                            width="1200"
                            height="858"
                            className="el-image"
                            alt="safe icon"
                            loading="lazy"
                          />

                          <h4 className="el-title uk-margin-top uk-margin-remove-bottom">
                            Sleep &amp; Wake Mode
                          </h4>

                          <div className="el-content uk-panel uk-margin-top minigray">
                            Josh only listens to you after being prompted by its
                            wake phrase. Review your chat history to see what
                            was heard and make refinements to your system as
                            needed.
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="el-item uk-panel uk-margin-remove-first-child">
                          <img
                            src="assets/images/josh-ai-12.webp"
                            width="1200"
                            height="857"
                            className="el-image"
                            alt="sun icon"
                            loading="lazy"
                          />

                          <h4 className="el-title uk-margin-top uk-margin-remove-bottom">
                            Mute Function
                          </h4>

                          <div className="el-content uk-panel uk-margin-top minigray">
                            Double-tap Josh Micro to easily mute its microphones
                            You can also mute any Josh microphone from afar by
                            using the Josh app.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="3"
            className="home-standard"
            style={{
              backgroundImage: "url(/assets/images/josh-ai-13.webp)",
            }}
          >
            <div className="home-standard-area">
              <div className="content">
                <div className="top">
                  <h3>Use Your Voice, Naturally</h3>
                  <p className="minigray">
                    There’s no need to memorize room and device namesor scene
                    trigger phrases. Josh understands natural speech so that
                    anyone in your home is empowered to talk to his or her
                    surroundings. Everyone with a voice is capable of talking to
                    Josh.
                  </p>
                </div>
                <div className="image">
                  <img src="assets/images/josh-ai-speaker.webp" alt="" />
                </div>
                <div className="bottom">
                  <h4>Say What’s on Your Mind</h4>
                  <h6>Josh’s understanding is limitless.</h6>
                  <a href="/contact-us">Get Started With Josh</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="josh-ai-bottom">
          <div
            id="page#2"
            className="uk-visible@xl uk-section-default uk-section uk-padding-remove-top uk-padding-remove-bottom"
          >
            <div className="tm-grid-expand uk-grid-collapse uk-grid" uk-grid="">
              <div className="uk-grid-item-match uk-width-1-1@s uk-width-2-5@m uk-first-column">
                <div className="uk-tile-secondary uk-tile uk-tile-small">
                  <div className="uk-margin">
                    <ul
                      className="el-nav uk-margin uk-tab josh-ai-tab"
                      uk-tab="connect: #js-a34b; itemNav: #js-a355; animation: uk-animation-fade;"
                    >
                      <li className="uk-active">
                        <Link href="#" aria-expanded="true">
                          Natural Language
                        </Link>
                      </li>
                      <li>
                        <Link href="#" aria-expanded="false">
                          Accessibility
                        </Link>
                      </li>
                      <li>
                        <Link href="#" aria-expanded="false">
                          Hands-Free Control
                        </Link>
                      </li>
                    </ul>

                    <ul
                      id="js-a34b"
                      className="uk-switcher"
                      uk-height-match="row: false"
                    >
                      <li className="el-item uk-margin-remove-first-child uk-active">
                        <img
                          src="assets/images/josh-ai-14.webp"
                          width="1200"
                          height="800"
                          className="el-image"
                          alt=""
                        />

                        <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                          Natural Language
                        </h3>

                        <div className="el-content uk-panel uk-margin-top">
                          Leveraging its proprietary Natural Language
                          Processing, Josh understands countless variations of
                          commands so that you can speak however is easiest.
                          Simply have a conversation with your home with
                          requests like, “Ok Josh,close the shades, dim the
                          lights and play some music.”. Josh even remembers your
                          last command so that you can simply say, “Ok Josh,
                          turn it up” to adjust the volume of the music you just
                          turned on.
                        </div>
                      </li>
                      <li className="el-item uk-margin-remove-first-child">
                        <img
                          src="assets/images/josh-ai-15.webp"
                          width="1200"
                          height="800"
                          className="el-image"
                          alt=""
                        />

                        <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                          Accessibility
                        </h3>

                        <div className="el-content uk-panel uk-margin-top">
                          Josh Micro and Nano are location-aware, enabling
                          contextual commands to set the mood in the room you’re
                          in. Create a “Good Morning” scene for the bedroom and
                          another “Good Morning” scene for the living room, and
                          Josh will know which one to activate based on where
                          you are in the home. It’s that simple!
                        </div>
                      </li>
                      <li className="el-item uk-margin-remove-first-child">
                        <img
                          src="assets/images/josh-ai-16.webp"
                          width="1200"
                          height="800"
                          className="el-image"
                          alt=""
                        />

                        <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                          Hands-Free Control
                        </h3>

                        <div className="el-content uk-panel uk-margin-top">
                          Josh Micro and Nano are equipped with powerful
                          far-field microphone arrays to hear commands from
                          across any room. Josh is capable of responding through
                          Josh Micro or from your high-performance in-room
                          surround sound speakers for a truly connected smart
                          home experience.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="uk-grid-item-match uk-width-1-3@s uk-width-1-5@m">
                <div className=" uk-tile uk-tile-xlarge">
                  <h5 className="uk-margin-remove-bottom uk-width-medium uk-text-right">
                    Meet Nano
                  </h5>
                  <div className="uk-panel uk-text-meta uk-margin uk-margin-remove-top uk-width-medium uk-text-right minigray">
                    The first-ever architectural microphone, Josh Nano marries
                    design and technology to offer seamless smart home control
                    that blends into the environment.
                  </div>
                </div>
              </div>

              <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@s uk-width-1-5@m">
                <div className="uk-panel uk-width-1-1">
                  <div
                    className="uk-position-relative uk-margin"
                    uk-parallax="scale: 1.5,2; easing: 1;"
                  >
                    <img
                      src="assets/images/josh-ai-17.webp"
                      width="600"
                      height="414"
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="uk-grid-item-match uk-width-1-3@s uk-width-1-5@m">
                <div className="uk-tile uk-tile-large uk-flex uk-flex-bottom">
                  <div className="uk-panel uk-width-1-1">
                    <h5 className="uk-margin-remove-bottom uk-width-medium uk-margin-auto-left uk-text-left">
                      Meet Micro
                    </h5>
                    <div className="uk-panel uk-text-meta uk-margin uk-margin-remove-top uk-width-medium uk-text-left minigray">
                      Built for luxury living spaces, Josh Micro features
                      built-in voice control and artificial intelligence to
                      power even the largest homes with ease.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-hidden@xl uk-section-secondary uk-section">
            <div className="uk-container">
              <div
                className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
                uk-grid=""
              >
                <div className="uk-width-1-1 uk-first-column">
                  <div className="uk-margin">
                    <ul
                      className="el-nav uk-margin uk-tab josh-ai-tab"
                      uk-tab="connect: #js-b98c; itemNav: #js-b995; animation: uk-animation-fade;"
                    >
                      <li className="uk-active">
                        <Link href="#" aria-expanded="true">
                          Natural Language
                        </Link>
                      </li>
                      <li>
                        <Link href="#" aria-expanded="false">
                          Accessibility
                        </Link>
                      </li>
                      <li>
                        <Link href="#" aria-expanded="false">
                          Hands-Free Control
                        </Link>
                      </li>
                    </ul>

                    <ul
                      id="js-b98c"
                      className="uk-switcher"
                      uk-height-match="row: false"
                    >
                      <li className="el-item uk-active">
                        <div
                          className="uk-child-width-expand uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          <div className="uk-width-1-2@m uk-first-column">
                            <img
                              src="assets/images/josh-ai-14.webp"
                              width="1200"
                              height="800"
                              className="el-image"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="uk-margin-remove-first-child uk-grid-margin uk-first-column">
                            <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                              Natural Language
                            </h3>

                            <div className="el-content uk-panel uk-margin-top">
                              Using proprietary Natural Language Processing
                              technology, Josh understands variations of names
                              and commands for rooms, devices and scenes so that
                              you can speak comfortably. Tell Josh to close the
                              shades, dim the lights and play music in one
                              breath. Josh even remembers your last command so
                              that you can simply say, “turn it up.”
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="el-item">
                        <div
                          className="uk-child-width-expand uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          <div className="uk-width-1-2@m">
                            <img
                              src="assets/images/josh-ai-15.webp"
                              width="1200"
                              height="800"
                              className="el-image"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="uk-margin-remove-first-child">
                            <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                              Accessibility
                            </h3>

                            <div className="el-content uk-panel uk-margin-top">
                              The Josh Micro and Nano are location-aware,
                              enabling you to make simple contextual commands to
                              set the mood in just the room you’re in. Create a
                              “Good Morning” scene for the bedroom and a “Good
                              Morning” scene for the living room, and Josh will
                              know which one to activate based on where you are
                              in the home. It’s that simple!
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="el-item">
                        <div
                          className="uk-child-width-expand uk-grid uk-grid-stack"
                          uk-grid=""
                        >
                          <div className="uk-width-1-2@m">
                            <img
                              src="assets/images/josh-ai-16.webp"
                              width="1200"
                              height="800"
                              className="el-image"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="uk-margin-remove-first-child">
                            <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                              Hands-Free Control
                            </h3>

                            <div className="el-content uk-panel uk-margin-top">
                              Enjoy simple hands-free assistance throughout your
                              home with the Josh Micro or Nano, which are
                              equipped with a powerful far-field microphone
                              array to hear you from across any room. Josh
                              responds to you through the Micro built-in speaker
                              or through your high-performance speakers for a
                              truly connected smart home experience.
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="page#3"
            className="uk-visible@l uk-hidden@xl uk-section-default uk-section uk-padding-remove-top uk-padding-remove-bottom"
          >
            <div className="tm-grid-expand uk-grid-collapse uk-grid" uk-grid="">
              <div className="uk-grid-item-match uk-width-1-3@m uk-first-column">
                <div className="uk-tile josh-title-bottom">
                  <h5 className="uk-margin-remove-bottom uk-width-medium uk-text-right ">
                    Meet Nano
                  </h5>
                  <div className="uk-panel uk-text-meta uk-margin uk-margin-remove-top uk-margin-remove-bottom uk-width-medium uk-text-right minigray minigray">
                    The first-ever architectural microphone, Josh Nano marries
                    design and technology to offer seamless smart home control
                    that blends into the environment.
                  </div>
                </div>
              </div>

              <div className="uk-grid-item-match uk-width-1-3@m">
                <div className="uk-tile-default uk-tile uk-tile-large">
                  <div
                    className="uk-visible@m uk-position-relative uk-margin"
                    uk-parallax="scale: 1.5,2; easing: 1;"
                  >
                    <img
                      src="assets/images/josh-ai-17.webp"
                      width="600"
                      height="414"
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="uk-grid-item-match uk-width-1-3@m">
                <div className="uk-tile uk-flex uk-flex-bottom josh-title-bottom">
                  <div className="uk-panel uk-width-1-1">
                    <h5 className="uk-margin-remove-top uk-margin-remove-bottom uk-width-medium uk-margin-auto-left uk-text-left">
                      Meet Micro
                    </h5>
                    <div className="uk-panel uk-text-meta uk-margin uk-margin-remove-top uk-width-medium uk-margin-auto-left uk-text-left minigray minigray">
                      Built for luxury living spaces, Josh Micro features
                      built-in voice control and artificial intelligence to
                      power even the largest homes with ease.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="page#4"
            className="uk-hidden@l uk-section-default uk-section uk-padding-remove-top uk-padding-remove-bottom"
          >
            <div
              className="tm-grid-expand uk-grid-collapse uk-margin-remove-vertical uk-grid uk-grid-stack"
              uk-grid=""
            >
              <div className="uk-grid-item-match uk-width-1-2@s uk-first-column">
                <div className="uk-tile-default uk-tile uk-flex uk-flex-middle">
                  <div className="uk-panel uk-width-1-1">
                    <h5 className="uk-margin-remove-bottom uk-width-medium uk-text-right">
                      Meet Micro
                    </h5>
                    <div className="uk-panel uk-text-meta uk-margin uk-margin-remove-top uk-margin-remove-bottom uk-width-medium uk-text-right minigray">
                      The first-ever architectural microphone, Josh Nano marries
                      interior decor with technology to enable a connected home
                      experience that blends into any environment.
                    </div>
                  </div>
                </div>
              </div>

              <div className="uk-grid-item-match uk-width-1-2@s">
                <div className="uk-tile-default uk-tile uk-tile-large">
                  <div className="uk-hidden@m uk-margin uk-margin-remove-bottom uk-text-left">
                    <img
                      src="assets/images/josh-ai-18.webp"
                      width="800"
                      height="552"
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div className="uk-visible@m uk-position-relative uk-margin uk-text-left">
                    <img
                      src="assets/images/josh-ai-18.webp"
                      width="800"
                      height="552"
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tm-grid-expand uk-grid-collapse uk-grid uk-grid-stack"
              uk-grid=""
            >
              <div className="uk-grid-item-match uk-width-1-2@s uk-first-column">
                <div className="uk-tile-default uk-tile">
                  <div className="uk-panel uk-width-1-1">
                    <div
                      className="uk-visible@s uk-position-absolute uk-width-1-1 uk-text-right@s"
                      uk-parallax="scale: 0.7,0.8; easing: 1;"
                    >
                      <img
                        src="assets/images/josh-ai-19.webp"
                        width="1500"
                        height="1035"
                        className="el-image"
                        alt=""
                        loading="lazy"
                      />
                    </div>

                    <div
                      className="uk-hidden@s uk-margin uk-margin-remove-top uk-text-right@s"
                      uk-parallax="scale: 0.7,0.8; easing: 1;"
                    >
                      <img
                        src="assets/images/josh-ai-19.webp"
                        width="1500"
                        height="1035"
                        className="el-image"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="uk-grid-item-match uk-width-1-2@s">
                <div className="uk-tile-default uk-tile uk-tile-large">
                  <h5 className="uk-margin-remove-top uk-margin-remove-bottom uk-width-medium uk-margin-auto-left uk-text-left">
                    Meet Nano
                  </h5>
                  <div className="uk-panel uk-text-meta uk-margin uk-margin-remove-top uk-width-medium uk-margin-auto-left uk-text-left minigray">
                    The first-ever architectural microphone, Josh Nano marries
                    design and technology to offer seamless smart home control
                    that blends into the environment.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
              uk-grid=""
            >
              <div className="uk-width-1-1 uk-first-column">
                <div>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div
              className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
              uk-grid=""
            >
              <div className="uk-width-1-1 uk-first-column"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoshAi;
