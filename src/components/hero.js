import React from "react";

const Hero = () => {
  return (
    <>
      <div className="is-layout-flow wp-block-group homevideo">
        <div className="wp-block-group__inner-container">
          <figure
            className="wp-block-image size-large homephone"
            style={{ opacity: "0.9999" }}
          >
            <img
              decoding="async"
              width="470"
              height="938"
              src="https://www.projectautomate.com/wp-content/uploads/2020/10/phoneoverlay4.png"
              alt=""
              className="wp-image-1922"
              srcSet="https://www.projectautomate.com/wp-content/uploads/2020/10/phoneoverlay4.png 470w, https://www.projectautomate.com/wp-content/uploads/2020/10/phoneoverlay4-150x300.png 150w"
              sizes="(max-width: 470px) 100vw, 470px"
            />
          </figure>

          <video
            id="video-background"
            autoPlay
            muted
            loop="loop"
            width="300"
            height="150"
            playsInline=""
            data-origwidth="300"
            data-origheight="150"
          >
            <source
              src="https://www.projectautomate.com/wp-content/uploads/2020/08/newhome.mp4"
              type="video/mp4"
            />
          </video>

          <div className="is-layout-flow wp-block-group homeintrotop centerintro">
            <div className="wp-block-group__inner-container">
              <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                <div className="wp-block-group__inner-container">
                  <h1>Luxury Smart Home Systems</h1>

                  <div className="homenumber" style={{ display: "none" }}>
                    (310)-402-4818
                  </div>

                  <div className="wp-block-image control4small homecedialogo">
                    <figure className="alignleft size-large is-resized">
                      <a href="https://bcert.me/bc/html/show-badge.html?b=steetnag">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="https://www.projectautomate.com/wp-content/uploads/2021/02/cediacit.png"
                          alt=""
                          className="wp-image-3276"
                          width="159"
                          height="159"
                          srcSet="https://www.projectautomate.com/wp-content/uploads/2021/02/cediacit.png 300w, https://www.projectautomate.com/wp-content/uploads/2021/02/cediacit-150x150.png 150w, https://www.projectautomate.com/wp-content/uploads/2021/02/cediacit-100x100.png 100w"
                          sizes="(max-width: 159px) 100vw, 159px"
                        />
                      </a>
                    </figure>
                  </div>

                  <p>
                    <a href="#3">Learn More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
