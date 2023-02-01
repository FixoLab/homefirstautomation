import React from "react";
const StartJourney = React.lazy(() => import("../components/start-journey"));

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
                    <div className="wp-block-group__inner-container">
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
          <div
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
              class="uk-visible@l uk-section-default uk-section uk-padding-remove-vertical uk-flex uk-flex-middle"
              uk-height-viewport="offset-top: true; offset-bottom: 20;"
              style={{ minHeight: "calc(80vh)" }}
            >
              <div class="uk-width-1-1">
                <div
                  class="uk-margin-remove-top tm-grid-expand uk-grid-collapse uk-grid"
                  uk-grid=""
                >
                  <div class="uk-grid-item-match uk-width-2-5@m uk-first-column">
                    <div class="uk-tile-default uk-tile">
                      <div class="uk-panel uk-width-1-1">
                        <div
                          class="uk-visible@l uk-position-absolute uk-width-1-1 uk-text-center"
                          uk-parallax="x: 0,0; y: 0,0; scale: 1.25,1.75; opacity: .5,1; easing: 1;"
                        >
                          <img
                            src="assets/images/josh-ai-1.webp"
                            width="1500"
                            height="1500"
                            class="el-image"
                            alt=""
                          />
                        </div>

                        <div
                          class="uk-hidden uk-position-absolute uk-width-1-1"
                          uk-parallax="scale: 1,1.5; opacity: .5,1; easing: 1;"
                        >
                          <img
                            src="assets/images/josh-ai-1.webp"
                            width="1500"
                            height="1500"
                            class="el-image"
                            alt=""
                          />
                        </div>

                        <div class="uk-visible@l uk-position-absolute uk-width-1-1">
                          <img
                            src="assets/images/josh-ai-2.webp"
                            width="1500"
                            height="1500"
                            class="el-image"
                            alt=""
                          />
                        </div>

                        <div class="uk-hidden uk-position-absolute uk-width-1-1">
                          <img
                            src="assets/images/josh-ai-2.webp"
                            width="1200"
                            height="1200"
                            class="el-image"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="uk-grid-item-match uk-flex-middle uk-width-3-5@m">
                    <div class="uk-panel uk-width-1-1">
                      <div class="uk-visible@xl uk-margin uk-text-center">
                        <div
                          class="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match uk-grid josh-ai-feature-desktop"
                          uk-grid=""
                        >
                          <div class="uk-first-column">
                            <div class="el-item uk-panel uk-margin-remove-first-child">
                              <img
                                src="assets/images/josh-ai-3.webp"
                                width="150"
                                height="150"
                                class="el-image"
                                alt="Brain icon"
                                style={{ margin: "0 auto" }}
                              />

                              <h3 class="el-title uk-margin-top uk-margin-remove-bottom">
                                Pattern Recognition
                              </h3>

                              <div class="el-content uk-panel uk-margin-top minigray">
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
                            <div class="el-item uk-panel uk-margin-remove-first-child">
                              <img
                                src="assets/images/josh-ai-4.webp"
                                width="150"
                                height="150"
                                class="el-image"
                                alt="safe icon"
                                style={{ margin: "0 auto" }}
                              />

                              <h3 class="el-title uk-margin-top uk-margin-remove-bottom">
                                Secure &amp; Private
                              </h3>

                              <div class="el-content uk-panel uk-margin-top minigray">
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
                            <div class="el-item uk-panel uk-margin-remove-first-child">
                              <img
                                src="assets/images/josh-ai-5.webp"
                                width="150"
                                height="150"
                                class="el-image"
                                alt="sun icon"
                                style={{ margin: "0 auto" }}
                              />

                              <h3 class="el-title uk-margin-top uk-margin-remove-bottom">
                                Improving Daily
                              </h3>

                              <div class="el-content uk-panel uk-margin-top minigray">
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
                  class="tm-grid-expand uk-grid-column-collapse uk-grid-margin uk-grid"
                  uk-grid=""
                >
                  <div class="uk-width-1-5@m uk-first-column"></div>

                  <div class="uk-width-4-5@m">
                    <div class="uk-hidden@xl uk-margin uk-text-center">
                      <div
                        class="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match uk-grid uk-grid-stack josh-ai-feature-tablet"
                        uk-grid=""
                      >
                        <div class="uk-first-column">
                          <div class="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-3.webp"
                              width="150"
                              height="150"
                              class="el-image"
                              alt="Brain icon"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 class="el-title uk-margin-top uk-margin-remove-bottom">
                              Pattern <br />
                              Recognition
                            </h3>

                            <div class="el-content uk-panel uk-margin-top minigray">
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
                          <div class="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-4.webp"
                              width="150"
                              height="150"
                              class="el-image"
                              alt="safe icon"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 class="el-title uk-margin-top uk-margin-remove-bottom">
                              Secure &amp;
                              <br /> Private
                            </h3>

                            <div class="el-content uk-panel uk-margin-top minigray">
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
                          <div class="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-5.webp"
                              width="150"
                              height="150"
                              class="el-image"
                              alt="sun icon"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 class="el-title uk-margin-top uk-margin-remove-bottom">
                              Improving
                              <br /> Daily
                            </h3>

                            <div class="el-content uk-panel uk-margin-top minigray">
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
            <div class="uk-hidden@l uk-section-default uk-section">
              <div class="uk-container">
                <div
                  class="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
                  uk-grid=""
                >
                  <div class="uk-width-1-1 uk-first-column">
                    <div class="uk-hidden@xl uk-margin uk-text-center">
                      <div
                        class="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match uk-grid uk-grid-stack"
                        uk-grid=""
                      >
                        <div class="uk-first-column">
                          <div class="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-3.webp"
                              width="150"
                              height="150"
                              class="el-image"
                              alt="Brain icon"
                              loading="lazy"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 class="el-title uk-margin-top uk-margin-remove-bottom">
                              Pattern <br />
                              Recognition
                            </h3>

                            <div class="el-content uk-panel uk-margin-top minigray">
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
                        <div class="uk-grid-margin uk-first-column">
                          <div class="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-4.webp"
                              width="150"
                              height="150"
                              class="el-image"
                              alt="safe icon"
                              loading="lazy"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 class="el-title uk-margin-top uk-margin-remove-bottom">
                              Secure &amp;
                              <br /> Private
                            </h3>

                            <div class="el-content uk-panel uk-margin-top minigray">
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
                        <div class="uk-grid-margin uk-first-column">
                          <div class="el-item uk-panel uk-margin-remove-first-child">
                            <img
                              src="assets/images/josh-ai-5.webp"
                              width="150"
                              height="150"
                              class="el-image"
                              alt="sun icon"
                              loading="lazy"
                              style={{ margin: "0 auto" }}
                            />

                            <h3 class="el-title uk-margin-top uk-margin-remove-bottom">
                              Improving
                              <br /> Daily
                            </h3>

                            <div class="el-content uk-panel uk-margin-top minigray">
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
          <div
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
        </div>
      </div>
    </div>
  );
};

export default JoshAi;
