import React from "react";
import { Link } from "react-router-dom";

const Article = ({ blog }) => {
  const { title, slug, better_featured_image, excerpt } = blog;
  return (
    <article className="post">
      <h4 style={{ maxWidth: "80%", textAlign: "left", marginLeft: "2%" }}>
        {title.rendered}
      </h4>
      <div className="post-inner thin ">
        <div className="entry-content">
          <figure className="wp-block-image">
            <img src={better_featured_image?.source_url} alt={title.rendered} />
          </figure>

          <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />

          <div className="read-more-button-wrap">
            <Link to={`/blog/${slug}`} className="more-link">
              <span className="faux-button">Continue reading</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
