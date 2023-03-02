import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const api_domain = process.env.REACT_APP_DOMAIN;

const BlogSidebar = ({ blogData }) => {
  const [categories, setCategories] = useState([]);
  const [tags, setTgs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const category = await axios(`${api_domain}/wp-json/wp/v2/categories`);
        setCategories(category.data);
        const tags = await axios(`${api_domain}/wp-json/wp/v2/tags`);
        setTgs(tags.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const allDate = blogData.map((data) => data?.published_on.slice(-4));

  let uniqueArr = allDate.filter((item, index, self) => {
    return self.indexOf(item) === index;
  });
  const [selected, setSelected] = useState(uniqueArr[0]);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const yearData = blogData.filter(
    (data) => data.published_on.slice(-4) === selected
  );
  const newData = yearData.map(
    (data) =>
      data.published_on.toLowerCase().slice(0, 3) +
      "-" +
      data.published_on.toLowerCase().slice(-4)
  );
  let monthlyData = newData.filter((item, index, self) => {
    return self.indexOf(item) === index;
  });

  return (
    <>
      <div className="item">
        <h2>Most Popular Categories</h2>
        <div className="item-element category">
          {categories.length === 0 ? (
            <p className="error">NO Category Available</p>
          ) : (
            categories.map((categories) => (
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
          {tags.length === 0 ? (
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

      <div className="related-post" style={{ marginBottom: "20px" }}>
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
                        src={data?.better_featured_image?.source_url}
                        alt={data?.better_featured_image?.alt_text}
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
      <div className="item">
        <h2>Archive</h2>
        <div className="date-select">
          <select value={selected} onChange={handleChange}>
            {uniqueArr.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <hr />
          <ul>
            {monthlyData.map((data, i) => (
              <Link key={i} to={`/years/${data}`}>
                <li>{data.toUpperCase()}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
