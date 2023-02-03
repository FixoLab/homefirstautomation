import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const api_domain = process.env.REACT_APP_DOMAIN;

const RelatedPost = ({ singleId }) => {
  const [firstCtgData, setFirstCtgData] = useState([]);

  setTimeout(() => {
    const fetchData = async () => {
      const allCategoryData = await fetch(
        `${api_domain}/wp-json/wp/v2/categories?post=${singleId}`
      );
      const allCategory = await allCategoryData.json();

      const firstCategory = await fetch(
        `${api_domain}/wp-json/wp/v2/posts?categories=${allCategory[0]?.id}`
      );
      const firstCtgData = await firstCategory.json();
      setFirstCtgData(firstCtgData);
    };
    fetchData();
  }, 2000);

  const exactData = firstCtgData?.filter((data) => data?.id !== singleId);

  return (
    <div className="related-post">
      <div className="item">
        <h2>Related Posts</h2>
        <div className="item-element">
          {exactData?.length === 0 ? (
            <Skeleton style={{ borderRadius: 5 }} height={150} />
          ) : (
            exactData?.slice(0, 6).map((data) => (
              <Link key={data.id} to={`/blog/${data?.slug}`}>
                <div className="content">
                  <div className="image">
                    <img
                      src={data?.better_featured_image.source_url}
                      alt={data?.title.rendered}
                    />
                  </div>
                  <div className="details">
                    <p>{data?.title.rendered}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
