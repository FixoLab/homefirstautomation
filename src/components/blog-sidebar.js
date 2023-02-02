import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const api_domain = process.env.REACT_APP_DOMAIN;

const BlogSidebar = ({ blogData }) => {
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
        <h2>Most Popular Categories</h2>
        <div className="item-element category">
          {data.length === 0 ? (
            <p className="error">NO Category Available</p>
          ) : (
            data.map((categories) => (
              <Link key={categories.id} to={`/category/${categories.id}`}>
                {categories.name}
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="item">
        <h2>Most Popular Topics</h2>
        <div className="item-element">
          {data.length === 0 ? (
            <p className="error">NO Tags Available</p>
          ) : (
            tags.map((tag) => (
              <Link key={tag.id} to={`/tags/${tag.id}`}>
                {tag.name}
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="related-post">
        <div className="item">
          <div className="item-element">
            {blogData?.length === 0 ? (
              <Skeleton style={{ borderRadius: 5 }} height={150} />
            ) : (
              blogData?.slice(0, 5).map((data) => (
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
    </>
  );
};

export default BlogSidebar;
