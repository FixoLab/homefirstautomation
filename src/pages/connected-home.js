import React from "react";
import { LazyImage } from "react-lazy-media";
import { Link } from "react-router-dom";

const ConnectedHome = () => {
  return (
    <div id="site-content">
      <div className="connected-living-title-section">
        <div className="title-inner">
          <h4>MODERN LUXURY</h4>
          <p className="minigray">
            What better way to see the possibilities of automation than with an
            interactive dollhouse? Peruse each room to learn how smart devices
            can make your home more beautiful and fitted to your luxury
            lifestyle. From media control in your dedicated theater to smart
            security in your underground garage, simply click or hover over each
            area to discover the many technologies that can fit seamlessly into
            your property.
          </p>
        </div>
      </div>
      <div className="csh-wrapper">
        <LazyImage
          style={{ width: "100%" }}
          src={"assets/images/connected-home.webp"}
          alt=""
        />
        {/* <img
          style={{ width: "100%" }}
          src="assets/images/connected-home.webp"
          alt=""
        /> */}
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "64%", left: "81%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_10.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">Smart Home Technology</h3>
              <div className="csh-card-content-desc">
                <p>
                  Enhance your lifestyle with simple, yet sophisticated control
                  of music, video, lights, climate and more
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "46%", left: "42%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_11.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">Multi-Room Music</h3>
              <div className="csh-card-content-desc">
                <p>
                  Share your music sources (receiver, internet radio, or iTunes
                  playlists) across multiple rooms in your home
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "45%", left: "75%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_12.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">Lighting Control</h3>
              <div className="csh-card-content-desc">
                <p>
                  Create the perfect ambiance and save energy with intelligent
                  and effortless control of your lights
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "75%", left: "11%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_13.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">
                {" "}
                OUTDOOR ENTERTAINMENT{" "}
              </h3>
              <div className="csh-card-content-desc">
                <p>
                  Create the perfect oasis to enjoy music and TV outside with
                  family and friends
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "83%", left: "23%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_14.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">Home Theater</h3>
              <div className="csh-card-content-desc">
                <p>
                  Pull the curtains back, home theater design made to impress.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "85%", left: "37%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_15.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">High Performance Audio</h3>
              <div className="csh-card-content-desc">
                <p>
                  Hear the difference with the best audio components to elevate
                  your listening experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "63%", left: "52%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_16.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">
                HIDDEN AUDIO VIDEO: TV IN PICTURE FRAME
              </h3>
              <div className="csh-card-content-desc">
                <p>
                  Blend technology with architecture and décor so you only
                  experience home entertainment when you want to
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "85%", left: "56%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_17.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">Connected Home</h3>
              <div className="csh-card-content-desc">
                <p>
                  Home technology and smart devices connected together on your
                  network for enhanced lifestyle
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "63%", left: "40%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_18.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">Multi-Room Video</h3>
              <div className="csh-card-content-desc">
                <p>
                  Share your video sources (cable, satellite, Apple TV, or game
                  console) across multiple TVs in your home
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "43%", left: "83%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_19.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title"> Video Surveillance </h3>
              <div className="csh-card-content-desc">
                <p>
                  Monitor activities real-time whether you’re in the house or on
                  the other side of the world
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="csh-plus-icon csh-marker uk-marker"
          style={{ top: "65%", left: "20%" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div
          style={{
            width: "300px",
          }}
          uk-drop="pos: top-center; auto-update: false;"
          className="uk-drop"
        >
          <div className="csh-card">
            <div className="csh-card-img">
              <img
                src="assets/images/living_08.webp"
                width="800"
                height="400"
                className="el-image uk-margin-auto uk-display-block"
                alt=""
              />
            </div>
            <div className="csh-card-content">
              <h3 className="csh-card-content-title">
                Centralized Distribution
              </h3>
              <div className="csh-card-content-desc">
                <p>
                  Streamline control and reduce wall clutter with anywhere
                  access to all your home technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connected-living-title-section bottom-title-section">
        <div className="title-inner">
          <h4>HOME AUTOMATION</h4>
          <p className="minigray">
            The ultimate upgrade for luxury homes, smart automation allows you
            to transform every space at the push of a button or single voice
            command. Effortlessly enhance interior design, increase security,
            and promote the perfect atmosphere throughout your property.
            Envision window treatments that adjust at pre-set times to reduce
            glare and protect fine art and delicate fabrics from harmful direct
            sunlight. Picture hallway lights that automatically illuminate as
            you walk through at night. Visualize a room that creates the perfect
            lighting, temperature, and music instantly at the push of a button.
            With smart home automation, your house is always ready to respond to
            your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectedHome;
