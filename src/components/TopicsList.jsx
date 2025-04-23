import { useContext, useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import TopicCard from "./TopicCard";
import ErrorPage from "./ErrorPage";
import { UserAccount } from "./UserAccount";
import AddTopic from "./AddTopic";

function TopicsList({ topics, setTopics }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [topicsUpdate, setTopicsUpdate] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);

  useEffect(() => {
    setLoading(true);
    getTopics().then((result) => {
      setTopics(result);
      setLoading(false);
    });
  }, [setTopics, topicsUpdate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {!loggedInUser && (
        <p>
          <Link to="/users">Login</Link> to add a new topic
        </p>
      )}

      <AddTopic setTopicsUpdate={setTopicsUpdate} />

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
