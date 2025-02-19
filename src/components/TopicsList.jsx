import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/api";
import { useParams } from "react-router-dom";
import TopicCard from "./TopicCard";

function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [displayTopic, setDisplayTopic] = useState();

  const { topic } = useParams();

  useEffect(() => {
    getTopics().then((result) => {
      setTopics(result);
    });
  }, []);
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
