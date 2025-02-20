import { useState } from "react";
import { postComment } from "../utils/api";
import CommentCard from "./CommentCard";
import { UserAccount } from "./UserAccount";
import { useContext } from "react";

function AddCommentForm({ article_id, setCommentsUpdate }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);
  const [commentToAdd, setCommentToAdd] = useState({
    username: loggedInUser,
    body: "",
  });
  const [errorMsg, setErrorMsg] = useState(false);
  const [posting, setPosting] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setCommentToAdd((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMsg(false);
    setCommentsUpdate(false);
    setPosting(true);
    postComment(article_id, commentToAdd)
      .then((response) => {
        <CommentCard comment={commentToAdd} />;
        setCommentsUpdate(true);
        setPosting(false);
        setCommentToAdd({ body: "" });
        setErrorMsg(false);
      })
      .catch((error) => {
        setPosting(false);
        setErrorMsg(true);
        console.log(error);
      });
  }

  if (posting) {
    return <p>Posting...</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="comment"
          className="comment-box"
          name="body"
          required
          value={commentToAdd.body}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      {errorMsg ? <p>Something went wrong!</p> : null}
    </>
  );
}

export default AddCommentForm;
