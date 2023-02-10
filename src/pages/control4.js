/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Control4 = () => {
  return (
    <>
      <div
        id="control"
        className="uk-visible@m uk-section-secondary uk-cover-container uk-section uk-flex uk-flex-middle contro4_hero"
        tm-header-transparent="light"
        uk-height-viewport="offset-top: true; offset-bottom: 20;"
      >
        <video
          src="assets/video/contol-4.mp4"
          type="video/mp4"
          loop
          autoPlay
          muted
          playsInline=""
          uk-cover=""
        ></video>
        <div
          className="uk-position-cover"
          style={{ backgroundColor: "rgba(8, 8, 8, 0.2)" }}
        ></div>

        <div className="uk-width-1-1">
          <div className="uk-container uk-container-xlarge uk-position-relative">
            <div
              className="tm-header-placeholder uk-margin-remove-adjacent"
              style={{ height: "101px" }}
            ></div>
            <div className="tm-grid-expand uk-margin-xlarge uk-grid" uk-grid="">
              <div className="uk-width-1-3@m uk-first-column"></div>

              <div className="uk-grid-item-match uk-flex-bottom uk-width-1-3@m">
                <div className="uk-panel uk-width-1-1"></div>
              </div>

              <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
                <div className="uk-panel uk-width-1-1">
                  <div className="uk-divider-small"></div>
                  <h3 className="uk-margin-remove-top uk-margin-remove-bottom uk-text-left">
                    Effortless Control of What Matters Most
                  </h3>
                  <div className="uk-panel uk-margin-small">
                    Add comfort and security to your luxury Orange County
                    property with Control4's innovative{" "}
                    <a href="/smart-home-automation">smart home solutions</a>.
                    Revamp your lifestyle with cutting-edge products and
                    features that allow seamless control of your technology to
                    create the perfect environment for your family.
                  </div>
                  <hr />
                  <div className="uk-margin">
                    <a className="button__primary" href="#1">
                      See our How-To Videos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="uk-hidden@m uk-section-secondary uk-cover-container uk-section uk-padding-remove-vertical uk-flex uk-flex-middle contro4_hero"
        uk-height-viewport="offset-top: true; offset-bottom: true;"
      >
        <video
          src="assets/video/contol-4.mp4"
          loop
          autoPlay
          muted
          playsInline=""
          uk-cover=""
        ></video>
        <div
          className="uk-position-cover"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(180deg, rgba(8,8,9,0) 60%, rgba(16,23,27,0.8) 100%)",
            backgroundClip: "padding-box",
          }}
        ></div>

        <div className="uk-width-1-1">
          <div className="uk-position-relative uk-panel">
            <div
              className="tm-grid-expand uk-grid-collapse uk-child-width-1-1 uk-margin-remove-vertical uk-grid uk-grid-stack"
              uk-grid=""
            >
              <div className="uk-width-1-1@m uk-first-column">
                <div className="uk-hidden@s">
                  <br />
                  <br />
                  <br />
                </div>
                <div className="uk-hidden@m">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="uk-grid-margin uk-container uk-container-large">
              <div
                className="tm-grid-expand uk-child-width-1-1 uk-grid uk-grid-stack"
                uk-grid=""
              >
                <div className="uk-width-1-1@m uk-first-column">
                  <div className="uk-divider-small"></div>
                  <h3 className="uk-margin-remove-top uk-margin-remove-bottom uk-text-left">
                    {" "}
                    Effortless Control of What Matters Most{" "}
                  </h3>
                  <div
                    className="uk-panel uk-margin-small"
                    style={{ marginBottom: "20px" }}
                  >
                    Add comfort and security to your luxury Orange County
                    property with Control4's innovative{" "}
                    <a href="/smart-home-automation">smart home solutions</a>.
                    Revamp your lifestyle with cutting-edge products and
                    features that allow seamless control of your technology to
                    create the perfect environment for your family.
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="control4-nav">
        <div className="control4-nav-area">
          <div className="image">
            <img src="assets/images/logo-brands-control4.webp" alt="" />
          </div>
          <div className="nav-area">
            <a href="#1">CONTROL4 OS3</a>
            <a href="#2">WHOLE HOME</a>
            <a href="#3">CLIMATE AND COMFORT</a>
            <a href="#4">SAFETY & SECURITY</a>
            <a href="#5">INTERCOM ANYWHERE</a>
            <a href="#6">UNIVERSAL REMOTE</a>
          </div>
        </div>
      </div>
      <div
        id="1"
        className="home-standard"
        style={{
          backgroundImage: "url(/assets/images/header-brands-control4.webp)",
        }}
      >
        <div className="home-standard-area">
          <div className="content">
            <div className="top">
              <h3> The New Smart Home Standard </h3>
              <p className="minigray">
                Experience effortless, personalized control of your home with
                fluid, intuitive interfaces and more than a thousand new
                features that make it easier than ever to craft a smart home
                experience entirely unique to you.
              </p>
            </div>
            <div className="image">
              <img src="assets/images/header-brands-control4.webp" alt="" />
            </div>
            <div className="bottom">
              <h4> Have An Existing System? </h4>
              <h6> Enjoy The Reimagined Smart Home Experience </h6>
              <a href="/contact-us">Upgrade to OS 3</a>
            </div>
          </div>
        </div>
      </div>

      <div className="control4-feature">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay
          className="feature-area"
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="feature-item">
              <div className="image">
                <img src="assets/images/control4-feature-01.webp" alt="" />
              </div>
              <div className="content">
                <h5> At-a-Glance Views of Your Most Vital Devices </h5>
                <p>
                  Create at-a-glance dashboards of your lighting, shades, door
                  locks and more to quickly ensure that your home is protected
                  before going to sleep.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature-item">
              <div className="image">
                <img src="assets/images/control4-feature-02.webp" alt="" />
              </div>
              <div className="content">
                <h5>YOUR FAVORITE CONTROLS ON ONE DASHBOARD</h5>
                <p>
                  Your smart devices, scenes and entertainment of choice are now
                  front and center for instant access on the new Favorites
                  dashboard screen.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature-item">
              <div className="image">
                <img src="assets/images/control4-feature-03.webp" alt="" />
              </div>
              <div className="content">
                <h5>ONE-STOP ACCESS TO YOUR ENTERTAINMENT</h5>
                <p>
                  Easily stream, share and manage your favorite music and video
                  in any room or throughout the entire home from a single
                  interface.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="control4-empty"></div>
      <div
        id="2"
        className="home-standard"
        style={{
          backgroundImage: "url(/assets/images/header-brands-control4-02.webp)",
        }}
      >
        <div className="home-standard-area">
          <div className="content" style={{ margin: "0 0 auto auto" }}>
            <div className="top">
              <h3>SMARTER LIVING YOUR WAY</h3>
              <p className="minigray">
                Imagine your dream smart home, then watch Control4 bring it to
                life. Their scalable products, compatibility with third-party
                devices and intuitive remotes and interfaces come together to
                create a fully customizable, easy-to-use smart home system the
                whole family will enjoy.
              </p>
            </div>
            <div className="image">
              <img src="assets/images/header-brands-control4-02.webp" alt="" />
            </div>
            <div className="bottom">
              <h4>WANT TO HAVE A SMART HOME?</h4>
              <h6>
                COMPLETE SMART HOME CONTROL. TOP TO BOTTOM. INSIDE AND OUT.
              </h6>
              <a href="/contact-us">Get Started</a>
            </div>
          </div>
        </div>
      </div>
      <div className="control4-feature">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay
          className="feature-area"
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="feature-item">
              <div className="image">
                <img src="assets/images/control4-feature-04.webp" alt="" />
              </div>
              <div className="content">
                <h5>CONTROL WHERE YOU NEED IT</h5>
                <p>
                  Controlling your home is effortless no matter where your day
                  takes you. Use the Control4 handheld remote while watching TV,
                  an in-wall keypad when you’re walking out the door, your
                  smartphone while away from home and more.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature-item">
              <div className="image">
                <img src="assets/images/control4-feature-05.webp" alt="" />
              </div>
              <div className="content">
                <h5>ONE APP FOR EVERYTHING</h5>
                <p>
                  Adjust your lights, lock your doors and bring down the
                  shades—all from the same platform. Control4 communicates with
                  over 300 brands outside of their own purpose-built solutions
                  so you can use all the products you love in just one app.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature-item">
              <div className="image">
                <img src="assets/images/control4-feature-06.webp" alt="" />
              </div>
              <div className="content">
                <h5>NEVER LIFT A FINGER</h5>
                <p>
                  Let your smart home do the work for you so you never have to
                  tap a button. Wake to rising shades and your favorite music,
                  arrive from work to a beautifully lit home and say goodnight
                  as Control4 arms your security system.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="control4-empty"></div>
      <div
        id="3"
        className="home-standard"
        style={{
          backgroundImage: "url(/assets/images/header-brands-control4-03.webp)",
        }}
      >
        <div className="home-standard-area">
          <div className="content" style={{ margin: "0 0 auto auto" }}>
            <div className="top">
              <h3>CLIMATE & COMFORT</h3>
              <p className="minigray">
                Through seamless control of thermostats and motorized shades,
                you can maximize your family's comfort while becoming more
                energy efficient. Have your go-to settings saved and ready at
                the press of a button or simple voice command.
              </p>
            </div>
            <div className="image">
              <img src="assets/images/header-brands-control4-02.webp" alt="" />
            </div>
            <div className="bottom">
              <h6>
                REJOICE IN CLIMATE CONTROL THAT ANTICIPATES YOUR NEEDS, REDUCES
                ENERGY WASTE AND PARTNERS WITH ALL YOUR OTHER SMART TECHNOLOGY.
              </h6>
              <a href="/contact-us">Optimize Your Comfort</a>
            </div>
          </div>
        </div>
      </div>
      <div className="control4-featureV2">
        <div className="control4-featureV2-top">
          <div className="item">
            <h4 className="title">
              <span>CLIMATE</span>
            </h4>
            <div className="item-content">
              <div className="item-image">
                <img src="assets/images/control4-feature-07.webp" alt="" />
              </div>
              <p>
                Fully integrate your HVAC, thermal systems and even your
                fireplace for personalized comfort settings that are easy to
                pull up. Create distinct climate zones to adjust settings based
                on location, application and individual family member
                preferences.
              </p>
            </div>
          </div>
          <div className="item">
            <h4 className="title">
              <span>BLINDS & SHADES</span>
            </h4>
            <div className="item-content">
              <div className="item-image">
                <img src="assets/images/control4-feature-08.webp" alt="" />
              </div>
              <p>
                Raise or lower your shades and blinds without ever having to
                leave the couch with motorized window treatments. Through
                automated settings based on lighting and temperature sensors,
                you'll increase your comfort and energy efficiency
                simultaneously.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#fafafa" }}>
        <div className="control4-brands">
          <div className="control4-brands-area">
            <div className="top">
              <h3> Playing Nicely </h3>
              <h5> With the Brands You Love </h5>
            </div>
            <div className="nav-area">
              <img
                src="assets/images/control4-brands-01.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-02.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-03.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-04.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-05.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-06.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-07.webp"
                alt="control4 brand"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="control4-empty"></div>
      <div
        id="4"
        className="home-standard"
        style={{
          backgroundImage: "url(/assets/images/header-brands-control4-04.webp)",
        }}
      >
        <div className="home-standard-area">
          <div className="content" style={{ margin: "0 0 auto auto" }}>
            <div className="top">
              <h3>SAFETY & SECURITY</h3>
              <p className="minigray">
                Your family's safety should always be a top priority, which is
                why Control4 has made proactive security a key feature of their
                systems. Deliver peace of mind to the entire family with
                customized alerts and remote access to locks, surveillance and
                more.
              </p>
            </div>
            <div className="image">
              <img src="assets/images/header-brands-control4-02.webp" alt="" />
            </div>
            <div className="bottom">
              <h6>ALWAYS PUT YOUR SAFETY FIRST</h6>
              <a href="/contact-us">Achieve Greater Peace of Mind</a>
            </div>
          </div>
        </div>
      </div>
      <div className="peace-of-mind">
        <div className="tm-grid-expand uk-grid-collapse uk-grid">
          <div className="uk-grid-item-match uk-width-1-2@m uk-first-column">
            <div className="uk-tile-default uk-tile peace-of-mind-left">
              <h3>Protect What Matters Most</h3>
              <h5>Take Control of Your Security</h5>
              <p className="minigray">
                Fortify your home with a Control4 system that lets you look in
                on locks,
                <a href="/index.php/solutions/smart-security">cameras</a>,
                garage doors and lighting from anywhere in the world. Receive
                alerts if someone enters your Orange County, CA house or a door
                is unlocked to address security risks immediately.
              </p>
              <div className="uk-margin">
                <img
                  src="assets/images/control4-104.webp"
                  width="1500"
                  height="1200"
                  className="el-image"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="uk-grid-item-match uk-width-1-2@m">
            <div className="uk-tile-secondary uk-tile peace-of-mind-right">
              <h3> Peace Of Mind </h3>
              <div className="uk-margin uk-width-2xlarge uk-margin-auto">
                <div className="uk-child-width-expand uk-grid" uk-grid="">
                  <div className="uk-width-1-3@m uk-first-column">
                    <ul
                      className="el-nav uk-tab uk-tab-left"
                      uk-tab="connect: #js-e6ab; itemNav: #js-e6b8; animation: uk-animation-slide-left-small; media: @m  ;"
                    >
                      <li className="">
                        <a href="#" aria-label="icon">
                          Alerts and Notifications
                        </a>
                      </li>
                      <li className="">
                        <a href="#" aria-label="icon">
                          Intercom Everywhere
                        </a>
                      </li>
                      <li className="">
                        <a href="#" aria-label="icon">
                          Locks and Cameras
                        </a>
                      </li>
                      <li className="uk-active">
                        <a href="#" aria-label="icon" aria-expanded="true">
                          Mockupancy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul
                    id="js-e6ab"
                    className="uk-switcher"
                    uk-height-match="row: false"
                  >
                    <li className="el-item uk-margin-remove-first-child">
                      <img
                        src="assets/images/control4-100.webp"
                        width="1000"
                        height="800"
                        className="el-image uk-border-rounded"
                        alt=""
                      />
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                        Alerts and Notifications
                      </h3>
                      <div className="el-content uk-panel uk-margin-top">
                        Don't worry about being out of the loop when you leave
                        the house. Set up alerts and notifications based on what
                        matters most to you. Opt for alerts when motion sensors
                        go off, someone enters the house or doors are left
                        unlocked.
                      </div>
                    </li>
                    <li className="el-item uk-margin-remove-first-child">
                      <img
                        src="assets/images/control4-101.webp"
                        width="1000"
                        height="800"
                        className="el-image uk-border-rounded"
                        alt=""
                      />
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                        Intercom Everywhere
                      </h3>
                      <div className="el-content uk-panel uk-margin-top">
                        No matter where you are, it's easy to interact with
                        anyone at your front door. With Control4's Intercom
                        Anywhere, you'll be able to speak with them, turn on
                        lights and unlock the door all from the same intuitive
                        security interface.
                      </div>
                    </li>
                    <li className="el-item uk-margin-remove-first-child">
                      <img
                        src="assets/images/control4-102.webp"
                        width="1000"
                        height="800"
                        className="el-image uk-border-rounded"
                        alt=""
                      />
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                        Locks and Cameras
                      </h3>
                      <div className="el-content uk-panel uk-margin-top">
                        You can fortify your security with a Control4 system
                        that lets you view surveillance footage and check on the
                        status of your locks from anywhere. Create scenes that
                        lock doors, turn on landscape lighting and activate your
                        alarm all at once.
                      </div>
                    </li>
                    <li className="el-item uk-margin-remove-first-child uk-active">
                      <img
                        src="assets/images/control4-103.webp"
                        width="1500"
                        height="1200"
                        className="el-image uk-border-rounded"
                        alt=""
                      />
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                        Mockupancy
                      </h3>
                      <div className="el-content uk-panel uk-margin-top">
                        Do you worry about leaving the house unoccupied when at
                        work or on vacation? Set up a "Mockupancy" scene that
                        turns lights on and off and opens and closes shades at
                        random intervals to make it seem like someone is home at
                        all times.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#fafafa" }}>
        <div className="control4-brands">
          <div className="control4-brands-area">
            <div className="top">
              <h3>PLAYING NICELY</h3>
              <h5> With the Brands You Love </h5>
            </div>
            <div className="nav-area">
              <img
                src="assets/images/control4-brands-08.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-09.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-10.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-11.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-12.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-13.webp"
                alt="control4 brand"
              />
              <img
                src="assets/images/control4-brands-14.webp"
                alt="control4 brand"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="5"
        className="home-standard"
        style={{
          backgroundImage: "url(/assets/images/header-brands-control4-05.webp)",
        }}
      >
        <div className="home-standard-area">
          <div className="content">
            <div className="top">
              <h3>INTERCOM ANYWHERE</h3>
              <p className="minigray">
                With a Control4 installation, you get a built-in intercom system
                that lets you communicate with guests or family members. No
                added hardware or bulky equipment is needed. Just use the
                Intercom Anywhere feature in your existing touchpads or a mobile
                app.
              </p>
            </div>
            <div className="image">
              <img src="assets/images/header-brands-control4-05.webp" alt="" />
            </div>
            <div className="bottom">
              <h4>ELEVATE THE WAY YOU INTERACT</h4>
              <h6>
                MAKE IT SIMPLER TO COMMUNICATE WITH YOUR ENTIRE FAMILY OR
                MONITOR WHO'S AT THE FRONT DOOR OR GATE WITH A NATIVE INTERCOM
                SOLUTION.
              </h6>
              <a href="/contact-us">Add a Modern-Day Intercom</a>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section-muted uk-section uk-section-small uk-padding-remove-bottom">
        <div
          className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
          uk-grid=""
        >
          <div className="uk-width-1-1 uk-first-column">
            <div
              uk-slider="autoplay: 1;"
              id="page#16"
              className="uk-margin uk-text-left uk-slider uk-slider-container"
            >
              <div className="uk-position-relative">
                <ul className="uk-slider-items uk-grid uk-grid-medium">
                  <li className="el-item uk-width-1-1 uk-width-3-5@m uk-light">
                    <div className="uk-cover-container">
                      <img
                        src="assets/images/control4-feature-09.webp"
                        width="2000"
                        height="1125"
                        alt="coastal source speaker in rain"
                        className="el-image uk-transition-opaque"
                      />

                      <div className="uk-overlay-default uk-position-cover"></div>
                      <div className="uk-position-bottom-left uk-overlay uk-width-2xlarge uk-margin-remove-first-child">
                        <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                          Always Keeping You Connected
                        </h3>

                        <div className="el-content uk-panel">
                          Access your intercom system on your mobile phone to
                          tell your babysitter you're running late or let a
                          delivery person drop off a package indoors.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item uk-width-1-1 uk-width-3-5@m uk-active uk-light">
                    <div className="uk-cover-container">
                      <img
                        src="assets/images/control4-feature-10.webp"
                        width="2000"
                        height="1125"
                        alt="coastal source speaker in pothos plant"
                        className="el-image uk-transition-opaque"
                      />

                      <div className="uk-overlay-default uk-position-cover"></div>
                      <div className="uk-position-bottom-left uk-overlay uk-width-2xlarge uk-margin-remove-first-child">
                        <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                          Control at Home
                        </h3>

                        <div className="el-content uk-panel">
                          One touchscreen communicates with all others to let
                          the family know it's time for dinner or with your
                          video doorbell to let in guests.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item uk-width-1-1 uk-width-3-5@m uk-light">
                    <div className="uk-cover-container">
                      <img
                        src="assets/images/control4-feature-11.webp"
                        width="2000"
                        height="1125"
                        alt=""
                        className="el-image uk-transition-opaque"
                      />

                      <div className="uk-overlay-default uk-position-cover"></div>
                      <div className="uk-position-bottom-left uk-overlay uk-width-2xlarge uk-margin-remove-first-child">
                        <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                          Not Your Everyday Doorbell
                        </h3>

                        <div className="el-content uk-panel">
                          Answer the door from anywhere in the world with
                          Control4 doorbells that let you speak to guests, turn
                          on lights and disarm your alarm.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="uk-visible@s">
                  <a
                    className="el-slidenav uk-position-medium uk-position-center-left uk-icon uk-slidenav-previous uk-slidenav"
                    href="#"
                    uk-slidenav-previous=""
                    uk-slider-item="previous"
                    aria-label="Previous slide"
                  ></a>
                  <a
                    className="el-slidenav uk-position-medium uk-position-center-right uk-icon uk-slidenav-next uk-slidenav"
                    href="#"
                    uk-slidenav-next=""
                    uk-slider-item="next"
                    aria-label="Next slide"
                  ></a>
                </div>
              </div>

              <ul
                className="el-nav uk-slider-nav uk-dotnav uk-flex-center uk-margin-top uk-visible@s"
                uk-margin=""
              >
                <li uk-slider-item="0" className="uk-first-column">
                  <a href="#" aria-label="Go to slide 1"></a>
                </li>
                <li uk-slider-item="1" className="uk-active">
                  <a href="#" aria-label="Go to slide 2"></a>
                </li>
                <li uk-slider-item="2" className="">
                  <a href="#" aria-label="Go to slide 3"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="control4-empty"></div>
      <div
        id="6"
        className="home-standard"
        style={{
          backgroundImage: "url(/assets/images/header-brands-control4-06.webp)",
        }}
      >
        <div className="home-standard-area">
          <div className="content">
            <div className="top">
              <h3>UNIVERSAL REMOTE</h3>
              <p className="minigray">
                The Neeo and SR-260 remotes put control of all your technology
                in the palm of your hand. These remotes provide an intuitive,
                tactile approach to smart home control and can be customized to
                match the needs of every family member.
              </p>
            </div>
            <div className="image">
              <img src="assets/images/header-brands-control4-06.webp" alt="" />
            </div>
            <div className="bottom">
              <h4>HANDHELD CONTROL, REVOLUTIONIZED</h4>
              <h6>
                ENJOY YOUR REMOTE IN A WHOLE NEW WAY WITH EASY ACCESS TO YOUR
                FAVORITE FEATURES AND PRESET SCENES FOR MOVIE NIGHT, GAME DAY
                AND MORE.
              </h6>
              <a href="/contact-us">Improve Your Control Experience</a>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section-default uk-section uk-padding-remove-vertical">
        <div className="tm-grid-expand uk-grid-margin uk-grid" uk-grid="">
          <div className="uk-grid-item-match uk-width-1-1@m uk-width-1-1@l uk-width-1-2@xl uk-first-column">
            <div className="uk-tile-secondary uk-tile">
              <div
                className="uk-child-width-1-2 uk-child-width-1-2@m uk-grid-match uk-grid"
                uk-grid=""
              >
                <div className="uk-first-column">
                  <div className="el-item uk-panel uk-margin-remove-first-child">
                    <img
                      src="assets/images/header-brands-control4-07.webp"
                      width="1500"
                      height="1200"
                      className="el-image"
                      alt=""
                    />

                    <h3
                      className="el-title uk-margin-top uk-margin-remove-bottom"
                      style={{ fontSize: "30px" }}
                    >
                      Beyond the Universal Remote
                    </h3>

                    <div className="el-content uk-panel uk-margin-top">
                      Spruce up your San Francisco media room or bedroom
                      environment with a universal remote that lets you manage
                      Control4 lighting, climate, AV and more.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="el-item uk-panel uk-margin-remove-first-child">
                    <img
                      src="assets/images/header-brands-control4-08.webp"
                      width="1500"
                      height="1200"
                      className="el-image"
                      alt=""
                    />

                    <h3
                      className="el-title uk-margin-top uk-margin-remove-bottom"
                      style={{ fontSize: "30px" }}
                    >
                      Can Your Remote Do This?
                    </h3>

                    <div className="el-content uk-panel uk-margin-top">
                      Find the remote quickly through location alerts, recharge
                      it to reduce battery waste, enjoy easy access to your
                      favorite features and use it in any room.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="uk-grid-item-match uk-width-1-1@m uk-width-1-1@l uk-width-1-2@xl">
            <div className="uk-tile-default uk-tile uk-flex uk-flex-middle">
              <div className="uk-panel uk-width-1-1">
                <div>
                  <br />
                </div>
                <h4
                  className="uk-margin-remove-bottom"
                  style={{ color: "#007ca1", fontWeight: "400" }}
                >
                  Envision the Possibilities
                </h4>
                <div className="uk-panel uk-margin-small uk-width-large">
                  Click through our interactive demo below to see the many ways
                  a Control4 smart home can transform your day-to-day lifestyle.
                </div>
                <div className="uk-inline">
                  <img
                    src="assets/images/header-brands-control4-09.webp"
                    width="3000"
                    height="1688"
                    alt=""
                  />

                  <a
                    className="uk-position-absolute icon"
                    style={{ top: "62%", left: "74%" }}
                    href="#"
                    aria-label="icon"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>

                  <div
                    style={{ width: "300px" }}
                    uk-drop="pos: top-center; auto-update: false;"
                    className="uk-drop"
                  >
                    <div className="csh-card">
                      <div className="csh-card-content">
                        <h3 className="csh-card-content-title">
                          Add a Soundtrack to Your Day
                        </h3>
                        <div className="csh-card-content-desc">
                          <p>
                            Effortlessly access your favorite music and play it
                            through
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    className="uk-position-absolute icon"
                    style={{ top: "12%", left: "24%" }}
                    href="#"
                    aria-label="icon"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>

                  <div
                    style={{ width: "300px" }}
                    uk-drop="pos: top-center; auto-update: false;"
                    className="uk-drop"
                  >
                    <div className="csh-card">
                      <div className="csh-card-content">
                        <h3 className="csh-card-content-title">
                          Sunlight at Your Command
                        </h3>
                        <div className="csh-card-content-desc">
                          <p>
                            Control your shades through a mobile app, schedules
                            or sensors to ensure the perfect lighting and
                            temperature every time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    className="uk-position-absolute icon"
                    style={{ top: "5%", left: "52%" }}
                    href="#"
                    aria-label="icon"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>

                  <div
                    style={{ width: "300px" }}
                    uk-drop="pos: top-center; auto-update: false;"
                    className="uk-drop"
                  >
                    <div className="csh-card">
                      <div className="csh-card-content">
                        <h3 className="csh-card-content-title">
                          Add a Spark to Your Outdoors
                        </h3>
                        <div className="csh-card-content-desc">
                          <p>
                            Landscape lighting elevates your outdoor living
                            spaces while improving your security and safety with
                            light schedules and sensors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    className="uk-position-absolute icon"
                    style={{ top: "25%", left: "54%" }}
                    href="#"
                    aria-label="icon"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>

                  <div
                    style={{ width: "300px" }}
                    uk-drop="pos: top-center; auto-update: false;"
                    className="uk-drop"
                  >
                    <div className="csh-card">
                      <div className="csh-card-content">
                        <h3 className="csh-card-content-title">
                          Movie Night Perfection
                        </h3>
                        <div className="csh-card-content-desc">
                          <p>
                            Enjoy movie night like never before with universal
                            remotes that adjust lights, climate, shades and AV
                            to craft the perfect viewing environment in seconds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    className="uk-position-absolute icon"
                    style={{ top: "54%", left: "51%" }}
                    href="#"
                    aria-label="icon"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>

                  <div
                    style={{ width: "300px" }}
                    uk-drop="pos: top-center; auto-update: false;"
                    className="uk-drop"
                  >
                    <div className="csh-card">
                      <div className="csh-card-content">
                        <h3 className="csh-card-content-title">
                          Access Control Made Easy
                        </h3>
                        <div className="csh-card-content-desc">
                          <p>
                            One button press at the end of the night or as you
                            leave the house locks all your doors for optimal
                            efficiency and peace of mind.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    className="uk-position-absolute icon"
                    style={{ top: "38%", left: "69%" }}
                    href="#"
                    aria-label="icon"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>

                  <div
                    style={{ width: "300px" }}
                    uk-drop="pos: top-center; auto-update: false;"
                    className="uk-drop"
                  >
                    <div className="csh-card">
                      <div className="csh-card-content">
                        <h3 className="csh-card-content-title">
                          A Fully Integrated Thermostat
                        </h3>
                        <div className="csh-card-content-desc">
                          <p>
                            Embrace an eco-conscious lifestyle with a thermostat
                            that works with your motorized shades to maintain
                            your preset temperature.
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
    </>
  );
};

export default Control4;
