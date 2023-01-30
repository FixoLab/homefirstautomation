/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const api_domain = process.env.REACT_APP_DOMAIN;

const BlogDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(allCategory);
  useEffect(() => {
    const fetchData = async () => {
      const postResponse = await fetch(
        `${api_domain}/wp-json/wp/v2/posts/${id}`
      );
      const postData = await postResponse.json();
      setData(postData);
      const categoriesResponse = await fetch(
        `${api_domain}/wp-json/wp/v2/categories?post=${id}`
      );
      const categoriesData = await categoriesResponse.json();
      setCategories(categoriesData);
      const tagsResponse = await fetch(
        `${api_domain}/wp-json/wp/v2/tags?post=${id}`
      );
      const tagsData = await tagsResponse.json();
      setTags(tagsData);
      const allCategoryData = await fetch(
        `${api_domain}/wp-json/wp/v2/posts?categories=${categories[0]?.id}`
      );
      const allCategory = await allCategoryData.json();
      setAllCategory(allCategory);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div id="site-content" className="single-blog">
      {isLoading === true ? (
        <Skeleton style={{ borderRadius: 5 }} height={500} />
      ) : (
        <div className="blog-details">
          <Link to="/blog" className="top">
            <div className="icon">
              <i className="fa-solid fa-arrow-left-long"></i>
            </div>
            <span>Blog</span>
          </Link>
          <div className="blog-wrapper">
            <div className="area">
              <h1 className="area-title">{data.title.rendered}</h1>
              <div className="area-user">
                <i className="fa-regular fa-clock"></i>
                <span>july 27, 2022</span>
                <span>by Jhon</span>
              </div>
              <ul className="area-social">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <div className="area-links">
                {categories.slice(0, 1).map((category) => (
                  <Link key={category.id} to={`/category/${category.id}`}>
                    {category.name}
                  </Link>
                ))}
                {tags.map((tags) => (
                  <Link key={tags.id} to={`/tags/${tags.id}`}>
                    {tags.name}
                  </Link>
                ))}
              </div>
              <h1 className="area-main-title">{data.title.rendered}</h1>
              <div className="area-image">
                <img src={data?.better_featured_image.source_url} alt="" />
              </div>
              <div
                className="area-content"
                dangerouslySetInnerHTML={{
                  __html: data?.content.rendered,
                }}
              />
            </div>
            <div className="related-post">
              <div className="item">
                <h2>Related Posts</h2>
                <div className="item-element">
                  {allCategory.slice(0, 6).map((data) => (
                    <Link key={data.id} to={allCategory.id}>
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
