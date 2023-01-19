import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/styles/blog.css";

const Article = React.lazy(() => import("../components/article"));
const LoadingSpinner = React.lazy(() =>
  import("../components/loading-spinner")
);

const api_domain = process.env.REACT_APP_DOMAIN;

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${api_domain}/wp-json/wp/v2/posts`);
        setData(result.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="blog">
      <main id="site-content" role="main">
        {data.length === 0 ? (
          <LoadingSpinner />
        ) : (
          data.map((blog) => <Article key={blog.id} blog={blog} />)
        )}
      </main>
    </div>
  );
};

export default Blog;
