import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LoadingSpinner = React.lazy(() =>
  import("../components/loading-spinner")
);

const api_domain = process.env.REACT_APP_DOMAIN;

const Blog = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const allBlog = data.filter((item, index) => index !== 0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${api_domain}/wp-json/wp/v2/posts`);
        setData(result.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div id="site-content" className="blog">
      {data.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <div className="blog-area">
          <h2 className="blog-area-title">Blog</h2>
          <div className="blog-wrapper">
            <div className="blog-content">
              <Link
                to={`/blog/${data[0].slug}`}
                className="blog-content-top"
                style={{ marginBottom: "20px" }}
              >
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${data[0]?.better_featured_image.source_url})`,
                  }}
                ></div>
                <div style={{ padding: "15px", flexGrow: "1" }}>
                  <h2>{data[0]?.title.rendered}</h2>
                  <div className="links">
                    <Link to="#">Blog</Link>
                    <Link to="#">home theater installation</Link>
                    <Link to="#">
                      home theater installation west univerity place tx
                    </Link>
                  </div>
                </div>
                <p className="read-more">Read More</p>
                <div className="user">
                  <i className="fa-regular fa-clock"></i>
                  <span>july 27, 2022</span>
                  <span>by Jhon</span>
                </div>
              </Link>
              <div className="blog-content-bottom">
                {allBlog?.map((blog) => (
                  <Link
                    to={`/blog/${blog.slug}`}
                    key={blog.id}
                    className="blog-content-top"
                  >
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${blog.better_featured_image.source_url})`,
                      }}
                    ></div>
                    <div style={{ padding: "15px", flexGrow: "1" }}>
                      <h2>{blog.title.rendered}</h2>
                      <div className="links">
                        <Link to="#">Blog</Link>
                        <Link to="#">home theater installation</Link>
                        <Link to="#">
                          home theater installation west univerity place tx
                        </Link>
                      </div>
                    </div>
                    <p className="read-more">Read More</p>
                    <div className="user">
                      <i className="fa-regular fa-clock"></i>
                      <span>july 27, 2022</span>
                      <span>by Jhon</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="blog-sidebar">
              <div className="item">
                <h2>Most Popular Posts</h2>
                <p>No posts found.</p>
              </div>
              <div className="item">
                <h2>Most Popular Categories</h2>
                <div className="item-element category">
                  <Link to="#">Blog</Link>
                  <Link to="#">Form our experts</Link>
                </div>
              </div>
              <div className="item">
                <h2>Most Popular Topics</h2>
                <div className="item-element">
                  <Link to="#">high end audio</Link>
                  <Link to="#">news</Link>
                  <Link to="#">home theater installation</Link>
                  <Link to="#">home theater</Link>
                  <Link to="#">outdoor sound system</Link>
                  <Link to="#">west university place tx</Link>
                </div>
                <button>View More</button>
              </div>
              <div className="item">
                <h2>Most Popular Brands</h2>
                <div className="item-element">
                  <Link to="#">Beko</Link>
                  <Link to="#">Bosch</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
