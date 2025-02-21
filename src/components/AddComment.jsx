import { useState } from "react";
import AddCommentForm from "./AddCommentForm";
import { UserAccount } from "./UserAccount";
import { useContext } from "react";

function AddComment({ article_id, setCommentsUpdate }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {loggedInUser && (
        <button
          id="comment-button"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Comment
        </button>
      )}

      {isVisible ? (
        <AddCommentForm
          article_id={article_id}
          setCommentsUpdate={setCommentsUpdate}
        />
      ) : null}
    </>
  );
}

export default AddComment;
