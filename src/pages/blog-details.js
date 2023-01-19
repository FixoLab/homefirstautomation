import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import StartYourProject from "./start-your-project";
const api_domain = process.env.REACT_APP_DOMAIN;

const BlogDetails = () => {
  const { slug } = useParams();

  const [data, setData] = useState([]);
  const [authorData, setAuthorData] = useState([]);

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

  const authorId = blogDetails[0]?.author;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `${api_domain}/wp-json/wp/v2/users/${authorId}`
        );
        setAuthorData(result.data);
      } catch (error) {}
    };
    fetchData();
  }, [authorId]);

  return (
    <div className="single single-post singular">
      <main id="site-content" role="main">
        {blogDetails.length === 0 ? (
          <Skeleton style={{ borderRadius: 5 }} height={500} />
        ) : (
          <article
          >
            <h4
              style={{ maxWidth: "80%", textAlign: "left", marginLeft: "2%" }}
            >
              {blogDetails[0]?.title.rendered}
            </h4>
            <div className="post-inner thin ">
              <div className="entry-content">
                <figure className="wp-block-image">
                  <img
                    src={blogDetails[0]?.better_featured_image.source_url}
                    alt=""
                  />
                </figure>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogDetails[0]?.content.rendered,
                  }}
                />
              </div>
            </div>

            <div className="section-inner">
              <div className="author-bio" style={{ marginBottom: "30px" }}>
                <div className="author-title-wrapper">
                  <div className="author-avatar vcard">
                    {/* <img
              alt={authorData.name}
              src={authorData.avatar_urls[3]}
              className="avatar avatar-160 photo"
              height="160"
              width="160"
            /> */}
                  </div>
                  <h2 className="author-title heading-size-4">
                    By {authorData.name}
                  </h2>
                </div>
                <div className="author-description">
                  <p>Founder and CEO at PROJECT: automate</p>
                </div>
              </div>
            </div>

            {/* <nav
      className="pagination-single section-inner only-one only-prev"
      aria-label="Post"
      role="navigation"
    >
      <hr className="styled-separator is-style-wide" aria-hidden="true" />

      <div className="pagination-single-inner">
        <a
          className="previous-post"
          href="https://www.projectautomate.com/2022/10/31/top-reasons-you-need-a-control4-system-at-home/"
        >
          <span className="arrow" aria-hidden="true">
            ←
          </span>
          <span className="title">
            <span className="title-inner">
              Top Reasons You Need a Control4 System at Home
            </span>
          </span>
        </a>
      </div>

      <hr className="styled-separator is-style-wide" aria-hidden="true" />
    </nav> */}
          </article>
        )}
      </main>
    </div>
  );
};

export default BlogDetails;
