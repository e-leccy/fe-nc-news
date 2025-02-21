import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/api";
import CommentList from "./CommentList";
import LikeButton from "./LikeButton";
import moment from "moment";
import AddComment from "./AddComment";
import ErrorPage from "./ErrorPage";
import { UserAccount } from "./UserAccount";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [commentsUpdate, setCommentsUpdate] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);

  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getSingleArticle(article_id)
      .then((result) => {
        setArticle(result);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div id="article">
        <h2>{article.title}</h2>
        <h3>Author: {article.author}</h3>
        <p>
          Posted: {moment(article.created_at).format("MMMM Do YYYY, hh:mm a")}
        </p>
        <img src={article.article_img_url} alt="aticle image" />
        <p>{article.body}</p>
        <p>Topic: {article.topic}</p>
        <p>Comments: {article.comment_count}</p>
      </div>

      <LikeButton article={article} />
      <AddComment
        article_id={article_id}
        setCommentsUpdate={setCommentsUpdate}
      />
      {!loggedInUser && (
        <p>
          <Link to="/users">Login</Link> to leave a comment
        </p>
      )}

      <CommentList
        article_id={article_id}
        commentsUpdate={commentsUpdate}
        setCommentsUpdate={setCommentsUpdate}
      />
    </>
  );
}

export default SingleArticle;
