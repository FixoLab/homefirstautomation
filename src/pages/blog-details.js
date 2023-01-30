/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const api_domain = process.env.REACT_APP_DOMAIN;

const BlogDetails = () => {
  const { slug } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${api_domain}/wp-json/wp/v2/posts`);
        setData(result.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const blogDetails = data?.filter((blog) => blog?.slug === slug);
  console.log(blogDetails);
  return (
    <div id="site-content" className="single-blog">
      {blogDetails.length === 0 ? (
        <Skeleton style={{ borderRadius: 5 }} height={500} />
      ) : (
        <div className="blog-details">
          <Link to="/blog" className="top">
            <div className="icon">
              <i className="fa-solid fa-arrow-left-long"></i>
            </div>
            <span>Blog</span>
          </Link>
          <div className="blog-wrapper">
            <div className="area">
              <h1 className="area-title">{blogDetails[0].title.rendered}</h1>
              <div className="area-user">
                <i className="fa-regular fa-clock"></i>
                <span>july 27, 2022</span>
                <span>by Jhon</span>
              </div>
              <ul className="area-social">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <div className="area-links">
                <Link to="#">Blog</Link>
                <Link to="#">home theater installation</Link>
                <Link to="#">
                  home theater installation west univerity place tx
                </Link>
              </div>
              <h1 className="area-main-title">
                {blogDetails[0].title.rendered}
              </h1>
              <div className="area-image">
                <img
                  src={blogDetails[0]?.better_featured_image.source_url}
                  alt=""
                />
              </div>
              <div className="area-content"
                dangerouslySetInnerHTML={{
                  __html: blogDetails[0]?.content.rendered,
                }}
              />
            </div>
            <div className="related-post">
              <div className="item">
                <h2>Related Posts</h2>
                <div className="item-element">
                  <Link to="#">high end audio</Link>
                </div>
                <button>View More</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
