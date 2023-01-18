import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/styles/blog.css";
import Article from "../article";

const api_domain = process.env.REACT_APP_DOMAIN;

const Blog = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //   console.log("data", data)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `${api_domain}/wp-json/wp/v2/posts`
        );
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isError) return <div>Something went wrong ...</div>;
  if (isLoading) return <div>Loading ...</div>;
  if (!data) return null;
  return (
    <div className="blog custom-background wp-custom-logo wp-embed-responsive theme-twentytwenty vcwb woocommerce-js enable-search-modal has-no-pagination showing-comments show-avatars footer-top-visible su-other-shortcodes-loaded">
      <main id="site-content" role="main">
        {data.map((blog) => (
            <Article key={blog.id} blog={blog} />
        ))}
      </main>
    </div>
  );
};

export default Blog;
