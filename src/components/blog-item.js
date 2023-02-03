import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const api_domain = process.env.REACT_APP_DOMAIN;

const BlogItem = ({ blog }) => {
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [author, setAuthor] = useState([]);
  const authorUrl = blog?._links.author[0].href;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `${api_domain}/wp-json/wp/v2/categories?post=${blog.id}`
        );
        setCategory(result.data);
        const tags = await axios(
          `${api_domain}/wp-json/wp/v2/tags?post=${blog.id}`
        );
        setTags(tags.data);
        const authorName = await axios(`${authorUrl}`);
          setAuthor(authorName?.data);
      } catch (error) {}
    };
    fetchData();
  }, [blog.id, authorUrl]);

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
          {category?.slice(0, 1)?.map((data) => (
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
        <span>by {author?.name}</span>
      </div>
    </div>
  );
};

export default BlogItem;
