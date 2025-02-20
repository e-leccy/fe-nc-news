import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/api";
import { useParams } from "react-router-dom";
import TopicCard from "./TopicCard";

function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTopics().then((result) => {
      setTopics(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul>
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
