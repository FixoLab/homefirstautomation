import axios from "axios";
import React, { useEffect, useState } from "react";
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
          <>
          <h1 className="title">Blog </h1>
          <div className="blog-wrapper">
            <div className="blog-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis eius assumenda at animi explicabo amet! Veniam
              voluptatem neque dolorum at molestiae repellat, quidem recusandae
              exercitationem harum fuga accusamus soluta? Culpa in laborum,
              eligendi quis maiores numquam ea optio corrupti ipsam explicabo
              incidunt porro animi ut nam ipsum, voluptas rem amet. Ipsa,
              perferendis. Voluptatum corporis, delectus rerum a quisquam vero
              quam recusandae voluptates labore, aliquam magni corrupti
              repellendus, quidem tempora rem?
            </div>
            <div className="blog-sidebar">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium animi ut nesciunt sint alias eveniet molestias eos!
              Obcaecati aperiam, animi non nihil consequuntur doloribus
              accusamus ducimus illum commodi sunt assumenda.
            </div>
          </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Blog;
