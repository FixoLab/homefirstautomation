import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

const Header = React.lazy(() => import("./components/global/header"));
const Footer = React.lazy(() => import("./components/global/footer"));
const Home = React.lazy(() => import("./pages/home"));
const StartYourProject = React.lazy(() => import("./pages/start-your-project"));
const About = React.lazy(() => import("./pages/about"));
const SmartHomeAutomation = React.lazy(() =>
  import("./pages/smart-home-automation")
);
const HomeTheater = React.lazy(() => import("./pages/home-theater"));
const LightingSystems = React.lazy(() => import("./pages/lighting-systems"));
const AudioSystems = React.lazy(() => import("./pages/audio-systems"));
const SmartSecurity = React.lazy(() => import("./pages/smart-security"));
const WifiNetworkingServices = React.lazy(() =>
  import("./pages/wifi-networking-services")
);
const CommercialServices = React.lazy(() =>
  import("./pages/commercial-services")
);
const Portfolio = React.lazy(() => import("./pages/portfolio"));
const BrandsWeCarry = React.lazy(() => import("./pages/brands-we-carry"));
const Partners = React.lazy(() => import("./pages/partners"));
const Blog = React.lazy(() => import("./pages/blog"));
const BlogDetails = React.lazy(() => import("./pages/blog-details"));
const ContactUs = React.lazy(() => import("./pages/contact-us"));
const GolfSimulators = React.lazy(() => import("./pages/golf-simulators"));
const InteriorDesigners = React.lazy(() =>
  import("./pages/interior-designers")
);
const Savant = React.lazy(() => import("./pages/savant"));
const Ruckus = React.lazy(() => import("./pages/ruckus"));
const Lutron = React.lazy(() => import("./pages/lutron"));
const Crestron = React.lazy(() => import("./pages/crestron"));
const CoastalSource = React.lazy(() => import("./pages/coastal-source"));
const Knx = React.lazy(() => import("./pages/knx"));
const HunterDouglas = React.lazy(() => import("./pages/hunter-douglas"));
const Notfound = React.lazy(() => import("./pages/notfound"));
const AlarmCom = React.lazy(() => import("./pages/alarm-com"));
const JoshAi = React.lazy(() => import("./pages/josh-ai"));
const IndoorLiving = React.lazy(() => import("./pages/indoor-living"));
const ConnectedHome = React.lazy(() => import("./pages/connected-home"));
const Careers = React.lazy(() => import("./pages/careers"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacy-policy"));
const CommercialAutomation = React.lazy(() =>
  import("./pages/commercial-automation")
);
const CommercialAudioVideo = React.lazy(() =>
  import("./pages/commercial-audio-video")
);
const CommercialSecurity = React.lazy(() =>
  import("./pages/commercial-security")
);
const CommercialTechnology = React.lazy(() =>
  import("./pages/commercial-technology")
);
const ConnectedStudioHome = React.lazy(() =>
  import("./pages/connected-studio-home")
);
const DesignBuildPartners = React.lazy(() =>
  import("./pages/design-build-partners")
);
const Realtors = React.lazy(() => import("./pages/realtors"));
const Contractors = React.lazy(() => import("./pages/contractors"));
const ADayInTheLife = React.lazy(() => import("./pages/a-day-in-the-life"));
const OurProcess = React.lazy(() => import("./pages/our-process"));
const Category = React.lazy(() => import("./pages/category"));
const Years = React.lazy(() => import("./pages/years"));
const Tags = React.lazy(() => import("./pages/tags"));
const Control4 = React.lazy(() => import("./pages/control4"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route
            path="/smart-home-automation"
            element={<SmartHomeAutomation />}
          />
          <Route path="/home-theatre" element={<HomeTheater />} />
          <Route path="/lighting-systems" element={<LightingSystems />} />
          <Route path="/audio-systems" element={<AudioSystems />} />
          <Route path="/smart-security" element={<SmartSecurity />} />
          <Route
            path="/wifi-networking-services"
            element={<WifiNetworkingServices />}
          />
          <Route path="/commercial" element={<CommercialServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/brands" element={<BrandsWeCarry />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/start-your-project" element={<StartYourProject />} />

          <Route path="/partners/interior-designers" element={<InteriorDesigners />} />
          <Route path="/brands/savant" element={<Savant />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/brands/ruckus" element={<Ruckus />} />
          <Route path="/brands/lutron" element={<Lutron />} />
          <Route path="/brands/crestron" element={<Crestron />} />
          <Route path="/brands/coastal-source" element={<CoastalSource />} />
          <Route path="/brands/knx" element={<Knx />} />
          <Route path="/brands/hunter-douglas" element={<HunterDouglas />} />
          <Route path="/brands/alrarm-com" element={<AlarmCom />} />
          <Route path="/brands/josh-ai" element={<JoshAi />} />
          <Route path="/indoor-living" element={<IndoorLiving />} />
          <Route path="/connected-home" element={<ConnectedHome />} />
          <Route path="/a-day-in-the-life" element={<ADayInTheLife />} />
          <Route
            path="/connected-studio-living"
            element={<ConnectedStudioHome />}
          />
          <Route
            path="/partners/design-build-partners"
            element={<DesignBuildPartners />}
          />
          <Route
            path="/commercial/automation-system"
            element={<CommercialAutomation />}
          />
          <Route
            path="/commercial/audio-visual-system"
            element={<CommercialAudioVideo />}
          />
          <Route
            path="/commercial/security-system"
            element={<CommercialSecurity />}
          />
          <Route
            path="/commercial/technology"
            element={<CommercialTechnology />}
          />
          <Route path="/partners/realtors" element={<Realtors />} />
          <Route path="/partners/contractors" element={<Contractors />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/years/:published_on" element={<Years />} />
          <Route path="/tags/:id" element={<Tags />} />
          <Route path="/brands/control-4" element={<Control4 />} />
          <Route path="/golf-simulators" element={<GolfSimulators />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
