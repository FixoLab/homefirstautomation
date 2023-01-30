import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BlogItem = React.lazy(() => import("../components/blog-item"));
const BlogSidebar = React.lazy(() => import("../components/blog-sidebar"));
const LoadingSpinner = React.lazy(() =>
  import("../components/loading-spinner")
);

const api_domain = process.env.REACT_APP_DOMAIN;

const Tags = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(4);
  const allBlog = data.filter((item, index) => index !== 0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `${api_domain}/wp-json/wp/v2/posts?tags=${id}`
        );
        setData(result.data);
      } catch (error) {}
    };
    fetchData();
  }, [id]);

  const showMoreBooks = () => {
    setVisible((pervValue) => pervValue + 2);
  };

  return (
    <div id="site-content" className="blog">
      {data.length === 0 ? (
        <LoadingSpinner />
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
              <BlogSidebar />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tags;
