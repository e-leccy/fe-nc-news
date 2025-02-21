import { useEffect, useState } from "react";
import { getCommentsByArticle } from "../utils/api";
import CommentCard from "./CommentCard";

function CommentList({ article_id, commentsUpdate, setCommentsUpdate }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCommentsByArticle(article_id).then((result) => {
      setComments(result);
      setLoading(false);
    });
  }, [commentsUpdate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className="list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                comment={comment}
                setCommentsUpdate={setCommentsUpdate}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CommentList;
