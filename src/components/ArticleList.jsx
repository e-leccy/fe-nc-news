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

  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  function setSortCondition(condition) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", condition);
    setSearchParams(newParams);
  }

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
      <select
        name="sorting"
        onChange={(event) => {
          setSortCondition(event.target.value);
        }}
      >
        <option>Sort by...</option>
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>

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
