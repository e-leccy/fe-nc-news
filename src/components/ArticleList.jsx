import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function ArticleList({ topics }) {
  const [articles, setArticles] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const p = parseInt(searchParams.get("p")) || 1;

  function setSort(condition) {
    if (
      (condition === "votes") |
      (condition === "comment_count") |
      (condition === "created_at")
    ) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("sort_by", condition);
      setSearchParams(newParams);
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("order", condition);
      setSearchParams(newParams);
    }
  }

  function goToPage(newPage) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("p", newPage);
    setSearchParams(newParams);
  }

  useEffect(() => {
    if (topic) {
      const topicExist = topics.some((t) => t.slug === topic);

      if (!topicExist) {
        setError(true);
        setLoading(false);
        return;
      }
    }

    setLoading(true);
    getArticles({ topic, sort_by, order, p })
      .then((result) => {
        setArticles(result.articles);
        setTotalCount(result.total_count);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [topic, sort_by, order, p]);

  const totalPages = Math.ceil(totalCount / 6);

  const pageNumbers = [];

  for (let i = 1; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <label>
        <select
          name="sorting"
          onChange={(event) => {
            setSort(event.target.value);
          }}
        >
          <option>Sort by...</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
      </label>

      <label>
        <select
          name="ordering"
          onChange={(event) => {
            setSort(event.target.value);
          }}
        >
          <option>Order by...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>

      <ul className="list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>

      <div className="pagination">
        {pageNumbers.map((pageNumber) => {
          return (
            <button
              className="number-button"
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              disabled={p === pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default ArticleList;
