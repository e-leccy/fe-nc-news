import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/api";
import { useParams } from "react-router-dom";
import TopicCard from "./TopicCard";
import ErrorPage from "./ErrorPage";

function TopicsList({ topics, setTopics }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTopics().then((result) => {
      setTopics(result);
      setLoading(false);
    });
  }, [setTopics]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <ul className="list">
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <TopicCard topic={topic} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TopicsList;
