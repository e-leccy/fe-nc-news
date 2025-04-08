import { useEffect, useState } from "react";
import { getCommentsByArticle } from "../utils/api";
import CommentCard from "./CommentCard";
import { useSearchParams } from "react-router-dom";

function CommentList({
  article_id,
  comment_count,
  commentsUpdate,
  setCommentsUpdate,
}) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const p = parseInt(searchParams.get("p")) || 1;

  function goToPage(newPage) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("p", newPage);
    setSearchParams(newParams);
  }

  useEffect(() => {
    setLoading(true);
    getCommentsByArticle(article_id, p).then((result) => {
      setComments(result);
      setLoading(false);
    });
  }, [commentsUpdate, p]);

  const totalPages = Math.ceil(comment_count / 6);

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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

export default CommentList;
