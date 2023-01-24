import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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

  console.log("blogDetails", blogDetails);

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
          <article>
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
                    {authorData.length === 0 ? (
                      ""
                    ) : (
                      <img
                        alt={authorData.name}
                        src={authorData.avatar_urls[96]}
                        className="avatar avatar-160 photo"
                        height="160"
                        width="160"
                      />
                    )}
                  </div>
                  <h2 className="author-title heading-size-4">
                    By {authorData.name}
                  </h2>
                </div>
                <div className="author-description">
                  <p>{authorData.description}</p>
                </div>
              </div>
            </div>

            <nav
              className="pagination-single section-inner"
              aria-label="Post"
              role="navigation"
            >
              <hr className="styled-separator is-style-wide" aria-hidden="true" />

              <div className="pagination-single-inner">
                {blogDetails[0]?.next !== null ? (
                  <Link
                    className="next-post"
                    to={`/blog/${blogDetails[0]?.next?.slug}`}
                  >
                    <span className="title">
                      <span className="title-inner">
                        {blogDetails[0]?.next?.slug}
                      </span>
                    </span>
                    <span className="arrow" aria-hidden="true">
                      ←
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {blogDetails[0]?.previous !== null ? (
                  <Link
                    className="next-post"
                    to={`/blog/${blogDetails[0]?.previous?.slug}`}
                  >
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                    <span className="title">
                      <span className="title-inner">
                        {blogDetails[0]?.previous?.slug}
                      </span>
                    </span>
                  </Link>
                ) : (
                  ""
                )}
              </div>

              <hr className="styled-separator is-style-wide" aria-hidden="true" />
            </nav>
            {/* <hr className="styled-separator is-style-wide" aria-hidden="true" />
            <div className="comments-wrapper section-inner">
              <div id="respond" className="comment-respond">
                <h2 id="reply-title" className="comment-reply-title">
                  Leave a Reply
                </h2>
                <form
                  action=""
                  method="post"
                  id="commentform"
                  className="section-inner thin max-percentage"
                >
                  <p className="comment-notes">
                    <span id="email-notes">
                      Your email address will not be published.
                    </span>{" "}
                    <span className="required-field-message">
                      Required fields are marked{" "}
                      <span className="required">*</span>
                    </span>
                  </p>
                  <p className="comment-form-comment">
                    <label htmlFor="comment">
                      Comment <span className="required">*</span>
                    </label>{" "}
                    <textarea
                      id="comment"
                      name="comment"
                      cols="45"
                      rows="8"
                      maxLength="65525"
                      required=""
                    ></textarea>
                  </p>
                  <p className="comment-form-author">
                    <label htmlFor="author">
                      Name <span className="required">*</span>
                    </label>{" "}
                    <input
                      id="author"
                      name="author"
                      type="text"
                      defaultValue=""
                      size="30"
                      maxLength="245"
                      autoComplete="name"
                      required=""
                    />
                  </p>
                  <p className="comment-form-email">
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      defaultValue=""
                      size="30"
                      maxLength="100"
                      autoComplete="email"
                      required=""
                    />
                  </p>
                  <p className="comment-form-url">
                    <label htmlFor="url">Website</label>{" "}
                    <input
                      id="url"
                      name="url"
                      type="url"
                      defaultValue=""
                      size="30"
                      maxLength="200"
                      autoComplete="url"
                    />
                  </p>
                  <p className="comment-form-cookies-consent">
                    <input
                      id="wp-comment-cookies-consent"
                      name="wp-comment-cookies-consent"
                      type="checkbox"
                      defaultValue="yes"
                    />{" "}
                    <label htmlFor="wp-comment-cookies-consent">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </p>
                  <p className="form-submit">
                    <input
                      name="submit"
                      type="submit"
                      id="submit"
                      className="submit"
                      defaultValue="Post Comment"
                    />{" "}
                    <input
                      type="hidden"
                      name="comment_post_ID"
                      defaultValue="3788"
                      id="comment_post_ID"
                    />
                    <input
                      type="hidden"
                      name="comment_parent"
                      id="comment_parent"
                      defaultValue="0"
                    />
                  </p>
                </form>{" "}
              </div>
            </div> */}
          </article>
        )}
      </main>
    </div>
  );
};

export default BlogDetails;
