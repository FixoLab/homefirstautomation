import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const api_domain = process.env.REACT_APP_DOMAIN;

const BlogDetailsCategories = ({ singleId }) => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesResponse = await fetch(
        `${api_domain}/wp-json/wp/v2/categories?post=${singleId}`
      );
      const categoriesData = await categoriesResponse.json();
      setCategories(categoriesData);
      const tagsResponse = await fetch(
        `${api_domain}/wp-json/wp/v2/tags?post=${singleId}`
      );
      const tagsData = await tagsResponse.json();
      setTags(tagsData);
    };
    fetchData();
  }, [singleId]);

  return (
    <>
      {categories?.length === 0
        ? ""
        : categories?.slice(0, 1).map((category) => (
            <Link key={category?.id} to={`/category/${category?.id}`}>
              {category.name}
            </Link>
          ))}
      {tags?.length === 0
        ? ""
        : tags?.map((tags) => (
            <Link key={tags.id} to={`/tags/${tags?.id}`}>
              {tags.name}
            </Link>
          ))}
    </>
  );
};

export default BlogDetailsCategories;
