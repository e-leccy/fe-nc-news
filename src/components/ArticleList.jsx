import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useLocation, useSearchParams } from "react-router-dom";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const path = location.pathname;

  const [isVisible, setIsVisible] = useState(path === "/" ? true : false);

  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  function setSortOrder(direction) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", direction);
    setSearchParams(newParams);
  }

  useEffect(() => {
    setLoading(true);
    getArticles({ topic, sort_by, order }).then((result) => {
      setArticles(result);
      setLoading(false);
    });
  }, [topic, sort_by, order]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isVisible ? (
        <select
          name="sorting"
          onChange={(event) => {
            setSearchParams(`sort_by=${event.target.value}`);
          }}
        >
          <option>Sort by...</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
      ) : null}

      {isVisible ? (
        <select
          name="ordering"
          onChange={(event) => {
            setSortOrder(event.target.value);
          }}
        >
          <option>Order by...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      ) : null}

      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;
