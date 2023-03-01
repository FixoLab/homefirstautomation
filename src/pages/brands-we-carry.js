import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import CallToAction from "../components/call-to-action";

const BrandsWeCarry = () => {
  return (
    <HelmetProvider>
     <Helmet>
        <meta
          name="description"
          content="Get the latest and greatest in smart home technology for your Orlando, FL project with HomeFirst. Our support team is here to help you get the specific brand you are after."
        />
        <title>
        Smart Home Technology Brands in Orlando, FL | HomeFirst
        </title>
      </Helmet>
    <div id="site-content" className="brands">
      <div className="post-inner thin ">
        <div className="entry-content">
          <div className="is-layout-flow wp-block-group homevideo servicespages">
            <div className="wp-block-group__inner-container">
              <div
                className="fullimagetop"
                style={{
                  backgroundImage: "url(/assets/images/brandheader.webp)",
                }}
              >
                &nbsp;
              </div>

              <div className="is-layout-flow wp-block-group homeintrotop centerintro">
                <div className="wp-block-group__inner-container">
                  <div className="is-layout-flow wp-block-group servicessubs eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                    <div className="wp-block-group__inner-container">
                      <h1 id="nothing-but-the-best-brands">
                        Nothing But The best Brands
                      </h1>
                    </div>
                  </div>
                  <p>&nbsp;</p>
                </div>
              </div>
              <p>&nbsp;</p>
            </div>
          </div>

          <div className="is-layout-flow wp-block-group serviceswhitebackground headerbrand">
            <div className="wp-block-group__inner-container">
              <p className="has-text-align-center servicesleader eds-on-scroll eds-scroll-visible animated fadeInUp duration3">
                View all the brands we carry at HomeFirst. Keep in mind this
                list is always evolving as we here at HomeFirst are always
                carrying the latest and greatest in smart home technology. Is
                there a specific brand you want for your Orlando, Florida
                project? Just contact us and our support team will be sure to
                work with you to help you get the desired brand you are after.
              </p>
            </div>
          </div>

          <div className="is-layout-flex wp-container-12 wp-block-columns">
            <div
              className="is-layout-flow wp-block-column"
              style={{ flexBasis: "100%" }}
            >
              <div className="is-layout-flow wp-block-group serviceswhitebackground">
                <div className="wp-block-group__inner-container">
                  <div className="is-layout-flex wp-container-9 wp-block-columns brandscolumn">
                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-full">
                        <img
                          width="600"
                          height="300"
                          src="assets/images/control4.webp"
                          alt="Control4 system"
                          className="wp-image-1457"
                        />
                      </figure>
                      <p>
                        Life gets busy—but when your home technology is
                        connected into one simple-to-use system, it helps take
                        away some of those daily little stresses. A Control4
                        system makes your life more convenient and your Orlando, Florida home safer, more comfortable, and easy to enjoy.
                        Work with the Control4 Dealer at HomeFirst to get
                        Started,
                      </p>
                      <figure className="wp-block-image size-large is-resized brandlogo">
                        <Link to="/brands/control-4">
                          <img
                            src="assets/images/control4a.webp"
                            alt="Control4 company services"
                            className="wp-image-1466"
                            width="150"
                            height="39"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/control-4">Learn More</Link>
                      </p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-large">
                        <img
                          width="600"
                          height="300"
                          src="assets/images/crestrona.webp"
                          alt="Crestron Electronics"
                          className="wp-image-1666"
                        />
                      </figure>

                      <p>
                        Crestron Electronics has carved the path for
                        technological innovation since 1972. We create
                        automation solutions that transform the way people live
                        their lives, making their day-to-day tasks easier and
                        improving efficiency and productivity.{" "}
                        <Link to="/brands/crestron">Crestron systems</Link> are at the
                        forefront of cutting-edge technology, constantly
                        offering faster, better solutions that address the needs
                        of customers the world over.
                      </p>

                      <figure className="wp-block-image size-large brandlogo">
                        <Link to="/brands/crestron">
                          <img
                            width="150"
                            height="26"
                            src="assets/images/crestron.webp"
                            alt="Crestron company services"
                            className="wp-image-1668"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/crestron">Learn More</Link>
                      </p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-large">
                        <img
                          width="600"
                          height="313"
                          src="assets/images/savant-title-img.webp"
                          alt="Savant home automation technology"
                          className="wp-image-1479"
                        />
                      </figure>

                      <p>
                        As the first home automation company to embrace mobile
                        technology, we understood early that the customer
                        experience could extend beyond the home and open new
                        possibilities for control. Over the years, our Savant
                        home automation technology has evolved, and our company
                        has grown, but our goal remains the same. We’ve become
                        the home automation brand of choice for the world’s most
                        luxurious homes, castles, and even yachts.
                      </p>

                      <figure className="wp-block-image size-large brandlogo">
                        <Link to="/brands/savant">
                          <img
                            width="150"
                            height="23"
                            src="assets/images/savanta.webp"
                            alt="Savant company services"
                            className="wp-image-1478"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/savant">Learn More</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="is-layout-flex wp-container-27 wp-block-columns">
            <div
              className="is-layout-flow wp-block-column"
              style={{ flexBasis: "100%" }}
            >
              <div className="is-layout-flow wp-block-group serviceswhitebackground">
                <div className="wp-block-group__inner-container">
                  <div className="is-layout-flex wp-container-16 wp-block-columns brandscolumn">
                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-large">
                        <img
                          width="600"
                          height="313"
                          src="assets/images/lutron.webp"
                          alt="Lutron technology company"
                          className="wp-image-1481"
                        />
                      </figure>

                      <p>
                        Lutron is a technology company founded in the 1950s that
                        centers around lighting. This includes lighting
                        switches, lighting controls, lights, electric shades,
                        and wireless systems to control and remove complications
                        from your visual experiences. With their innovative
                        technologies, they combine energy saving methods with
                        products that have a luxurious look and feel.
                      </p>

                      <figure className="wp-block-image size-large brandlogo">
                        <Link to="/brands/lutron">
                          <img
                            width="150"
                            height="26"
                            src="assets/images/lutrona.webp"
                            alt="Lutron company services"
                            className="wp-image-1482"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/lutron">Learn More</Link>
                      </p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-large">
                        <img
                          width="600"
                          height="300"
                          src="assets/images/hunter.webp"
                          alt="Hunter Douglas window coveringd"
                          className="wp-image-1486"
                        />
                      </figure>

                      <p>
                        Hunter Douglas is the world’s leading manufacturer of
                        window coverings as well as a major manufacturer of
                        architectural products. Our strength is our ability to
                        develop innovative, high quality, proprietary products
                        that can be found in millions of homes and commercial
                        buildings around the globe. We operate as a highly
                        decentralised, global federation of small and
                        medium-sized companies that manufacture and market
                        similar products.
                      </p>

                      <figure className="wp-block-image size-large brandlogo">
                        <Link to="/brands/hunter-douglas">
                          <img
                            width="150"
                            height="29"
                            src="assets/images/huntera.webp"
                            alt="Hunter Douglas manufacturer"
                            className="wp-image-1487"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/hunter-douglas">Learn More</Link>
                      </p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-large">
                        <img
                          width="600"
                          height="300"
                          src="assets/images/coastal.webp"
                          alt="Coastal Source landscape lighting"
                          className="wp-image-1489"
                        />
                      </figure>

                      <p>
                        Coastal Source landscape lighting products are built
                        with integrity. More than 50 years of hands-on industry
                        experience gave us what we needed to take on the entire
                        landscape lighting market. The real world and laboratory
                        testing gave us a solid understanding of the challenges
                        we had to overcome. “A solution that is defying the
                        elements.”
                      </p>

                      <figure className="wp-block-image size-large brandlogo">
                        <Link to="/brands/coastal-source">
                          <img
                            width="150"
                            height="22"
                            src="assets/images/coastala.webp"
                            alt="Coastal Source company services"
                            className="wp-image-1490"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/coastal-source">Learn More</Link>
                      </p>
                    </div>
                  </div>

                  <div className="is-layout-flex wp-container-20 wp-block-columns brandscolumn">
                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-large">
                        <img
                          width="600"
                          height="300"
                          src="assets/images/joshai-brand.webp"
                          alt="josh control frameworks"
                          className="wp-image-2191"
                        />
                      </figure>

                      <p>
                        Josh is your home's companion. Similar to a canine, Josh
                        is insightful, responsive, and learns his client's
                        orders. While other keen home control frameworks just
                        know one stunt, Josh combines all parts of a home into
                        one inviting, very much prepared ecosystem. Josh is your
                        buddy, and consistently glad to help you.
                      </p>

                      <figure className="wp-block-image size-large brandlogo">
                        <Link to="/brands/josh-ai">
                          <img
                            width="150"
                            height="51"
                            src="assets/images/joshai-blacklogo.webp"
                            alt="josh company services"
                            className="wp-image-2193"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/josh-ai">Learn More</Link>
                      </p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-large">
                        <img
                          width="600"
                          height="300"
                          src="assets/images/ruckus-brand.webp"
                          alt="ruckus control frameworks "
                          className="wp-image-1500"
                        />
                      </figure>

                      <p>
                        RUCKUS® networks simplify life for IT, while enabling
                        them to deliver exceptional user experiences. With
                        RUCKUS products and solutions, any
                        organization—regardless of size or sophistication—can
                        easily deploy, manage and expand a converged IT/OT
                        network, while addressing unique business outcomes. With
                        the help of machine learning and AI, IT can troubleshoot
                        faster and proactively create, measure and meet SLAs
                        that address the evolving needs of their users.
                      </p>

                      <figure className="wp-block-image size-large brandlogo">
                        <Link to="/brands/ruckus">
                          <img
                            width="150"
                            height="44"
                            src="assets/images/ruckusa.webp"
                            alt="ruckus company services"
                            className="wp-image-1499"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/ruckus">Learn More</Link>
                      </p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-large">
                        <img
                          width="600"
                          height="300"
                          src="assets/images/knx-mini.webp"
                          alt="knx automation "
                          className="wp-image-2286"
                        />
                      </figure>

                      <p>
                        The possibilities of creating a smart home or office are
                        numerous. Keep it simple with light control or go all
                        the way and connect different sorts of devices. KNX
                        takes automation and personalization to the next level.
                      </p>

                      <figure className="wp-block-image size-large brandlogo">
                        <Link to="/brands/knx">
                          <img
                            width="133"
                            height="59"
                            src="assets/images/knx-logo1.webp"
                            alt="knx company services"
                            className="wp-image-2283"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/knx">Learn More</Link>
                      </p>
                    </div>
                  </div>

                  <div className="is-layout-flex wp-container-24 wp-block-columns brandscolumn">
                    <div className="is-layout-flow wp-block-column">
                      <figure className="wp-block-image size-large">
                        <img
                          width="600"
                          height="300"
                          src="assets/images/alarmcom.webp"
                          alt="Alarm.com services"
                          className="wp-image-1475"
                        />
                      </figure>

                      <p>
                        We create innovative technology that deepens the
                        connection between people and the things they care about
                        most — their families, homes and businesses. Millions of
                        people trust Alarm.com every day for better security,
                        intelligent automation and dependable service.Alarm.com
                        services are exclusively sold, set up and supported by a
                        nationwide network of authorized service providers.
                      </p>

                      <figure className="wp-block-image size-large brandlogo">
                        <Link to="/brands/alrarm-com">
                          <img
                            width="150"
                            height="28"
                            src="assets/images/alarmcoma.webp"
                            alt="Alarm.com company"
                            className="wp-image-1476"
                          />
                        </Link>
                      </figure>

                      <p className="learnmorebutton">
                        <Link to="/brands/alrarm-com">Learn More</Link>
                      </p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <p>&nbsp;</p>

                      <p className="learnmorebutton">&nbsp;</p>
                    </div>

                    <div className="is-layout-flow wp-block-column">
                      <p>&nbsp;</p>

                      <p className="learnmorebutton">&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CallToAction />
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default BrandsWeCarry;
