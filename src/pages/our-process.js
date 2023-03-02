import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const OurProcess = () => {
  return (
   <HelmetProvider>
    <Helmet>
        <meta
          name="description"
          content="Smart home installers in Orlando, Florida and its surrounding areas offering reliable design-build solutions that meet customers’ performance expectations.Contact us today to get started."
        />
        <title>
        Smart Home Installation in Orlando, Florida | Homefirst
        </title>
      </Helmet>
    <div id="site-content" className="our-process">
      <div className="our-process-hero">
        <video src="assets/video/our-process.mp4" loop autoPlay muted></video>
        <div className="our-process-video"></div>

        <div className="our-process-hero-content">
          <div className="content-wrapper">
            <h2 className="content-title">Our&nbsp;Process </h2>
            <div className="content-description minigray">
              As <Link to="/smart-home-automation">smart home installers</Link>{" "}
              serving Orlando, Florida and the surrounding areas we take great
              pride in having a standardized design-build process in place to
              ensure you receive a high-quality, reliable solution that matches
              your performance expectations.
            </div>
          </div>
        </div>
      </div>
      <div className="our-process-desc">
        <div className="our-process-desc-left">
          <h4 className="title"> Let Our Process Guide the Way</h4>
          <p className="subtitle minigray">
            For all of our projects, we strive for the ultimate professionalism
            by sticking to a consistent and transparent process. This way you
            know exactly what to expect throughout all phases of the project and
            have a clear understanding of how your technology goals are brought
            to life.
          </p>
          <div className="card">
            <h3 className="card-title">From start, to finish, and beyond... </h3>
            <p className="card-description minigray">
              Whether you're a new customer interested in our solutions, or an
              existing customer seeking support, we would love to hear from you.
              Don't hesitate to call or use our contact form to reach us for any
              reason. Our talented staff of representatives is knowledgeable,
              responsive and ready to answer your questions. Our{" "}
              <Link to="#">smart home company</Link> boasts technicians who are
              certified, experienced, and extremely passionate about every
              project. We take pride in building lifelong relationships with our
              valued customers. Contact us, we are ready to go to work for you.
            </p>
          </div>
          <p className="primary-btn" style={{ textAlign: "center" }}>
            <Link to="/contact-us">Learn More</Link>
          </p>
        </div>
        <div className="our-process-desc-right">
          <div className="card-item">
            <h3 className="card-item-title">1. Discovery Process:</h3>

            <div className="card-item-desc minigray">
              Your project begins with a one-on-one conversation where we learn
              everything about your needs and preferences so we can design a
              system curated just for you. We’ll take the time to learn about
              your lifestyle, interests and budget or space constraints. As we
              learn more, we’ll be able to better tailor the ideal functionality
              and capabilities for your system.
            </div>
          </div>
          <div className="card-item">
            <h3 className="card-item-title">2. System Design:</h3>

            <div className="card-item-desc minigray">
              The next step is taking the information from the initial discovery
              meetings to craft the design for your system according to your
              performance priorities and budget qualifications. This proposal
              gives an overhead explanation of the subsystems for each room. It
              outlines the features and functionality you can expect from
              lighting, audio, video and networking. We’ll discuss it with you
              and integrate your feedback before moving on to the next stage.
            </div>
          </div>
          <div className="card-item">
            <h3 className="card-item-title"> 3. Engineering: </h3>

            <div className="card-item-desc minigray">
              Once we have approval on that original proposal, we’ll use
              cutting-edge Computer Aided Design (CAD) technology and project
              drawings to create in-depth documentation for our technicians to
              follow. These plans include the hardware models, labor
              requirements, low-voltage wiring, lighting load specifications,
              engineering schematics and rack elevations. By strictly following
              these plans, we ensure the final project is in line with the
              approved design.
            </div>
          </div>
          <div className="card-item">
            <h3 className="card-item-title"> 4. Implementation Process: </h3>

            <div className="card-item-desc minigray">
              At the job site, our staff uses the engineering documentation to
              lay out all necessary low-voltage wiring and device enclosures.
              Knowing the unique requirements for various subsystems, our
              technicians expertly install and test all devices to ensure they
              work as specified in the original documentation. How long the
              process takes will depend on the project scope as well as any
              change orders along the way. If any changes are made during this
              stage, they’re included in relevant as-built documentation.
            </div>
          </div>
          <div className="card-item">
            <h3 className="card-item-title"> 5. Service &amp; Support: </h3>

            <div className="card-item-desc minigray">
              After installation, we ensure our clients enjoy a world-class
              service experience to keep their integrated technology running
              smoothly for years. How can you enjoy optimal performance from
              your system? Every piece of documentation is kept for future
              service, manufacturer warranties are guaranteed and we offer
              ongoing tech support. Let us craft advanced service plans for you
              that include 24/7 remote monitoring, network performance tests and
              priority response times.
            </div>
          </div>
        </div>
      </div>
    </div>
   </HelmetProvider>
  );
};

export default OurProcess;
