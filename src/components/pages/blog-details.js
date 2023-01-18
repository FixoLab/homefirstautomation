import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const api_domain = process.env.REACT_APP_DOMAIN;

const BlogDetails = () => {
    const { blogId } = useParams();
    const id = parseInt(blogId)

    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios(
            `${api_domain}/wp-json/wp/v2/posts`
          );
          setData(result.data);
        } catch (error) {
        }
      };
      fetchData();
    }, []);

    const blogDetails = data?.filter(blog => blog?.id === id)
   
    // const { title, better_featured_image, excerpt } = blogDetails[0];

  return (
    <div className="post-template-default single single-post postid-3788 single-format-standard custom-background wp-custom-logo wp-embed-responsive theme-twentytwenty vcwb woocommerce-js singular enable-search-modal has-post-thumbnail has-single-pagination showing-comments show-avatars footer-top-visible su-other-shortcodes-loaded">
      <main id="site-content" role="main">

        <article
          className="post-3788 post type-post status-publish format-standard has-post-thumbnail hentry category-surround-sound-installation category-surround-sound-installation-newport-beach-ca tag-surround-sound-installation odd"
          id="post-3788"
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
              <div dangerouslySetInnerHTML={{__html: blogDetails[0]?.content.rendered}} />
            </div>
          </div>

          <div className="section-inner">
            <div className="post-meta-wrapper post-meta-single post-meta-single-bottom">
              <ul className="post-meta">
                <li className="post-tags meta-wrapper">
                  <span className="meta-icon">
                    <span className="screen-reader-text">Tags</span>
                    <svg
                      className="svg-icon"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path
                        fill=""
                        d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"
                      ></path>
                    </svg>{" "}
                  </span>
                  <span className="meta-text">
                    <a
                      href="https://www.projectautomate.com/tag/surround-sound-installation/"
                      rel="tag"
                    >
                      Surround Sound Installation
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="author-bio">
              <div className="author-title-wrapper">
                <div className="author-avatar vcard">
                  <img
                    alt=""
                    src="https://secure.gravatar.com/avatar/ca690e69b41fdb1eec326abb3bfffd02?s=160&amp;d=mm&amp;r=g"
                    className="avatar avatar-160 photo"
                    height="160"
                    width="160"
                  />{" "}
                </div>
                <h2 className="author-title heading-size-4">
                  By Joshua Trevithick{" "}
                </h2>
              </div>
              <div className="author-description">
                <p>Founder and CEO at PROJECT: automate</p>
                <a
                  className="author-link"
                  href="https://www.projectautomate.com/author/projectautomate/"
                  rel="author"
                >
                  View Archive <span aria-hidden="true">→</span>{" "}
                </a>
              </div>
            </div>
          </div>

          <nav
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
          </nav>
        </article>
      </main>
    </div>
  );
};

export default BlogDetails;
