import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/global/footer";
import Header from "./components/global/header";

const Home = React.lazy(() => import("./components/pages/home"));
const About = React.lazy(() => import("./components/pages/about"));
const Blog = React.lazy(() => import("./components/pages/blog"));
const BlogDetails = React.lazy(() => import("./components/pages/blog-details"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails/:blogId" element={<BlogDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
