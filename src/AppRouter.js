import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/global/footer";
import Header from "./components/global/header";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const SmartHomeAutomation = React.lazy(() =>
  import("./pages/smart-home-automation")
);
const HomeTheater = React.lazy(() => import("./pages/home-theater"));
const LightingSystems = React.lazy(() => import("./pages/lighting-systems"));
const Blog = React.lazy(() => import("./pages/blog"));
const BlogDetails = React.lazy(() => import("./pages/blog-details"));

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
      <Suspense
        fallback={
          <div className="preloader">
            <Skeleton style={{ borderRadius: 50 }} height={100} width={100} />
          </div>
        }
      >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/smart-home-automation"
            element={<SmartHomeAutomation />}
          />
          <Route path="/home-theater" element={<HomeTheater />} />
          <Route path="/lighting-systems" element={<LightingSystems />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
