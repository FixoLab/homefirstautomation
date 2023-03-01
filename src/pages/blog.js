import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";
const BlogItem = React.lazy(() => import("../components/blog-item"));
const BlogSidebar = React.lazy(() => import("../components/blog-sidebar"));


const api_domain = process.env.REACT_APP_DOMAIN;

const Blog = () => {
  const [data, setData] = useState([]);
  const allBlog = data.filter((item, index) => index !== 0);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${api_domain}/wp-json/wp/v2/posts`);
        setData(result.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const showMoreBooks = () => {
    setVisible((pervValue) => pervValue + 2);
  };

  return (
    <HelmetProvider>
        <Helmet>
        <meta
          name="description"
          content="Get the latest information on home automation solutions and the latest blogs in Orlando, FL. Find the best products and services to automate your home."
        />
        <title>
        Home Automation Solutions and Latest Blogs in Orlando, FL
        </title>
      </Helmet>
    
    <div id="site-content" className="blog">
      {data.length === 0 ? (
        <div className="single-blog-spinner">
        <Skeleton />
      </div>
      ) : (
        <div className="blog-area">
          <h2 className="blog-area-title">Blog</h2>
          <div className="blog-wrapper">
            <div className="blog-content">
              <BlogItem blog={data[0]} />
              <div className="blog-content-bottom">
                {allBlog?.slice(0, visible).map((blog) => (
                  <BlogItem key={blog.id} blog={blog} />
                ))}
              </div>
              <div style={{ textAlign: "center" }}>
                {allBlog.length <= visible ? (
                  ""
                ) : (
                  <button onClick={showMoreBooks} className="button__primary">
                    <span> Load More </span>
                  </button>
                )}
              </div>
            </div>
            <div className="blog-sidebar">
              <BlogSidebar blogData={data} />
            </div>
          </div>
        </div>
      )}
    </div>
    </HelmetProvider>
  );
};

export default Blog;
