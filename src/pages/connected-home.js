import React from "react";

const ConnectedHome = () => {
  return (
    <div>
      <div className="connected-living-title-section">
        <div className="title-inner">
          <h4>MODERN LUXURY</h4>
          <p>
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
      <div>
        <img style={{width: "100vw"}} src="assets/images/connected-home.webp" alt="" />
      </div>
      <div className="connected-living-title-section bottom-title-section">
        <div className="title-inner">
          <h4>HOME AUTOMATION</h4>
          <p>
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
