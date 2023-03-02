/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const BlogDetailsCategories = React.lazy(() =>
  import("../components/blog-details-categories")
);
const RelatedPost = React.lazy(() => import("../components/related-post"));

const api_domain = process.env.REACT_APP_DOMAIN;

const BlogDetails = () => {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${api_domain}/wp-json/wp/v2/posts`);
        setData(result?.data);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const blogDetails = data?.filter((blog) => blog?.slug === slug);
  const blogId = blogDetails[0]?.id;

  return (
    <div id="site-content" className="single-blog">
      {isLoading === true ? (
        <div className="single-blog-spinner">
          <Skeleton />
        </div>
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
              <h1 className="area-title">{blogDetails[0]?.title.rendered}</h1>
              <div className="area-user">
                <i className="fa-regular fa-clock"></i>
                <span>{blogDetails[0]?.published_on}</span>
                <span>by {blogDetails[0]?.author_details.display_name}</span>
              </div>
              <ul className="area-social">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://homefirstautomation.vercel.app/blog/${blogDetails[0]?.slug}`}
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fhomefirstautomation.vercel.app%2Fblog%2F${blogDetails[0]?.slug}%2F&title=${blogDetails[0]?.title.rendered}`}
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://pinterest.com/pin/create/button/?url=https://homefirstautomation.vercel.app/blog/${blogDetails[0]?.slug}&media=${blogDetails[0]?.better_featured_image?.source_url}&description=<YOUR DESCRIPTION HERE>`}
                  >
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://twitter.com/intent/tweet?source=https%3A%2F%2Fhomefirstautomation.vercel.app%2Fblog%2F${blogDetails[0]?.slug}%2F&text=${blogDetails[0]?.title.rendered}:https%3A%2F%2Fhomefirstautomation.vercel.app%2Fblog%2F${blogDetails[0]?.slug}%2F`}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <div className="area-links">
                {blogId !== undefined ? (
                  <BlogDetailsCategories
                    blogDetails={blogDetails}
                    singleId={blogId}
                  />
                ) : (
                  ""
                )}
              </div>
              <h1 className="area-main-title">
                {blogDetails[0]?.title.rendered}
              </h1>
              <div className="area-image">
                <img
                  src={blogDetails[0]?.better_featured_image?.source_url}
                  alt={blogDetails[0]?.better_featured_image?.alt_text}
                />
              </div>
              <div
                className="area-content"
                dangerouslySetInnerHTML={{
                  __html: blogDetails[0]?.content.rendered,
                }}
              />
            </div>
            {blogId !== undefined ? (
              <RelatedPost blogDetails={blogDetails} singleId={blogId} />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
