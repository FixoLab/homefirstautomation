import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const api_domain = process.env.REACT_APP_DOMAIN;

const BlogItem = ({ blog }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tags = await axios(
          `${api_domain}/wp-json/wp/v2/tags?post=${blog.id}`
        );
        setTags(tags.data);
      } catch (error) {}
    };
    fetchData();
  }, [blog.id]);

  return (
    <div key={blog.id} className="blog-content-top">
      <Link className="details-link" to={`/blog/${blog.slug}`}></Link>
      <div
        className="image"
        style={{
          backgroundImage: `url(${blog?.better_featured_image.source_url})`,
        }}
      ></div>
      <div style={{ padding: "15px", flexGrow: "1" }}>
        <h2>{blog.title.rendered}</h2>
        <div className="links">
          {blog?.post_terms?.slice(0, 1)?.map((data) => (
            <Link key={data.id} to={`/category/${data.id}`}>
              {data.name}
            </Link>
          ))}
          {tags?.map((data) => (
            <Link key={data.id} to={`/tags/${data.id}`}>
              {data.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="read-more">Read More</p>
      <div className="user">
        <i className="fa-regular fa-clock"></i>
        <span>{blog?.date.slice(0, 10)}</span>
        <span>by {blog?.author_details.display_name}</span>
      </div>
    </div>
  );
};

export default BlogItem;
