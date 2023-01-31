import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Control4 = () => {
  return (
    <>
      <div className="control4">
        <div className="control4-hero">
          <video
            autoPlay
            loop="loop"
            muted
            playsInline=""
            width="300"
            height="150"
          >
            <source src="assets/video/contol-4.mp4" type="video/mp4" />
          </video>
          <div className="control4-content">
            <h1>EFFORTLESS CONTROL OF WHAT MATTERS MOST</h1>
            <div>
              <p className="minigray">
                Add comfort and security to your luxury Orange County property
                with Control4's innovative smart home solutions. Revamp your
                lifestyle with cutting-edge products and features that allow
                seamless control of your technology to create the perfect
                environment for your family.
              </p>
            </div>
            <p>
              <a aria-label="Scroll down01" href="#1">
                See our How-To Videos
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="control4-nav">
        <div className="control4-nav-area">
          <div className="image">
            <img src="assets/images/logo-brands-control4.webp" alt="" />
          </div>
          <div className="nav-area">
            <a href="#">CONTROL4 OS3</a>
            <a href="#">WHOLE HOME</a>
            <a href="#">CLIMATE AND COMFORT</a>
            <a href="#">SAFETY & SECURITY</a>
            <a href="#">INTERCOM ANYWHERE</a>
          </div>
        </div>
      </div>
      <div
        className="home-standard"
        style={{
          backgroundImage: "url(/assets/images/header-brands-control4.webp)",
        }}
      >
        <div className="home-standard-area">
          <div className="content">
            <div className="top">
              <h3> The New Smart Home Standard </h3>
              <p>
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
        className="home-standard"
        style={{
          backgroundImage: "url(/assets/images/header-brands-control4-02.webp)",
        }}
      >
        <div className="home-standard-area">
          <div className="content" style={{ margin: "0 0 auto auto" }}>
            <div className="top">
              <h3>SMARTER LIVING YOUR WAY</h3>
              <p>
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
        className="home-standard"
        style={{
          backgroundImage: "url(/assets/images/header-brands-control4-03.webp)",
        }}
      >
        <div className="home-standard-area">
          <div className="content" style={{ margin: "0 0 auto auto" }}>
            <div className="top">
              <h3>CLIMATE & COMFORT</h3>
              <p>
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
          <h4 className="title">
            <span>CLIMATE</span>
          </h4>
          <h4 className="title">
            <span>BLINDS & SHADES</span>
          </h4>
        </div>
        <div className="control4-featureV2-bottom">
          <div className="item">
            <div className="item-image">
              <img src="assets/images/control4-feature-07.webp" alt="" />
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src="assets/images/control4-feature-08.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Control4;
