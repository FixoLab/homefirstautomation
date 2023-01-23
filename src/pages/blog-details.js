import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
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

  // const {
  //   avatar_urls: { 96: url96 },
  // } = authorData;

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
                    {/* <img
                      alt={authorData.name}
                      src={url96}
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
                  <p>{authorData.description}</p>
                </div>
              </div>
            </div>

            {/* <nav
              className="pagination-single section-inner only-one only-prev"
              aria-label="Post"
              role="navigation"
            >
              <hr
                className="styled-separator is-style-wide"
                aria-hidden="true"
              />

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

              <hr
                className="styled-separator is-style-wide"
                aria-hidden="true"
              />
            </nav> */}
            <hr className="styled-separator is-style-wide" aria-hidden="true" />
            <div class="comments-wrapper section-inner">
              <div id="respond" class="comment-respond">
                <h2 id="reply-title" class="comment-reply-title">
                  Leave a Reply{" "}
                  {/* <small>
                    <a
                      rel="nofollow"
                      id="cancel-comment-reply-link"
                      href="/2022/11/18/top-elements-of-a-high-class-surround-sound-installation/#respond"
                      style="display:none;"
                    >
                      Cancel reply
                    </a>
                  </small> */}
                </h2>
                <form
                  action="https://www.projectautomate.com/wp-comments-post.php"
                  method="post"
                  id="commentform"
                  class="section-inner thin max-percentage"
                  novalidate=""
                >
                  <p class="comment-notes">
                    <span id="email-notes">
                      Your email address will not be published.
                    </span>{" "}
                    <span class="required-field-message">
                      Required fields are marked <span class="required">*</span>
                    </span>
                  </p>
                  <p class="comment-form-comment">
                    <label for="comment">
                      Comment <span class="required">*</span>
                    </label>{" "}
                    <textarea
                      id="comment"
                      name="comment"
                      cols="45"
                      rows="8"
                      maxlength="65525"
                      required=""
                    ></textarea>
                  </p>
                  <p class="comment-form-author">
                    <label for="author">
                      Name <span class="required">*</span>
                    </label>{" "}
                    <input
                      id="author"
                      name="author"
                      type="text"
                      value=""
                      size="30"
                      maxlength="245"
                      autocomplete="name"
                      required=""
                    />
                  </p>
                  <p class="comment-form-email">
                    <label for="email">
                      Email <span class="required">*</span>
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value=""
                      size="30"
                      maxlength="100"
                      aria-describedby="email-notes"
                      autocomplete="email"
                      required=""
                    />
                  </p>
                  <p class="comment-form-url">
                    <label for="url">Website</label>{" "}
                    <input
                      id="url"
                      name="url"
                      type="url"
                      value=""
                      size="30"
                      maxlength="200"
                      autocomplete="url"
                    />
                  </p>
                  <p class="comment-form-cookies-consent">
                    <input
                      id="wp-comment-cookies-consent"
                      name="wp-comment-cookies-consent"
                      type="checkbox"
                      value="yes"
                    />{" "}
                    <label for="wp-comment-cookies-consent">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </p>
                  <p class="form-submit">
                    <input
                      name="submit"
                      type="submit"
                      id="submit"
                      class="submit"
                      value="Post Comment"
                    />{" "}
                    <input
                      type="hidden"
                      name="comment_post_ID"
                      value="3788"
                      id="comment_post_ID"
                    />
                    <input
                      type="hidden"
                      name="comment_parent"
                      id="comment_parent"
                      value="0"
                    />
                  </p>
                </form>{" "}
              </div>
            </div>
          </article>
        )}
      </main>
    </div>
  );
};

export default BlogDetails;
