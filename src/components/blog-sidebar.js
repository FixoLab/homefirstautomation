import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const api_domain = process.env.REACT_APP_DOMAIN;

const BlogSidebar = () => {
  const [data, setData] = useState([]);
  const [tags, setTgs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${api_domain}/wp-json/wp/v2/categories`);
        setData(result.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${api_domain}/wp-json/wp/v2/tags`);
        setTgs(result.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="item">
        <h2>Most Popular Posts</h2>
        <p>No posts found.</p>
      </div>
      <div className="item">
        <h2>Most Popular Categories</h2>
        <div className="item-element category">
          {data.map((categories) => (
            <Link key={categories.id} to={`/category/${categories.id}`}>
              {categories.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="item">
        <h2>Most Popular Topics</h2>
        <div className="item-element">
          {tags.map((tag) => (
            <Link key={tag.id} to={`/tags/${tag.id}`}>
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
