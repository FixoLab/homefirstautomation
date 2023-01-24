import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "https://since1979.dev";

const TestBlog = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);


  useEffect(() => {
    Axios.get(baseUrl + "/wp-json/wp/v2/posts", {
      params: { page: page },
    }).then((response) => {
      setNumberofpage(response.headers["x-wp-totalpages"]);

      setPosts(response.data);
    });
  }, [page, setPosts]);

  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  const handleNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);

  return (
    <div className="posts-app__wrapper" style={{ marginTop: "150px" }}>
      <h1>Navigate Wp Rest Api Posts</h1>

      <div className="posts-app__post-nav">
        <button onClick={handlePrevPage}>Newer posts</button>
        <p>
          Page {page} of {nrofpages}
        </p>
        <button onClick={handleNextPage}>Older posts</button>
      </div>

      <div className="posts-app__post-list">
        {posts &&
          posts.length &&
          posts.map((post, index) => {
            return (
              <div key={post.id} className="posts-app__post">
                <h2>{post.title.rendered}</h2>
                <Link to={post.link} target="_blank">
                  Read post
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TestBlog;
