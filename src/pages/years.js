import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";

const BlogItem = React.lazy(() => import("../components/blog-item"));
const BlogSidebar = React.lazy(() => import("../components/blog-sidebar"));

const api_domain = process.env.REACT_APP_DOMAIN;

const Years = () => {
  const { published_on } = useParams();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allBlogs = await axios(`${api_domain}/wp-json/wp/v2/posts`);
        setData(allBlogs.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const yearlyData = data.filter(
    (data) =>
      data.published_on.replace(/ /g, "-").replace(/,/g, "") === published_on
  );

  const allBlog = yearlyData.filter((item, index) => index !== 0);

  const showMoreBooks = () => {
    setVisible((pervValue) => pervValue + 2);
  };

  return (
    <div id="site-content" className="blog">
      {yearlyData.length === 0 ? (
        <div className="single-blog-spinner">
          <Skeleton />
        </div>
      ) : (
        <div className="blog-area">
          <h2 className="blog-area-title">Post by tags</h2>
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
  );
};

export default Years;
